var num = Math.round(100000*Math.random())
var version = num;



window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://87d2-2409-4063-6d0f-8012-58b3-ac70-e0bc-f685.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
