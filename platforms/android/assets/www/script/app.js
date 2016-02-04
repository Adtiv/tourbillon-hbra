function init(){
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
		document.getElementsByClassName('beginTime').value = window.localStorage.getItem('beginTime');
		document.getElementsByClassName('endtime').value = window.localStorage.getItem('endTime');
		document.getElementById('repFirst').value = window.localStorage.getItem('repFirst');
		document.getElementById('repLast').value = window.localStorage.getItem('repLast');
		document.getElementById('employeeNum').value = window.localStorage.getItem('employeeNum');
		document.getElementById('weatherCom').value = window.localStorage.getItem('weatherCom');

	}
	
}

function storeLocalContent(next){
	var comp = document.getElementById('company').value;
	var tradeType = document.getElementById('trade').value;
	var nameJob = document.getElementById('jobName').value;
	var numJob = document.getElementById('jobNum').value;
	var byInsp = document.getElementById('inspBy').value;
	var emailAddress = document.getElementById('email').value
	var jobTitle = document.getElementById('title').value;
	var numEmp = document.getElementById('empNum').value;
	var timeBegin = document.getElementsByClassName('beginTime').value;
	var timeEnd = document.getElementsByClassName('endTime').value;
	var firstRep = document.getElementById('repFirst').value;
	var lastRep = document.getElementById('repLast').value;
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
	window.localStorage.setItem('repFirst', firstRep);
	window.localStorage.setItem('repLast', lastRep);
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
	document.addEventListener('deviceready', function () {
		FastClick.attach(document.body);
		console.log("deviceReady");	
	    // cordova.plugins.email is now available
	}, false);
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
  		//window.alert('App.js - Entering genereatePDF');
  		window.location.href = "formComplete.html"; 
	}
// Should be obsolete function	
//	function viewDocument()
//	{
//		window.alert('App.js - Bad-Entered viewDocument');
//		var pdfPath = localStorage.getItem('pdfURL');
//		window.open(pdfPath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
//	}
	function View(){
		//window.alert('App.js - View');
		var pdfviewtext = localStorage.getItem("HbraPDF");
		window.open(pdfviewtext, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
	}






window.onload = init;