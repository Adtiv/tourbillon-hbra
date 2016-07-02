var CHECKED_FORMS_ARRAY = null;
var INIT_CHECKED_FORMS_ARRAY = new Array(21).fill("0");
var INIT_COMPLIANCE_RESPONSE_ARRAY = [
	   	 	new Array(12).fill(0), 				// A.1 - 12 Questions
	   	 	new Array(10).fill(0),				// A.2 - 10 Questions
	   	 	new Array(10).fill(0),				// A.3 - 10 Questions
	   	 	new Array(9).fill(0),				// A.4 - 9 Questions
	   	 	new Array(9).fill(0),				// A.5 - 9 Questions
	   	 	new Array(6).fill(0),				// A.6 - 6 Questions
	   	 	new Array(7).fill(0),				// A.7 - 7 Questions
	   	 	new Array(5).fill(0),				// A.8 - 5 Questions
	   	 	new Array(10).fill(0),				// B.1 - 10 Questions
	   	 	new Array(10).fill(0),				// B.2 - 10 Questions
	   	 	new Array(9).fill(0),				// B.3 - 9 Questions
	   	 	new Array(12).fill(0),				// C.1 - 12 Questions
	   	 	new Array(9).fill(0),				// C.2 - 9 Questions
	   	 	new Array(13).fill(0), 				// D.1 - 13 Questions
	   	 	new Array(13).fill(0), 				// D.2 - 13 Questions
	   	 	new Array(12).fill(0), 				// D.3 - 12 Questions
	   	 	new Array(15).fill(0), 				// D.4 - 15 Questions
	   	 	new Array(8).fill(0), 				// E.1 - 8 Questions
	   	 	new Array(8).fill(0), 				// E.2 - 8 Questions
	   	 	new Array(12).fill(0), 				// E.3 - 12 Questions
	   	 	new Array(10).fill(0), 				// E.4 - 10 Questions
	   	 	]; 

	var INIT_NOTES_ARRAY = [
	   	 	new Array(12).fill(null), 				// A.1 - 12 Questions
	   	 	new Array(10).fill(null),				// A.2 - 10 Questions
	   	 	new Array(10).fill(null),				// A.3 - 10 Questions
	   	 	new Array(9).fill(null),				// A.4 - 9 Questions
	   	 	new Array(9).fill(null),				// A.5 - 9 Questions
	   	 	new Array(6).fill(null),				// A.6 - 6 Questions
	   	 	new Array(7).fill(null),				// A.7 - 7 Questions
	   	 	new Array(5).fill(null),				// A.8 - 5 Questions
	   	 	new Array(10).fill(null),				// B.1 - 10 Questions
	   	 	new Array(10).fill(null),				// B.2 - 10 Questions
	   	 	new Array(9).fill(null),				// B.3 - 9 Questions
	   	 	new Array(12).fill(null),				// C.1 - 12 Questions
	   	 	new Array(9).fill(null),				// C.2 - 9 Questions
	   	 	new Array(13).fill(null), 				// D.1 - 13 Questions
	   	 	new Array(13).fill(null), 				// D.2 - 13 Questions
	   	 	new Array(12).fill(null), 				// D.3 - 12 Questions
	   	 	new Array(15).fill(null), 				// D.4 - 15 Questions
	   	 	new Array(8).fill(null), 				// E.1 - 8 Questions
	   	 	new Array(8).fill(null), 				// E.2 - 8 Questions
	   	 	new Array(12).fill(null), 				// E.3 - 12 Questions
	   	 	new Array(10).fill(null), 				// E.4 - 10 Questions
	   	 	]; 

	var INIT_FINAL_NOTES_ARRAY = new Array(21).fill(null);  	   	 

initialize();

function initialize() {
	//window.alert("Init for SelectForms");
	try {
	if (localStorage.getItem("HBRA_Checked_Forms") !== null) {
	 	CHECKED_FORMS_ARRAY = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
	 	if (CHECKED_FORMS_ARRAY === null) {
	 		CHECKED_FORMS_ARRAY = INIT_CHECKED_FORMS_ARRAY;
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
		CHECKED_FORMS_ARRAY = INIT_CHECKED_FORMS_ARRAY;
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
		var bn = document.getElementById(id).name;
		var bi = bn.substring(6) - 1;
		if(document.getElementById(id).checked===true) {
			CHECKED_FORMS_ARRAY[bi]=id;
		} else {
			CHECKED_FORMS_ARRAY[bi]="0";
		}
	}

function localStorageCheckFormsSubmit(page) {
			//window.alert("Init for localStorageCheckFormsSubmit, page: " + page);
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
		}	

function localStorageCheckFormsSave(page) {
		//window.alert("CHECKED_FORMS_ARRAY from save: " + CHECKED_FORMS_ARRAY);
		try {
		localStorage.setItem("HBRA_Checked_Forms",JSON.stringify(CHECKED_FORMS_ARRAY));
		//window.alert("Checked Array in Select: " + CHECKED_FORMS_ARRAY);
		if (localStorage.getItem("HBRA_Saved_Scores") === null) {
	 		localStorage.setItem("HBRA_Saved_Scores",JSON.stringify(INIT_COMPLIANCE_RESPONSE_ARRAY));
		} 
		if (localStorage.getItem("HBRA_Saved_Notes") === null) {
	 		localStorage.setItem("HBRA_Saved_Notes",JSON.stringify(INIT_NOTES_ARRAY));
		} 
		if (localStorage.getItem("HBRA_Saved_Final_Notes") === null) {
	 		localStorage.setItem("HBRA_Saved_Final_Notes",JSON.stringify(INIT_FINAL_NOTES_ARRAY));
		} 
		UpdateInspection();	//  save to the database
		} catch (e) {
			window.alert("Error in selectForms.js function: localStorageCheckFormsSave: " + e.message);
		}
		if (page == "save") {
			navigator.notification.alert(
   				'Press OK',  // message
   				null,	  // no callback	
   	   	 		'Saved',  // title
   	   	 		'OK'      // buttonName
				);
			}
		} 		