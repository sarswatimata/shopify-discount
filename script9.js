var num = Math.round(100000*Math.random())
var version = num;



window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://e22f-2405-204-a52c-633f-e942-4708-430a-c7e7.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
