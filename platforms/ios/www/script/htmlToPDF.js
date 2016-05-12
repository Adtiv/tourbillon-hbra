document.addEventListener('deviceready', listenInit(), false);
function listenInit(){
	//window.alert("htmlToPDF.js - listenInit - Entered listenInit");
	console.log("deviceReady");
	//window.alert("htmlToPDF.js - listenInit - Just before FastClick");	
	FastClick.attach(document.body);
	//window.alert("htmlToPDF.js - listenInit - Just after Fastclick and before generatePDF");	
	//alert("Is it updating??");
	generatePDF();
	//window.alert("htmlToPDF.js - listenInit - Just after generatePDF");
	//alert("Updated??????");
  var CHECKED_FORMS_ARRAY;
  var COMPLIANCE_RESPONSE_ARRAY;
  var NOTES_ARRAY;
  var FINAL_NOTES_ARRAY;

}
function compileStoredVariables(){
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);

	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}
	if(localStorage.length!=0){
		if(localStorage.getItem('company')!=null){
			document.getElementById('company').innerHTML=localStorage.getItem('company');
		}
		if(localStorage.getItem('trade')!=null){
			document.getElementById('trade').innerHTML= localStorage.getItem('trade');
		}
		if(localStorage.getItem('jobName')!=null){
			document.getElementById('jobName').innerHTML = localStorage.getItem('jobName');
		}
		if(localStorage.getItem('jobNum')!=null){
			document.getElementById('jobNum').innerHTML = localStorage.getItem('jobNum');
		}
		if(localStorage.getItem('beginTime')!=null){
			document.getElementById('beginTime').innerHTML = localStorage.getItem('beginTime');
		}
		if(localStorage.getItem('endTime')!=null){
			document.getElementById('endTime').innerHTML = localStorage.getItem('endTime');
		}
		if(localStorage.getItem('inspBy')!=null){
			document.getElementById('inspBy').innerHTML = localStorage.getItem('inspBy');
		}
		if(localStorage.getItem('email')!=null){
			document.getElementById('email').innerHTML = localStorage.getItem('email');
		}
		if(localStorage.getItem('title')!=null){	
			document.getElementById('title').innerHTML = localStorage.getItem('title');
		}
		if(localStorage.getItem('empNum')!=null){
			document.getElementById('empNum').innerHTML = localStorage.getItem('empNum');
		}
		//document.getElementsByClassName('beginTime').innerHTML = localStorage.getItem('beginTime');
		//document.getElementsByClassName('endtime').innerHTML = localStorage.getItem('endTime');
		if(localStorage.getItem('repName')!=null){
			document.getElementById('repName').innerHTML = localStorage.getItem('repName');
		}
		if(localStorage.getItem('employeeNum')!=null){
			document.getElementById('employeeNum').innerHTML = localStorage.getItem('employeeNum');
		}
		if(localStorage.getItem('weatherCom')!=null){
			document.getElementById('weatherCom').innerHTML = localStorage.getItem('weatherCom');
		}
  }
	var arrayFailure = false;
	if(localStorage.getItem('HBRA_Checked_Forms')!==null){
		CHECKED_FORMS_ARRAY = JSON.parse(localStorage["HBRA_Checked_Forms"]);
	} else {
		window.alert("HBRA_Checked_Forms NOT Found, Processing Will Fail");
		arrayFailure = true;
	}
	if(localStorage.getItem('HBRA_Saved_Scores')!==null){
		COMPLIANCE_RESPONSE_ARRAY = JSON.parse(localStorage["HBRA_Saved_Scores"]);
	} else {
		window.alert("HBRA_Saved_Scores NOT Found, Processing Will Fail");
		arrayFailure = true;
	}
	if(localStorage.getItem('HBRA_Saved_Notes')!==null){
		NOTES_ARRAY = JSON.parse(localStorage["HBRA_Saved_Notes"]);
	} else {
		window.alert("HBRA_Saved_Notes NOT Found, Processing Will Fail");
		arrayFailure = true;
	}
	if(localStorage.getItem('HBRA_Saved_Final_Notes')!==null){
		FINAL_NOTES_ARRAY = JSON.parse(localStorage["HBRA_Saved_Final_Notes"]);
	} else {
		window.alert("HBRA_Saved_Final_Notes NOT Found, Processing Will Fail");
		arrayFailure = true;
	}
  if (!(arrayFailure)) {
    loadFormData();
    fillInE4Headers();
  } else {
   window.alert("Can NOT Process without Arrays");
  }
}

