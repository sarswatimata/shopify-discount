window['handleLoadSettings'] = function (settings) {
	alert("Settings have been loaded!");
};

var script = document.createElement("script");
script.src = "http://my-app.com/widget/settings?callback=handleLoadSettings";

document.head.appendChild(script);
