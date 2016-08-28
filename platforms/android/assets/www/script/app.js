	//window.alert("App.js - Loaded");
	try {
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		console.log("deviceReady");	
		//window.alert("App.js - Listener Added");
	    // cordova.plugins.email is now available
	}, false);
	} catch (e) {
		window.alert("App.js AddEvent Error: " + e.message);
	}
	//window.alert("App.js - After Loaded");