function loadFormData() {
	  // Logic to populate form with scores, notes, and final notes 
    //window.alert("Made it to loadFormData");
    var nonCompliantQuestions;
    var complianceSummaryArray = new Array();
	  for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
       if (CHECKED_FORMS_ARRAY[i] != "0") {
        //window.alert("Index: " + i + "FormID: " + CHECKED_FORMS_ARRAY[i] + " Compliance Entry Length: " + COMPLIANCE_RESPONSE_ARRAY[i].length);
        var showDiv=document.getElementById(CHECKED_FORMS_ARRAY[i]);
			  showDiv.style.visibility="visible";
			  showDiv.style.display="inline";
			  for (j=0; j<COMPLIANCE_RESPONSE_ARRAY[i].length; j++){
				   var scoreID = "score" + CHECKED_FORMS_ARRAY[i] + "-" + (j+1);		//example: scoreA.1-3
           document.getElementById(scoreID).innerHTML = COMPLIANCE_RESPONSE_ARRAY[i][j];
				   var noteID = CHECKED_FORMS_ARRAY[i] + "compliance" + (j+1);		//example: A.1compliance3
				   if (COMPLIANCE_RESPONSE_ARRAY[i][j]==1 || COMPLIANCE_RESPONSE_ARRAY[i][j]==3) {
						    document.getElementById(noteID).innerHTML = NOTES_ARRAY[i][j];
                var nonCompliantQuestion = CHECKED_FORMS_ARRAY[i] + "-" + (j+1) + ",   ";
                nonComplianQuestions+=nonCompliantQuestion;
                complianceSummaryArray.push(nonCompliantQuestion);
				    }
			   } 
			  var finalNotesID = CHECKED_FORMS_ARRAY[i] + "notes";	// example: A.1notes 
			  document.getElementById(finalNotesID).innerHTML = FINAL_NOTES_ARRAY[i];
		   }
   }
   window.alert(nonCompliantQuestions);
} 

