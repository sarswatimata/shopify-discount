var num = Math.round(100000*Math.random())
var version = num;



window[loadsetting] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://8b66-2409-4063-6e1e-69b-c007-9f6d-c89a-18b6.ngrok.io/setting?callback=loadsetting&version"+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
