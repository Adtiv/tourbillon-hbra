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

function storeLocalContent(){
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

	window.location.href = "pageTwo.html";

}
	function clearStorage(){
		localStorage.clear();
	}	
	//test email functions
	document.addEventListener('deviceready', function () {
		console.log("deviceReady");
	    // cordova.plugins.email is now available
	}, false);
    //Email plugin functions:
    function email(){
    	console.log('gets');
    	open();
    	console.log('getsHere');
    }
    cordova.plugins.email.isAvailable(
    function (isAvailable) {
	        // alert('Service is not available') unless isAvailable;
	    }
	);
	cordova.plugins.email.open({
	    to:      'aditocco@ufl.edu',
	    cc:      'datocco13@gmail.com',
	    bcc:     'datocco13@gmail.com',
	    subject: 'Greetings',
	    body:    'Worked!'
	});







window.onload = init;