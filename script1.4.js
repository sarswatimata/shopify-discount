var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
console.log('this is js')


window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://da2d-2409-4063-2009-e84a-d422-b617-52ef-45dc.ngrok.io/setting?shop="+shop+"&callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
