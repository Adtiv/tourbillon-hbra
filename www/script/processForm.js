	var s;
	var pageCount;
	var globalPageIdentifier="page";
	var setLen;
	var FORMS_INDEX = null;
	var FORMS_ID = null;
	//Arrays
	var CHECKED_FORMS_ARRAY = [];
	var COMPLIANCE_RESPONSE_ARRAY = [];
	var NOTES_ARRAY = [];
	var FINAL_NOTES_ARRAY = []; 

	//window.alert("Process Form Loaded");


	function homeScreen(page){
			 localStorageSubCatFormsSave(page);
			 window.location.href="index.html";
		}	   	 

	initProcessForm();

	function initProcessForm() {
		//window.alert("Entered InitProcessForm");
		try {

		initArraysFromLocalStorage();

		var formNameList = document.getElementsByClassName("center container"); 
		for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
	  	 	if (formNameList[0].id == CHECKED_FORMS_ARRAY[i]) {
	  	 		FORMS_INDEX = i;
	  	 		FORMS_ID = CHECKED_FORMS_ARRAY[i];
	  	 	}
	   	} 
	   	} catch (e) {
	   		window.alert("Error in processForm - initialize: Part1: " + e.message);
	   	}
		try {

	   	initializeMainButtons();

	   	if (FORMS_ID == "E.4") {
	   		initializeE4Headers();	
	   	}	   	
	   	var page = FORMS_ID;
	   	page = page.replace(".", "_"); 
	   	subCatInitialize(page);
	   	} catch (e) {
	   		window.alert("Error in processForm - initProcessForm: Part2: " + e.message);
	   	}
	}

	function initializeMainButtons() {
			try {
			var lastFormIndex = 0;
			for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
			if (CHECKED_FORMS_ARRAY[i]!='0') {
				lastFormIndex = i;
				} 
			}
			if (lastFormIndex == FORMS_INDEX) {		
				document.getElementById('checkNext').style.visibility="hidden";
				document.getElementById('btnSubmit').style.visibility="visible";
			}
			} catch (e) {
	   			window.alert("Error in processForm - initializeMainButton: " + e.message);
	   		}
	}

	function initArraysFromLocalStorage() {
		try {


		var formsARRAY = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
		if (formsARRAY)	{
			// use the Local Storage saved checked forms if it exists
			CHECKED_FORMS_ARRAY = formsARRAY;
			//window.alert("CHECKED_FORMS_ARRAY has been successfully loaded from Local Storage: " 
			//				+ CHECKED_FORMS_ARRAY + " Length: "	+ CHECKED_FORMS_ARRAY.length);
		} else {
			window.alert("HBRA_Checked_Forms Does NOT Exist, Processing Will Fail");
		}

		var scoresARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Scores"));
		if (scoresARRAY)	{
			// verify if a saved scores array exists in Local Storage
			COMPLIANCE_RESPONSE_ARRAY = scoresARRAY;
			//window.alert("COMPLIANCE_RESPONSE_ARRAY has been successfully loaded from Local Storage: "
			//			 + COMPLIANCE_RESPONSE_ARRAY + " Length: " + COMPLIANCE_RESPONSE_ARRAY.length);
		} else {
			window.alert("HBRA_Saved_Scores Does NOT Exist, Processing Will Fail"); 
		}

		var notesARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
		if (notesARRAY)	{
			// verify if a saved notes array exists in Local Storage
			NOTES_ARRAY = notesARRAY;
			//window.alert("NOTES_ARRAY has been successfully loaded from Local Storage: "
			//				 + NOTES_ARRAY + " Length: " + NOTES_ARRAY.length);
		} else {
			window.alert("HBRA_Saved_Notes Does NOT Exist, Processing Will Fail");
		}

		var fnotesARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
		if (fnotesARRAY)	{
			// verify if a saved final notes array exists in Local Storage
			FINAL_NOTES_ARRAY = fnotesARRAY;
			//window.alert("FINAL_NOTES_ARRAY has been successfully loaded from Local Storage: " 
			//				+ FINAL_NOTES_ARRAY + " Length: " + FINAL_NOTES_ARRAY.length);
		} else {
			window.alert("HBRA_Saved_Final_Notes Does NOT Exist, Processing Will Fail");
		}

		} catch (e) {
	   			window.alert("Error in processForm - initArraysFromLocalStorage: " + e.message);
	   		}

	}

	function initializeE4Headers() {
			try {
			//window.alert("Forms id: " + FORMS_ID);   //for debugging only
			if(window.localStorage.getItem('E.4Header')!==null){
				document.getElementById('E.4Header').innerHTML = window.localStorage.getItem('E.4Header');
				}
			if(window.localStorage.getItem('E.4TitleOne')!==null){
				document.getElementById('E.4TitleOne').innerHTML = window.localStorage.getItem('E.4TitleOne');
				}
			if(window.localStorage.getItem('E.4TitleTwo')!==null){
				document.getElementById('E.4TitleTwo').innerHTML = window.localStorage.getItem('E.4TitleTwo');
				}
			if(window.localStorage.getItem('E.4TitleThree')!==null){
				document.getElementById('E.4TitleThree').innerHTML = window.localStorage.getItem('E.4TitleThree');					
				}
			if(window.localStorage.getItem('E.4TitleFour')!==null){
				document.getElementById('E.4TitleFour').innerHTML = window.localStorage.getItem('E.4TitleFour');					
				}
			if(window.localStorage.getItem('E.4TitleFive')!==null){
				document.getElementById('E.4TitleFive').innerHTML = window.localStorage.getItem('E.4TitleFive');					
				}
			if(window.localStorage.getItem('E.4TitleSix')!==null){
				document.getElementById('E.4TitleSix').innerHTML = window.localStorage.getItem('E.4TitleSix');
				}
			if(window.localStorage.getItem('E.4TitleSeven')!==null){
				document.getElementById('E.4TitleSeven').innerHTML = window.localStorage.getItem('E.4TitleSeven');					
				}
			if(window.localStorage.getItem('E.4TitleEight')!==null){
				document.getElementById('E.4TitleEight').innerHTML = window.localStorage.getItem('E.4TitleEight');
				}
			if(window.localStorage.getItem('E.4TitleNine')!==null){
				document.getElementById('E.4TitleNine').innerHTML = window.localStorage.getItem('E.4TitleNine');
				}
			if(window.localStorage.getItem('E.4TitleTen')!==null){
				document.getElementById('E.4TitleTen').innerHTML = window.localStorage.getItem('E.4TitleTen');
				}
			} catch (e) {
	   			window.alert("Error in processForm - initializeE4Headers: " + e.message);
	   		}
			}

	function processFormOrder(page, bound, btnID, storePage){
			try {
			var destination = "pageTwo";
			var currentFormIndex = 0;
			var start = 0;

			for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
				if (CHECKED_FORMS_ARRAY[i] == page) {
					currentFormIndex = i;
					break;
				}
			}
			if (btnID == "btnBack") {
				localStorageSubCatFormsSave(page);
				start = currentFormIndex - 1;
				for (i=start; i>=0; i--) {
					if (CHECKED_FORMS_ARRAY[i] != '0') {
						destination = CHECKED_FORMS_ARRAY[i];
						break; 
					}
				}
			} else {  //btnID == btnNext
				localStorageSubCatFormsSave(page);
				start = currentFormIndex + 1;
				for (i=start; i<CHECKED_FORMS_ARRAY.length; i++) {
					if (CHECKED_FORMS_ARRAY[i] != '0') {
						destination = CHECKED_FORMS_ARRAY[i];
						break; 
					}
				}
			}
			destination = destination + ".html"
			window.location.href=destination;
			} catch (e) {
	   			window.alert("Error in processForm - processFormOrder: " + e.message);
	   		}
			}


		function localStorageSubCatFormsSubmit(page) {
			try {
				localStorageSubCatFormsSave(page);
				window.location.href="formComplete.html";
			} catch (e) {
	   			window.alert("Error in processForm - localStorageSubCatFormsSubmit: " + e.message);
	   		}
		}	

		function localStorageSubCatFormsSave(page) {
			try {
			localStorage.setItem("HBRA_Saved_Scores",JSON.stringify(COMPLIANCE_RESPONSE_ARRAY));
			localStorageNotesSave();
			if (FORMS_ID == "E.4"){
				localStorageE4Save()
			}
			UpdateInspection();				//Update the database but no destination change
			if (page == "save") {
				navigator.notification.alert(
    				'Press OK',  // message
    				null,	  // no callback	
    	   	 		'Saved',  // title
    	   	 		'OK'      // buttonName
					);	
				}
			$('input[type=radio]').each(function() {checkMandatory(this)});
			} catch (e) {
	   			window.alert("Error in processForm - localStorageSubCatFormsSave: " + e.message);
	   		}	
			} 	

		function localStorageNotesSave() {
			try {
			//window.alert("Notes Array: " + NOTES_ARRAY[FORMS_INDEX]);
			for (i=0; i<NOTES_ARRAY[FORMS_INDEX].length; i++) {
				var noteId = FORMS_ID + "compliance" + (i+1);
				NOTES_ARRAY[FORMS_INDEX][i] = document.getElementById(noteId).value;
				//window.alert("Entry at Save: " + document.getElementById(noteId).value + "  And from Array: " + NOTES_ARRAY[FORMS_INDEX][i]);
			}
			//window.alert("NOTES_ARRAY Length at Save: " + NOTES_ARRAY.length + "  NOTES_ARRAY Content: " + NOTES_ARRAY);			
			localStorage.setItem('HBRA_Saved_Notes',JSON.stringify(NOTES_ARRAY));
			//
			var finalNoteId = FORMS_ID + "notes";
			FINAL_NOTES_ARRAY[FORMS_INDEX] = document.getElementById(finalNoteId).value;
			//window.alert("FINAL_NOTES_ARRAY Length at Save: " + FINAL_NOTES_ARRAY.length + "  FINAL_NOTES_ARRAY Content: " + FINAL_NOTES_ARRAY);
			localStorage.setItem('HBRA_Saved_Final_Notes',JSON.stringify(FINAL_NOTES_ARRAY));
			} catch (e) {
	   			window.alert("Error in processForm - localStorageNotesSave: " + e.message);
	   		}			
		}
		

		function localStorageE4Save() {		
				try {
				var title = document.getElementById('E.4Header').innerHTML;	
				var titleOne = document.getElementById('E.4TitleOne').innerHTML;
				var titleTwo = document.getElementById('E.4TitleTwo').innerHTML;
				var titleThree = document.getElementById('E.4TitleThree').innerHTML;
				var titleFour = document.getElementById('E.4TitleFour').innerHTML;
				var titleFive = document.getElementById('E.4TitleFive').innerHTML;
				var titleSix = document.getElementById('E.4TitleSix').innerHTML;
				var titleSeven = document.getElementById('E.4TitleSeven').innerHTML;
				var titleEight = document.getElementById('E.4TitleEight').innerHTML;
				var titleNine = document.getElementById('E.4TitleNine').innerHTML;
				var titleTen = document.getElementById('E.4TitleTen').innerHTML;
				window.localStorage.setItem('E.4Header', title);
				window.localStorage.setItem('E.4TitleOne', titleOne);
				window.localStorage.setItem('E.4TitleTwo', titleTwo);
				window.localStorage.setItem('E.4TitleThree', titleThree);
				window.localStorage.setItem('E.4TitleFour', titleFour);
				window.localStorage.setItem('E.4TitleFive', titleFive);
				window.localStorage.setItem('E.4TitleSix', titleSix);
				window.localStorage.setItem('E.4TitleSeven', titleSeven);
				window.localStorage.setItem('E.4TitleEight', titleEight);
				window.localStorage.setItem('E.4TitleNine', titleNine);
				window.localStorage.setItem('E.4TitleTen', titleTen);
				} catch (e) {
	   			window.alert("Error in processForm - localStorageE4Save: " + e.message);
	   		}										
		}

		function checkMandatory(thisOne) {
			var thisOneParent = thisOne.parentNode;
        	thisOneParent = thisOneParent.parentNode;
        	var mandatory = thisOneParent.getAttribute("mandatory");
			if ((mandatory=="Yes") && (thisOne.checked == true) && (thisOne.value!="fullyCompliant")) {
				navigator.notification.alert(
				thisOneParent.getAttribute("description") + ' must be "\Fully Compliant"\ for job to continue',  // message
            	null,     // no callback  
            	'Press OK',  // title  
               	'OK'      // buttonName
            	); 
			}				
		}
