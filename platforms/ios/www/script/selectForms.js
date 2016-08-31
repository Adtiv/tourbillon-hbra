//Arrays
var CHECKED_FORMS_ARRAY = [];
var COMPLIANCE_RESPONSE_ARRAY = [[]];
var NOTES_ARRAY = [[]];
var FINAL_NOTES_ARRAY = [];
//window.alert("Select Form Loaded");

initSelectForms();

function initSelectForms() {
	//window.alert("Init for SelectForms");
	try {
	if (localStorage.getItem("HBRA_Checked_Forms") !== null) {
	 	CHECKED_FORMS_ARRAY = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
	 	if (CHECKED_FORMS_ARRAY === null) {
	 		initFormsArray();
	 	} else {
	 	var loopLimit = document.getElementsByClassName('check').length;
		for (i=0; i<loopLimit; i++) {
			if (CHECKED_FORMS_ARRAY[i]!='0') {
				document.getElementsByClassName('check')[i].checked=true;
			} else {
				document.getElementsByClassName('check')[i].checked=false;
			}
		}
		}
	} else {
		initFormsArray();
	}
	} catch (e) {
		window.alert("Error in selectForm.js - initialize: " + e.message);
	}
}

function goBack(){	
			localStorageCheckFormsSave('back');
    		window.location.href="pageOne.html";
		}

function homeScreen(){
		localStorageCheckFormsSave('home');
			window.location.href="index.html";
		}

function isChecked(id) {
		//windows.alert("Forms array: " + CHECKED_FORMS_ARRAY + " id: " + id);
		try {
		var bn = document.getElementById(id).name;
		var bi = bn.substring(6) - 1;
		if(document.getElementById(id).checked===true) {
			CHECKED_FORMS_ARRAY[bi]=id;
		} else {
			CHECKED_FORMS_ARRAY[bi]="0";
		}
		} catch (e) {
			window.alert("Error in selectForms.js function: isChecked: " + e.message);
		}
	}

function localStorageCheckFormsSubmit(page) {
			//window.alert("Init for localStorageCheckFormsSubmit, page: " + page);
			try {
			localStorageCheckFormsSave(page);
			var destination = "";
			for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
				if (CHECKED_FORMS_ARRAY[i] != "0") {
					destination = CHECKED_FORMS_ARRAY[i] + ".html";
					break;
				}
			}
			//window.alert("Destination for localStorageCheckFormsSubmit: " + destination);
			window.location.href=destination;
			} catch (e) {
			window.alert("Error in selectForms.js function: localStorageCheckFormsSubmit: " + e.message);
		}
		}	

function localStorageCheckFormsSave(page) {
		//window.alert("CHECKED_FORMS_ARRAY from save: " + CHECKED_FORMS_ARRAY);
		//window.alert("Step 1"); //for debugging only
		try {
		//
		//
		// Prep Checked Forms Array: 	
		localStorage.setItem("HBRA_Checked_Forms",JSON.stringify(CHECKED_FORMS_ARRAY));
		//
		// Prep Compliance Scores Array:
		//window.alert("Step 2");  //for debugging only
		if (localStorage.getItem("HBRA_Saved_Scores") !== null) {
	 		COMPLIANCE_RESPONSE_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Scores"));
	 		if (COMPLIANCE_RESPONSE_ARRAY === null) {   // the value could be null even if is exists
	 			initComplianceResponseArray();
	 		}
	 	} else {
	 		initComplianceResponseArray();
	 	}
	 	localStorage.setItem("HBRA_Saved_Scores",JSON.stringify(COMPLIANCE_RESPONSE_ARRAY));
	 	//
	 	// Prep Notes Array:
	 	//window.alert("Step 3");  //for debugging only
		if (localStorage.getItem("HBRA_Saved_Notes") !== null) {
	 		NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
	 		if (NOTES_ARRAY === null) {   // the value could be null even if is exists
	 			initNotesArray();
	 		}
	 	} else {
	 		initNotesArray();
	 	}
	 	localStorage.setItem("HBRA_Saved_Notes",JSON.stringify(NOTES_ARRAY));
	 	//
	 	// Prep Final Notes Array:
	 	//window.alert("Step 4");  //for debugging only
	 	if (localStorage.getItem("HBRA_Saved_Final_Notes") !== null) {
	 		FINAL_NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
	 		if (FINAL_NOTES_ARRAY === null) {   // the value could be null even if is exists
	 			initFinalNotesArray();
	 		}
	 	} else {
	 		initFinalNotesArray();
	 	}
	 	localStorage.setItem("HBRA_Saved_Final_Notes",JSON.stringify(FINAL_NOTES_ARRAY));
	 	//
	 	//
	 	//window.alert("Step 5");  //for debugging only
		UpdateInspection();	//  save to the database
		} catch (e) {
			window.alert("Error in selectForms.js function: localStorageCheckFormsSave: " + e.message);
		}
		//window.alert("Step 6 - page: " + page);  //for debugging only
		try {
		if (page == "save") {
			navigator.notification.alert(
   				'Press OK',  // message
   				null,	  // no callback	
   	   	 		'Saved',  // title
   	   	 		'OK'      // buttonName
				);
			}
		} catch (e) {
			window.alert("Error upon notification: " + e.message);
		}
		} 	

//used to intitialize Arrays
var FORMS_COUNT = 21; //fill "0"
var RESPONSE_COUNTS = [12,10,10,9,9,6,7,5,10,10,9,12,9,13,13,12,15,8,8,12,10]; //fill 0
var NOTE_COUNTS = [12,10,10,9,9,6,7,5,10,10,9,12,9,13,13,12,15,8,8,12,10]; //fill null
var FINAL_NOTES_COUNT = 21; //fill null
//function to intitialize the CHECKED_FORMS_ARRAY
function initFormsArray()	{
	for (i=0; i<FORMS_COUNT; i++) {
		CHECKED_FORMS_ARRAY [i] = "0";
	}		
}
//function to intitialize the COMPLIANCE_RESPONSE_ARRAY
function initComplianceResponseArray() {
	for (i=0; i<RESPONSE_COUNTS.length; i++) {
		for (j=0; j<RESPONSE_COUNTS[i]; j++) {
			COMPLIANCE_RESPONSE_ARRAY[i][j] = 0;
		}
	}
} 
//function to intitialize the NOTES_ARRAY
function initNotesArray() {
	for (i=0; i<NOTE_COUNTS.length; i++) {
		for (j=0; j<NOTE_COUNTS[i]; j++) {
			NOTES_ARRAY[i][j] = null;
		}
	}
} 
//function to intitialize the FINAL_NOTES_ARRAY
function initFinalNotesArray() {
	for (i=0; i<FINAL_NOTE_COUNTS; i++) {
		FINAL_NOTES_ARRAY[i] = null;
	}
} 