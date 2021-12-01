var num = Math.round(100000*Math.random())
var version = num;



window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://b9c1-2409-4063-4d13-5038-8df5-a952-199e-e8c1.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
