var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
console.log('this is js')

console.log(Shopify.shop)
console.log(Shopify.cart)


window['loadsetting'] = function (settings) {
	
	var currentURL = window.location.href;
	var array_url = currentURL.split("/");
	 if(array_url.includes("products")){
	 var index =array_url.indexOf("products")
	 var fbProduct =array_url[index+1]
	  !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
           n.queue=[];t=b.createElement(e);t.async=!0;
           t.src=v;s=b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', settings.Ppix );
           fbq('trackCustom', 'Products', {name:fbProduct});		 
	 console.log(fbProduct)
	 	 
	 }
	else if(array_url.includes("collections")){
          var index_collection = array_url.indexOf("collections")
	  var fbCollections = array_url[index_collection+1]
	  !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
           n.callMethod.apply(n,arguments):n.queue.push(arguments)};
           if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
           n.queue=[];t=b.createElement(e);t.async=!0;
           t.src=v;s=b.getElementsByTagName(e)[0];
           s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
           fbq('init', settings.Cpix );
	  fbq('trackCustom', 'Collection', {name: fbCollections});
	  
	  console.log(fbCollections)
	}
	else if(array_url.includes("cart")){
	 console.log("cart")
	}
	else if(array_url.includes("checkouts")){
	console.log("checkouts")
	}
	else{
	var host = window.location.host
	
        if(sessionStorage.getItem('test') != 1){		
	!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', settings.Vpix );
  fbq('track', 'PageView');
  //fetch fb cookie value and make ajax post 		
     var x = document.cookie	
     var y = x.split(';')
     console.log(y)
     for(i=0;i<y.length;i++){
     var t = y[i]
     var s = t.split('=')
     console.log(s)
     if(s.includes(" _fbp")){
      var indexp = s.indexof("_fbp") 
      var fbpix = s[indexp+1]
      console.log(fbpix)
      break	     
     } 	     
     else{ console.log("fbq not found!!")}
     }
     
	
	}
else{
  console.log("visited")
}	
   var visit = 1
	sessionStorage.setItem('test', visit)	
	}}
var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://optional-synthetic-seattle-opponents.trycloudflare.com/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
