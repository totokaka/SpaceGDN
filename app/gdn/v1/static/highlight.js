/*! Built with Grunt */var hljs=new function(){function a(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function b(a){for(var b=a.firstChild;b;b=b.nextSibling){if(b.nodeName.toUpperCase()=="CODE"){return b}if(!(b.nodeType==3&&b.nodeValue.match(/\s+/))){break}}}function c(a,b){return Array.prototype.map.call(a.childNodes,function(a){if(a.nodeType==3){return b?a.nodeValue.replace(/\n/g,""):a.nodeValue}if(a.nodeName.toUpperCase()=="BR"){return"\n"}return c(a,b)}).join("")}function d(a){var b=(a.className+" "+(a.parentNode?a.parentNode.className:"")).split(/\s+/);b=b.map(function(a){return a.replace(/^language-/,"")});for(var c=0;c<b.length;c++){if(n[b[c]]||b[c]=="no-highlight"){return b[c]}}}function e(a){var b=[];(function c(a,d){for(var e=a.firstChild;e;e=e.nextSibling){if(e.nodeType==3){d+=e.nodeValue.length}else{if(e.nodeName.toUpperCase()=="BR"){d+=1}else{if(e.nodeType==1){b.push({event:"start",offset:d,node:e});d=c(e,d);b.push({event:"stop",offset:d,node:e})}}}}return d})(a,0);return b}function f(b,c,d){var e=0;var f="";var g=[];function h(){if(!b.length||!c.length){return b.length?b:c}if(b[0].offset!=c[0].offset){return b[0].offset<c[0].offset?b:c}return c[0].event=="start"?b:c}function i(b){function c(b){return" "+b.nodeName+'="'+a(b.value)+'"'}f+="<"+b.nodeName.toLowerCase()+Array.prototype.map.call(b.attributes,c).join("")+">"}function j(a){f+="</"+a.nodeName.toLowerCase()+">"}function k(a){(a.event=="start"?i:j)(a.node)}while(b.length||c.length){var l=h();f+=a(d.substr(e,l[0].offset-e));e=l[0].offset;if(l==b){g.reverse().forEach(j);do{k(l.splice(0,1)[0]);l=h()}while(l==b&&l.length&&l[0].offset==e);g.reverse().forEach(i)}else{if(l[0].event=="start"){g.push(l[0].node)}else{g.pop()}k(l.splice(0,1)[0])}}return f+a(d.substr(e))}function g(a){function b(a){return a&&a.source||a}function c(c,d){return RegExp(b(c),"m"+(a.cI?"i":"")+(d?"g":""))}function d(e,f){if(e.compiled){return}e.compiled=true;var g=[];if(e.k){var h={};function i(b,c){if(a.cI){c=c.toLowerCase()}c.split(" ").forEach(function(a){var c=a.split("|");h[c[0]]=[b,c[1]?Number(c[1]):1];g.push(c[0])})}e.lR=c(e.l||"\\b"+hljs.IR+"\\b(?!\\.)",true);if(typeof e.k=="string"){i("keyword",e.k)}else{for(var j in e.k){if(!e.k.hasOwnProperty(j)){continue}i(j,e.k[j])}}e.k=h}if(f){if(e.bWK){e.b="\\b("+g.join("|")+")\\b(?!\\.)\\s*"}e.bR=c(e.b?e.b:"\\B|\\b");if(!e.e&&!e.eW){e.e="\\B|\\b"}if(e.e){e.eR=c(e.e)}e.tE=b(e.e)||"";if(e.eW&&f.tE){e.tE+=(e.e?"|":"")+f.tE}}if(e.i){e.iR=c(e.i)}if(e.r===undefined){e.r=1}if(!e.c){e.c=[]}for(var k=0;k<e.c.length;k++){if(e.c[k]=="self"){e.c[k]=e}d(e.c[k],e)}if(e.starts){d(e.starts,f)}var l=[];for(var k=0;k<e.c.length;k++){l.push(b(e.c[k].b))}if(e.tE){l.push(b(e.tE))}if(e.i){l.push(b(e.i))}e.t=l.length?c(l.join("|"),true):{exec:function(a){return null}}}d(a)}function h(b,c,d,e){function f(a,b){for(var c=0;c<b.c.length;c++){var d=b.c[c].bR.exec(a);if(d&&d.index==0){return b.c[c]}}}function j(a,b){if(a.e&&a.eR.test(b)){return a}if(a.eW){return j(a.parent,b)}}function k(a,b){return!d&&b.i&&b.iR.test(a)}function l(a,b){var c=s.cI?b[0].toLowerCase():b[0];return a.k.hasOwnProperty(c)&&a.k[c]}function m(){var b=a(w);if(!t.k){return b}var c="";var d=0;t.lR.lastIndex=0;var e=t.lR.exec(b);while(e){c+=b.substr(d,e.index-d);var f=l(t,e);if(f){y+=f[1];c+='<span class="'+f[0]+'">'+e[0]+"</span>"}else{c+=e[0]}d=t.lR.lastIndex;e=t.lR.exec(b)}return c+b.substr(d)}function o(){if(t.sL&&!n[t.sL]){return a(w)}var b=t.subLanguageMode=="continuous"?t.top:undefined;var c=t.sL?h(t.sL,w,true,b):i(w);if(t.r>0){y+=c.keyword_count;x+=c.r}t.top=c.top;return'<span class="'+c.language+'">'+c.value+"</span>"}function p(){return t.sL!==undefined?o():m()}function q(b,c){var d=b.cN?'<span class="'+b.cN+'">':"";if(b.rB){u+=d;w=""}else{if(b.eB){u+=a(c)+d;w=""}else{u+=d;w=c}}t=Object.create(b,{parent:{value:t}})}function r(b,c){w+=b;if(c===undefined){u+=p();return 0}var d=f(c,t);if(d){u+=p();q(d,c);return d.rB?0:c.length}var e=j(t,c);if(e){var g=t;if(!(g.rE||g.eE)){w+=c}u+=p();do{if(t.cN){u+="</span>"}x+=t.r;t=t.parent}while(t!=e.parent);if(g.eE){u+=a(c)}w="";if(e.starts){q(e.starts,"")}return g.rE?0:c.length}if(k(c,t)){throw new Error('Illegal lexem "'+c+'" for mode "'+(t.cN||"<unnamed>")+'"')}w+=c;return c.length||1}var s=n[b];if(!s){throw new Error('Unknown language: "'+b+'"')}g(s);var t=e||s;var u="";for(var v=t;v!=s;v=v.parent){if(v.cN){u='<span class="'+v.cN+'">'+u}}var w="";var x=0;var y=0;try{var z,A,B=0;while(true){t.t.lastIndex=B;z=t.t.exec(c);if(!z){break}A=r(c.substr(B,z.index-B),z[0]);B=z.index+A}r(c.substr(B));for(var v=t;v.parent;v=v.parent){if(v.cN){u+="</span>"}}return{r:x,keyword_count:y,value:u,language:b,top:t}}catch(C){if(C.message.indexOf("Illegal")!=-1){return{r:0,keyword_count:0,value:a(c)}}else{throw C}}}function i(b){var c={keyword_count:0,r:0,value:a(b)};var d=c;for(var e in n){if(!n.hasOwnProperty(e)){continue}var f=h(e,b,false);f.language=e;if(f.keyword_count+f.r>d.keyword_count+d.r){d=f}if(f.keyword_count+f.r>c.keyword_count+c.r){d=c;c=f}}if(d.language){c.second_best=d}return c}function j(a,b,c){if(b){a=a.replace(/^((<[^>]+>|\t)+)/gm,function(a,c,d,e){return c.replace(/\t/g,b)})}if(c){a=a.replace(/\n/g,"<br>")}return a}function k(a,b,g){var k=c(a,g);var l=d(a);if(l=="no-highlight"){return}var m=l?h(l,k,true):i(k);l=m.language;var n=e(a);if(n.length){var o=document.createElementNS("http://www.w3.org/1999/xhtml","pre");o.innerHTML=m.value;m.value=f(n,e(o),k)}m.value=j(m.value,b,g);var p=a.className;if(!p.match("(\\s|^)(language-)?"+l+"(\\s|$)")){p=p?p+" "+l:l}a.innerHTML=m.value;a.className=p;a.result={language:l,kw:m.keyword_count,re:m.r};if(m.second_best){a.second_best={language:m.second_best.language,kw:m.second_best.keyword_count,re:m.second_best.r}}}function l(){if(l.called){return}l.called=true;Array.prototype.map.call(document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml","pre"),b).filter(Boolean).forEach(function(a){k(a,hljs.tabReplace)})}function m(){window.addEventListener("DOMContentLoaded",l,false);window.addEventListener("load",l,false)}var n={};this.LANGUAGES=n;this.highlight=h;this.highlightAuto=i;this.fixMarkup=j;this.highlightBlock=k;this.initHighlighting=l;this.initHighlightingOnLoad=m;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.inherit=function(a,b){var c={};for(var d in a){c[d]=a[d]}if(b){for(var d in b){c[d]=b[d]}}return c}};hljs.LANGUAGES.javascript=function(a){return{k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",literal:"true false null undefined NaN Infinity"},c:[a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,sL:"xml"}],r:0},{cN:"function",bWK:true,e:/{/,k:"function",c:[{cN:"title",b:/[A-Za-z$_][0-9A-Za-z$_]*/},{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/}]}}(hljs);hljs.LANGUAGES.sql=function(a){return{cI:true,c:[{cN:"operator",b:"(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}}(hljs);hljs.LANGUAGES.json=function(a){var b={literal:"true false null"};var c=[a.QSM,a.CNM];var d={cN:"value",e:",",eW:true,eE:true,c:c,k:b};var e={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:d}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(d,{cN:null})],i:"\\S"};c.splice(c.length,0,e,f);return{c:c,k:b,i:"\\S"}}(hljs);