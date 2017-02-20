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
    if(localStorage.getItem('HBRA_company')!=null){
      document.getElementById('company').innerHTML=localStorage.getItem('HBRA_company');
    }
    if(localStorage.getItem('HBRA_trade')!=null){
      document.getElementById('trade').innerHTML= localStorage.getItem('HBRA_trade');
    }
    if(localStorage.getItem('HBRA_jobName')!=null){
      document.getElementById('jobName').innerHTML = localStorage.getItem('HBRA_jobName');
    }
    if(localStorage.getItem('HBRA_jobNum')!=null){
      document.getElementById('jobNum').innerHTML = localStorage.getItem('HBRA_jobNum');
    }
    if(localStorage.getItem('HBRA_beginTime')!=null){
      document.getElementById('beginTime').innerHTML = localStorage.getItem('HBRA_beginTime');
    }
    //if(localStorage.getItem('endTime')!=null){
    //  document.getElementById('endTime').innerHTML = localStorage.getItem('endTime');
    //}
    if(localStorage.getItem('HBRA_inspBy')!=null){
      document.getElementById('inspBy').innerHTML = localStorage.getItem('HBRA_inspBy');
    }
    if(localStorage.getItem('HBRA_email')!=null){
      document.getElementById('email').innerHTML = localStorage.getItem('HBRA_email');
    }
    if(localStorage.getItem('HBRA_title')!=null){ 
      document.getElementById('title').innerHTML = localStorage.getItem('HBRA_title');
    }
    if(localStorage.getItem('HBRA_empNum')!=null){
      document.getElementById('empNum').innerHTML = localStorage.getItem('HBRA_empNum');
    }
    //document.getElementsByClassName('beginTime').innerHTML = localStorage.getItem('beginTime');
    //document.getElementsByClassName('endtime').innerHTML = localStorage.getItem('endTime');
    if(localStorage.getItem('HBRA_repName')!=null){
      document.getElementById('repName').innerHTML = localStorage.getItem('HBRA_repName');
    }
    if(localStorage.getItem('HBRA_employeeNum')!=null){
      document.getElementById('employeeNum').innerHTML = localStorage.getItem('HBRA_employeeNum');
    }
    if(localStorage.getItem('HBRA_weatherCom')!=null){
      document.getElementById('weatherCom').innerHTML = localStorage.getItem('HBRA_weatherCom');
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
    var nonCompliantQuestions = "";
    var complianceSummaryArray = new Array();
    var non=0;
    var partial=0;
    var compliant=0;
    var totalNA=0;
    var totalQ=0;
    var formScoreTotal=0;
    for (i=0; i<CHECKED_FORMS_ARRAY.length; i++) {
       if (CHECKED_FORMS_ARRAY[i] != "0") {
        //window.alert("Index: " + i + "FormID: " + CHECKED_FORMS_ARRAY[i] + " Compliance Entry Length: " + COMPLIANCE_RESPONSE_ARRAY[i].length);
        var showDiv=document.getElementById(CHECKED_FORMS_ARRAY[i]);
        showDiv.style.visibility="visible";
        showDiv.style.display="inline";
        formScoreTotal = 0;
        for (j=0; j<COMPLIANCE_RESPONSE_ARRAY[i].length; j++){
           var score = COMPLIANCE_RESPONSE_ARRAY[i][j];
           formScoreTotal += score;
           totalQ++;
           if(score==5){
              compliant++;
           }
           if(score==0){
              totalNA++;
           }
           var scoreID = "score" + CHECKED_FORMS_ARRAY[i] + "-" + (j+1);    //example: scoreA.1-3
           document.getElementById(scoreID).innerHTML = "(" + score + ") " + scoretoText(score);
           var noteID = CHECKED_FORMS_ARRAY[i] + "compliance" + (j+1);    //example: A.1compliance3
           if (score==1 || score==3) {
                if(score==1){
                  non++;
                }
                if(score==3){
                  partial++;
                }
                document.getElementById(noteID).innerHTML = NOTES_ARRAY[i][j];
                var nonCompliantQuestion = CHECKED_FORMS_ARRAY[i] + "-" + (j+1) + ",   ";
                nonCompliantQuestions+=nonCompliantQuestion;
                complianceSummaryArray.push(nonCompliantQuestion);
            }
         } 
        var formScore =  CHECKED_FORMS_ARRAY[i] + "score"; // example: A.1score
        document.getElementById(formScore).innerHTML = formScoreTotal;
        var finalNotesID = CHECKED_FORMS_ARRAY[i] + "notes";  // example: A.1notes 
        document.getElementById(finalNotesID).innerHTML = FINAL_NOTES_ARRAY[i];
       }
   }
   //window.alert(nonCompliantQuestions);
   document.getElementById('listOfNonCompliance').innerHTML=nonCompliantQuestions;
   document.getElementById('totalNon').innerHTML= non.toString();
   document.getElementById('totalPartial').innerHTML=partial.toString();
   document.getElementById('totalCompliant').innerHTML=compliant.toString();
   document.getElementById('totalNA').innerHTML=totalNA.toString();
   document.getElementById('totalQuestions').innerHTML=totalQ.toString();
 } 

