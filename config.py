# App settings
DEBUG = False
TESTING = False
SECRET_KEY = "SUPERSECRET"

# Database settings
SQLALCHEMY_DATABASE_URI = 'mysql+mysqldb://root@127.0.0.1/spacegdn'
SQLALCHEMY_ECHO = False

# Webserver Settings
HTTP_HOST = '127.0.0.1'
HTTP_PORT = 8000

# API settings
HEIRARCHY = [{
	'name': 'jar',
	'unique': 'name'
}, {
	'name': 'channel',
	'unique': 'name'
}, {
	'name': 'version',
	'unique': 'version'
}, {
	'name': 'build',
	'unique': 'build'
}]