var num = Math.round(100000*Math.random())
var version = num;



window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://15a5-2409-4063-6d13-f23b-5cd0-4577-3f1b-d124.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
