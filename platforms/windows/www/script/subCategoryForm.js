		var score= 0;
		var i;
		var index=0;
		var scoreTrack = new Array(5+1).join('0').split('').map(parseFloat);
		var checkedForms= new Array(19+1).join('0').split('').map(parseFloat);
		/*
		function initializeCheckedForms(){
				alert('hi');
				checkedForms = new Array(19+1).join('0').split('').map(parseFloat);
		}
		*/
		//opens the text area if non/partially compiant
		//specifies an index to put the score for that question 
	    function openTextArea(id, questionNumber, divNum, page){
	        var input = document.getElementById(id);
	        var showDiv = document.getElementById(divNum);
	        if(questionNumber=="questionOne"){
	        	index = 0;
	        }
	        else if(questionNumber=="questionTwo"){
	        	index = 1;
	        }
	        else if(questionNumber=="questionThree"){
	        	index = 2;
	        }
	        else if(questionNumber=="questionFour"){
	        	index = 3;
	        }
	        else{
	        	index = 4;
	        }
	        var isChecked = input.checked;
	        isChecked = (isChecked)? true : false;
	        if(isChecked==true && (input.value=="nonCompliant"|| input.value=="partiallyCompliant")){
	        	showDiv.style.visibility="visible";
	        	showDiv.style.display="inline";
	        }
	        else{
	        	showDiv.style.visibility="hidden";
	        	showDiv.style.display="none";
	        }
	        if(input.value=="nonCompliant"){
	        	score=1;
	        	scoreTracker(index, page);
	        }
	        else if(input.value=="partiallyCompliant"){
	        	score=3;
	        	scoreTracker(index, page);
	        }
	        else if(input.value=="fullyCompliant"){
	        	score=5;
	        	scoreTracker(index, page);
	        }
	        else{
	        	score=0;
	        	scoreTracker(index, page);
	        }
	    }
	    //adds up the scores for each question and displays the final score
	    function zeroOutScore(){
	    	for(i=0; i<scoreTrack.length; i++){
	    		scoreTrack[i]=0;
	    	}
	    }
	    function scoreTracker(index, page){
	    	scoreTrack[index]= score;
	    	var finalScore=0;
	    	for(i=0; i<5; i++){
	    		finalScore+=scoreTrack[i];
	    	}
	    	score = finalScore;
	    	if(page=="A.1"){
				document.getElementById("A.1score").innerHTML=score;
	    	}
	    	else if(page=="A.2"){
	    		document.getElementById("A.2score").innerHTML=score;
	    	}
	    	else{
	    		document.getElementById("A.3score").innerHTML=score;
	    	}
	    }
	  	function goBack() {
    		window.location.href="pageOne.html";
		}
		function isChecked(id){
			var input = document.getElementById(id);
			var isChecked = input.checked;
			isChecked = (isChecked)? true : false;
			if(id=="jobsite"){
				if(isChecked==true){
					checkedForms[0]=1;
				}
				else{
					checkedForms[0]=0;
				}
			}
			else if(id=="facility"){
				if(isChecked==true){
					checkedForms[1]=1;
				}
				else{
					checkedForms[1]=0;
				}
			}
			else if(id=="ppe"){
				if(isChecked==true){
					checkedForms[2]=1;
				}
				else{
					checkedForms[2]=0;
				}
			}
			else if(id=="housekeeping"){
				if(isChecked==true){
					checkedForms[3]=1;
				}
				else{
					checkedForms[3]=0;
				}
			}
			else if(id=="fireProtection"){
				if(isChecked==true){
					checkedForms[4]=1;
				}
				else{
					checkedForms[4]=0;
				}
			}
			else if(id=="traffic"){
				if(isChecked==true){
					checkedForms[5]=1;
				}
				else{
					checkedForms[5]=0;
				}
			}
			else if(id=="hasardSubs"){
				if(isChecked==true){
					checkedForms[6]=1;
				}
				else{
					checkedForms[6]=0;
				}
			}
			else if(id=="licensing"){
				if(isChecked==true){
					checkedForms[7]=1;
				}
				else{
					checkedForms[7]=0;
				}
			}
			else if(id=="generalFall"){
				if(isChecked==true){
					checkedForms[8]=1;
				}
				else{
					checkedForms[8]=0;
				}
			}
			else if(id=="scaffold"){
				if(isChecked==true){
					checkedForms[9]=1;
				}
				else{
					checkedForms[9]=0;
				}
			}
			else if(id=="ladder"){
				if(isChecked==true){
					checkedForms[10]=1;
				}
				else{
					checkedForms[10]=0;
				}
			}
			else if(id=="tool"){
				if(isChecked==true){
					checkedForms[11]=1;
				}
				else{
					checkedForms[11]=0;
				}
			}
			else if(id=="electric"){
				if(isChecked==true){
					checkedForms[12]=1;
				}
				else{
					checkedForms[12]=0;
				}
			}
			else if(id=="crane"){
				if(isChecked==true){
					checkedForms[13]=1;
				}
				else{
					checkedForms[13]=0;
				}
			}
			else if(id=="heavyEq"){
				if(isChecked==true){
					checkedForms[14]=1;
				}
				else{
					checkedForms[14]=0;
				}
			}
			else if(id=="trench"){
				if(isChecked==true){
					checkedForms[15]=1;
				}
				else{
					checkedForms[15]=0;
				}
			}
			else if(id=="demo"){
				if(isChecked==true){
					checkedForms[16]=1;
				}
				else{
					checkedForms[16]=0;
				}
			}
			else if(id=="sErection"){
				if(isChecked==true){
					checkedForms[17]=1;
				}
				else{
					checkedForms[17]=0;
				}
			}
			else if(id=="conc"){
				if(isChecked==true){
					checkedForms[18]=1;
				}
				else{
					checkedForms[18]=0;
				}
			}
			else{
				if(isChecked==true){
					checkedForms[19]=1;
				}
				else{
					checkedForms[19]=0;
				}
			}
		}
		function processFormOrder(page, bound, btnID){
			var checked;
			if(page=="pageTwo"){
				var y = 0;
				localStorage["checkedForms"] = JSON.stringify(checkedForms);
				var count = localStorage.setItem("y", y);
			}
			var checked= JSON.parse(localStorage["checkedForms"]);
			var x = localStorage.getItem("y");
			var hidebutton = document.getElementById(btnID);
			if(page=="lastPage"){
				if(x!=0){
					x--;
					while(x>0 && checked[x]!=1){
						x--;
					}
				}
			}
			else{
				if(page!="pageTwo"){
					x++;
				}
				while(x<checked.length && checked[x]!=1){
					x++;
				}				
			}
			if(x==0 && page=="lastPage"){
				if(checked[x]==1){
					if(bound==1){
						window.location.href="pageTwo.html";
					}
					else{
						window.location.href="subCategoryForm.html";
					}
				}
				else{
					window.location.href="pageTwo.html";
				}
			}
			else{
				if(checked[x]==1){
					if(x==0){
						window.location.href="subCategoryForm.html";
					}
					else if(x==1){
						zeroOutScore();
						window.location.href="A.2.html";
					}
					else if(x==2){
						zeroOutScore();
						window.location.href="A.3.html";
					}
					else if(x==3){
						zeroOutScore();
						window.location.href="A.4.html";
					}
					else if(x==4){
						zeroOutScore();
						window.location.href="A.5.html";
					}
					else if(x==5){
						zeroOutScore();
						window.location.href="A.6.html";
					}
					else if(x==6){
						zeroOutScore();
						window.location.href="A.7.html";
					}
					else if(x==7){
						zeroOutScore();
						window.location.href="A.8.html";
					}
				}
				var y = localStorage.setItem("y", x);
			}
		}
		function A_1OnLoad(){
			var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
			if(!bSupportsLocal){
				document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
				return;
			}
			if(window.localStorage.length != 0){
					document.getElementById('A.1notes').value = window.localStorage.getItem('A.1notes');
					document.getElementById('A.1score').innerHTML = window.localStorage.getItem('A.1score');
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.1compliance1').value = window.localStorage.getItem('A.1compliance1');
								var showDiv=document.getElementById('firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.1compliance2').value = window.localStorage.getItem('A.1compliance2');
								var showDiv=document.getElementById('secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.1compliance3').value = window.localStorage.getItem('A.1compliance3');
								var showDiv=document.getElementById('thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.1compliance4').value = window.localStorage.getItem('A.1compliance4');
								var showDiv=document.getElementById('fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
			}
		}
		function localStorageSubCatForms(){
				alert('hey');
				var score1 = document.getElementById('A.1score').innerHTML;
				alert(score1);
				var endNotes1 = document.getElementById('A.1notes').value;
				var A_1firstCompliance = document.getElementById('A.1compliance1').value;
				var A_1secondCompliance = document.getElementById('A.1compliance2').value;
				var A_1thirdCompliance = document.getElementById('A.1compliance3').value;
				var A_1fourthCompliance = document.getElementById('A.1compliance4').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.1notes', endNotes1);
				window.localStorage.setItem('A.1score', score1);
				window.localStorage.setItem('A.1compliance1', A_1firstCompliance);
				window.localStorage.setItem('A.1compliance2', A_1secondCompliance);
				window.localStorage.setItem('A.1compliance3', A_1thirdCompliance);
				window.localStorage.setItem('A.1compliance4', A_1fourthCompliance);
		} 

	window.onload=A_1OnLoad();
