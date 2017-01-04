	onload=function(){
	var elementExists = document.getElementById("inspectNumber");
	if(elementExists) {
		//window.alert("app.js  - inpectNumber DOES exist: " + elementsExist);
		document.getElementById('inspectNumber').innerHTML=window.localStorage.getItem('HBRA_InspectionId');
	} else {
		//window.alert("app.js  - inpectNumber does NOT exist: " + elementExists);
	}
	};

	function AppIntialize() {
	try {
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		//window.alert("App.js - Listener Added Now");
	    // cordova.plugins.email is now available
	}, false);
	} catch (e) {
		window.alert("App.js AddEvent Error: " + e.message);
	}
	//window.alert("App.js - After Loaded");
	}

	AppIntialize();