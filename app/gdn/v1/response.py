import sys

from flask import json, make_response, request

from gdn import app
from gdn.models import * 
from gdn.v1 import lang, builder

def getModel(name):
	return getattr(sys.modules[__name__], name.capitalize())

def joinerQuery(query, pointer):
	clutch_in = True
	previous_name = ''
	for part in app.config['HEIRARCHY']:
		if clutch_in == False:
			model = getModel(part['name'])
			query = query.join(model, getattr(model, previous_name + '_id') == model.id)
		elif part['name'] == pointer:
			clutch_in = False
		previous_name = part['name']

	return query


def to_dict(ls):
	out = []
	for model in ls:
		data = {}
		data['id'] = getattr(model, 'id')
	 
		for col in model._sa_class_manager.mapper.mapped_table.columns:
			data[col.name] = getattr(model, col.name)
		out.append(data)
 
	return out

def show_error(exception):
	code, tup = exception.args
	error = {
		'success': False,
		'error': {
			'code': code,
			'message': lang.errors[code] % tup
		},
		'results': [],
		'pages': 0
	}
	return make_response((json.dumps(error), 400))

def getNum(num, default = 0):
	try: 
		return int(num)
	except Exception:
		return default

def handle_query(data):
	query = getModel(data['select']).query
	joinerQuery(query, data['select'])

	for key, value in data['data'].iteritems():
		model = getModel(key)
		query = query.filter(getattr(model, 'id') == value)

	page = getNum(request.args.get('page'), 1)

	return query.paginate(page, 100, False)

def run(path):

	parts = path.split('/')

	try:
		data = builder.build(parts)
		pager = handle_query(data)
	except Exception as e:
		print e
		return show_error(e)

	reponse = {
		'success': True,
		'error': {},
		'results': to_dict(pager.items),
		'pages': {
			'pages': pager.pages,
			'has_next': pager.has_next,
			'has_prev': pager.has_prev,
			'current_page': pager.page,
			'total_items': pager.total
		}
	}

	res = make_response((json.dumps(reponse), 200))
	print res
	return res