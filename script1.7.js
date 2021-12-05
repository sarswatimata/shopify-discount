var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
console.log('this is js')


window['loadsetting'] = function (settings) {
	alert("the title is " +settings.Title);
};

var script = document.createElement("script");

script.id = "script_" + version;
script.src = "https://f9b4-2405-204-a584-171b-9159-844a-e966-476f.ngrok.io/setting?callback=loadsetting&version="+version;


document.body.appendChild(script);
document.getElementById(script.id).remove();
