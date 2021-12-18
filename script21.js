var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
console.log('this is js')

console.log(Shopify.shop)
console.log(Shopify.cart)


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
		
	!function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', settings.Title );
  fbq('track', 'PageView');
  		
	}
if(settings.Blurb !== null){
document.getElementsByClassName("+settings.Blurb+").addEventListener("click",AddtoCart());  
 }
else
document.getElementsById("+settings.HexColor+").addEventListener("click",AddtoCart());
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://335d-112-133-244-34.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
//addtocart
function AddtoCart(){
 $.get("/cart.js", function(data1, status){	
    console.log(status)
    console.log(data1)
 $.ajax({
  url:"https://335d-112-133-244-34.ngrok.io/UT_create",
  type: "POST",
  dataType: "json",
  data: JSON.stringify({payload: data1,}),
  headers: {
    "X-Requested-With": "XMLHttpRequest",
   
  },
  success: (data) => {
    console.log(data);
  },
  error: (error) => {
    console.log(error);
  }
}); 
 })
	
 	
}
