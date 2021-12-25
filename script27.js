var meta = document.createElement("meta");

meta.id = "meta_" + version;
meta.name = "facebook-domain-verification" 
meta.content = "bqcpdwzx65bi7kje1vozrbs32skhoq"

document.body.appendChild(meta);
document.getElementById(meta.id).remove();
