//Arrays
var CHECKED_FORMS_ARRAY = [];
var COMPLIANCE_RESPONSE_ARRAY = []; //2 dimensions
var NOTES_ARRAY = [];  //2 dimensions
var FINAL_NOTES_ARRAY = [];

//window.alert("Select Form Loaded, Array: " + CHECKED_FORMS_ARRAY);

initSelectForms();

function initSelectForms() {
	//window.alert("Init for SelectForms");
	try {

		initAllArrays();

		// initialize the page with checks 
	 	var loopLimit = document.getElementsByClassName('check').length;
		for (i=0; i<loopLimit; i++) {
			if (CHECKED_FORMS_ARRAY[i]!='0') {
				document.getElementsByClassName('check')[i].checked=true;
			} else {
				document.getElementsByClassName('check')[i].checked=false;
			}
		}
	} catch (e) {
		window.alert("Error in selectForm.js - initSelectForms: " + e.message);
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


function initAllArrays() {
	try {

	var formsARRAY = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
	if (formsARRAY)	{
		//window.alert("CHECKED_FORMS_ARRAY is from Local Storage");
		CHECKED_FORMS_ARRAY = formsARRAY;
	} else {
		//window.alert("CHECKED_FORMS_ARRAY is being created from scratch");
		initFormsArray();
	}
	//window.alert("CHECKED_FORMS_ARRAY has been initialized: " + CHECKED_FORMS_ARRAY 
	//				+ " Length: " + CHECKED_FORMS_ARRAY.length);		

	var scoresARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Scores"));
	if (scoresARRAY)	{
		//window.alert("COMPLIANCE_RESPONSE_ARRAY is from Local Storage");
		COMPLIANCE_RESPONSE_ARRAY = scoresARRAY;
	} else {
		//window.alert("COMPLIANCE_RESPONSE_ARRAY is being created from scratch");
		initComplianceResponseArray();
		}
	//window.alert("COMPLIANCE_RESPONSE_ARRAY has been initialized: " + COMPLIANCE_RESPONSE_ARRAY 
	//				+ " Length: " + COMPLIANCE_RESPONSE_ARRAY.length);

	var notesARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
	if (notesARRAY)	{
		//window.alert("NOTES_ARRAY is from Local Storage");
		NOTES_ARRAY = notesARRAY;
	} else {
		//window.alert("NOTES_ARRAY is being created from scratch");
		initNotesArray();
		}
	//window.alert("NOTES_ARRAY has been initialized: " + NOTES_ARRAY 
	//				+ " Length: " + NOTES_ARRAY.length);	

	var fnotesARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
	if (fnotesARRAY)	{
		//window.alert("FINAL_NOTES_ARRAY is from Local Storage");
		FINAL_NOTES_ARRAY = fnotesARRAY;
	} else {
		//window.alert("FINAL_NOTES_ARRAY is being created from scratch");
		initFinalNotesArray();
		}
	//window.alert("FINAL_NOTES_ARRAY has been initialized: " + FINAL_NOTES_ARRAY 
	//				+ " Length: " + FINAL_NOTES_ARRAY.length);	

	} catch (e) {
		window.alert("Error in selectForm.js - initOtherArrays: " + e.message);
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
		//window.alert("CHECKED_FORMS_ARRAY at save: " + CHECKED_FORMS_ARRAY);
		try {

		// Save the checked forms array in Local Storage
		localStorage.setItem("HBRA_Checked_Forms",JSON.stringify(CHECKED_FORMS_ARRAY));
		//window.alert("CHECKED_FORMS_ARRAY has been saved to local storage: " + CHECKED_FORMS_ARRAY + 
		//				" Length: " + CHECKED_FORMS_ARRAY.length);

		// Save the scores array in Local Storage
		localStorage.setItem("HBRA_Saved_Scores",JSON.stringify(COMPLIANCE_RESPONSE_ARRAY));
		//window.alert("COMPLIANCE_RESPONSE_ARRAY has been saved to local storage: " + COMPLIANCE_RESPONSE_ARRAY +
		//				 " Length: " + COMPLIANCE_RESPONSE_ARRAY.length);

		// Save the saved notes array in Local Storage
		localStorage.setItem("HBRA_Saved_Notes",JSON.stringify(NOTES_ARRAY));
		//window.alert("NOTES_ARRAY has been saved to local storage: " + NOTES_ARRAY +
		//				 " Length: " + NOTES_ARRAY.length);

		// Save the saved final notes array in Local Storage
		localStorage.setItem("HBRA_Saved_Final_Notes",JSON.stringify(FINAL_NOTES_ARRAY));
		//window.alert("FINAL_NOTES_ARRAY has been saved to local storage: " + FINAL_NOTES_ARRAY +
		//				 " Length: " + FINAL_NOTES_ARRAY.length);

	 	// Save inspection in the database
		UpdateInspection();	//  save to the database

		} catch (e) {
			window.alert("Error in selectForms.js function: localStorageCheckFormsSave: " + e.message);
		}

		//send out notification
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

//function to intitialize the CHECKED_FORMS_ARRAY
function initFormsArray()	{
	//window.alert("Made it to initFormsArray: " + typeof CHECKED_FORMS_ARRAY);
	try {
	var FORMS_COUNT = 21;  //fill "0"
	for (i=0; i<FORMS_COUNT; i++) {
		CHECKED_FORMS_ARRAY.push("0");
	}	
	} catch (e) {
		window.alert("Error in selectForms.js function: initFormsArray: " + e.message);
	}
}
//function to intitialize the COMPLIANCE_RESPONSE_ARRAY
function initComplianceResponseArray() {	
	//window.alert("Made it to initComplianceResponseArray: " + typeof COMPLIANCE_RESPONSE_ARRAY);
	try {
	var RESPONSE_COUNTS = [12,10,10,9,9,6,7,5,10,10,9,12,9,13,13,12,15,8,8,12,10]; //fill 0
	for (i=0; i<RESPONSE_COUNTS.length; i++) {
		COMPLIANCE_RESPONSE_ARRAY.push([]);
		for (j=0; j<RESPONSE_COUNTS[i]; j++) {
			COMPLIANCE_RESPONSE_ARRAY[i].push(0);
		}
	}
	} catch (e) {
		window.alert("Error in selectForms.js function: initComplianceResponseArray: " + e.message);
	}
}
//function to intitialize the NOTES_ARRAY
function initNotesArray() {
	//window.alert("Made it to initNotesArray: " + typeof NOTES_ARRAY);
	try {
	var NOTE_COUNTS = [12,10,10,9,9,6,7,5,10,10,9,12,9,13,13,12,15,8,8,12,10]; //fill null
	for (i=0; i<NOTE_COUNTS.length; i++) {
		NOTES_ARRAY.push([]);
		for (j=0; j<NOTE_COUNTS[i]; j++) {
			NOTES_ARRAY[i].push(null);
		}
	}
	} catch (e) {
		window.alert("Error in selectForms.js function: initNotesArray: " + e.message);
	}
}
//function to intitialize the FINAL_NOTES_ARRAY
function initFinalNotesArray() {
	//window.alert("Made it to initFinalNotesArray: " + typeof FINAL_NOTES_ARRAY);
	try {
	var FINAL_NOTES_COUNT = 21; //fill null
	for (i=0; i<FINAL_NOTES_COUNT; i++) {
		FINAL_NOTES_ARRAY.push(null);
	}
	} catch (e) {
		window.alert("Error in selectForms.js function: in initNotesArray: " + e.message);
	} 
}