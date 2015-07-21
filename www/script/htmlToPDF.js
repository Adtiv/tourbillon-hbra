
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
		if(localStorage.getItem('inspBy')!=null){
			document.getElementById('inspBy').innerHTML = localStorage.getItem('inspBy');
		}
		//document.getElementById('email').innerHTML = localStorage.getItem('email');
		if(localStorage.getItem('title')!=null){	
			document.getElementById('title').innerHTML = localStorage.getItem('title');
		}
		if(localStorage.getItem('empNum')!=null){
			document.getElementById('empNum').innerHTML = localStorage.getItem('empNum');
		}
		//document.getElementsByClassName('beginTime').innerHTML = localStorage.getItem('beginTime');
		//document.getElementsByClassName('endtime').innerHTML = localStorage.getItem('endTime');
		if(localStorage.getItem('repFirst')!=null){
			document.getElementById('repFirst').innerHTML = localStorage.getItem('repFirst');
		}
		if(localStorage.getItem('repLast')!=null){
			document.getElementById('repLast').innerHTML = localStorage.getItem('repLast');
		}
		if(localStorage.getItem('employeeNum')!=null){
			document.getElementById('employeeNum').innerHTML = localStorage.getItem('employeeNum');
		}
		if(localStorage.getItem('weatherCom')!=null){
			document.getElementById('weatherCom').innerHTML = localStorage.getItem('weatherCom');
		}
		if(localStorage.getItem('storedCheckedForms')!=null){
			var storedCheckedForms = JSON.parse(localStorage["storedCheckedForms"]);
			console.log("storedCheckedForms"+ storedCheckedForms);
			if(storedCheckedForms[0]==1){
				//if(localStorage.getItem('l')!=null);
				var showDiv=document.getElementById('A.1');
				showDiv.style.visibility="visible";
				showDiv.style.display="inline";
				var storedScore1=localStorage.getItem('l');
				console.log(storedScore1);
				console.log("score A.1-1" + storedScore1[0]);
				document.getElementById('scoreA.1-1').innerHTML = storedScore1[0];
				//console.log("A.1compliance1"+ localStorage.getItem('A.1compliance1'));
				if(storedScore1[0]==1 || storedScore1[0]==3){ //&& localStorage.getItem('A.1compliance1').length>0){
					document.getElementById('A.1compliance1').innerHTML = "-"+localStorage.getItem('A.1compliance1');
				}
				document.getElementById('scoreA.1-2').innerHTML = storedScore1[2];
				document.getElementById('scoreA.1-3').innerHTML = storedScore1[4];
				document.getElementById('scoreA.1-4').innerHTML = storedScore1[6];
				document.getElementById('scoreA.1-5').innerHTML = storedScore1[8];
				document.getElementById('scoreA.1-6').innerHTML = storedScore1[10];
				document.getElementById('scoreA.1-7').innerHTML = storedScore1[12];
				document.getElementById('scoreA.1-8').innerHTML = storedScore1[14];
				document.getElementById('scoreA.1-9').innerHTML = storedScore1[16];
				document.getElementById('scoreA.1-10').innerHTML = storedScore1[18];
				document.getElementById('scoreA.1-11').innerHTML = storedScore1[20];
				document.getElementById('scoreA.1-12').innerHTML = storedScore1[22];
				document.getElementById('A.1score').innerHTML = localStorage.getItem('A.1score');
				document.getElementById('A.1notes').innerHTML = localStorage.getItem('A.1notes');
				//document.getElementById('weatherCom').innerHTML = storedScore1[0];
			}
		}
	}
}
function generatePDF(){
		console.log('gets');
		compileStoredVariables();
		console.log('here?');
		var doc = new jsPDF();
		
		var checkedForms=null;
		/*
		if(localStorage.getItem('storedCheckedForms')!=null){
			checkedForms = JSON.parse(localStorage["storedCheckedForms"]);  
			console.log("checkedForms"+checkedForms);
		}
		*/
		console.log("here");       
		var elementHandler = {
		  '#A.1': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.1').style.visibility=="visible"){
		  			return false;
		  		}
		  		else{
		  			return true;
		  		}
				/*
	  			if(checkedForms[0]==0){
	  				return true;
	  			}
	  			else{
	  				return false;
	  			}
		  		*/
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