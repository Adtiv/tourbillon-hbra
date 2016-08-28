function initInspection(){
  //window.alert("initInspection");	
  var selectBox = document.getElementById("selectInspection");
  if(window.localStorage.getItem('HBRA_InspectionId')===null){
    window.localStorage.setItem('HBRA_InspectionId',1);
    SelectInspection();
  }
  else{
    if(window.localStorage.getItem('HBRA_InspectionId')==1){
      selectBox.options[0].selected=true;
    }
    else if(window.localStorage.getItem('HBRA_InspectionId')==2){
      selectBox.options[1].selected=true;
    }
    else if(window.localStorage.getItem('HBRA_InspectionId')==3){
      selectBox.options[2].selected=true;
    }  
    else if(window.localStorage.getItem('HBRA_InspectionId')==4){
      selectBox.options[3].selected=true;
    }
    else if(window.localStorage.getItem('HBRA_InspectionId')==5){
      selectBox.options[4].selected=true;
    }
    else if(window.localStorage.getItem('HBRA_InspectionId')==6){
      selectBox.options[5].selected=true;
    }
  }
  console.log(window.localStorage.getItem('HBRA_InspectionId'));
  //SelectInspection();
  //UpdateInspection();
}
function chooseSelection(){
  //window.alert("chooseSelection");
  var selectBox = document.getElementById("selectInspection");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  if(selectedValue=="Inspection1"){
    window.localStorage.setItem('HBRA_InspectionId',1);
  }
  else if(selectedValue=="Inspection2"){
    window.localStorage.setItem('HBRA_InspectionId',2);
  }
  else if(selectedValue=="Inspection3"){
    window.localStorage.setItem('HBRA_InspectionId',3);
  }
  else if(selectedValue=="Inspection4"){
    window.localStorage.setItem('HBRA_InspectionId',4);
  }
  else if(selectedValue=="Inspection5"){
    window.localStorage.setItem('HBRA_InspectionId',5);
  }
  else if(selectedValue=="Inspection6"){
    window.localStorage.setItem('HBRA_InspectionId',6);
  }
  console.log(window.localStorage.getItem('HBRA_InspectionId'));
  SelectInspection();
  //UpdateInspection();
}
function init(){
	//window.alert("init");
	initInspection();
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);

	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}
	if(window.localStorage.length != 0){
		document.getElementById('company').value = window.localStorage.getItem('company');
		document.getElementById('trade').value = window.localStorage.getItem('trade');
		document.getElementById('jobName').value = window.localStorage.getItem('jobName');
		document.getElementById('jobNum').value = window.localStorage.getItem('jobNum');
		document.getElementById('inspBy').value = window.localStorage.getItem('inspBy');
		document.getElementById('email').value = window.localStorage.getItem('email');
		document.getElementById('title').value = window.localStorage.getItem('title');
		document.getElementById('empNum').value = window.localStorage.getItem('empNum');
		document.getElementById('datetimepicker').value = window.localStorage.getItem('beginTime');
		document.getElementById('datetimepicker2').value = window.localStorage.getItem('endTime');
		document.getElementById('repName').value = window.localStorage.getItem('repName');
		document.getElementById('employeeNum').value = window.localStorage.getItem('employeeNum');
		document.getElementById('weatherCom').value = window.localStorage.getItem('weatherCom');
	}
}

function storeLocalContent(next){
	//window.alert("storeLocalContent");
	if (next == "save") {
		navigator.notification.alert(
    			'Press OK',  // message
    			null,	  // no callback	
    	   	 	'Saved',  // title
    	   	 	'OK'      // buttonName
				);
			}
	var comp = document.getElementById('company').value;
	var tradeType = document.getElementById('trade').value;
	var nameJob = document.getElementById('jobName').value;
	var numJob = document.getElementById('jobNum').value;
	var byInsp = document.getElementById('inspBy').value;
	var emailAddress = document.getElementById('email').value
	var jobTitle = document.getElementById('title').value;
	var numEmp = document.getElementById('empNum').value;
	var timeBegin = document.getElementById('datetimepicker').value;
	var timeEnd = document.getElementById('datetimepicker2').value;
	var nameRep = document.getElementById('repName').value;
	var employeeNum = document.getElementById('employeeNum').value;
	var comWeather = document.getElementById('weatherCom').value;

	window.localStorage.setItem('company', comp);
	window.localStorage.setItem('trade', tradeType);
	window.localStorage.setItem('jobName', nameJob);
	window.localStorage.setItem('jobNum', numJob);
	window.localStorage.setItem('inspBy', byInsp);
	window.localStorage.setItem('email', emailAddress);
	window.localStorage.setItem('title', jobTitle);
	window.localStorage.setItem('empNum', numEmp);
	window.localStorage.setItem('beginTime', timeBegin);
	window.localStorage.setItem('endTime', timeEnd);
	window.localStorage.setItem('repName', nameRep);
	window.localStorage.setItem('employeeNum', employeeNum);
	window.localStorage.setItem('weatherCom', comWeather);

	if(next=="next"){
		if(localStorage.getItem("s")!=null){
			var x = "checks";
			localStorage.setItem("s", x);
			localStorage.setItem("pageCount", 0);
		}
		window.location.href = "pageTwo.html";
	}
}
	function popup(){
		document.getElementById('popup').style.visibility='visible';
		document.getElementById('popup').style.position='fixed';
		document.getElementById('popup').style.top='1';
	}
	function no(){
		document.getElementById('popup').style.visibility='hidden';
	}
	function clearStorage(){
		localStorage.clear();
		ClearDirectory();
		window.location.href="index.html"
	}
	function ClearDirectory() {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
      function fail(evt) {
          alert("FILE SYSTEM FAILURE" + evt.target.error.code);
      }
      function onFileSystemSuccess(fileSystem) {
          fileSystem.root.getDirectory(
               "MyAppFolder",
              {create : true, exclusive : false},
              function(entry) {
              entry.removeRecursively(function() {
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
//	function viewDocument()
//	{
//		window.alert('App.js - Bad-Entered viewDocument');
//		var pdfPath = localStorage.getItem('pdfURL');
//		window.open(pdfPath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
//	}
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

window.onload = init;	
