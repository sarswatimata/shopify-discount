window['handleLoadSettings'] = function (settings) {
	alert("Settings have been loaded!");
};

var script = document.createElement("script");
script.src = "https://8b66-2409-4063-6e1e-69b-c007-9f6d-c89a-18b6.ngrok.io/setting?callback=handleLoadSettings";

document.head.appendChild(script);
