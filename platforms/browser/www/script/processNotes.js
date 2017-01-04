	initialize();

	function initialize() {  		
		//window.alert("Initializing All Notes");
		for (i=0; i<NOTES_ARRAY[FORMS_INDEX].length; i++) {
				var noteId = FORMS_ID + "compliance" + (i+1);
				document.getElementById(noteId).value = NOTES_ARRAY[FORMS_INDEX][i];
			}
		var finalNoteId = FORMS_ID + "notes";
		document.getElementById(finalNoteId).value = FINAL_NOTES_ARRAY[FORMS_INDEX];
	} 