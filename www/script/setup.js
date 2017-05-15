//************************************************************************
//********************** Setup Processing **********************************
//************************************************************************
function setupRefresh(){
  try {
    var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
    if(!bSupportsLocal){
      document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
    return;
   }
    ListInspections();
    setTimeout(setupRefresh2,300);
  } catch (e) {
   window.alert("Setup.js Refresh error: " + e.message);
  }
}

function setupRefresh2(){
  try {
  //window.alert("Setup setupRefresh2 Reached"); 
  // Construct the Inspections Drop Down
  document.getElementById('inspectNumber_P1').innerHTML="";
  var selectBox = document.getElementById("selectInspection");
  while (selectBox.options.length) {
        selectBox.remove(0);
    }
  var insplistARRAY = JSON.parse(localStorage.getItem("HBRA_InspectionList"));
  //window.alert("Array List Length: " + insplistARRAY.length);
  if ((insplistARRAY) && (insplistARRAY.length > 0)) {
    if (!window.localStorage.getItem('HBRA_InspectionId')) {
       window.localStorage.setItem('HBRA_InspectionId', insplistARRAY[0]);
       SelectInspection();
       setTimeout(setupRefresh3,300);
    }
    for (var i = 0; i < insplistARRAY.length; i++) {
      var option = document.createElement("option");
      option.value = insplistARRAY[i];
      option.text = insplistARRAY[i];
      selectBox.appendChild(option);
      if ((window.localStorage.getItem('HBRA_InspectionId')==insplistARRAY[i]) || (i == 0)) {
        selectBox.options[i].selected=true;
        document.getElementById('inspectNumber_P1').innerHTML=insplistARRAY[i];
        //window.alert("Inspection ID Inited is: " + window.localStorage.getItem('HBRA_InspectionId') + window.localStorage.getItem('HBRA_jobName') + " index: " + i);
        } 
      } 
      setTimeout(setupRefresh3);
    } else {
      //window.alert("No Inspections left")
      document.getElementById('inspectNumber_P1').innerHTML='<font color=green>***Add Inspection</font>';
      var option = document.createElement("option");
      option.text = 'First Set Defaults';
      selectBox.appendChild(option);
      setupRefreshClear();
    }
   } catch (e) {
    window.alert("Setup.js Refresh2 error: " + e.message);
  } 
}
  
function setupRefresh3(){
  try {
// Fill in all of the other fields
    if(window.localStorage.length != 0){
    document.getElementById('company').value = window.localStorage.getItem('HBRA_company');
    document.getElementById('trade').value = window.localStorage.getItem('HBRA_trade');
    document.getElementById('jobName').value = window.localStorage.getItem('HBRA_jobName');
    document.getElementById('jobNum').value = window.localStorage.getItem('HBRA_jobNum');
    document.getElementById('inspBy').value = window.localStorage.getItem('HBRA_inspBy');
    document.getElementById('email').value = window.localStorage.getItem('HBRA_email');
    document.getElementById('title').value = window.localStorage.getItem('HBRA_title');
    document.getElementById('empNum').value = window.localStorage.getItem('HBRA_empNum');
    document.getElementById('datetimepicker').value = window.localStorage.getItem('HBRA_beginTime');
    //document.getElementById('datetimepicker2').value = window.localStorage.getItem('HBRA_endTime');
    document.getElementById('repName').value = window.localStorage.getItem('HBRA_repName');
    document.getElementById('employeeNum').value = window.localStorage.getItem('HBRA_employeeNum');
    document.getElementById('weatherCom').value = window.localStorage.getItem('HBRA_weatherCom');
  }
  
  } catch (e) {
    window.alert("Setup.js Refresh3 error: " + e.message);
  }
}

function setupRefreshClear(){
  try {
    document.getElementById('company').value = "";
    document.getElementById('trade').value = "";
    document.getElementById('jobName').value = "";
    document.getElementById('jobNum').value = "";
    document.getElementById('inspBy').value = "";
    document.getElementById('email').value = "";
    document.getElementById('title').value = "";
    document.getElementById('empNum').value = "";
    document.getElementById('datetimepicker').value = "";
    //document.getElementById('datetimepicker2').value = "";
    document.getElementById('repName').value = "";
    document.getElementById('employeeNum').value = "";
    document.getElementById('weatherCom').value = "";
  } catch (e) {
    window.alert("Setup.js RefreshClear error: " + e.message);
  }
}



