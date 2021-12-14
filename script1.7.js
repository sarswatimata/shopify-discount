var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
console.log('this is js')


window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
	var currentURL = window.location.href;
	var array_url = currentURL.split("/");
	 if(array_url.includes("products")){
	 var index =array_url.indexOf("products")
	 var fbProduct =array_url[index+1]
	 console.log(fbProduct)
	 	 
	 }
	else if(array_url.includes("collections")){
          var index_collection = array_url.indexOf("collections")
	  var fbCollections = array_url[index_collection+1]
	  console.log(fbCollections)
	}
	else{
	var host = window.location.host
	var script1 = document.createElement("script");
	var script1.id = "script1"+version
	document.body.appendChild(script1);	
	document.getElementById(" + script1.id + ").innerHTML ="!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '{your-pixel-id-goes-here}');
  fbq('track', 'PageView');"
  document.getElementById(script1.id).remove();		
	}	
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://f9b4-2405-204-a584-171b-9159-844a-e966-476f.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
