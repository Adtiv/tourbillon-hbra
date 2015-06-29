		var score= 0;
		var i;
		var index=0;
		var scoreTrack = new Array(12+1).join('0').split('').map(parseFloat);
		var allScoresArray = new Array(18);
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
	       	else if(questionNumber=="questionFive"){
	        	index = 4;
	        }
	        else if(questionNumber=="questionSix"){
	        	index = 5;
	        }
	        else if(questionNumber=="questionSeven"){
	        	index = 6;
	        }
	        else if(questionNumber=="questionEight"){
	        	index = 7;
	        }
	        else if(questionNumber=="questionNine"){
	        	index = 8;
	        }
	        else if(questionNumber=="questionTen"){
	        	index = 9;
	        }
	        else if(questionNumber=="questionEleven"){
	        	index = 10;
	        }
	        else{
	        	index = 11;
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
	    function zeroOutScore(){
	    	for(i=0; i<scoreTrack.length; i++){
	    		scoreTrack[i]=0;
	    	}
	    }
	    //adds up the scores for each question and displays the final score
	    var l;
	    var l2;
	    var l3;
	    var l4;
	    var l5;
	    var l6;
	    var l7;
	    var l8;
	    var l9;
	    var l10;
	    var l11;
	    var l12;
	    var getScore1;
	    var getScore2;
	    var getScore3;
	    var getScore4;
	    var getScore5;
	    var getScore6;
	    var getScore7;
	    var getScore8;
	    var getScore9;
	    var getScore10;
	    var getScore11;
	    var getScore12;
	    var storeScore1 = new Array(12);
	    var storeScore2 = new Array(10);
	    var storeScore3 = new Array(10);
	    var storeScore4 = new Array(9);
	    var storeScore5 = new Array(9);
	    var storeScore6 = new Array(6);  
	    var storeScore7 = new Array(7);
	    var storeScore8 = new Array(5); 
	    var storeScore9 = new Array(10);
	    var storeScore10 = new Array(10);
	    var storeScore11 = new Array(9);  
	    var storeScore11 = new Array(12);     
	    function scoreTracker(index, page){
	    	getScore1 = localStorage.getItem('l');
		    getScore2 = localStorage.getItem('l2');
		    getScore3 = localStorage.getItem('l3');
		    getScore4 = localStorage.getItem('l4');
		    getScore5 = localStorage.getItem('l5');
		    getScore6 = localStorage.getItem('l6');
		    getScore7 = localStorage.getItem('l7');
		    getScore8 = localStorage.getItem('l8');
		    getScore9 = localStorage.getItem('l9');
		    getScore10 = localStorage.getItem('l10');
		    getScore11 = localStorage.getItem('l11');
		    getScore12 = localStorage.getItem('l12');
	    	var finalScore=0;
	    	console.log('getScore1' + getScore1);
	    	console.log('getScore2' + getScore2);
	    	console.log('getScore3' + getScore3);
	    	console.log('getScore4' + getScore4);
	    	console.log('getScore5' + getScore5);
	    	console.log('getScore6' + getScore6);
	    	console.log('getScore7' + getScore7);
	    	console.log('getScore8' + getScore8);
	    	console.log('getScore9' + getScore9);
	    	console.log('getScore10' + getScore10);
	    	console.log('getScore11' + getScore11);
	    	console.log('getScore12' + getScore12);
	    	if(page=="A.1"){
	    		if(getScore1==null){
		    		scoreTrack[index]= score;
			    	allScoresArray[0]=scoreTrack;
			    	for(i=0; i<12; i++){
			    		finalScore+=allScoresArray[0][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.1score").innerHTML=score;
				}
				else{
					allScoresArray[0]=getScore1;
					for(i=0; i<24; i=i+2){
						if(allScoresArray[0][i]=="0"){
							storeScore1[i/2]=0;
						}
						else if(allScoresArray[0][i]=="1"){
							storeScore1[i/2]=1;
						}
						else if(allScoresArray[0][i]=="3"){
							storeScore1[i/2]=3;
						}
						else if(allScoresArray[0][i]=="5"){
							storeScore1[i/2]=5;
						}
					}
		    		storeScore1[index]= score;
			    	for(i=0; i<12; i++){
			    		finalScore+=storeScore1[i];
			    	}
			    	score = finalScore;
			    	l =window.localStorage.setItem('l', storeScore1);
		    		document.getElementById("A.1score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.2"){
	    		if(getScore2==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[1]=scoreTrack;
			    	for(i=0; i<10; i++){
			    		finalScore+=allScoresArray[1][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.2score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[1]=getScore2;
					for(i=0; i<20; i=i+2){
						if(allScoresArray[1][i]=="0"){
							storeScore2[i/2]=0;
						}
						else if(allScoresArray[1][i]=="1"){
							storeScore2[i/2]=1;
						}
						else if(allScoresArray[1][i]=="3"){
							storeScore2[i/2]=3;
						}
						else if(allScoresArray[1][i]=="5"){
							storeScore2[i/2]=5;
						}
					}
		    		storeScore2[index]= score;
			    	for(i=0; i<10; i++){
			    		finalScore+=storeScore2[i];
			    	}
			    	score = finalScore;
			    	l2 =window.localStorage.setItem('l2', storeScore2);
		    		document.getElementById("A.2score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.3"){
				if(getScore3==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[2]=scoreTrack;
			    	for(i=0; i<10; i++){
			    		finalScore+=allScoresArray[2][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.3score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[2]=getScore3;
					for(i=0; i<20; i=i+2){
						if(allScoresArray[2][i]=="0"){
							storeScore3[i/2]=0;
						}
						else if(allScoresArray[2][i]=="1"){
							storeScore3[i/2]=1;
						}
						else if(allScoresArray[2][i]=="3"){
							storeScore3[i/2]=3;
						}
						else if(allScoresArray[2][i]=="5"){
							storeScore3[i/2]=5;
						}
					}
		    		storeScore3[index]= score;
			    	for(i=0; i<10; i++){
			    		finalScore+=storeScore3[i];
			    	}
			    	score = finalScore;
			    	l3 =window.localStorage.setItem('l3', storeScore3);
		    		document.getElementById("A.3score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.4"){
				if(getScore4==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[3]=scoreTrack;
			    	for(i=0; i<9; i++){
			    		finalScore+=allScoresArray[3][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.4score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[3]=getScore4;
					for(i=0; i<18; i=i+2){
						if(allScoresArray[3][i]=="0"){
							storeScore4[i/2]=0;
						}
						else if(allScoresArray[3][i]=="1"){
							storeScore4[i/2]=1;
						}
						else if(allScoresArray[3][i]=="3"){
							storeScore4[i/2]=3;
						}
						else if(allScoresArray[3][i]=="5"){
							storeScore4[i/2]=5;
						}
					}
		    		storeScore4[index]= score;
			    	for(i=0; i<9; i++){
			    		finalScore+=storeScore4[i];
			    	}
			    	score = finalScore;
			    	l4 =window.localStorage.setItem('l4', storeScore4);
		    		document.getElementById("A.4score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.5"){
				if(getScore5==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[4]=scoreTrack;
			    	for(i=0; i<9; i++){
			    		finalScore+=allScoresArray[4][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.5score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[4]=getScore5;
					for(i=0; i<18; i=i+2){
						if(allScoresArray[4][i]=="0"){
							storeScore5[i/2]=0;
						}
						else if(allScoresArray[4][i]=="1"){
							storeScore5[i/2]=1;
						}
						else if(allScoresArray[4][i]=="3"){
							storeScore5[i/2]=3;
						}
						else if(allScoresArray[4][i]=="5"){
							storeScore5[i/2]=5;
						}
					}
		    		storeScore5[index]= score;
			    	for(i=0; i<9; i++){
			    		finalScore+=storeScore5[i];
			    	}
			    	score = finalScore;
			    	l5 =window.localStorage.setItem('l5', storeScore5);
		    		document.getElementById("A.5score").innerHTML=score;
				}
	    	}
	        else if(page=="A.6"){
				if(getScore6==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[5]=scoreTrack;
			    	for(i=0; i<6; i++){
			    		finalScore+=allScoresArray[5][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.6score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[5]=getScore6;
					for(i=0; i<12; i=i+2){
						if(allScoresArray[5][i]=="0"){
							storeScore6[i/2]=0;
						}
						else if(allScoresArray[5][i]=="1"){
							storeScore6[i/2]=1;
						}
						else if(allScoresArray[5][i]=="3"){
							storeScore6[i/2]=3;
						}
						else if(allScoresArray[5][i]=="5"){
							storeScore6[i/2]=5;
						}
					}
		    		storeScore6[index]= score;
			    	for(i=0; i<6; i++){
			    		finalScore+=storeScore6[i];
			    	}
			    	score = finalScore;
			    	l6 =window.localStorage.setItem('l6', storeScore6);
		    		document.getElementById("A.6score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.7"){
				if(getScore7==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[6]=scoreTrack;
			    	for(i=0; i<7; i++){
			    		finalScore+=allScoresArray[6][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.7score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[6]=getScore7;
					for(i=0; i<14; i=i+2){
						if(allScoresArray[6][i]=="0"){
							storeScore7[i/2]=0;
						}
						else if(allScoresArray[6][i]=="1"){
							storeScore7[i/2]=1;
						}
						else if(allScoresArray[6][i]=="3"){
							storeScore7[i/2]=3;
						}
						else if(allScoresArray[6][i]=="5"){
							storeScore7[i/2]=5;
						}
					}
		    		storeScore7[index]= score;
			    	for(i=0; i<7; i++){
			    		finalScore+=storeScore7[i];
			    	}
			    	score = finalScore;
			    	l7 =window.localStorage.setItem('l7', storeScore7);
		    		document.getElementById("A.7score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.8"){
				if(getScore8==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[7]=scoreTrack;
			    	for(i=0; i<5; i++){
			    		finalScore+=allScoresArray[7][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.8score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[7]=getScore8;
					for(i=0; i<10; i=i+2){
						if(allScoresArray[7][i]=="0"){
							storeScore8[i/2]=0;
						}
						else if(allScoresArray[7][i]=="1"){
							storeScore8[i/2]=1;
						}
						else if(allScoresArray[7][i]=="3"){
							storeScore8[i/2]=3;
						}
						else if(allScoresArray[7][i]=="5"){
							storeScore8[i/2]=5;
						}
					}
		    		storeScore8[index]= score;
			    	for(i=0; i<5; i++){
			    		finalScore+=storeScore8[i];
			    	}
			    	score = finalScore;
			    	l8 =window.localStorage.setItem('l8', storeScore8);
		    		document.getElementById("A.8score").innerHTML=score;
				}
	    	}
	    	else if(page=="B.1"){
				if(getScore9==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[8]=scoreTrack;
			    	for(i=0; i<10; i++){
			    		finalScore+=allScoresArray[8][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("B.1score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[8]=getScore9;
					for(i=0; i<20; i=i+2){
						if(allScoresArray[8][i]=="0"){
							storeScore9[i/2]=0;
						}
						else if(allScoresArray[8][i]=="1"){
							storeScore9[i/2]=1;
						}
						else if(allScoresArray[8][i]=="3"){
							storeScore9[i/2]=3;
						}
						else if(allScoresArray[8][i]=="5"){
							storeScore9[i/2]=5;
						}
					}
		    		storeScore9[index]= score;
			    	for(i=0; i<10; i++){
			    		finalScore+=storeScore9[i];
			    	}
			    	score = finalScore;
			    	l9 =window.localStorage.setItem('l9', storeScore9);
		    		document.getElementById("B.1score").innerHTML=score;
				}
	    	}
	    	else if(page=="B.2"){
				if(getScore10==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[9]=scoreTrack;
			    	for(i=0; i<10; i++){
			    		finalScore+=allScoresArray[9][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("B.2score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[9]=getScore10;
					for(i=0; i<20; i=i+2){
						if(allScoresArray[9][i]=="0"){
							storeScore10[i/2]=0;
						}
						else if(allScoresArray[9][i]=="1"){
							storeScore10[i/2]=1;
						}
						else if(allScoresArray[9][i]=="3"){
							storeScore10[i/2]=3;
						}
						else if(allScoresArray[9][i]=="5"){
							storeScore10[i/2]=5;
						}
					}
		    		storeScore10[index]= score;
			    	for(i=0; i<10; i++){
			    		finalScore+=storeScore10[i];
			    	}
			    	score = finalScore;
			    	l10 =window.localStorage.setItem('l10', storeScore10);
		    		document.getElementById("B.2score").innerHTML=score;
				}
	    	}
	    	else if(page=="B.3"){
				if(getScore11==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[10]=scoreTrack;
			    	for(i=0; i<9; i++){
			    		finalScore+=allScoresArray[10][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("B.3score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[10]=getScore11;
					for(i=0; i<18; i=i+2){
						if(allScoresArray[10][i]=="0"){
							storeScore11[i/2]=0;
						}
						else if(allScoresArray[10][i]=="1"){
							storeScore11[i/2]=1;
						}
						else if(allScoresArray[10][i]=="3"){
							storeScore11[i/2]=3;
						}
						else if(allScoresArray[10][i]=="5"){
							storeScore11[i/2]=5;
						}
					}
		    		storeScore11[index]= score;
			    	for(i=0; i<9; i++){
			    		finalScore+=storeScore11[i];
			    	}
			    	score = finalScore;
			    	l11 =window.localStorage.setItem('l11', storeScore11);
		    		document.getElementById("B.3score").innerHTML=score;
				}
	    	}
	    	else if(page=="C.1"){
				if(getScore12==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[11]=scoreTrack;
			    	for(i=0; i<12; i++){
			    		finalScore+=allScoresArray[11][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("C.1score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[11]=getScore12;
					for(i=0; i<24; i=i+2){
						if(allScoresArray[11][i]=="0"){
							storeScore12[i/2]=0;
						}
						else if(allScoresArray[11][i]=="1"){
							storeScore12[i/2]=1;
						}
						else if(allScoresArray[11][i]=="3"){
							storeScore12[i/2]=3;
						}
						else if(allScoresArray[11][i]=="5"){
							storeScore12[i/2]=5;
						}
					}
		    		storeScore12[index]= score;
			    	for(i=0; i<12; i++){
			    		finalScore+=storeScore12[i];
			    	}
			    	score = finalScore;
			    	l12 =window.localStorage.setItem('l12', storeScore12);
		    		document.getElementById("C.1score").innerHTML=score;
				}
	    	}
	    }
	  	function goBack(){
	  		localStorageSubCatForms('checks');
    		window.location.href="pageOne.html";
		}
		//Creates an array with 1 as a checked form 0 unchecked
		function isChecked(id){
			var input = document.getElementById(id);
			var isChecked = input.checked;
			isChecked = (isChecked)? true : false;
			if(id=="jobsite"){
				checkedForms[0]=1;
				/*
				if(isChecked==true){
					checkedForms[0]=1;
				}
				else{
					checkedForms[0]=0;
				}
				*/
			}
			else if(id=="facility"){
				checkedForms[1]=1;
				/*
				if(isChecked==true){
					checkedForms[1]=1;
				}
				else{
					checkedForms[1]=0;
				}
				*/
			}
			else if(id=="ppe"){
				checkedForms[2]=1;
				/*
				if(isChecked==true){
					checkedForms[2]=1;
				}
				else{
					checkedForms[2]=0;
				}
				*/
			}
			else if(id=="housekeeping"){
				checkedForms[3]=1;
				/*
				if(isChecked==true){
					checkedForms[3]=1;
				}
				else{
					checkedForms[3]=0;
				}
				*/
			}
			else if(id=="fireProtection"){
				checkedForms[4]=1;
				/*
				if(isChecked==true){
					checkedForms[4]=1;
				}
				else{
					checkedForms[4]=0;
				}
				*/
			}
			else if(id=="traffic"){
				checkedForms[5]=1;
				/*
				if(isChecked==true){
					checkedForms[5]=1;
				}
				else{
					checkedForms[5]=0;
				}
				*/
			}
			else if(id=="hazardSubs"){
				checkedForms[6]=1;
				/*
				if(isChecked==true){
					checkedForms[6]=1;
				}
				else{
					checkedForms[6]=0;
				}
				*/
			}
			else if(id=="licensing"){
				checkedForms[7]=1;
				/*
				if(isChecked==true){
					checkedForms[7]=1;
				}
				else{
					checkedForms[7]=0;
				}
				*/
			}
			else if(id=="generalFall"){
				checkedForms[8]=1;
				/*
				if(isChecked==true){
					checkedForms[8]=1;
				}
				else{
					checkedForms[8]=0;
				}
				*/
			}
			else if(id=="scaffold"){
				checkedForms[9]=1;
				/*
				if(isChecked==true){
					checkedForms[9]=1;
				}
				else{
					checkedForms[9]=0;
				}
				*/
			}
			else if(id=="ladder"){
				checkedForms[10]=1;
				/*
				if(isChecked==true){
					checkedForms[10]=1;
				}
				else{
					checkedForms[10]=0;
				}
				*/
			}
			else if(id=="tool"){
				checkedForms[11]=1;
				/*
				if(isChecked==true){
					checkedForms[11]=1;
				}
				else{
					checkedForms[11]=0;
				}
				*/
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
		//to get the amount of checked checked forms
		function formLength(formArr){
			var len=0;
			for(i=0; i<formArr.length; i++){
				if(formArr[i]==1){
					len++;
				}
			}
			return len; 
		}
		var s;
		var pageCount;
		var globalPageIdentifier="page";
		var setLen;
		//Used for the form buttons, navigation/storing
		//TO FIX:toggling between A.1 && other form screws up submit form button. 
		function processFormOrder(page, bound, btnID, storePage){
			//logic for storing local content on page
			if(storePage=="checks"){
				localStorageSubCatForms('checks');
			}
			else if(storePage=="A_1"){
				//if first time store allScoresArray[0] else store the array in localStorage so you can change scores later
				if(getScore1==null){
					if(allScoresArray[0]!=null){
						l =window.localStorage.setItem('l', allScoresArray[0]);
					}
				}
				else{
					//if(storeScore1!=null)??
					l =window.localStorage.setItem('l', storeScore1);
				}
				localStorageSubCatForms('A_1');
			}
			else if(storePage=="A_2"){
				if(getScore2==null){
					if(allScoresArray[1]!=null){
						l2 =window.localStorage.setItem('l2', allScoresArray[1]);
					}
				}
				else{
					l2 =window.localStorage.setItem('l2', storeScore2);
				}
				localStorageSubCatForms('A_2');
			}
			else if(storePage=="A_3"){
				if(getScore3==null){
					if(allScoresArray[2]!=null){
						l3 =window.localStorage.setItem('l3', allScoresArray[2]);
					}
				}
				else{
					l3 =window.localStorage.setItem('l3', storeScore3);
				}
				localStorageSubCatForms('A_3');
			}
			else if(storePage=="A_4"){
				if(getScore4==null){
					if(allScoresArray[3]!=null){
						l4 =window.localStorage.setItem('l4', allScoresArray[3]);
					}
				}
				else{
					l4 =window.localStorage.setItem('l4', storeScore4);
				}
				localStorageSubCatForms('A_4');
			}
			else if(storePage=="A_5"){
				if(getScore5==null){
					if(allScoresArray[4]!=null){
						l5 =window.localStorage.setItem('l5', allScoresArray[4]);
					}
				}
				else{
					l5 =window.localStorage.setItem('l5', storeScore5);
				}
				localStorageSubCatForms('A_5');
			}
			else if(storePage=="A_6"){
				if(getScore6==null){
					if(allScoresArray[5]!=null){
						l6 =window.localStorage.setItem('l6', allScoresArray[5]);
					}
				}
				else{
					l6 =window.localStorage.setItem('l6', storeScore6);
				}
				localStorageSubCatForms('A_6');
			}
			else if(storePage=="A_7"){
				if(getScore7==null){
					if(allScoresArray[6]!=null){
						l7 =window.localStorage.setItem('l7', allScoresArray[6]);
					}
				}
				else{
					l7 =window.localStorage.setItem('l7', storeScore7);
				}
				localStorageSubCatForms('A_7');
			}
			else if(storePage=="A_8"){
				if(getScore8==null){
					if(allScoresArray[7]!=null){
						l8 =window.localStorage.setItem('l8', allScoresArray[7]);
					}
				}
				else{
					l8 =window.localStorage.setItem('l8', storeScore8);
				}
				localStorageSubCatForms('A_8');
			}
			else if(storePage=="B_1"){
				if(getScore9==null){
					if(allScoresArray[8]!=null){
						l9 =window.localStorage.setItem('l9', allScoresArray[8]);
					}
				}
				else{
					l9 =window.localStorage.setItem('l9', storeScore9);
				}
				localStorageSubCatForms('B_1');
			}
			else if(storePage=="B_2"){
				if(getScore10==null){
					if(allScoresArray[9]!=null){
						l10 =window.localStorage.setItem('l10', allScoresArray[9]);
					}
				}
				else{
					l10 =window.localStorage.setItem('l10', storeScore10);
				}
				localStorageSubCatForms('B_2');
			}
			else if(storePage=="B_3"){
				if(getScore11==null){
					if(allScoresArray[10]!=null){
						l11 =window.localStorage.setItem('l11', allScoresArray[10]);
					}
				}
				else{
					l11 =window.localStorage.setItem('l11', storeScore11);
				}
				localStorageSubCatForms('B_3');
			}
			else if(storePage=="C_1"){
				if(getScore12==null){
					if(allScoresArray[11]!=null){
						l12 =window.localStorage.setItem('l12', allScoresArray[11]);
					}
				}
				else{
					l12 =window.localStorage.setItem('l12', storeScore12);
				}
				localStorageSubCatForms('C_1');
			}
			else{
				console.log("last");
			}
			//stores the order of forms selected from pageTwo
			var checked;
			if(page=="pageTwo"){
				var y = 0;
				//localStorage["checkedForms"] = JSON.stringify(checkedForms);
				var count = localStorage.setItem("y", y);
				/*
				var storeChecked= JSON.parse(localStorage["checkedForms"]);
				var formLen = formLength(storeChecked);
				setLen = localStorage.setItem('setLen', formLen);
				*/
			}
			var pCount=localStorage.getItem("pageCount");
			if(pCount == null || pCount == "null"){
				pageCount=0;
			}
			else{
				pageCount=parseInt(pCount);
			}
			///
			var temp=window.localStorage.getItem("forms");
			var formLen;
			console.log("temp" +temp);
			if(temp==null){
				checked= JSON.parse(localStorage["checkedForms"]);
				formLen = formLength(checked);
				setLen = localStorage.setItem('setLen', formLen);
			}
			else{
				checked= JSON.parse(localStorage["storedCheckedForms"]);
				formLen = formLength(checked);
				setLen = localStorage.setItem('setLen', formLen);
			}
			console.log("checked: " + checked);
			///
			//checked= JSON.parse(localStorage["checkedForms"]);
			var x = localStorage.getItem("y");
			var hidebutton = document.getElementById(btnID);
			//Back button 
			if(page=="lastPage"){
				if(x!=0){
					x--;
					while(x>0 && checked[x]!=1){
						x--;
					}
					if(pageCount!=0){
						pageCount--;
					}
				}
			}
			//Next button
			else{
				if(page!="pageTwo"){
					x++;
				}
				while(x<checked.length && checked[x]!=1){
					x++;
				}
				if(pageCount!=checked.length){
					pageCount++;
				}				
			}
			var y;
			var z;
			//bound checks whether we want to go back to the checks page. 
			if(x==0 && page=="lastPage"){
				y = localStorage.setItem("y", x);
				if(checked[x]==1){
					if(bound==1){
						pageCount=0;
						localStorage.setItem("pageCount", pageCount);
						z = "checks";
						s=window.localStorage.setItem("s", z);
						window.location.href="pageTwo.html";
					}
					else{
						pageCount=1;
						localStorage.setItem("pageCount", pageCount);
						z = "A_1";
						s=window.localStorage.setItem("s", z);
						window.location.href="subCategoryForm.html";
					}
				}
				else{
					pageCount=0;
					localStorage.setItem("pageCount", pageCount);
					z = "checks";
					s=window.localStorage.setItem("s", z);
					window.location.href="pageTwo.html";
				}
			}
			//Navigating to correct page based on Checked array
			else{
				if(checked[x]==1){
					if(x==0){
						z = "A_1";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="subCategoryForm.html";
					}
					else if(x==1){
						z = "A_2";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.2.html";
					}
					else if(x==2){
						z = "A_3";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.3.html";
					}
					else if(x==3){
						z = "A_4";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.4.html";
					}
					else if(x==4){
						z = "A_5";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.5.html";
					}
					else if(x==5){
						z = "A_6";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.6.html";
					}
					else if(x==6){
						z = "A_7";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.7.html";
					}
					else if(x==7){
						z = "A_8";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="A.8.html";
					}
					else if(x==8){
						z = "B_1";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="B.1.html";
					}
					else if(x==9){
						z = "B_2";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="B.2.html";
					}
					else if(x==10){
						z = "B_3";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="B.3.html";
					}
					else if(x==11){
						z = "C_1";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="C.1.html";
					}
				}
				//stores the x value
				y = localStorage.setItem("y", x);
				localStorage.setItem("pageCount", pageCount);
			}
		}
		function homeScreen(page){
			var z = "checks";
			var s=window.localStorage.setItem("s", z);
			pageCount=0;
			localStorage.setItem("pageCount", pageCount);
			if(page=="checks"){
				localStorageSubCatForms('checks');
			}
			else if(page=="A_1"){
				if(getScore1==null){
					if(allScoresArray[0]!=null){
						l =window.localStorage.setItem('l', allScoresArray[0]);
					}
				}
				else{
					l =window.localStorage.setItem('l', storeScore1);
				}
				localStorageSubCatForms('A_1');
			}
			else if(page=="A_2"){
				if(getScore2==null){
					if(allScoresArray[1]!=null){
						l2 =window.localStorage.setItem('l2', allScoresArray[1]);
					}
				}
				else{
					l2 =window.localStorage.setItem('l2', storeScore2);
				}
				localStorageSubCatForms('A_2');
			}
			else if(page=="A_3"){
				if(getScore3==null){
					if(allScoresArray[2]!=null){
						l3 =window.localStorage.setItem('l3', allScoresArray[2]);
					}
				}
				else{
					l3 =window.localStorage.setItem('l3', storeScore3);
				}
				localStorageSubCatForms('A_3');
			}
			else if(page=="A_4"){
				if(getScore4==null){
					if(allScoresArray[3]!=null){
						l4 =window.localStorage.setItem('l4', allScoresArray[3]);
					}
				}
				else{
					l4 =window.localStorage.setItem('l4', storeScore4);
				}
				localStorageSubCatForms('A_4');
			}
			else if(page=="A_5"){
				if(getScore5==null){
					if(allScoresArray[4]!=null){
						l5 =window.localStorage.setItem('l5', allScoresArray[4]);
					}
				}
				else{
					l5 =window.localStorage.setItem('l5', storeScore5);
				}
				localStorageSubCatForms('A_5');
			}
			else if(page=="A_6"){
				if(getScore6==null){
					if(allScoresArray[5]!=null){
						l6 =window.localStorage.setItem('l6', allScoresArray[5]);
					}
				}
				else{
					l6 =window.localStorage.setItem('l6', storeScore6);
				}
				localStorageSubCatForms('A_6');
			}
			else if(page=="A_7"){
				if(getScore7==null){
					if(allScoresArray[6]!=null){
						l7 =window.localStorage.setItem('l7', allScoresArray[6]);
					}
				}
				else{
					l7 =window.localStorage.setItem('l7', storeScore7);
				}
				localStorageSubCatForms('A_7');
			}
			else if(page=="A_8"){
				if(getScore8==null){
					if(allScoresArray[7]!=null){
						l8 =window.localStorage.setItem('l8', allScoresArray[7]);
					}
				}
				else{
					l8 =window.localStorage.setItem('l8', storeScore8);
				}
				localStorageSubCatForms('A_8');
			}
			else if(page=="B_1"){
				if(getScore9==null){
					if(allScoresArray[8]!=null){
						l9 =window.localStorage.setItem('l9', allScoresArray[8]);
					}
				}
				else{
					l9 =window.localStorage.setItem('l9', storeScore9);
				}
				localStorageSubCatForms('B_1');
			}
			else if(page=="B_2"){
				if(getScore10==null){
					if(allScoresArray[9]!=null){
						l10 =window.localStorage.setItem('l10', allScoresArray[9]);
					}
				}
				else{
					l10 =window.localStorage.setItem('l10', storeScore10);
				}
				localStorageSubCatForms('B_2');
			}
			else if(page=="B_3"){
				if(getScore11==null){
					if(allScoresArray[10]!=null){
						l11 =window.localStorage.setItem('l11', allScoresArray[10]);
					}
				}
				else{
					l11 =window.localStorage.setItem('l11', storeScore11);
				}
				localStorageSubCatForms('B_3');
			}
			else if(page=="C_1"){
				if(getScore12==null){
					if(allScoresArray[11]!=null){
						l12 =window.localStorage.setItem('l12', allScoresArray[11]);
					}
				}
				else{
					l12 =window.localStorage.setItem('l12', storeScore12);
				}
				localStorageSubCatForms('C_1');
			}
			else{
				window.location.href="index.html";
			}
			window.location.href="index.html";
		}
		//Initializes the localstorage based on the page
		function initialize(page){
			var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
			if(!bSupportsLocal){
				document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
				return;
			}
			//variables for getting the pageCount and the number of checked options.
			var pNum = localStorage.getItem("pageCount");
			var checked= JSON.parse(localStorage["checkedForms"]);
			var fLen= localStorage.getItem("setLen");
			console.log("flen" + fLen);
			console.log("pNum" + pNum);
			if(window.localStorage.length != 0){
				
				if(page=="checks"){
					var i, checkboxes = document.querySelectorAll('input[type=checkbox]');
					for (i = 0; i < checkboxes.length; i++) {
        				checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    				}
    				console.log("Initializes!");
				}
				else if(page=="A_1"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_1arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.1notes').value = window.localStorage.getItem('A.1notes');
					var initGetScore1=localStorage.getItem('l');
					if(initGetScore1!=null){
						document.getElementById('A.1score').innerHTML = window.localStorage.getItem('A.1score');
					}
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
							else if(this.name=='box4'){
								document.getElementById('A.1compliance4').value = window.localStorage.getItem('A.1compliance4');
								var showDiv=document.getElementById('fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.1compliance5').value = window.localStorage.getItem('A.1compliance5');
								var showDiv=document.getElementById('fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.1compliance6').value = window.localStorage.getItem('A.1compliance6');
								var showDiv=document.getElementById('sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.1compliance7').value = window.localStorage.getItem('A.1compliance7');
								var showDiv=document.getElementById('seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('A.1compliance8').value = window.localStorage.getItem('A.1compliance8');
								var showDiv=document.getElementById('eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('A.1compliance9').value = window.localStorage.getItem('A.1compliance9');
								var showDiv=document.getElementById('ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('A.1compliance10').value = window.localStorage.getItem('A.1compliance10');
								var showDiv=document.getElementById('tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('A.1compliance11').value = window.localStorage.getItem('A.1compliance11');
								var showDiv=document.getElementById('eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.1compliance12').value = window.localStorage.getItem('A.1compliance12');
								var showDiv=document.getElementById('twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_2"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_2arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.2notes').value = window.localStorage.getItem('A.2notes');
					var initGetScore2=localStorage.getItem('l2');
					if(initGetScore2!=null){
						document.getElementById('A.2score').innerHTML = window.localStorage.getItem('A.2score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.2compliance1').value = window.localStorage.getItem('A.2compliance1');
								var showDiv=document.getElementById('A.2firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.2compliance2').value = window.localStorage.getItem('A.2compliance2');
								var showDiv=document.getElementById('A.2secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.2compliance3').value = window.localStorage.getItem('A.2compliance3');
								var showDiv=document.getElementById('A.2thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.2compliance4').value = window.localStorage.getItem('A.2compliance4');
								var showDiv=document.getElementById('A.2fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.2compliance5').value = window.localStorage.getItem('A.2compliance5');
								var showDiv=document.getElementById('A.2fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.2compliance6').value = window.localStorage.getItem('A.2compliance6');
								var showDiv=document.getElementById('A.2sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.2compliance7').value = window.localStorage.getItem('A.2compliance7');
								var showDiv=document.getElementById('A.2seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('A.2compliance8').value = window.localStorage.getItem('A.2compliance8');
								var showDiv=document.getElementById('A.2eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('A.2compliance9').value = window.localStorage.getItem('A.2compliance9');
								var showDiv=document.getElementById('A.2ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.2compliance10').value = window.localStorage.getItem('A.2compliance10');
								var showDiv=document.getElementById('A.2tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_3"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_3arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.3notes').value = window.localStorage.getItem('A.3notes');
					var initGetScore3=localStorage.getItem('l3');
					if(initGetScore3!=null){
						document.getElementById('A.3score').innerHTML = window.localStorage.getItem('A.3score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.3compliance1').value = window.localStorage.getItem('A.3compliance1');
								var showDiv=document.getElementById('A.3firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.3compliance2').value = window.localStorage.getItem('A.3compliance2');
								var showDiv=document.getElementById('A.3secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.3compliance3').value = window.localStorage.getItem('A.3compliance3');
								var showDiv=document.getElementById('A.3thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.3compliance4').value = window.localStorage.getItem('A.3compliance4');
								var showDiv=document.getElementById('A.3fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.3compliance5').value = window.localStorage.getItem('A.3compliance5');
								var showDiv=document.getElementById('A.3fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.3compliance6').value = window.localStorage.getItem('A.3compliance6');
								var showDiv=document.getElementById('A.3sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.3compliance7').value = window.localStorage.getItem('A.3compliance7');
								var showDiv=document.getElementById('A.3seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('A.3compliance8').value = window.localStorage.getItem('A.3compliance8');
								var showDiv=document.getElementById('A.3eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('A.3compliance9').value = window.localStorage.getItem('A.3compliance9');
								var showDiv=document.getElementById('A.3ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.3compliance10').value = window.localStorage.getItem('A.3compliance10');
								var showDiv=document.getElementById('A.3tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_4"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_4arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.4notes').value = window.localStorage.getItem('A.4notes');
					var initGetScore4=localStorage.getItem('l4');
					if(initGetScore4!=null){
						document.getElementById('A.4score').innerHTML = window.localStorage.getItem('A.4score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.4compliance1').value = window.localStorage.getItem('A.4compliance1');
								var showDiv=document.getElementById('A.4firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.4compliance2').value = window.localStorage.getItem('A.4compliance2');
								var showDiv=document.getElementById('A.4secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.4compliance3').value = window.localStorage.getItem('A.4compliance3');
								var showDiv=document.getElementById('A.4thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.4compliance4').value = window.localStorage.getItem('A.4compliance4');
								var showDiv=document.getElementById('A.4fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.4compliance5').value = window.localStorage.getItem('A.4compliance5');
								var showDiv=document.getElementById('A.4fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.4compliance6').value = window.localStorage.getItem('A.4compliance6');
								var showDiv=document.getElementById('A.4sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.4compliance7').value = window.localStorage.getItem('A.4compliance7');
								var showDiv=document.getElementById('A.4seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('A.4compliance8').value = window.localStorage.getItem('A.4compliance8');
								var showDiv=document.getElementById('A.4eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.4compliance9').value = window.localStorage.getItem('A.4compliance9');
								var showDiv=document.getElementById('A.4ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_5"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_5arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.5notes').value = window.localStorage.getItem('A.5notes');
					var initGetScore5=localStorage.getItem('l5');
					if(initGetScore5!=null){
						document.getElementById('A.5score').innerHTML = window.localStorage.getItem('A.5score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.5compliance1').value = window.localStorage.getItem('A.5compliance1');
								var showDiv=document.getElementById('A.5firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.5compliance2').value = window.localStorage.getItem('A.5compliance2');
								var showDiv=document.getElementById('A.5secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.5compliance3').value = window.localStorage.getItem('A.5compliance3');
								var showDiv=document.getElementById('A.5thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.5compliance4').value = window.localStorage.getItem('A.5compliance4');
								var showDiv=document.getElementById('A.5fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.5compliance5').value = window.localStorage.getItem('A.5compliance5');
								var showDiv=document.getElementById('A.5fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.5compliance6').value = window.localStorage.getItem('A.5compliance6');
								var showDiv=document.getElementById('A.5sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.5compliance7').value = window.localStorage.getItem('A.5compliance7');
								var showDiv=document.getElementById('A.5seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('A.5compliance8').value = window.localStorage.getItem('A.5compliance8');
								var showDiv=document.getElementById('A.5eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('A.5compliance9').value = window.localStorage.getItem('A.5compliance9');
								var showDiv=document.getElementById('A.5ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_6"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_6arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.6notes').value = window.localStorage.getItem('A.6notes');
					var initGetScore6=localStorage.getItem('l6');
					if(initGetScore6!=null){
						document.getElementById('A.6score').innerHTML = window.localStorage.getItem('A.6score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.6compliance1').value = window.localStorage.getItem('A.6compliance1');
								var showDiv=document.getElementById('A.6firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.6compliance2').value = window.localStorage.getItem('A.6compliance2');
								var showDiv=document.getElementById('A.6secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.6compliance3').value = window.localStorage.getItem('A.6compliance3');
								var showDiv=document.getElementById('A.6thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.6compliance4').value = window.localStorage.getItem('A.6compliance4');
								var showDiv=document.getElementById('A.6fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.6compliance5').value = window.localStorage.getItem('A.6compliance5');
								var showDiv=document.getElementById('A.6fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.6compliance6').value = window.localStorage.getItem('A.6compliance6');
								var showDiv=document.getElementById('A.6sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_7"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_7arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.7notes').value = window.localStorage.getItem('A.7notes');
					var initGetScore7=localStorage.getItem('l7');
					if(initGetScore7!=null){
						document.getElementById('A.7score').innerHTML = window.localStorage.getItem('A.7score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.7compliance1').value = window.localStorage.getItem('A.7compliance1');
								var showDiv=document.getElementById('A.7firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.7compliance2').value = window.localStorage.getItem('A.7compliance2');
								var showDiv=document.getElementById('A.7secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.7compliance3').value = window.localStorage.getItem('A.7compliance3');
								var showDiv=document.getElementById('A.7thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.7compliance4').value = window.localStorage.getItem('A.7compliance4');
								var showDiv=document.getElementById('A.7fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.7compliance5').value = window.localStorage.getItem('A.7compliance5');
								var showDiv=document.getElementById('A.7fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('A.7compliance6').value = window.localStorage.getItem('A.7compliance6');
								var showDiv=document.getElementById('A.7sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('A.7compliance7').value = window.localStorage.getItem('A.7compliance7');
								var showDiv=document.getElementById('A.7seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_8"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('A_8arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('A.8notes').value = window.localStorage.getItem('A.8notes');
					var initGetScore8=localStorage.getItem('l8');
					if(initGetScore8!=null){
						document.getElementById('A.8score').innerHTML = window.localStorage.getItem('A.8score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('A.8compliance1').value = window.localStorage.getItem('A.8compliance1');
								var showDiv=document.getElementById('A.8firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('A.8compliance2').value = window.localStorage.getItem('A.8compliance2');
								var showDiv=document.getElementById('A.8secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('A.8compliance3').value = window.localStorage.getItem('A.8compliance3');
								var showDiv=document.getElementById('A.8thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('A.8compliance4').value = window.localStorage.getItem('A.8compliance4');
								var showDiv=document.getElementById('A.8fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('A.8compliance5').value = window.localStorage.getItem('A.8compliance5');
								var showDiv=document.getElementById('A.8fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="B_1"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('B_1arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('B.1notes').value = window.localStorage.getItem('B.1notes');
					var initGetScore9=localStorage.getItem('l9');
					if(initGetScore9!=null){
						document.getElementById('B.1score').innerHTML = window.localStorage.getItem('B.1score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('B.1compliance1').value = window.localStorage.getItem('B.1compliance1');
								var showDiv=document.getElementById('B.1firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('B.1compliance2').value = window.localStorage.getItem('B.1compliance2');
								var showDiv=document.getElementById('B.1secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('B.1compliance3').value = window.localStorage.getItem('B.1compliance3');
								var showDiv=document.getElementById('B.1thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('B.1compliance4').value = window.localStorage.getItem('B.1compliance4');
								var showDiv=document.getElementById('B.1fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('B.1compliance5').value = window.localStorage.getItem('B.1compliance5');
								var showDiv=document.getElementById('B.1fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('B.1compliance6').value = window.localStorage.getItem('B.1compliance6');
								var showDiv=document.getElementById('B.1sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('B.1compliance7').value = window.localStorage.getItem('B.1compliance7');
								var showDiv=document.getElementById('B.1seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('B.1compliance8').value = window.localStorage.getItem('B.1compliance8');
								var showDiv=document.getElementById('B.1eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('B.1compliance9').value = window.localStorage.getItem('B.1compliance9');
								var showDiv=document.getElementById('B.1ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('B.1compliance10').value = window.localStorage.getItem('B.1compliance10');
								var showDiv=document.getElementById('B.1tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="B_2"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('B_2arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('B.2notes').value = window.localStorage.getItem('B.2notes');
					var initGetScore10=localStorage.getItem('l10');
					if(initGetScore10!=null){
						document.getElementById('B.2score').innerHTML = window.localStorage.getItem('B.2score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('B.2compliance1').value = window.localStorage.getItem('B.2compliance1');
								var showDiv=document.getElementById('B.2firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('B.2compliance2').value = window.localStorage.getItem('B.2compliance2');
								var showDiv=document.getElementById('B.2secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('B.2compliance3').value = window.localStorage.getItem('B.2compliance3');
								var showDiv=document.getElementById('B.2thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('B.2compliance4').value = window.localStorage.getItem('B.2compliance4');
								var showDiv=document.getElementById('B.2fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('B.2compliance5').value = window.localStorage.getItem('B.2compliance5');
								var showDiv=document.getElementById('B.2fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('B.2compliance6').value = window.localStorage.getItem('B.2compliance6');
								var showDiv=document.getElementById('B.2sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('B.2compliance7').value = window.localStorage.getItem('B.2compliance7');
								var showDiv=document.getElementById('B.2seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('B.2compliance8').value = window.localStorage.getItem('B.2compliance8');
								var showDiv=document.getElementById('B.2eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('B.2compliance9').value = window.localStorage.getItem('B.2compliance9');
								var showDiv=document.getElementById('B.2ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('B.2compliance10').value = window.localStorage.getItem('B.2compliance10');
								var showDiv=document.getElementById('B.2tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="B_3"){
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('B_3arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('B.3notes').value = window.localStorage.getItem('B.3notes');
					var initGetScore11=localStorage.getItem('l11');
					if(initGetScore11!=null){
						document.getElementById('B.3score').innerHTML = window.localStorage.getItem('B.3score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('B.3compliance1').value = window.localStorage.getItem('B.3compliance1');
								var showDiv=document.getElementById('B.3firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('B.3compliance2').value = window.localStorage.getItem('B.3compliance2');
								var showDiv=document.getElementById('B.3secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('B.3compliance3').value = window.localStorage.getItem('B.3compliance3');
								var showDiv=document.getElementById('B.3thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('B.3compliance4').value = window.localStorage.getItem('B.3compliance4');
								var showDiv=document.getElementById('B.3fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('B.3compliance5').value = window.localStorage.getItem('B.3compliance5');
								var showDiv=document.getElementById('B.3fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('B.3compliance6').value = window.localStorage.getItem('B.3compliance6');
								var showDiv=document.getElementById('B.3sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('B.3compliance7').value = window.localStorage.getItem('B.3compliance7');
								var showDiv=document.getElementById('B.3seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('B.3compliance8').value = window.localStorage.getItem('B.3compliance8');
								var showDiv=document.getElementById('B.3eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('B.3compliance9').value = window.localStorage.getItem('B.3compliance9');
								var showDiv=document.getElementById('B.3ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="C_1"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('C_1arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('C.1notes').value = window.localStorage.getItem('C.1notes');
					var initGetScore12=localStorage.getItem('l12');
					if(initGetScore12!=null){
						document.getElementById('C.1score').innerHTML = window.localStorage.getItem('C.1score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('C.1compliance1').value = window.localStorage.getItem('C.1compliance1');
								var showDiv=document.getElementById('C.1firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('C.1compliance2').value = window.localStorage.getItem('C.1compliance2');
								var showDiv=document.getElementById('C.1secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('C.1compliance3').value = window.localStorage.getItem('C.1compliance3');
								var showDiv=document.getElementById('C.1thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('C.1compliance4').value = window.localStorage.getItem('C.1compliance4');
								var showDiv=document.getElementById('C.1fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('C.1compliance5').value = window.localStorage.getItem('C.1compliance5');
								var showDiv=document.getElementById('C.1fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('C.1compliance6').value = window.localStorage.getItem('C.1compliance6');
								var showDiv=document.getElementById('C.1sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('C.1compliance7').value = window.localStorage.getItem('C.1compliance7');
								var showDiv=document.getElementById('C.1seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('C.1compliance8').value = window.localStorage.getItem('C.1compliance8');
								var showDiv=document.getElementById('C.1eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('C.1compliance9').value = window.localStorage.getItem('C.1compliance9');
								var showDiv=document.getElementById('C.1ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('C.1compliance10').value = window.localStorage.getItem('C.1compliance10');
								var showDiv=document.getElementById('C.1tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('C.1compliance11').value = window.localStorage.getItem('C.1compliance11');
								var showDiv=document.getElementById('C.1eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else{
								document.getElementById('C.1compliance12').value = window.localStorage.getItem('C.1compliance12');
								var showDiv=document.getElementById('C.1twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else{
					console.log('..');
				}
			}
		}
		//save to localStorage based on the page
		var storedCheckedForms; 
		function localStorageSubCatForms(page){
			
			if(page=="checks"){
				var i, checkboxes = document.querySelectorAll('input[type=checkbox]');
				    for (i = 0; i < checkboxes.length; i++) {
        				localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); 
    			}
    			var test2 = window.localStorage.getItem('test3');
    			if(test2==null){
    				localStorage["checkedForms"] = JSON.stringify(checkedForms);
    				//var firstChecked = JSON.parse(localStorage["checkedForms"]);
    				var test3 = false;
    				window.localStorage.setItem('test3', test3);
    				console.log("FIRST");
    			}
    			else{
    				console.log("SECOND");
    				
    				var test1 = window.localStorage.getItem('test');
    				if(test1==null){
    					storedCheckedForms=JSON.parse(localStorage["checkedForms"]);
    					var test = false;
    					window.localStorage.setItem('forms', storedCheckedForms); 
    					window.localStorage.setItem('test', test);
    					console.log("storedChecked=first");
    				}
					else{
						storedCheckedForms = JSON.parse(localStorage["storedCheckedForms"]);
						console.log("storedChecked=second");
					}
	    			var x;
	    			console.log("storedCheckedForms" + storedCheckedForms);
	    			console.log("checkedForms" + checkedForms);
	    			for(x = 0; x < checkedForms.length; x++){
	    				if(checkedForms[x]==1 && storedCheckedForms[x]==0){
	    					storedCheckedForms[x]=1;
	    					console.log('HIT');
	    				}
	    				else if(checkedForms[x]==1 && storedCheckedForms[x]==1){
	    					storedCheckedForms[x]=0;
	    					console.log('HIT2');
	    				}
	    			}
	    			localStorage["storedCheckedForms"] = JSON.stringify(storedCheckedForms);
	    			console.log("storedCheckedForms" + storedCheckedForms);
    			}

    			console.log("Stores!");
			}
			else if(page=="A_1"){
				var score1 = document.getElementById('A.1score').innerHTML;
				var endNotes1 = document.getElementById('A.1notes').value;
				var A_1firstCompliance = document.getElementById('A.1compliance1').value;
				var A_1secondCompliance = document.getElementById('A.1compliance2').value;
				var A_1thirdCompliance = document.getElementById('A.1compliance3').value;
				var A_1fourthCompliance = document.getElementById('A.1compliance4').value;
				var A_1fifthCompliance = document.getElementById('A.1compliance5').value;
				var A_1sixthCompliance = document.getElementById('A.1compliance6').value;
				var A_1seventhCompliance = document.getElementById('A.1compliance7').value;
				var A_1eigthCompliance = document.getElementById('A.1compliance8').value;
				var A_1ninthCompliance = document.getElementById('A.1compliance9').value;
				var A_1tenthCompliance = document.getElementById('A.1compliance10').value;
				var A_1eleventhCompliance = document.getElementById('A.1compliance11').value;
				var A_1twelthCompliance = document.getElementById('A.1compliance12').value;
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
				window.localStorage.setItem('A.1compliance5', A_1fifthCompliance);
				window.localStorage.setItem('A.1compliance6', A_1sixthCompliance);
				window.localStorage.setItem('A.1compliance7', A_1seventhCompliance);
				window.localStorage.setItem('A.1compliance8', A_1eigthCompliance);
				window.localStorage.setItem('A.1compliance9', A_1ninthCompliance);
				window.localStorage.setItem('A.1compliance10', A_1tenthCompliance);
				window.localStorage.setItem('A.1compliance11', A_1eleventhCompliance);
				window.localStorage.setItem('A.1compliance12', A_1twelthCompliance);
			}
			else if(page=="A_2"){
				var score2 = document.getElementById('A.2score').innerHTML;
				var endNotes2 = document.getElementById('A.2notes').value;
				var A_2firstCompliance = document.getElementById('A.2compliance1').value;
				var A_2secondCompliance = document.getElementById('A.2compliance2').value;
				var A_2thirdCompliance = document.getElementById('A.2compliance3').value;
				var A_2fourthCompliance = document.getElementById('A.2compliance4').value;
				var A_2fifthCompliance = document.getElementById('A.2compliance5').value;
				var A_2sixthCompliance = document.getElementById('A.2compliance6').value;
				var A_2seventhCompliance = document.getElementById('A.2compliance7').value;
				var A_2eigthCompliance = document.getElementById('A.2compliance8').value;
				var A_2ninthCompliance = document.getElementById('A.2compliance9').value;
				var A_2tenthCompliance = document.getElementById('A.2compliance10').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.2notes', endNotes2);
				window.localStorage.setItem('A.2score', score2);
				window.localStorage.setItem('A.2compliance1', A_2firstCompliance);
				window.localStorage.setItem('A.2compliance2', A_2secondCompliance);
				window.localStorage.setItem('A.2compliance3', A_2thirdCompliance);
				window.localStorage.setItem('A.2compliance4', A_2fourthCompliance);
				window.localStorage.setItem('A.2compliance5', A_2fifthCompliance);
				window.localStorage.setItem('A.2compliance6', A_2sixthCompliance);
				window.localStorage.setItem('A.2compliance7', A_2seventhCompliance);
				window.localStorage.setItem('A.2compliance8', A_2eigthCompliance);
				window.localStorage.setItem('A.2compliance9', A_2ninthCompliance);
				window.localStorage.setItem('A.2compliance10', A_2tenthCompliance);
			}
			else if(page=="A_3"){
				var score3 = document.getElementById('A.3score').innerHTML;
				var endNotes3 = document.getElementById('A.3notes').value;
				var A_3firstCompliance = document.getElementById('A.3compliance1').value;
				var A_3secondCompliance = document.getElementById('A.3compliance2').value;
				var A_3thirdCompliance = document.getElementById('A.3compliance3').value;
				var A_3fourthCompliance = document.getElementById('A.3compliance4').value;
				var A_3fifthCompliance = document.getElementById('A.3compliance5').value;
				var A_3sixthCompliance = document.getElementById('A.3compliance6').value;
				var A_3seventhCompliance = document.getElementById('A.3compliance7').value;
				var A_3eigthCompliance = document.getElementById('A.3compliance8').value;
				var A_3ninthCompliance = document.getElementById('A.3compliance9').value;
				var A_3tenthCompliance = document.getElementById('A.3compliance10').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.3notes', endNotes3);
				window.localStorage.setItem('A.3score', score3);
				window.localStorage.setItem('A.3compliance1', A_3firstCompliance);
				window.localStorage.setItem('A.3compliance2', A_3secondCompliance);
				window.localStorage.setItem('A.3compliance3', A_3thirdCompliance);
				window.localStorage.setItem('A.3compliance4', A_3fourthCompliance);
				window.localStorage.setItem('A.3compliance5', A_3fifthCompliance);
				window.localStorage.setItem('A.3compliance6', A_3sixthCompliance);
				window.localStorage.setItem('A.3compliance7', A_3seventhCompliance);
				window.localStorage.setItem('A.3compliance8', A_3eigthCompliance);
				window.localStorage.setItem('A.3compliance9', A_3ninthCompliance);
				window.localStorage.setItem('A.3compliance10', A_3tenthCompliance);
			}
			else if(page=="A_4"){
				var score4 = document.getElementById('A.4score').innerHTML;
				var endNotes4 = document.getElementById('A.4notes').value;
				var A_4firstCompliance = document.getElementById('A.4compliance1').value;
				var A_4secondCompliance = document.getElementById('A.4compliance2').value;
				var A_4thirdCompliance = document.getElementById('A.4compliance3').value;
				var A_4fourthCompliance = document.getElementById('A.4compliance4').value;
				var A_4fifthCompliance = document.getElementById('A.4compliance5').value;
				var A_4sixthCompliance = document.getElementById('A.4compliance6').value;
				var A_4seventhCompliance = document.getElementById('A.4compliance7').value;
				var A_4eigthCompliance = document.getElementById('A.4compliance8').value;
				var A_4ninthCompliance = document.getElementById('A.4compliance9').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.4notes', endNotes4);
				window.localStorage.setItem('A.4score', score4);
				window.localStorage.setItem('A.4compliance1', A_4firstCompliance);
				window.localStorage.setItem('A.4compliance2', A_4secondCompliance);
				window.localStorage.setItem('A.4compliance3', A_4thirdCompliance);
				window.localStorage.setItem('A.4compliance4', A_4fourthCompliance);
				window.localStorage.setItem('A.4compliance5', A_4fifthCompliance);
				window.localStorage.setItem('A.4compliance6', A_4sixthCompliance);
				window.localStorage.setItem('A.4compliance7', A_4seventhCompliance);
				window.localStorage.setItem('A.4compliance8', A_4eigthCompliance);
				window.localStorage.setItem('A.4compliance9', A_4ninthCompliance);
			}
			else if(page=="A_5"){
				var score5 = document.getElementById('A.5score').innerHTML;
				var endNotes5 = document.getElementById('A.5notes').value;
				var A_5firstCompliance = document.getElementById('A.5compliance1').value;
				var A_5secondCompliance = document.getElementById('A.5compliance2').value;
				var A_5thirdCompliance = document.getElementById('A.5compliance3').value;
				var A_5fourthCompliance = document.getElementById('A.5compliance4').value;
				var A_5fifthCompliance = document.getElementById('A.5compliance5').value;
				var A_5sixthCompliance = document.getElementById('A.5compliance6').value;
				var A_5seventhCompliance = document.getElementById('A.5compliance7').value;
				var A_5eigthCompliance = document.getElementById('A.5compliance8').value;
				var A_5ninthCompliance = document.getElementById('A.5compliance9').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.5notes', endNotes5);
				window.localStorage.setItem('A.5score', score5);
				window.localStorage.setItem('A.5compliance1', A_5firstCompliance);
				window.localStorage.setItem('A.5compliance2', A_5secondCompliance);
				window.localStorage.setItem('A.5compliance3', A_5thirdCompliance);
				window.localStorage.setItem('A.5compliance4', A_5fourthCompliance);
				window.localStorage.setItem('A.5compliance5', A_5fifthCompliance);
				window.localStorage.setItem('A.5compliance6', A_5sixthCompliance);
				window.localStorage.setItem('A.5compliance7', A_5seventhCompliance);
				window.localStorage.setItem('A.5compliance8', A_5eigthCompliance);
				window.localStorage.setItem('A.5compliance9', A_5ninthCompliance);
			}
			else if(page=="A_6"){
				var score6 = document.getElementById('A.6score').innerHTML;
				var endNotes6 = document.getElementById('A.6notes').value;
				var A_6firstCompliance = document.getElementById('A.6compliance1').value;
				var A_6secondCompliance = document.getElementById('A.6compliance2').value;
				var A_6thirdCompliance = document.getElementById('A.6compliance3').value;
				var A_6fourthCompliance = document.getElementById('A.6compliance4').value;
				var A_6fifthCompliance = document.getElementById('A.6compliance5').value;
				var A_6sixthCompliance = document.getElementById('A.6compliance6').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.6notes', endNotes6);
				window.localStorage.setItem('A.6score', score6);
				window.localStorage.setItem('A.6compliance1', A_6firstCompliance);
				window.localStorage.setItem('A.6compliance2', A_6secondCompliance);
				window.localStorage.setItem('A.6compliance3', A_6thirdCompliance);
				window.localStorage.setItem('A.6compliance4', A_6fourthCompliance);
				window.localStorage.setItem('A.6compliance5', A_6fifthCompliance);
				window.localStorage.setItem('A.6compliance6', A_6sixthCompliance);
			}
			else if(page=="A_7"){
				var score7 = document.getElementById('A.7score').innerHTML;
				var endNotes7 = document.getElementById('A.7notes').value;
				var A_7firstCompliance = document.getElementById('A.7compliance1').value;
				var A_7secondCompliance = document.getElementById('A.7compliance2').value;
				var A_7thirdCompliance = document.getElementById('A.7compliance3').value;
				var A_7fourthCompliance = document.getElementById('A.7compliance4').value;
				var A_7fifthCompliance = document.getElementById('A.7compliance5').value;
				var A_7sixthCompliance = document.getElementById('A.7compliance6').value;
				var A_7seventhCompliance = document.getElementById('A.7compliance7').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.7notes', endNotes7);
				window.localStorage.setItem('A.7score', score7);
				window.localStorage.setItem('A.7compliance1', A_7firstCompliance);
				window.localStorage.setItem('A.7compliance2', A_7secondCompliance);
				window.localStorage.setItem('A.7compliance3', A_7thirdCompliance);
				window.localStorage.setItem('A.7compliance4', A_7fourthCompliance);
				window.localStorage.setItem('A.7compliance5', A_7fifthCompliance);
				window.localStorage.setItem('A.7compliance6', A_7sixthCompliance);
				window.localStorage.setItem('A.7compliance7', A_7seventhCompliance);
			}
			else if(page=="A_8"){
				var score8 = document.getElementById('A.8score').innerHTML;
				var endNotes8 = document.getElementById('A.8notes').value;
				var A_8firstCompliance = document.getElementById('A.8compliance1').value;
				var A_8secondCompliance = document.getElementById('A.8compliance2').value;
				var A_8thirdCompliance = document.getElementById('A.8compliance3').value;
				var A_8fourthCompliance = document.getElementById('A.8compliance4').value;
				var A_8fifthCompliance = document.getElementById('A.8compliance5').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.8notes', endNotes8);
				window.localStorage.setItem('A.8score', score8);
				window.localStorage.setItem('A.8compliance1', A_8firstCompliance);
				window.localStorage.setItem('A.8compliance2', A_8secondCompliance);
				window.localStorage.setItem('A.8compliance3', A_8thirdCompliance);
				window.localStorage.setItem('A.8compliance4', A_8fourthCompliance);
				window.localStorage.setItem('A.8compliance5', A_8fifthCompliance);
			}
			else if(page=="B_1"){
				var score9 = document.getElementById('B.1score').innerHTML;
				var endNotes9 = document.getElementById('B.1notes').value;
				var B_1firstCompliance = document.getElementById('B.1compliance1').value;
				var B_1secondCompliance = document.getElementById('B.1compliance2').value;
				var B_1thirdCompliance = document.getElementById('B.1compliance3').value;
				var B_1fourthCompliance = document.getElementById('B.1compliance4').value;
				var B_1fifthCompliance = document.getElementById('B.1compliance5').value;
				var B_1sixthCompliance = document.getElementById('B.1compliance6').value;
				var B_1seventhCompliance = document.getElementById('B.1compliance7').value;
				var B_1eigthCompliance = document.getElementById('B.1compliance8').value;
				var B_1ninthCompliance = document.getElementById('B.1compliance9').value;
				var B_1tenthCompliance = document.getElementById('B.1compliance10').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('B.1notes', endNotes9);
				window.localStorage.setItem('B.1score', score9);
				window.localStorage.setItem('B.1compliance1', B_1firstCompliance);
				window.localStorage.setItem('B.1compliance2', B_1secondCompliance);
				window.localStorage.setItem('B.1compliance3', B_1thirdCompliance);
				window.localStorage.setItem('B.1compliance4', B_1fourthCompliance);
				window.localStorage.setItem('B.1compliance5', B_1fifthCompliance);
				window.localStorage.setItem('B.1compliance6', B_1sixthCompliance);
				window.localStorage.setItem('B.1compliance7', B_1seventhCompliance);
				window.localStorage.setItem('B.1compliance8', B_1eigthCompliance);
				window.localStorage.setItem('B.1compliance9', B_1ninthCompliance);
				window.localStorage.setItem('B.1compliance10', B_1tenthCompliance);
			}
			else if(page=="B_2"){
				var score10 = document.getElementById('B.2score').innerHTML;
				var endNotes10 = document.getElementById('B.2notes').value;
				var B_2firstCompliance = document.getElementById('B.2compliance1').value;
				var B_2secondCompliance = document.getElementById('B.2compliance2').value;
				var B_2thirdCompliance = document.getElementById('B.2compliance3').value;
				var B_2fourthCompliance = document.getElementById('B.2compliance4').value;
				var B_2fifthCompliance = document.getElementById('B.2compliance5').value;
				var B_2sixthCompliance = document.getElementById('B.2compliance6').value;
				var B_2seventhCompliance = document.getElementById('B.2compliance7').value;
				var B_2eigthCompliance = document.getElementById('B.2compliance8').value;
				var B_2ninthCompliance = document.getElementById('B.2compliance9').value;
				var B_2tenthCompliance = document.getElementById('B.2compliance10').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('B.2notes', endNotes10);
				window.localStorage.setItem('B.2score', score10);
				window.localStorage.setItem('B.2compliance1', B_2firstCompliance);
				window.localStorage.setItem('B.2compliance2', B_2secondCompliance);
				window.localStorage.setItem('B.2compliance3', B_2thirdCompliance);
				window.localStorage.setItem('B.2compliance4', B_2fourthCompliance);
				window.localStorage.setItem('B.2compliance5', B_2fifthCompliance);
				window.localStorage.setItem('B.2compliance6', B_2sixthCompliance);
				window.localStorage.setItem('B.2compliance7', B_2seventhCompliance);
				window.localStorage.setItem('B.2compliance8', B_2eigthCompliance);
				window.localStorage.setItem('B.2compliance9', B_2ninthCompliance);
				window.localStorage.setItem('B.2compliance10', B_2tenthCompliance);
			}
			else if(page=="B_3"){
				var score11 = document.getElementById('B.3score').innerHTML;
				var endNotes11 = document.getElementById('B.3notes').value;
				var B_3firstCompliance = document.getElementById('B.3compliance1').value;
				var B_3secondCompliance = document.getElementById('B.3compliance2').value;
				var B_3thirdCompliance = document.getElementById('B.3compliance3').value;
				var B_3fourthCompliance = document.getElementById('B.3compliance4').value;
				var B_3fifthCompliance = document.getElementById('B.3compliance5').value;
				var B_3sixthCompliance = document.getElementById('B.3compliance6').value;
				var B_3seventhCompliance = document.getElementById('B.3compliance7').value;
				var B_3eigthCompliance = document.getElementById('B.3compliance8').value;
				var B_3ninthCompliance = document.getElementById('B.3compliance9').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('B.3notes', endNotes11);
				window.localStorage.setItem('B.3score', score11);
				window.localStorage.setItem('B.3compliance1', B_3firstCompliance);
				window.localStorage.setItem('B.3compliance2', B_3secondCompliance);
				window.localStorage.setItem('B.3compliance3', B_3thirdCompliance);
				window.localStorage.setItem('B.3compliance4', B_3fourthCompliance);
				window.localStorage.setItem('B.3compliance5', B_3fifthCompliance);
				window.localStorage.setItem('B.3compliance6', B_3sixthCompliance);
				window.localStorage.setItem('B.3compliance7', B_3seventhCompliance);
				window.localStorage.setItem('B.3compliance8', B_3eigthCompliance);
				window.localStorage.setItem('B.3compliance9', B_3ninthCompliance);
			}
			else if(page=="C_1"){
				var score12 = document.getElementById('C.1score').innerHTML;
				var endNotes12 = document.getElementById('C.1notes').value;
				var C_1firstCompliance = document.getElementById('C.1compliance1').value;
				var C_1secondCompliance = document.getElementById('C.1compliance2').value;
				var C_1thirdCompliance = document.getElementById('C.1compliance3').value;
				var C_1fourthCompliance = document.getElementById('C.1compliance4').value;
				var C_1fifthCompliance = document.getElementById('C.1compliance5').value;
				var C_1sixthCompliance = document.getElementById('C.1compliance6').value;
				var C_1seventhCompliance = document.getElementById('C.1compliance7').value;
				var C_1eigthCompliance = document.getElementById('C.1compliance8').value;
				var C_1ninthCompliance = document.getElementById('C.1compliance9').value;
				var C_1tenthCompliance = document.getElementById('C.1compliance10').value;
				var C_1eleventhCompliance = document.getElementById('C.1compliance11').value;
				var C_1twelthCompliance = document.getElementById('C.1compliance12').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('C.1notes', endNotes12);
				window.localStorage.setItem('C.1score', score12);
				window.localStorage.setItem('C.1compliance1', C_1firstCompliance);
				window.localStorage.setItem('C.1compliance2', C_1secondCompliance);
				window.localStorage.setItem('C.1compliance3', C_1thirdCompliance);
				window.localStorage.setItem('C.1compliance4', C_1fourthCompliance);
				window.localStorage.setItem('C.1compliance5', C_1fifthCompliance);
				window.localStorage.setItem('C.1compliance6', C_1sixthCompliance);
				window.localStorage.setItem('C.1compliance7', C_1seventhCompliance);
				window.localStorage.setItem('C.1compliance8', C_1eigthCompliance);
				window.localStorage.setItem('C.1compliance9', C_1ninthCompliance);
				window.localStorage.setItem('C.1compliance10', C_1tenthCompliance);
				window.localStorage.setItem('C.1compliance11', C_1eleventhCompliance);
				window.localStorage.setItem('C.1compliance12', C_1twelthCompliance);
			}
			else{
				console.log('..');
			}
		}
	function viewData(){
    	//shows all the key / value pairs
    	for (i = 0; i < localStorage.length; i++){
      		key = localStorage.key(i);
      		value = localStorage.getItem(key);
      		console.log(key + ": " + value);
    	} // end for loop
  }
    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
        console.log(navigator.camera);
    }


	//camera functions
   function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64-encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      smallImage.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The in-line CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }
    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    //
    function onFail(message) {
      alert('Failed because: ' + message);
    }


	//Tracking the page on a global level through local storage. 
	globalPageIdentifier=localStorage.getItem("s");
	//if close out of program globalPageIdentifier==checks?? window.onbeforeunload?
	if(globalPageIdentifier=="A_1"){
		window.onload=initialize('A_1');
	}
	else if(globalPageIdentifier=="A_2"){
		window.onload=initialize('A_2');
	}
	else if(globalPageIdentifier=="A_3"){
		window.onload=initialize('A_3');
	}
	else if(globalPageIdentifier=="A_4"){
		window.onload=initialize('A_4');
	}
	else if(globalPageIdentifier=="A_5"){
		window.onload=initialize('A_5');
	}
	else if(globalPageIdentifier=="A_6"){
		window.onload=initialize('A_6');
	}
	else if(globalPageIdentifier=="A_7"){
		window.onload=initialize('A_7');
	}
	else if(globalPageIdentifier=="A_8"){
		window.onload=initialize('A_8');
	}
	else if(globalPageIdentifier=="B_1"){
		window.onload=initialize('B_1');
	}
	else if(globalPageIdentifier=="B_2"){
		window.onload=initialize('B_2');
	}
	else if(globalPageIdentifier=="B_3"){
		window.onload=initialize('B_3');
	}
	else if(globalPageIdentifier=="C_1"){
		window.onload=initialize('B_3');
	}
	else{
		window.onload=initialize('checks');
	}
	//something to do
	window.onbeforeunload = exit();

	function exit(){
		console.log('wait!!');
	}