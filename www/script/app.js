	onload = function setInspectionId(){
		document.getElementById('inspectNumber').innerHTML="#"+window.localStorage.getItem('HBRA_InspectionId');
	}
	//window.alert("App.js - Loaded");
	try {
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		//window.alert("App.js - Listener Added");
	    // cordova.plugins.email is now available
	}, false);
	} catch (e) {
		window.alert("App.js AddEvent Error: " + e.message);
	}
	//window.alert("App.js - After Loaded");