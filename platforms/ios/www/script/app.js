	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		console.log("deviceReady");	
	    // cordova.plugins.email is now available
	}, false);