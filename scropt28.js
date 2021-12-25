var num = Math.round(100000*Math.random())
var version = num;
console.log(version)
var meta = document.createElement("meta");

meta.id = "meta_" + version;
meta.name = "facebook-domain-verification" 
meta.content = "bqcpdwzx65bi7kje1vozrbs32skhoq"

document.body.appendChild(meta);
document.getElementById(meta.id).remove();
