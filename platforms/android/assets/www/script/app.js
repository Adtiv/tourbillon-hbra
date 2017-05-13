	onload=function(){
	var elementExists = document.getElementById("inspectNumber");
	if(elementExists) {
		//window.alert("app.js  - inpectNumber DOES exist: " + elementsExist);
		document.getElementById('inspectNumber').innerHTML=window.localStorage.getItem('HBRA_InspectionId');
	} else {
		//window.alert("app.js  - inpectNumber does NOT exist: " + elementExists);
	}
	};