//************************************************************************
//********************** Selection Processing ****************************
//************************************************************************
function chooseSelection(){
  try {
  var selectBox = document.getElementById("selectInspection");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  window.localStorage.setItem('HBRA_InspectionId',selectedValue);
  //window.alert("Inspection ID Chosen is: " + window.localStorage.getItem('HBRA_InspectionId') + window.localStorage.getItem('HBRA_jobName'));
  SelectInspection();
  setTimeout(setupRefresh,300);
  } catch (e) {
    window.alert('Setup.js ChooseSelection Error: ' + e.message);
  }
}
//************************************************************************
//********************** Delete Processing *******************************
//************************************************************************
function chooseDeleteInspection(){
  var delMsg = "Deleting Inspection " + window.localStorage.getItem('HBRA_InspectionId');
  navigator.notification.confirm("Press 'Delete'", confirmDelCallback, delMsg, ['Delete','Cancel']);
  //window.alert("chooseDeleteInspection Completed");
}

function confirmDelCallback(buttonIndex) {
    //window.alert('You selected button ' + buttonIndex);
    try {
    if (buttonIndex == 1) {
      DeleteInspection();
      DeleteInspectionPictures();
      setTimeout(confirmDelClear,300);
    }
    } catch (e) {
      window.alert("Error in confirmDelCallback: " + e.message);
    }
}



function DeleteInspectionPictures(){
  //listDir();
  clearInspectionDirectory();
  clearInspectionStorage();
  //listDir();
  //navigator.camera.cleanup(onSuccess, onFail);
} 

function clearInspectionDirectory() {
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
  function fail(evt) {
      alert("FILE SYSTEM FAILURE" + evt.target.error.code);
  }
  function onFileSystemSuccess(fileSystem) {
    var picFolder = "MyAppFolder/"+localStorage.getItem('HBRA_InspectionId');
    //var picFolder ="MyAppFolder"; 
      fileSystem.root.getDirectory(
           picFolder,
          {create : true, exclusive : false},
          function(entry) {
          entry.removeRecursively(function() {
              console.log(entry.toURL());
              console.log("Remove Recursively Succeeded");
          }, fail);
      }, fail);
  }
}
function clearInspectionStorage(){
  for (var key in localStorage){
     console.log(key)
     if(key.includes(localStorage.getItem('HBRA_InspectionId'))){
      localStorage.removeItem(key);
     }
  }
}

/* //to list file directory contents
function listDir(){
  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onFileSystemFail);
  function onFileSystemSuccess(fileSystem) {
      var directoryEntry = fileSystem.root;
      directoryEntry.getDirectory("Job_00001", {create: true, exclusive: false}, onDirectorySuccess, onDirectoryFail);
  }

  function onDirectorySuccess(parent) {
      var directoryReader = parent.createReader();
      directoryReader.readEntries(success, fail);
  }

  function fail(error) {
      alert("Failed to list directory contents: " + error.code);
  }

  function success(entries) {
      if (entries.length == 0)
          console.log("No Records");
      else
      {
        console.log(entries);
          for (var i = 0; i < entries.length; i++) {
              entries[i].file(function (file) {
                  console.log("file.name " + file.name);
              })
          }
          console.log('file list created');
      }
  }

  function onDirectoryFail(error) {
      alert("Unable to create new directory: " + error.code);
  }

  function onFileSystemFail(evt) {
      console.log(evt.target.error.code);
  }
}
*/

function confirmDelClear(){
  try {
    window.localStorage.removeItem('HBRA_InspectionId');
    setTimeout(setupRefresh);
   } catch (e) {
    window.alert("Error in confirmDelClear: " + e.message);
   }

}