function fillInE4Headers() {
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

//Email plugin functions:
function email(){
	//window.alert("htmlToPDF - Entered Email");
	console.log("updateAttachments");
	var attachmentsArray = new Array();
	if(localStorage.getItem('imagepath1')!=null){
   		var picAttach = localStorage.getItem('imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath2')!=null){
   		var picAttach = localStorage.getItem('imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath3')!=null){
   		var picAttach = localStorage.getItem('imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath4')!=null){
   		var picAttach = localStorage.getItem('imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath5')!=null){
   		var picAttach = localStorage.getItem('imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath6')!=null){
   		var picAttach = localStorage.getItem('imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath7')!=null){
   		var picAttach = localStorage.getItem('imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath8')!=null){
   		var picAttach = localStorage.getItem('imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath9')!=null){
   		var picAttach = localStorage.getItem('imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath10')!=null){
   		var picAttach = localStorage.getItem('imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath11')!=null){
   		var picAttach = localStorage.getItem('imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('imagepath12')!=null){
   		var picAttach = localStorage.getItem('imagepath12');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath7')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath8')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath9')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.2imagepath10')!=null){
   		var picAttach = localStorage.getItem('A.2imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath7')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath8')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath9')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.3imagepath10')!=null){
   		var picAttach = localStorage.getItem('A.3imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath7')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath8')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.4imagepath9')!=null){
   		var picAttach = localStorage.getItem('A.4imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath7')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath8')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.5imagepath9')!=null){
   		var picAttach = localStorage.getItem('A.5imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.6imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.6imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath6')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.7imagepath7')!=null){
   		var picAttach = localStorage.getItem('A.7imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.8imagepath1')!=null){
   		var picAttach = localStorage.getItem('A.8imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.8imagepath2')!=null){
   		var picAttach = localStorage.getItem('A.8imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.8imagepath3')!=null){
   		var picAttach = localStorage.getItem('A.8imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.8imagepath4')!=null){
   		var picAttach = localStorage.getItem('A.8imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('A.8imagepath5')!=null){
   		var picAttach = localStorage.getItem('A.8imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath1')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath2')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath3')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath4')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath5')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath6')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath7')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath8')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath9')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.1imagepath10')!=null){
   		var picAttach = localStorage.getItem('B.1imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath1')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath2')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath3')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath4')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath5')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath6')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath7')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath8')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath9')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.2imagepath10')!=null){
   		var picAttach = localStorage.getItem('B.2imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath1')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath2')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath3')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath4')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath5')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath6')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath7')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath8')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('B.3imagepath9')!=null){
   		var picAttach = localStorage.getItem('B.3imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath1')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath2')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath3')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath4')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath5')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath6')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath7')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath8')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath9')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath10')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath11')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.1imagepath12')!=null){
   		var picAttach = localStorage.getItem('C.1imagepath12');
   		attachmentsArray.push(picAttach);
    }    
    if(localStorage.getItem('C.2imagepath1')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath2')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath3')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath4')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath5')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath6')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath7')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath8')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('C.2imagepath9')!=null){
   		var picAttach = localStorage.getItem('C.2imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath1')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath2')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath3')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath4')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath5')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath6')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath7')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath8')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath9')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath10')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath11')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.1imagepath12')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath12');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.1imagepath13')!=null){
   		var picAttach = localStorage.getItem('D.1imagepath13');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.2imagepath1')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath2')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath3')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath4')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath5')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath6')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath7')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath8')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath9')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath10')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath11')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.2imagepath12')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath12');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.2imagepath13')!=null){
   		var picAttach = localStorage.getItem('D.2imagepath13');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.3imagepath1')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath2')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath3')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath4')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath5')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath6')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath7')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath8')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath9')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath10')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath11')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.3imagepath12')!=null){
   		var picAttach = localStorage.getItem('D.3imagepath12');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.4imagepath1')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath2')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath3')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath4')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath5')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath6')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath7')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath8')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath9')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath10')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath11')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('D.4imagepath12')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath12');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.4imagepath13')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath13');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.4imagepath14')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath14');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('D.4imagepath15')!=null){
   		var picAttach = localStorage.getItem('D.4imagepath15');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('E.1imagepath1')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath2')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath3')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath4')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath5')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath6')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath7')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.1imagepath8')!=null){
   		var picAttach = localStorage.getItem('E.1imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath1')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath2')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath3')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath4')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath5')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath6')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath7')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.2imagepath8')!=null){
   		var picAttach = localStorage.getItem('E.2imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath1')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath2')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath3')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath4')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath5')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath6')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath7')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath8')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath9')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath10')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath10');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath11')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath11');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.3imagepath12')!=null){
   		var picAttach = localStorage.getItem('E.3imagepath12');
   		attachmentsArray.push(picAttach);
    } 
    if(localStorage.getItem('E.4imagepath1')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath1');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath2')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath2');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath3')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath3');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath4')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath4');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath5')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath5');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath6')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath6');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath7')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath7');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath8')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath8');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath9')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath9');
   		attachmentsArray.push(picAttach);
    }
    if(localStorage.getItem('E.4imagepath10')!=null){
   		var picAttach = localStorage.getItem('E.4imagepath10');
   		attachmentsArray.push(picAttach);
    }
   	console.log(attachmentsArray);
   	var pdfAttach = localStorage.getItem("HbraPDF");
   	//window.alert("Complete PDF attachment data from localstorage: " + pdfAttach);
   	var n = pdfAttach.indexOf(",");
   	var pdfAttach64 = "base64:Hbra.pdf//" + pdfAttach.substring(n+1);
   	//window.alert("Complete PDF attachment Data64: " + pdfAttach64);
   	var callback = function(result) { window.alert('Service available setting is: ' + result); };
   	//window.alert("Just before email available check");
   	attachmentsArray.push(pdfAttach64);
	cordova.plugins.email.isAvailable(callback);
	if(callback){
		cordova.plugins.email.open({
		subject: 'Site Safety Evaluation Form - html',
   	 	attachments: attachmentsArray
		});
	}
	//window.alert("htmlToPDF - Exiting Email");
}
//Should no longer need this function
//function createFilePath(){
//        var filePath;
//        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fs) {
//        console.log("Root = " + fs.root.toURL());
//            filePath=fs.root.toURL() + "Site_Safety_Evaluation_Form.pdf";
//            localStorage.setItem('fp', filePath);
//            console.log("fp"+filePath);
//	    }, function (error) {
//	      	alert(error.code);
//	    });  	
//}
function generatePDF(){
	    //window.alert("htmlToPDF.js - Entered generatePDF");
		compileStoredVariables();
		// Remove any DIVs from the dom whihc have been marked ar display:non so that they do not show up on the PDF 
		var parent = document.getElementById("testDiv2");   // Find the DIV containing the elements possible marked as display:none
		var ce = $("#testDiv2").children();  	// Get its children
		for(var i=0; i<ce.length; i++) {		// Loop thru all of the children
			if (ce[i].nodeName == "DIV" & ce[i].style.display == "none" ) {   
            parent.removeChild(ce[i]);			// Remove if child DIV is display:none
            }
       	}
       	// End of Logic for removing DIV elements which should not display on the PDF
		var sourcehtml = $("#testDiv").html();
		document.getElementById('testDiv').style.display="none";
        document.getElementById('loading').style.display="none";
        document.getElementById('pdfComplete').style.visibility="visible";
        var n = sourcehtml.indexOf("<div");
        var prefix = '<!DOCTYPE html><html lang="en-US"><head><meta charset="UTF-8"><title>HBRA Application</title></head><body>'; 
        var suffix = "</body></html>";
        sourcehtml = sourcehtml.substring(n);
        sourcehtml = prefix.concat(sourcehtml);
        sourcehtml = sourcehtml.concat(suffix);
        try{
   			localStorage.setItem("HbraHTML", sourcehtml);
   			//window.alert("htmlToPDF.js - generatePDF - HTML Save in Local Storage is Successful");
		} catch(err) {
  			window.alert("htmlToPDF.js - HTML Save in Local Storage Failed, Error: " + err.message);
			} 
        //window.alert("Complete HTML Source going into jsPDF: " + sourcehtml);
        var pdf = new jsPDF('p', 'pt', 'letter');
        pdf.fromHTML(sourcehtml,15,15,{'width': 550});
        var pdftext = pdf.output("datauristring");
        //window.alert("Complete HTML Source coming out of jsPDF: " + pdftext);
        try{
   			localStorage.setItem("HbraPDF", pdftext);
   			//window.alert("htmlToPDF.js - generatePDF - PDF Save in Local Storage is Successful");
		} catch(err) {
  			window.alert("htmlToPDF.js - PDF Save in Local Storage Failed, Error: " + err.message);
			} 	
	}
	function viewDocument()
	{	
		if (device.platform == "iOS") {
				window.open(localStorage.getItem("HbraPDF"), '_blank', 'location=no');
		} else {
			window.alert("PDF View feature only supported on iOS");
		}
	}	
	//window.onload=generatePDF; 