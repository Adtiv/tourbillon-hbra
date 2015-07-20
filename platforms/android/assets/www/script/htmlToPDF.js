
document.addEventListener('deviceready', function () {
	console.log("deviceReady");	
	generatePDF();
}, false);

function compileStoredVariables(){
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);

	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}
	if(localStorage.length!=0){
		document.getElementById('company').innerHTML=localStorage.getItem('company');
		document.getElementById('trade').innerHTML= localStorage.getItem('trade');
		document.getElementById('jobName').innerHTML = localStorage.getItem('jobName');
		document.getElementById('jobNum').innerHTML = localStorage.getItem('jobNum');
		document.getElementById('inspBy').innerHTML = localStorage.getItem('inspBy');
		//document.getElementById('email').innerHTML = localStorage.getItem('email');
		document.getElementById('title').innerHTML = localStorage.getItem('title');
		document.getElementById('empNum').innerHTML = localStorage.getItem('empNum');
		//document.getElementsByClassName('beginTime').innerHTML = localStorage.getItem('beginTime');
		//document.getElementsByClassName('endtime').innerHTML = localStorage.getItem('endTime');
		document.getElementById('repFirst').innerHTML = localStorage.getItem('repFirst');
		document.getElementById('repLast').innerHTML = localStorage.getItem('repLast');
		document.getElementById('employeeNum').innerHTML = localStorage.getItem('employeeNum');
		document.getElementById('weatherCom').innerHTML = localStorage.getItem('weatherCom');
		var storedCheckedForms = JSON.parse(localStorage["storedCheckedForms"]);
		console.log("storedCheckedForms"+ storedCheckedForms);
		if(storedCheckedForms[0]==1){
			console.log("here?");
			var storedScore1=localStorage.getItem('l');
			console.log("score A.1-1" + storedScore1[0]);
		}
	}
}
function generatePDF(){
		console.log('gets');
		//compileStoredVariables();
		console.log('here?');
		var doc = new jsPDF();          
		var elementHandler = {
		  '#ignoreThis': function (element, renderer) {
		    return true;
		  }
		};
		console.log('1');
		var source = $('.testDiv')[0];
		console.log('1');
		doc.fromHTML(
		    source,
		    15,
		    15,
		    {
		      'width': 180,'elementHandlers': elementHandler
		    });
		/*
		var doc = new jsPDF('p', 'mm', 'letter');	
		doc.setFontSize(18);
		doc.setFont('courier', 'bold');
		doc.text(20, 20, 'Residential Construction - Site Safety Inspection / Evaluation');
		doc.setFontType("normal");
		doc.setFontSize(12);
		doc.text(20, 30, 'Company Inspected: ');
		doc.text(20, 50, 'This workplace safety inspection form will measure your level of compliance with OSHA regulations');
		doc.text(20, 55, 'based on your current work business or activities. Note that the checklist may not be all inclusive');
		doc.text(20, 60, 'of all aspects of safety in your particular work environment but designed to assist in improving compliance; identify areas that need correction or improvement; and assist management in identifying employee training needs. Additional inspection items can be added to the checklist for your trade or business specific safety requirements. Inspections should be weekly and timing random to ensure accurate measurement of compliance.');
		*/
		var pdfOutput = doc.output();
		console.log( pdfOutput );
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
	    console.log(fileSystem.name);
	   console.log(fileSystem.root.name);
	   console.log(fileSystem.root.fullPath);
	   fileSystem.root.getFile("test.pdf", {create: true}, function(entry) {
	      var fileEntry = entry;
	      console.log(entry);
	      console.log("entry.toURL()" + entry.toURL());
	      localStorage.setItem('pdfURL', entry.toURL());
	      entry.createWriter(function(writer) {
	         writer.onwrite = function(evt) {
	         console.log("write success");
	      };
	      console.log("writing to file");
	         writer.write( pdfOutput );
	      }, function(error) {
	         console.log(error);
	      });
	   }, function(error){
		      console.log(error);
		   });
		},
		function(event){
		 console.log( evt.target.error.code );
		});
	}
	function viewDocument()
	{
		var pdfPath = localStorage.getItem('pdfURL');
		window.open(pdfPath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
	}
	//window.onload=generatePDF; 