//************************************************************************
//********************** Add Processing **********************************
//************************************************************************
function chooseAddInspection(){
  //window.alert("chooseAddInspection");
  var jobcounter;
  if (window.localStorage.getItem('HBRA_jobcounter') !== null) {
    jobcounter = window.localStorage.getItem('HBRA_jobcounter');
  } else {
    jobcounter = 0;
    window.localStorage.setItem('HBRA_jobcounter',jobcounter);
  }
  jobcounter++;
  var jstr = "00000" + jobcounter;
  jstr = jstr.substr(jstr.length-5);
  jstr = "Job" + "_" + jstr;
  window.localStorage.setItem('HBRA_jobnext',jstr);
  defmsg = 'Inspection defaults must first be set. First enter them into the form, and then click the "Set These as Defaults" button at the bottom.';
  if (window.localStorage.getItem('default_company') !== null) {
    navigator.notification.prompt("Enter new Job Name/Inspection ID", confirmAddCallback, "Add Inspection", ['OK','Skip'],jstr); 
      } else {
        navigator.notification.alert(
          defmsg,
          null,   // no callback  
          'Defaults must first be set',  // title
          'OK'  // buttonName    
          );
      }
    //window.alert("chooseAddInspection Completed");
}

function confirmAddCallback(results) {
    //window.alert('You selected button ' + buttonIndex);
    try {
     //window.alert("Button Index Depressed: " + results.buttonIndex + " Inspection Name: " + results.input1);
      if (results.buttonIndex == 1) {
        var id = results.input1.replace(/'/g, '"');  // replace single quite with double to avoid database issues
        if (id == window.localStorage.getItem('HBRA_jobnext')) {
        var jobcounter2;
        jobcounter2 = localStorage.getItem('HBRA_jobcounter');
        jobcounter2++;
        localStorage.setItem('HBRA_jobcounter',jobcounter2);
        }  
        setupNewInspection(id);
      }  
    } catch (e) {
      window.alert("Error in confirmAddCallback: " + e.message);
    }
}

//************************************************************************
//********************** New Processing **********************************
//************************************************************************
function setupNewInspection(inspID) {
  try {

  //window.alert("Entering setupNewInspection");
  window.localStorage.setItem('HBRA_InspectionId', inspID);  //same as Job name
  if (window.localStorage.getItem('default_company') !== null) {
    window.localStorage.setItem('HBRA_company', window.localStorage.getItem('default_company'));
  }
  if (window.localStorage.getItem('default_trade') !== null) {
    window.localStorage.setItem('HBRA_trade', window.localStorage.getItem('default_trade'));
  }
  window.localStorage.setItem('HBRA_jobName', inspID);  //special case to make inspection id and name the same
  if (window.localStorage.getItem('default_jobNum') !== null) {
    window.localStorage.setItem('HBRA_jobNum', window.localStorage.getItem('default_jobNum'));
  }
  if (window.localStorage.getItem('default_inspBy') !== null) {
    window.localStorage.setItem('HBRA_inspBy', window.localStorage.getItem('default_inspBy'));
  }
  if (window.localStorage.getItem('default_email') !== null) {
    window.localStorage.setItem('HBRA_email', window.localStorage.getItem('default_email'));
  }
  if (window.localStorage.getItem('default_title') !== null) {
    window.localStorage.setItem('HBRA_title', window.localStorage.getItem('default_title'));
  } else {
    window.localStorage.removeItem('HBRA_title');
  }
  if (window.localStorage.getItem('default_empNum') !== null) {
    window.localStorage.setItem('HBRA_empNum', window.localStorage.getItem('default_empNum'));
  }
  if (window.localStorage.getItem('default_beginTime') !== null) {
    window.localStorage.setItem('HBRA_beginTime',window.localStorage.getItem('default_beginTime'));
  }
  //if (window.localStorage.getItem('default_endTime') !== null) {
  //  window.localStorage.setItem('HBRA_endTime', window.localStorage.getItem('default_endTime'));
  //}
  if (window.localStorage.getItem('default_repName') !== null) {
    window.localStorage.setItem('HBRA_repName', window.localStorage.getItem('default_repName'));
  }
  if (window.localStorage.getItem('default_employeeNum') !== null) {
    window.localStorage.setItem('HBRA_employeeNum', window.localStorage.getItem('default_employeeNum'));
  }
  if (window.localStorage.getItem('default_weatherCom') !== null) {
    window.localStorage.setItem('HBRA_weatherCom', window.localStorage.getItem('default_weatherCom'));
  }
  localStorage.removeItem('HBRA_Checked_Forms');
  localStorage.removeItem('HBRA_Saved_Scores');
  localStorage.removeItem('HBRA_Saved_Notes');
  localStorage.removeItem('HBRA_Saved_Final_Notes');
  localStorage.removeItem('HBRA_Photos');
  localStorage.removeItem('HBRA_E.4Header');
  localStorage.removeItem('HBRA_E.4Titles');
  //window.alert("LS Updated for new Inpection: " + window.localStorage.getItem('HBRA_InspectionId'));
  UpdateInspection();
  setTimeout(setupRefresh,300);
  } catch (e) {
    window.alert("Error in setupNewInspection: " + e.message);
  }
}

//************************************************************************
//********************** Save Processing **********************************
//************************************************************************
function storeLocalContent(next){
  try {
  //window.alert("storeLocalContent: " + next);
  //if (next == "save") {
  //  navigator.notification.alert(
  //        'Press OK',  // message
  //        null,   // no callback  
  //          'Saved',  // title
  //          'OK'      // buttonName
  //      );
  //    }

  //window.alert("storeLocalContent Step 2");
  var comp = document.getElementById('company').value;
  var tradeType = document.getElementById('trade').value;
  var nameJob = document.getElementById('jobName').value;
  var numJob = document.getElementById('jobNum').value;
  var byInsp = document.getElementById('inspBy').value;
  var emailAddress = document.getElementById('email').value
  var jobTitle = document.getElementById('title').value;
  var numEmp = document.getElementById('empNum').value;
  var timeBegin = document.getElementById('datetimepicker').value;
  //var timeEnd = document.getElementById('datetimepicker2').value;
  var nameRep = document.getElementById('repName').value;
  var employeeNum = document.getElementById('employeeNum').value;
  var comWeather = document.getElementById('weatherCom').value;

  // For Database Updates
  //window.alert("storeLocalContent Step 4");
  window.localStorage.setItem('HBRA_company', comp);
  window.localStorage.setItem('HBRA_trade', tradeType);
  window.localStorage.setItem('HBRA_jobName', nameJob);
  window.localStorage.setItem('HBRA_jobNum', numJob);
  window.localStorage.setItem('HBRA_inspBy', byInsp);
  window.localStorage.setItem('HBRA_email', emailAddress);
  window.localStorage.setItem('HBRA_title', jobTitle);
  window.localStorage.setItem('HBRA_empNum', numEmp);
  window.localStorage.setItem('HBRA_beginTime', timeBegin);
  //window.localStorage.setItem('HBRA_endTime', timeEnd);
  window.localStorage.setItem('HBRA_repName', nameRep);
  window.localStorage.setItem('HBRA_employeeNum', employeeNum);
  window.localStorage.setItem('HBRA_weatherCom', comWeather);
  //window.alert("Inspection Being Saved is ID: " + window.localStorage.getItem('HBRA_InspectionId') + " JobName: " + window.localStorage.getItem('HBRA_jobName'));
  
  //window.alert("storeLocalContent Step 5");
  UpdateInspection(); //  save to the database

  //window.alert("storeLocalContent Step 6");
  if(next=="next"){
    //window.alert("storeLocalContent Step 7");
    if(localStorage.getItem("s")!=null){
      var x = "checks";
      localStorage.setItem("s", x);
      localStorage.setItem("pageCount", 0);
      //window.alert("storeLocalContent Step 8");
    }
    //window.alert("storeLocalContent Step 9");
    window.location.href = "pageTwo.html";
  } else if (next=="save") {  // this is for next value = "save"
          navigator.notification.alert(
          'Press OK',  // message
          function () {setTimeout(function(){ window.location.href="pageOne.html" }, 100);}, 
            'Saved',  // title
            'OK'      // buttonName
          );
  } 
  } catch (e) {window.alert("Setup.js storeLocalContent error: " + e.message);}
}
//*******************************************************************************

  function popup(){
    document.getElementById('popup').style.visibility='visible';
    document.getElementById('popup').style.position='fixed';
    document.getElementById('popup').style.top='1';
  }
  function no(){
    document.getElementById('popup').style.visibility='hidden';
  }
  function clearStorage(){
    console.log("GETTING TO THE RIGHT PLACE?");
    ClearDirectory();
    DeleteInspectionsDB();  // delete the whole database as well
    localStorage.clear();
    window.location.href="index.html"
  }
  function ClearDirectory() {
    console.log("GETS TO CLEAR DIR");
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
      function fail(evt) {
          alert("FILE SYSTEM FAILURE" + evt.target.error.code);
      }
      function onFileSystemSuccess(fileSystem) {
          console.log("GETS TO SUCCESS");
          fileSystem.root.getDirectory(
              "MyAppFolder",
              {create : true, exclusive : false},
              function(entry) {
              entry.removeRecursively(function() {
                  console.log(entry.toURL());
                  console.log("Remove Recursively Succeeded");
              }, fail);
          }, fail);
          fileSystem.root.getFile(
               "completedForm.pdf",
              {create : true},
              function(entry) {
              entry.remove(function() {
                  console.log("Remove Succeeded");
              }, fail);
          }, fail);
      }
  }
    function generatePDF(){
      //window.alert("generatePDF");
      //window.alert('App.js - Brians Updated Change - Entering generatePDF');
      window.location.href = "formComplete.html";     
  }
// Should be obsolete function  
//  function viewDocument()
//  {
//    window.alert('App.js - Bad-Entered viewDocument');
//    var pdfPath = localStorage.getItem('pdfURL');
//    window.open(pdfPath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
//  }
  function View()
  {
    //window.alert("View");
    if (device.platform == "iOS") {
        window.open(localStorage.getItem("HbraPDF"), '_blank', 'location=no');
    } else {
      navigator.notification.alert(
            'Press OK',  // message
            null,   // no callback  
              'PDF View feature only supported on iOS',  // title
              'OK'      // buttonName
          );
    }
  }

//************************************************************************
//********************** Set Default Processing **********************************
//************************************************************************
function SetDefaults() {
  //window.alert("SetDefaults Step 1");
  var comp = document.getElementById('company').value;
  var tradeType = document.getElementById('trade').value;
  var nameJob = document.getElementById('jobName').value;
  var numJob = document.getElementById('jobNum').value;
  var byInsp = document.getElementById('inspBy').value;
  var emailAddress = document.getElementById('email').value
  var jobTitle = document.getElementById('title').value;
  var numEmp = document.getElementById('empNum').value;
  var timeBegin = document.getElementById('datetimepicker').value;
  //var timeEnd = document.getElementById('datetimepicker2').value;
  var nameRep = document.getElementById('repName').value;
  var employeeNum = document.getElementById('employeeNum').value;
  var comWeather = document.getElementById('weatherCom').value;
  //window.alert("SetDefaults Step 2");
  window.localStorage.setItem('default_company', comp);
  window.localStorage.setItem('default_trade', tradeType);
  window.localStorage.setItem('default_jobName', nameJob);
  window.localStorage.setItem('default_jobNum', numJob);
  window.localStorage.setItem('default_inspBy', byInsp);
  window.localStorage.setItem('default_email', emailAddress);
  window.localStorage.setItem('default_title', jobTitle);
  window.localStorage.setItem('default_empNum', numEmp);
  window.localStorage.setItem('default_beginTime', timeBegin);
  //window.localStorage.setItem('default_endTime', timeEnd);
  window.localStorage.setItem('default_repName', nameRep);
  window.localStorage.setItem('default_employeeNum', employeeNum);
  window.localStorage.setItem('default_weatherCom', comWeather);
  navigator.notification.alert(
            'Press OK',  // message
              chooseAddInspection,   // callback  
              'Defaults Set',  // title
              'OK'    // buttonName  
          );

    }

//************************************************************************
//********************** Initialization Processing ***********************
//************************************************************************
setupRefresh();
//************************************************************************
