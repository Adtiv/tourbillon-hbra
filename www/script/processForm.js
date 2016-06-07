	var s;
	var pageCount;
	var globalPageIdentifier="page";
	var setLen;
	var CHECKED_FORMS_ARRAY;
	var FORMS_INDEX = null;
	var FORMS_ID = null;
	var COMPLIANCE_RESPONSE_ARRAY;
	var NOTES_ARRAY;
	var FINAL_NOTES_ARRAY;  

	function homeScreen(page){
			 localStorageSubCatFormsSave(page);
			 window.location.href="index.html";
		}	   	 

	initialize();

	function initialize() {
		if (localStorage.getItem("HBRA_Checked_Forms") !== null) {
			CHECKED_FORMS_ARRAY = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
		} else {
			window.alert("HBRA_Checked_Forms Does NOT Exist, Processing Will Fail");
		}

		var formNameList = document.getElementsByClassName("center container"); 
		for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
	  	 	if (formNameList[0].id == CHECKED_FORMS_ARRAY[i]) {
	  	 		FORMS_INDEX = i;
	  	 		FORMS_ID = CHECKED_FORMS_ARRAY[i];
	  	 	}
	   	} 
	   	initializeMainButtons();
	   	initializeComplianceArray();
	   	initializeNotesArrays();
	   	initializeE4Headers();
	   	var page = FORMS_ID;
	   	page = page.replace(".", "_"); 
	   	subCatInitialize(page);
	}

	function initializeMainButtons() {
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
	}
	function initializeComplianceArray() {
		if (localStorage.getItem("HBRA_Saved_Scores") !== null) {
	 		COMPLIANCE_RESPONSE_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Scores"));
		} else {
        	window.alert("HBRA_Saved_Scores Does NOT Exist, Processing Will Fail");
		}
	}

	function initializeNotesArrays() {
		if (localStorage.getItem("HBRA_Saved_Notes") !== null) {
	 		NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
		} else {
        	window.alert("HBRA_Saved_Notes Does NOT Exist, Processing Will Fail");
		}
		if (localStorage.getItem("HBRA_Saved_Final_Notes") !== null) {
	 		FINAL_NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
		} else {
        	window.alert("HBRA_Saved_Final_Notes Does NOT Exist, Processing Will Fail");
		}
	}

	function initializeE4Headers() {
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
			}

	function processFormOrder(page, bound, btnID, storePage){
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
			//window.location.href=destination;
			UpdateInspection(destination);
			}

		function localStorageSubCatFormsSubmit(page) {
			localStorageSubCatFormsSave(page);
			//window.location.href="formComplete.html";
			destination = "formComplete.html";
			UpdateInspection(destination);
		}	

		function localStorageSubCatFormsSave(page) {
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
			} 	

		function localStorageNotesSave() {
			//window.alert("Notes Array: " + NOTES_ARRAY[FORMS_INDEX]);
			for (i=0; i<NOTES_ARRAY[FORMS_INDEX].length; i++) {
				var noteId = FORMS_ID + "compliance" + (i+1);
				NOTES_ARRAY[FORMS_INDEX][i] = document.getElementById(noteId).value;
				//window.alert("Entry at Save: " + document.getElementById(noteId).value + "  And from Array: " + NOTES_ARRAY[FORMS_INDEX][i]);
			}
			//window.alert("NOTES_ARRAY Length at Save: " + NOTES_ARRAY.length + "  NOTES_ARRAY Content: " + NOTES_ARRAY);			
			localStorage.setItem('HBRA_Saved_Notes',JSON.stringify(NOTES_ARRAY));
			//window.alert("Notes Array Saved2" + NOTES_ARRAY);
			var finalNoteId = FORMS_ID + "notes";
			FINAL_NOTES_ARRAY[FORMS_INDEX] = document.getElementById(finalNoteId).value;
			//window.alert("FINAL_NOTES_ARRAY Length at Save: " + FINAL_NOTES_ARRAY.length + "  FINAL_NOTES_ARRAY Content: " + FINAL_NOTES_ARRAY);
			localStorage.setItem('HBRA_Saved_Final_Notes',JSON.stringify(FINAL_NOTES_ARRAY));			
		}
		

		function localStorageE4Save() {		
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
								
		}
