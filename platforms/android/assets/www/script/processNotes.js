	initialize();

	function initialize() {  	
 		if (localStorage.getItem("HBRA_Saved_Notes") != null) {
		 	NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
		 	//window.alert("NOTES_ARRAY Length at Load: " + NOTES_ARRAY.length + "  NOTES_ARRAY Content: " + NOTES_ARRAY);
		} else {
			window.alert("HBRA_Saved_Notes Does NOT Exist, Processing Will Fail");
		}
		if (localStorage.getItem("HBRA_Saved_Final_Notes") != null) {
		 	FINAL_NOTES_ARRAY = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
		 	//window.alert("FINAL_NOTES_ARRAY Length at Load: " + FINAL_NOTES_ARRAY.length + "  FINAL_NOTES_ARRAY Content: " + FINAL_NOTES_ARRAY);
		} else {
			window.alert("HBRA_Saved_Final_Notes Does NOT Exist, Processing Will Fail");
		}
	initializeNotes();
	} 

	function initializeNotes() {
		//window.alert("Initializing All Notes");
		for (i=0; i<NOTES_ARRAY[FORMS_INDEX].length; i++) {
				var noteId = FORMS_ID + "compliance" + (i+1);
				document.getElementById(noteId).value = NOTES_ARRAY[FORMS_INDEX][i];
			}
		var finalNoteId = FORMS_ID + "notes";
		document.getElementById(finalNoteId).value = FINAL_NOTES_ARRAY[FORMS_INDEX];
	} 