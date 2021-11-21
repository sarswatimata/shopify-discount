var num = Math.round(100000*Math.random())
var loadsetting = "LoadSetting_" + num;



window[loadsetting] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + loadsetting;
script.src = "https://8b66-2409-4063-6e1e-69b-c007-9f6d-c89a-18b6.ngrok.io/setting?callback=" + loadsetting;


document.body.appendChild(script);
document.getElementById(script.id).remove();
