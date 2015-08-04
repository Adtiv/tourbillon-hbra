
document.addEventListener('deviceready', function () {
	console.log("deviceReady");	
	FastClick.attach(document.body);
	generatePDF();
	alert("Update?");
}, false);

function compileStoredVariables(doc){
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
				if(localStorage.getItem('l')!=null){
					var showDiv=document.getElementById('A.1');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore1=localStorage.getItem('l');
					console.log(storedScore1);
					console.log("score A.1-1" + storedScore1[0]);
					document.getElementById('scoreA.1-1').innerHTML = storedScore1[0];
					/*
					console.log("A.1compliance1"+ localStorage.getItem('A.1compliance1')+"compliance");
					if(localStorage.getItem('A.1compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore1[0]==1 || storedScore1[0]==3) && localStorage.getItem('A.1compliance1')!=""){ //&& localStorage.getItem('A.1compliance1')!=""){
						document.getElementById('A.1compliance1').innerHTML = "-"+localStorage.getItem('A.1compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.1-2').innerHTML = storedScore1[2];
					if((storedScore1[2]==1 || storedScore1[2]==3) && localStorage.getItem('A.1compliance2')!=""){
						document.getElementById('A.1compliance2').innerHTML = "-"+localStorage.getItem('A.1compliance2');
					}
					document.getElementById('scoreA.1-3').innerHTML = storedScore1[4];
					if((storedScore1[4]==1 || storedScore1[4]==3) && localStorage.getItem('A.1compliance3')!=""){
						document.getElementById('A.1compliance3').innerHTML = "-"+localStorage.getItem('A.1compliance3');
					}
					document.getElementById('scoreA.1-4').innerHTML = storedScore1[6];
					if((storedScore1[6]==1 || storedScore1[6]==3) && localStorage.getItem('A.1compliance4')!=""){
						document.getElementById('A.1compliance4').innerHTML = "-"+localStorage.getItem('A.1compliance4');
					}
					document.getElementById('scoreA.1-5').innerHTML = storedScore1[8];
					if((storedScore1[8]==1 || storedScore1[8]==3) && localStorage.getItem('A.1compliance5')!=""){
						document.getElementById('A.1compliance5').innerHTML = "-"+localStorage.getItem('A.1compliance5');
					}
					document.getElementById('scoreA.1-6').innerHTML = storedScore1[10];
					if((storedScore1[10]==1 || storedScore1[10]==3) && localStorage.getItem('A.1compliance6')!=""){
						document.getElementById('A.1compliance6').innerHTML = "-"+localStorage.getItem('A.1compliance6');
					}
					document.getElementById('scoreA.1-7').innerHTML = storedScore1[12];
					if((storedScore1[12]==1 || storedScore1[12]==3) && localStorage.getItem('A.1compliance7')!=""){
						document.getElementById('A.1compliance7').innerHTML = "-"+localStorage.getItem('A.1compliance7');
					}
					document.getElementById('scoreA.1-8').innerHTML = storedScore1[14];
					if((storedScore1[14]==1 || storedScore1[14]==3) && localStorage.getItem('A.1compliance8')!=""){
						document.getElementById('A.1compliance8').innerHTML = "-"+localStorage.getItem('A.1compliance8');
					}
					document.getElementById('scoreA.1-9').innerHTML = storedScore1[16];
					if((storedScore1[16]==1 || storedScore1[16]==3) && localStorage.getItem('A.1compliance9')!=""){
						document.getElementById('A.1compliance9').innerHTML = "-"+localStorage.getItem('A.1compliance9');
					}
					document.getElementById('scoreA.1-10').innerHTML = storedScore1[18];
					if((storedScore1[18]==1 || storedScore1[18]==3) && localStorage.getItem('A.1compliance10')!=""){
						document.getElementById('A.1compliance10').innerHTML = "-"+localStorage.getItem('A.1compliance10');
					}
					document.getElementById('scoreA.1-11').innerHTML = storedScore1[20];
					if((storedScore1[20]==1 || storedScore1[20]==3) && localStorage.getItem('A.1compliance11')!=""){
						document.getElementById('A.1compliance11').innerHTML = "-"+localStorage.getItem('A.1compliance11');
					}
					document.getElementById('scoreA.1-12').innerHTML = storedScore1[22];
					if((storedScore1[22]==1 || storedScore1[22]==3) && localStorage.getItem('A.1compliance12')!=""){
						document.getElementById('A.1compliance12').innerHTML = "-"+localStorage.getItem('A.1compliance12');
					}
					document.getElementById('A.1score').innerHTML = localStorage.getItem('A.1score');
					document.getElementById('A.1notes').innerHTML = localStorage.getItem('A.1notes');
					//document.getElementById('weatherCom').innerHTML = storedScore1[0];
				}
			}
			if(storedCheckedForms[1]==1){
				if(localStorage.getItem('l2')!=null){
					var showDiv=document.getElementById('A.2');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l2');
					console.log(storedScore);
					console.log("score A.2-1" + storedScore[0]);
					document.getElementById('scoreA.2-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.2compliance1')!=""){ //&& localStorage.getItem('A.2compliance1')!=""){
						document.getElementById('A.2compliance1').innerHTML = "-"+localStorage.getItem('A.2compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.2-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.2compliance2')!=""){
						document.getElementById('A.2compliance2').innerHTML = "-"+localStorage.getItem('A.2compliance2');
					}
					document.getElementById('scoreA.2-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.2compliance3')!=""){
						document.getElementById('A.2compliance3').innerHTML = "-"+localStorage.getItem('A.2compliance3');
					}
					document.getElementById('scoreA.2-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.2compliance4')!=""){
						document.getElementById('A.2compliance4').innerHTML = "-"+localStorage.getItem('A.2compliance4');
					}
					document.getElementById('scoreA.2-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.2compliance5')!=""){
						document.getElementById('A.2compliance5').innerHTML = "-"+localStorage.getItem('A.2compliance5');
					}
					document.getElementById('scoreA.2-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.2compliance6')!=""){
						document.getElementById('A.2compliance6').innerHTML = "-"+localStorage.getItem('A.2compliance6');
					}
					document.getElementById('scoreA.2-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('A.2compliance7')!=""){
						document.getElementById('A.2compliance7').innerHTML = "-"+localStorage.getItem('A.2compliance7');
					}
					document.getElementById('scoreA.2-8').innerHTML = storedScore[14];
					if((storedScore[14]==1 || storedScore[14]==3) && localStorage.getItem('A.2compliance8')!=""){
						document.getElementById('A.2compliance8').innerHTML = "-"+localStorage.getItem('A.2compliance8');
					}
					document.getElementById('scoreA.2-9').innerHTML = storedScore[16];
					if((storedScore[16]==1 || storedScore[16]==3) && localStorage.getItem('A.2compliance9')!=""){
						document.getElementById('A.2compliance9').innerHTML = "-"+localStorage.getItem('A.2compliance9');
					}
					document.getElementById('scoreA.2-10').innerHTML = storedScore[18];
					if((storedScore[18]==1 || storedScore[18]==3) && localStorage.getItem('A.2compliance10')!=""){
						document.getElementById('A.2compliance10').innerHTML = "-"+localStorage.getItem('A.2compliance10');
					}
					document.getElementById('A.2score').innerHTML = localStorage.getItem('A.2score');
					document.getElementById('A.2notes').innerHTML = localStorage.getItem('A.2notes');
					//document.getElementById('weatherCom').innerHTML = storedScore1[0];
				}
			}
			if(storedCheckedForms[2]==1){
				if(localStorage.getItem('l3')!=null){
					var showDiv=document.getElementById('A.3');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l3');
					console.log(storedScore);
					console.log("score A.3-1" + storedScore[0]);
					document.getElementById('scoreA.3-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.3compliance1')!=""){ //&& localStorage.getItem('A.3compliance1')!=""){
						document.getElementById('A.3compliance1').innerHTML = "-"+localStorage.getItem('A.3compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.3-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.3compliance2')!=""){
						document.getElementById('A.3compliance2').innerHTML = "-"+localStorage.getItem('A.3compliance2');
					}
					document.getElementById('scoreA.3-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.3compliance3')!=""){
						document.getElementById('A.3compliance3').innerHTML = "-"+localStorage.getItem('A.3compliance3');
					}
					document.getElementById('scoreA.3-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.3compliance4')!=""){
						document.getElementById('A.3compliance4').innerHTML = "-"+localStorage.getItem('A.3compliance4');
					}
					document.getElementById('scoreA.3-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.3compliance5')!=""){
						document.getElementById('A.3compliance5').innerHTML = "-"+localStorage.getItem('A.3compliance5');
					}
					document.getElementById('scoreA.3-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.3compliance6')!=""){
						document.getElementById('A.3compliance6').innerHTML = "-"+localStorage.getItem('A.3compliance6');
					}
					document.getElementById('scoreA.3-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('A.3compliance7')!=""){
						document.getElementById('A.3compliance7').innerHTML = "-"+localStorage.getItem('A.3compliance7');
					}
					document.getElementById('scoreA.3-8').innerHTML = storedScore[14];
					if((storedScore[14]==1 || storedScore[14]==3) && localStorage.getItem('A.3compliance8')!=""){
						document.getElementById('A.3compliance8').innerHTML = "-"+localStorage.getItem('A.3compliance8');
					}
					document.getElementById('scoreA.3-9').innerHTML = storedScore[16];
					if((storedScore[16]==1 || storedScore[16]==3) && localStorage.getItem('A.3compliance9')!=""){
						document.getElementById('A.3compliance9').innerHTML = "-"+localStorage.getItem('A.3compliance9');
					}
					document.getElementById('scoreA.3-10').innerHTML = storedScore[18];
					if((storedScore[18]==1 || storedScore[18]==3) && localStorage.getItem('A.3compliance10')!=""){
						document.getElementById('A.3compliance10').innerHTML = "-"+localStorage.getItem('A.3compliance10');
					}
					document.getElementById('A.3score').innerHTML = localStorage.getItem('A.3score');
					document.getElementById('A.3notes').innerHTML = localStorage.getItem('A.3notes');
					//document.getElementById('weatherCom').innerHTML = storedScore1[0];
				}
			}
			if(storedCheckedForms[3]==1){
				if(localStorage.getItem('l4')!=null){
					var showDiv=document.getElementById('A.4');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l4');
					console.log(storedScore);
					console.log("score A.4-1" + storedScore[0]);
					document.getElementById('scoreA.4-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.4compliance1')!=""){ //&& localStorage.getItem('A.4compliance1')!=""){
						document.getElementById('A.4compliance1').innerHTML = "-"+localStorage.getItem('A.4compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.4-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.4compliance2')!=""){
						document.getElementById('A.4compliance2').innerHTML = "-"+localStorage.getItem('A.4compliance2');
					}
					document.getElementById('scoreA.4-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.4compliance3')!=""){
						document.getElementById('A.4compliance3').innerHTML = "-"+localStorage.getItem('A.4compliance3');
					}
					document.getElementById('scoreA.4-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.4compliance4')!=""){
						document.getElementById('A.4compliance4').innerHTML = "-"+localStorage.getItem('A.4compliance4');
					}
					document.getElementById('scoreA.4-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.4compliance5')!=""){
						document.getElementById('A.4compliance5').innerHTML = "-"+localStorage.getItem('A.4compliance5');
					}
					document.getElementById('scoreA.4-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.4compliance6')!=""){
						document.getElementById('A.4compliance6').innerHTML = "-"+localStorage.getItem('A.4compliance6');
					}
					document.getElementById('scoreA.4-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('A.4compliance7')!=""){
						document.getElementById('A.4compliance7').innerHTML = "-"+localStorage.getItem('A.4compliance7');
					}
					document.getElementById('scoreA.4-8').innerHTML = storedScore[14];
					if((storedScore[14]==1 || storedScore[14]==3) && localStorage.getItem('A.4compliance8')!=""){
						document.getElementById('A.4compliance8').innerHTML = "-"+localStorage.getItem('A.4compliance8');
					}
					document.getElementById('scoreA.4-9').innerHTML = storedScore[16];
					if((storedScore[16]==1 || storedScore[16]==3) && localStorage.getItem('A.4compliance9')!=""){
						document.getElementById('A.4compliance9').innerHTML = "-"+localStorage.getItem('A.4compliance9');
					}
					document.getElementById('A.4score').innerHTML = localStorage.getItem('A.4score');
					document.getElementById('A.4notes').innerHTML = localStorage.getItem('A.4notes');
				}
			}
			if(storedCheckedForms[4]==1){
				if(localStorage.getItem('l5')!=null){
					var showDiv=document.getElementById('A.5');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l5');
					console.log(storedScore);
					console.log("score A.5-1" + storedScore[0]);
					document.getElementById('scoreA.5-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.5compliance1')!=""){ //&& localStorage.getItem('A.5compliance1')!=""){
						document.getElementById('A.5compliance1').innerHTML = "-"+localStorage.getItem('A.5compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.5-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.5compliance2')!=""){
						document.getElementById('A.5compliance2').innerHTML = "-"+localStorage.getItem('A.5compliance2');
					}
					document.getElementById('scoreA.5-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.5compliance3')!=""){
						document.getElementById('A.5compliance3').innerHTML = "-"+localStorage.getItem('A.5compliance3');
					}
					document.getElementById('scoreA.5-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.5compliance4')!=""){
						document.getElementById('A.5compliance4').innerHTML = "-"+localStorage.getItem('A.5compliance4');
					}
					document.getElementById('scoreA.5-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.5compliance5')!=""){
						document.getElementById('A.5compliance5').innerHTML = "-"+localStorage.getItem('A.5compliance5');
					}
					document.getElementById('scoreA.5-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.5compliance6')!=""){
						document.getElementById('A.5compliance6').innerHTML = "-"+localStorage.getItem('A.5compliance6');
					}
					document.getElementById('scoreA.5-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('A.5compliance7')!=""){
						document.getElementById('A.5compliance7').innerHTML = "-"+localStorage.getItem('A.5compliance7');
					}
					document.getElementById('scoreA.5-8').innerHTML = storedScore[14];
					if((storedScore[14]==1 || storedScore[14]==3) && localStorage.getItem('A.5compliance8')!=""){
						document.getElementById('A.5compliance8').innerHTML = "-"+localStorage.getItem('A.5compliance8');
					}
					document.getElementById('scoreA.5-9').innerHTML = storedScore[16];
					if((storedScore[16]==1 || storedScore[16]==3) && localStorage.getItem('A.5compliance9')!=""){
						document.getElementById('A.5compliance9').innerHTML = "-"+localStorage.getItem('A.5compliance9');
					}
					document.getElementById('A.5score').innerHTML = localStorage.getItem('A.5score');
					document.getElementById('A.5notes').innerHTML = localStorage.getItem('A.5notes');
				}
			}
			if(storedCheckedForms[5]==1){
				if(localStorage.getItem('l6')!=null){
					var showDiv=document.getElementById('A.6');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l6');
					console.log(storedScore);
					console.log("score A.6-1" + storedScore[0]);
					document.getElementById('scoreA.6-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.6compliance1')!=""){ //&& localStorage.getItem('A.6compliance1')!=""){
						document.getElementById('A.6compliance1').innerHTML = "-"+localStorage.getItem('A.6compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.6-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.6compliance2')!=""){
						document.getElementById('A.6compliance2').innerHTML = "-"+localStorage.getItem('A.6compliance2');
					}
					document.getElementById('scoreA.6-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.6compliance3')!=""){
						document.getElementById('A.6compliance3').innerHTML = "-"+localStorage.getItem('A.6compliance3');
					}
					document.getElementById('scoreA.6-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.6compliance4')!=""){
						document.getElementById('A.6compliance4').innerHTML = "-"+localStorage.getItem('A.6compliance4');
					}
					document.getElementById('scoreA.6-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.6compliance5')!=""){
						document.getElementById('A.6compliance5').innerHTML = "-"+localStorage.getItem('A.6compliance5');
					}
					document.getElementById('scoreA.6-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.6compliance6')!=""){
						document.getElementById('A.6compliance6').innerHTML = "-"+localStorage.getItem('A.6compliance6');
					}
					document.getElementById('A.6score').innerHTML = localStorage.getItem('A.6score');
					document.getElementById('A.6notes').innerHTML = localStorage.getItem('A.6notes');
				}
			}
			if(storedCheckedForms[6]==1){
				if(localStorage.getItem('l7')!=null){
					var showDiv=document.getElementById('A.7');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l7');
					console.log(storedScore);
					console.log("score A.7-1" + storedScore[0]);
					document.getElementById('scoreA.7-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.7compliance1')!=""){ //&& localStorage.getItem('A.7compliance1')!=""){
						document.getElementById('A.7compliance1').innerHTML = "-"+localStorage.getItem('A.7compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.7-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.7compliance2')!=""){
						document.getElementById('A.7compliance2').innerHTML = "-"+localStorage.getItem('A.7compliance2');
					}
					document.getElementById('scoreA.7-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.7compliance3')!=""){
						document.getElementById('A.7compliance3').innerHTML = "-"+localStorage.getItem('A.7compliance3');
					}
					document.getElementById('scoreA.7-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.7compliance4')!=""){
						document.getElementById('A.7compliance4').innerHTML = "-"+localStorage.getItem('A.7compliance4');
					}
					document.getElementById('scoreA.7-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.7compliance5')!=""){
						document.getElementById('A.7compliance5').innerHTML = "-"+localStorage.getItem('A.7compliance5');
					}
					document.getElementById('scoreA.7-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('A.7compliance6')!=""){
						document.getElementById('A.7compliance6').innerHTML = "-"+localStorage.getItem('A.7compliance6');
					}
					document.getElementById('scoreA.7-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('A.7compliance7')!=""){
						document.getElementById('A.7compliance7').innerHTML = "-"+localStorage.getItem('A.7compliance7');
					}
					document.getElementById('A.7score').innerHTML = localStorage.getItem('A.7score');
					document.getElementById('A.7notes').innerHTML = localStorage.getItem('A.7notes');
				}
			}
			if(storedCheckedForms[7]==1){
				if(localStorage.getItem('l8')!=null){
					var showDiv=document.getElementById('A.8');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l8');
					console.log(storedScore);
					console.log("score A.8-1" + storedScore[0]);
					document.getElementById('scoreA.8-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('A.8compliance1')!=""){ //&& localStorage.getItem('A.8compliance1')!=""){
						document.getElementById('A.8compliance1').innerHTML = "-"+localStorage.getItem('A.8compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreA.8-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('A.8compliance2')!=""){
						document.getElementById('A.8compliance2').innerHTML = "-"+localStorage.getItem('A.8compliance2');
					}
					document.getElementById('scoreA.8-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('A.8compliance3')!=""){
						document.getElementById('A.8compliance3').innerHTML = "-"+localStorage.getItem('A.8compliance3');
					}
					document.getElementById('scoreA.8-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('A.8compliance4')!=""){
						document.getElementById('A.8compliance4').innerHTML = "-"+localStorage.getItem('A.8compliance4');
					}
					document.getElementById('scoreA.8-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('A.8compliance5')!=""){
						document.getElementById('A.8compliance5').innerHTML = "-"+localStorage.getItem('A.8compliance5');
					}
					document.getElementById('A.8score').innerHTML = localStorage.getItem('A.8score');
					document.getElementById('A.8notes').innerHTML = localStorage.getItem('A.8notes');
				}
			}
			if(storedCheckedForms[8]==1){
				if(localStorage.getItem('l9')!=null){
					var showDiv=document.getElementById('B.1');
					showDiv.style.visibility="visible";
					showDiv.style.display="inline";
					var storedScore=localStorage.getItem('l9');
					console.log(storedScore);
					console.log("score B.1-1" + storedScore[0]);
					document.getElementById('scoreB.1-1').innerHTML = storedScore[0];
					/*
					console.log("A.2compliance1"+ localStorage.getItem('A.2compliance1')+"compliance");
					if(localStorage.getItem('A.2compliance1')==""){
						console.log("equals");
					}
					*/
					if((storedScore[0]==1 || storedScore[0]==3) && localStorage.getItem('B.1compliance1')!=""){ //&& localStorage.getItem('B.1compliance1')!=""){
						document.getElementById('B.1compliance1').innerHTML = "-"+localStorage.getItem('B.1compliance1');
						console.log("gets to compliance");
					}
					document.getElementById('scoreB.1-2').innerHTML = storedScore[2];
					if((storedScore[2]==1 || storedScore[2]==3) && localStorage.getItem('B.1compliance2')!=""){
						document.getElementById('B.1compliance2').innerHTML = "-"+localStorage.getItem('B.1compliance2');
					}
					document.getElementById('scoreB.1-3').innerHTML = storedScore[4];
					if((storedScore[4]==1 || storedScore[4]==3) && localStorage.getItem('B.1compliance3')!=""){
						document.getElementById('B.1compliance3').innerHTML = "-"+localStorage.getItem('B.1compliance3');
					}
					document.getElementById('scoreB.1-4').innerHTML = storedScore[6];
					if((storedScore[6]==1 || storedScore[6]==3) && localStorage.getItem('B.1compliance4')!=""){
						document.getElementById('B.1compliance4').innerHTML = "-"+localStorage.getItem('B.1compliance4');
					}
					document.getElementById('scoreB.1-5').innerHTML = storedScore[8];
					if((storedScore[8]==1 || storedScore[8]==3) && localStorage.getItem('B.1compliance5')!=""){
						document.getElementById('B.1compliance5').innerHTML = "-"+localStorage.getItem('B.1compliance5');
					}
					console.log(storedScore[10]);
					document.getElementById('scoreB.1-6').innerHTML = storedScore[10];
					if((storedScore[10]==1 || storedScore[10]==3) && localStorage.getItem('B.1compliance6')!=""){
						document.getElementById('B.1compliance6').innerHTML = "-"+localStorage.getItem('B.1compliance6');
					}
					document.getElementById('scoreB.1-7').innerHTML = storedScore[12];
					if((storedScore[12]==1 || storedScore[12]==3) && localStorage.getItem('B.1compliance7')!=""){
						document.getElementById('B.1compliance7').innerHTML = "-"+localStorage.getItem('B.1compliance7');
					}
					document.getElementById('scoreB.1-8').innerHTML = storedScore[14];
					if((storedScore[14]==1 || storedScore[14]==3) && localStorage.getItem('B.1compliance8')!=""){
						document.getElementById('B.1compliance8').innerHTML = "-"+localStorage.getItem('B.1compliance8');
					}
					document.getElementById('scoreB.1-9').innerHTML = storedScore[16];
					if((storedScore[16]==1 || storedScore[16]==3) && localStorage.getItem('B.1compliance9')!=""){
						document.getElementById('B.1compliance9').innerHTML = "-"+localStorage.getItem('B.1compliance9');
					}
					document.getElementById('scoreB.1-10').innerHTML = storedScore[18];
					if((storedScore[18]==1 || storedScore[18]==3) && localStorage.getItem('B.1compliance10')!=""){
						document.getElementById('B.1compliance10').innerHTML = "-"+localStorage.getItem('B.1compliance10');
					}
					document.getElementById('B.1score').innerHTML = localStorage.getItem('B.1score');
					document.getElementById('B.1notes').innerHTML = localStorage.getItem('B.1notes');
					//document.getElementById('weatherCom').innerHTML = storedScore1[0];
				}
			}
		}
	}
}
function checkPageSize(doc){
	console.log("doc"+doc);
	var pageHeight= doc.internal.pageSize.height;
	// Before adding new content
	var y = 500 // Height position of new content
	if (y >= pageHeight)
	{
	  doc.addPage();
	  y = 0 // Restart height position
	}
}
function generatePDF(){
		console.log('gets');
		//compileStoredVariables();
		var doc = new jsPDF();
		console.log(doc.internal.pageSize.height);
		compileStoredVariables(doc);
		/*
		if(localStorage.getItem('storedCheckedForms')!=null){
			checkedForms = JSON.parse(localStorage["storedCheckedForms"]);  
			console.log("checkedForms"+checkedForms);
		}
		*/
		console.log("here");       
		var elementHandler = {
			/*
			'#statusBar': function (element, renderer) {
				return true;
			}
			*/
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
			},
			'#A.2': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.2').style.visibility=="visible"){
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
			},
			'#A.3': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.3').style.visibility=="visible"){
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
			},
			'#A.4': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.4').style.visibility=="visible"){
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
			},
			'#A.5': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.5').style.visibility=="visible"){
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
			},
			'#A.6': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.6').style.visibility=="visible"){
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
			},
			'#A.7': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.7').style.visibility=="visible"){
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
			},
			'#A.8': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('A.8').style.visibility=="visible"){
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
			},
			'#B.1': function (element, renderer) {
		  		//return false;
		  		if(document.getElementById('B.1').style.visibility=="visible"){
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
		var options = {
	         pagesplit: true
	    };
		doc.fromHTML(
		    source,
		    15,
		    15,
		    {
		      'width': 180,'pagesplit': true,'elementHandlers': elementHandler
		    });
		console.log('1');
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
		console.log(doc.internal.pageSize.height);
		var pdfOutput = doc.output();
		console.log( pdfOutput );
		//doc.addHTML($(".testDiv"), options, function()
		//{
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
	    console.log(fileSystem.name);
	   console.log(fileSystem.root.name);
	   console.log(fileSystem.root.fullPath);
	   fileSystem.root.getFile("completedForm.pdf", {create: true}, function(entry) {
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
	//}
	}
	function viewDocument()
	{
		var pdfPath = localStorage.getItem('pdfURL');
		window.open(pdfPath, '_blank', 'location=no,closebuttoncaption=Close,enableViewportScale=yes');
	}
	//window.onload=generatePDF; 