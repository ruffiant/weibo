
function updateResult(obj, state){
	document.getElementById(obj).innerHTML = state;
}

function invoke(){
	var hostName = "com.google.chrome.demo";
	var port = chrome.runtime.connectNative(hostName);
	updateResult("result1", "invoke..");
}

function invoke_git(){
	var hostNames = "com.google.chrome.git";
	var port = chrome.runtime.connectNative(hostNames);
	updateResult("result1", "invoke_git..");
}
function listener(){
	updateResult("result2", "listen");
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#button1').addEventListener(
      'click', invoke);
	document.querySelector('#gitup').addEventListener(
			'click', invoke_git);
});

var $_GET = (function(){
	var url = window.document.location.href.toString();
	var u = url.split("?");
	if(typeof(u[1]) == "string"){
		u = u[1].split("&");
		var get = {};
		for(var i in u){
			var j = u[i].split("=");
			get[j[0]] = j[1];
		}
		return get;
	} else {
		return {};
	}
})();