function scoretoText(num){
  var scoreText;
   switch(num) {
    case 0:
        scoreText = "N/A";
        break;
    case 1:
        scoreText = "NON-COMPLIANT";
        break;
    case 3:
        scoreText = "PARTIALLY-COMPLIANT";
        break;
    case 5:
        scoreText = "COMPLIANT";
        break; 
    default:
        scoreText = "INVALID";
  }
  return scoreText;
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
  var inspection = localStorage.getItem('HBRA_InspectionId');
    for(var i=1;i<=12;i++){
      if(localStorage.getItem(inspection+'imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=10;i++){
      if(localStorage.getItem(inspection+'A.2imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.2imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=10;i++){
      if(localStorage.getItem(inspection+'A.3imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.3imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=9;i++){
      if(localStorage.getItem(inspection+'A.4imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.4imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=9;i++){
      if(localStorage.getItem(inspection+'A.5imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.5imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=6;i++){
      if(localStorage.getItem(inspection+'A.6imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.6imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=7;i++){
      if(localStorage.getItem(inspection+'A.7imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.7imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=5;i++){
      if(localStorage.getItem(inspection+'A.8imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'A.8imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=10;i++){
      if(localStorage.getItem(inspection+'B.1imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'B.1imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=10;i++){
      if(localStorage.getItem(inspection+'B.2imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'B.2imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=9;i++){
      if(localStorage.getItem(inspection+'B.3imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'B.3imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=12;i++){
      if(localStorage.getItem(inspection+'C.1imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'C.1imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=9;i++){
      if(localStorage.getItem(inspection+'C.2imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'C.2imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=13;i++){
      if(localStorage.getItem(inspection+'D.1imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'D.1imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=13;i++){
      if(localStorage.getItem(inspection+'D.2imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'D.2imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=12;i++){
      if(localStorage.getItem(inspection+'D.3imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'D.3imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=15;i++){
      if(localStorage.getItem(inspection+'D.4imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'D.4imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=8;i++){
      if(localStorage.getItem(inspection+'E.1imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'E.1imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=8;i++){
      if(localStorage.getItem(inspection+'E.2imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'E.2imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=12;i++){
      if(localStorage.getItem(inspection+'E.3imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'E.3imagepath'+i);
        attachmentsArray.push(picAttach);
      }
    }
    for(var i=1;i<=10;i++){
      if(localStorage.getItem(inspection+'E.4imagepath'+i)!==null){
        var picAttach = localStorage.getItem(inspection+'E.4imagepath'+i);
        attachmentsArray.push(picAttach);
      }
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
  var subject = 'Site Safety Evaluation Form - ' + window.localStorage.getItem('HBRA_InspectionId'); 
  //window.alert("Subject: " + subject); 
  cordova.plugins.email.isAvailable(callback);
  if(callback){
    cordova.plugins.email.open({
    subject: subject,
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
//      }, function (error) {
//          alert(error.code);
//      });   
//}
function generatePDF(){
      //window.alert("htmlToPDF.js - Entered generatePDF");
    compileStoredVariables();
    // Remove any DIVs from the dom whihc have been marked ar display:non so that they do not show up on the PDF 
    var parent = document.getElementById("testDiv2");   // Find the DIV containing the elements possible marked as display:none
    var ce = $("#testDiv2").children();   // Get its children
    for(var i=0; i<ce.length; i++) {    // Loop thru all of the children
      if (ce[i].nodeName == "DIV" & ce[i].style.display == "none" ) {   
            parent.removeChild(ce[i]);      // Remove if child DIV is display:none
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
      navigator.notification.alert(
            'Press OK',  // message
            null,   // no callback  
              'PDF View feature only supported on iOS',  // title
              'OK'      // buttonName
          );
      //window.alert("PDF View feature only supported on iOS");
    }
  } 
  //window.onload=generatePDF; 