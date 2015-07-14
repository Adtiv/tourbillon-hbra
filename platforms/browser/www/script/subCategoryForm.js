		var score= 0;
		var i;
		var index=0;
		var scoreTrack = new Array(15+1).join('0').split('').map(parseFloat);
		var allScoresArray = new Array(20);
		var checkedForms= new Array(20+1).join('0').split('').map(parseFloat);
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
	        else if(questionNumber=="questionTwelve"){
	        	index = 11;
	        }
	        else if(questionNumber=="questionThirteen"){
	        	index = 12; 
	        }
	        else if(questionNumber=="questionFourteen"){
	        	index = 13; 
	        }
	        else if(questionNumber=="questionFifteen"){
	        	index = 14; 
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
	    var l13;
	    var l14;
	    var l15;
	    var l16;
	    var l17;
	    var l18;
	    var l19;
	    var l20;
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
	    var getScore13;
	    var getScore14;
	    var getScore15;
	    var getScore16;
	    var getScore17;
	    var getScore18;
	    var getScore19;
	    var getScore20;
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
	    var storeScore12 = new Array(12);     
	    var storeScore13 = new Array(9); 
	    var storeScore14 = new Array(13); 
	    var storeScore15 = new Array(13); 
	    var storeScore16 = new Array(12); 
	    var storeScore17 = new Array(15);
	    var storeScore18 = new Array(8);
	    var storeScore19 = new Array(8);
	    var storeScore20 = new Array(12);  
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
		    getScore13 = localStorage.getItem('l13');
		    getScore14 = localStorage.getItem('l14');
		    getScore15 = localStorage.getItem('l15');
		    getScore16 = localStorage.getItem('l16');
		    getScore17 = localStorage.getItem('l17');
		    getScore18 = localStorage.getItem('l18');
		    getScore19 = localStorage.getItem('l19');
		    getScore20 = localStorage.getItem('l20');
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
		    console.log('getScore13' + getScore13);
		    console.log('getScore14' + getScore14);
		    console.log('getScore15' + getScore15);
		    console.log('getScore16' + getScore16); 
		    console.log('getScore17' + getScore17);
		    console.log('getScore18' + getScore18);  
		    console.log('getScore19' + getScore19);
		    console.log('getScore20' + getScore20);    	
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
	    	else if(page=="C.2"){
				if(getScore13==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[12]=scoreTrack;
			    	for(i=0; i<9; i++){
			    		finalScore+=allScoresArray[12][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("C.2score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[12]=getScore13;
					for(i=0; i<18; i=i+2){
						if(allScoresArray[12][i]=="0"){
							storeScore13[i/2]=0;
						}
						else if(allScoresArray[12][i]=="1"){
							storeScore13[i/2]=1;
						}
						else if(allScoresArray[12][i]=="3"){
							storeScore13[i/2]=3;
						}
						else if(allScoresArray[12][i]=="5"){
							storeScore13[i/2]=5;
						}
					}
		    		storeScore13[index]= score;
			    	for(i=0; i<9; i++){
			    		finalScore+=storeScore13[i];
			    	}
			    	score = finalScore;
			    	l13 =window.localStorage.setItem('l13', storeScore13);
		    		document.getElementById("C.2score").innerHTML=score;
				}
	    	}
	    	else if(page=="D.1"){
				if(getScore14==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[13]=scoreTrack;
			    	for(i=0; i<13; i++){
			    		finalScore+=allScoresArray[13][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("D.1score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[13]=getScore14;
					for(i=0; i<26; i=i+2){
						if(allScoresArray[13][i]=="0"){
							storeScore14[i/2]=0;
						}
						else if(allScoresArray[13][i]=="1"){
							storeScore14[i/2]=1;
						}
						else if(allScoresArray[13][i]=="3"){
							storeScore14[i/2]=3;
						}
						else if(allScoresArray[13][i]=="5"){
							storeScore14[i/2]=5;
						}
					}
		    		storeScore14[index]= score;
			    	for(i=0; i<13; i++){
			    		finalScore+=storeScore14[i];
			    	}
			    	score = finalScore;
			    	l14 =window.localStorage.setItem('l14', storeScore14);
		    		document.getElementById("D.1score").innerHTML=score;
				}
	    	}
	    	else if(page=="D.2"){
				if(getScore15==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[14]=scoreTrack;
			    	for(i=0; i<13; i++){
			    		finalScore+=allScoresArray[14][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("D.2score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[14]=getScore15;
					for(i=0; i<26; i=i+2){
						if(allScoresArray[14][i]=="0"){
							storeScore15[i/2]=0;
						}
						else if(allScoresArray[14][i]=="1"){
							storeScore15[i/2]=1;
						}
						else if(allScoresArray[14][i]=="3"){
							storeScore15[i/2]=3;
						}
						else if(allScoresArray[14][i]=="5"){
							storeScore15[i/2]=5;
						}
					}
		    		storeScore15[index]= score;
			    	for(i=0; i<13; i++){
			    		finalScore+=storeScore15[i];
			    	}
			    	score = finalScore;
			    	l15 =window.localStorage.setItem('l15', storeScore15);
		    		document.getElementById("D.2score").innerHTML=score;
				}
	    	}
	    	else if(page=="D.3"){
				if(getScore16==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[15]=scoreTrack;
			    	for(i=0; i<12; i++){
			    		finalScore+=allScoresArray[15][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("D.3score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[15]=getScore16;
					for(i=0; i<24; i=i+2){
						if(allScoresArray[15][i]=="0"){
							storeScore16[i/2]=0;
						}
						else if(allScoresArray[15][i]=="1"){
							storeScore16[i/2]=1;
						}
						else if(allScoresArray[15][i]=="3"){
							storeScore16[i/2]=3;
						}
						else if(allScoresArray[15][i]=="5"){
							storeScore16[i/2]=5;
						}
					}
		    		storeScore16[index]= score;
			    	for(i=0; i<12; i++){
			    		finalScore+=storeScore16[i];
			    	}
			    	score = finalScore;
			    	l16 =window.localStorage.setItem('l16', storeScore16);
		    		document.getElementById("D.3score").innerHTML=score;
				}
	    	}
	    	else if(page=="D.4"){
				if(getScore17==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[16]=scoreTrack;
			    	for(i=0; i<15; i++){
			    		finalScore+=allScoresArray[16][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("D.4score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[16]=getScore17;
					for(i=0; i<30; i=i+2){
						if(allScoresArray[16][i]=="0"){
							storeScore17[i/2]=0;
						}
						else if(allScoresArray[16][i]=="1"){
							storeScore17[i/2]=1;
						}
						else if(allScoresArray[16][i]=="3"){
							storeScore17[i/2]=3;
						}
						else if(allScoresArray[16][i]=="5"){
							storeScore17[i/2]=5;
						}
					}
		    		storeScore17[index]= score;
			    	for(i=0; i<15; i++){
			    		finalScore+=storeScore17[i];
			    	}
			    	score = finalScore;
			    	l17 =window.localStorage.setItem('l17', storeScore17);
		    		document.getElementById("D.4score").innerHTML=score;
				}
	    	}
	    	else if(page=="E.1"){
				if(getScore18==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[17]=scoreTrack;
			    	for(i=0; i<8; i++){
			    		finalScore+=allScoresArray[17][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("E.1score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[17]=getScore18;
					for(i=0; i<16; i=i+2){
						if(allScoresArray[17][i]=="0"){
							storeScore18[i/2]=0;
						}
						else if(allScoresArray[17][i]=="1"){
							storeScore18[i/2]=1;
						}
						else if(allScoresArray[17][i]=="3"){
							storeScore18[i/2]=3;
						}
						else if(allScoresArray[17][i]=="5"){
							storeScore18[i/2]=5;
						}
					}
		    		storeScore18[index]= score;
			    	for(i=0; i<8; i++){
			    		finalScore+=storeScore18[i];
			    	}
			    	score = finalScore;
			    	l18 =window.localStorage.setItem('l18', storeScore18);
		    		document.getElementById("E.1score").innerHTML=score;
				}
	    	}
	    	else if(page=="E.2"){
				if(getScore19==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[18]=scoreTrack;
			    	for(i=0; i<8; i++){
			    		finalScore+=allScoresArray[18][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("E.2score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[18]=getScore19;
					for(i=0; i<16; i=i+2){
						if(allScoresArray[18][i]=="0"){
							storeScore19[i/2]=0;
						}
						else if(allScoresArray[18][i]=="1"){
							storeScore19[i/2]=1;
						}
						else if(allScoresArray[18][i]=="3"){
							storeScore19[i/2]=3;
						}
						else if(allScoresArray[18][i]=="5"){
							storeScore19[i/2]=5;
						}
					}
		    		storeScore19[index]= score;
			    	for(i=0; i<8; i++){
			    		finalScore+=storeScore19[i];
			    	}
			    	score = finalScore;
			    	l19 =window.localStorage.setItem('l19', storeScore19);
		    		document.getElementById("E.2score").innerHTML=score;
				}
	    	}
	    	else if(page=="E.3"){
				if(getScore20==null){
	    			console.log('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[19]=scoreTrack;
			    	for(i=0; i<12; i++){
			    		finalScore+=allScoresArray[19][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("E.3score").innerHTML=score;
				}
				else{
					console.log('second');
					allScoresArray[19]=getScore20;
					for(i=0; i<24; i=i+2){
						if(allScoresArray[19][i]=="0"){
							storeScore20[i/2]=0;
						}
						else if(allScoresArray[19][i]=="1"){
							storeScore20[i/2]=1;
						}
						else if(allScoresArray[19][i]=="3"){
							storeScore20[i/2]=3;
						}
						else if(allScoresArray[19][i]=="5"){
							storeScore20[i/2]=5;
						}
					}
		    		storeScore20[index]= score;
			    	for(i=0; i<12; i++){
			    		finalScore+=storeScore20[i];
			    	}
			    	score = finalScore;
			    	l20 =window.localStorage.setItem('l20', storeScore20);
		    		document.getElementById("E.3score").innerHTML=score;
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
				checkedForms[12]=1;
				/*
				if(isChecked==true){
					checkedForms[12]=1;
				}
				else{
					checkedForms[12]=0;
				}
				*/
			}
			else if(id=="crane"){
				checkedForms[13]=1;
				/*
				if(isChecked==true){
					checkedForms[13]=1;
				}
				else{
					checkedForms[13]=0;
				}
				*/
			}
			else if(id=="heavyEq"){
				checkedForms[14]=1;
				/*
				if(isChecked==true){
					checkedForms[14]=1;
				}
				else{
					checkedForms[14]=0;
				}
				*/
			}
			else if(id=="trench"){
				checkedForms[15]=1;
				/*
				if(isChecked==true){
					checkedForms[15]=1;
				}
				else{
					checkedForms[15]=0;
				}
				*/
			}
			else if(id=="demo"){
				checkedForms[16]=1;
				/*
				if(isChecked==true){
					checkedForms[16]=1;
				}
				else{
					checkedForms[16]=0;
				}
				*/
			}
			else if(id=="sErection"){
				checkedForms[17]=1;
				/*
				if(isChecked==true){
					checkedForms[17]=1;
				}
				else{
					checkedForms[17]=0;
				}
				*/
			}
			else if(id=="conc"){
				checkedForms[18]=1;
				/*
				if(isChecked==true){
					checkedForms[18]=1;
				}
				else{
					checkedForms[18]=0;
				}
				*/
			}
			else{
				checkedForms[19]=1;
				/*
				if(isChecked==true){
					checkedForms[19]=1;
				}
				else{
					checkedForms[19]=0;
				}
				*/
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
			else if(storePage=="C_2"){
				if(getScore13==null){
					if(allScoresArray[12]!=null){
						l13 =window.localStorage.setItem('l13', allScoresArray[12]);
					}
				}
				else{
					l13 =window.localStorage.setItem('l13', storeScore13);
				}
				localStorageSubCatForms('C_2');
			}
			else if(storePage=="D_1"){
				if(getScore14==null){
					if(allScoresArray[13]!=null){
						l14 =window.localStorage.setItem('l14', allScoresArray[13]);
					}
				}
				else{
					l14 =window.localStorage.setItem('l14', storeScore14);
				}
				localStorageSubCatForms('D_1');
			}
			else if(storePage=="D_2"){
				if(getScore15==null){
					if(allScoresArray[14]!=null){
						l15 =window.localStorage.setItem('l15', allScoresArray[14]);
					}
				}
				else{
					l15 =window.localStorage.setItem('l15', storeScore15);
				}
				localStorageSubCatForms('D_2');
			}
			else if(storePage=="D_3"){
				if(getScore16==null){
					if(allScoresArray[15]!=null){
						l16 =window.localStorage.setItem('l16', allScoresArray[15]);
					}
				}
				else{
					l16 =window.localStorage.setItem('l16', storeScore16);
				}
				localStorageSubCatForms('D_3');
			}
			else if(storePage=="D_4"){
				if(getScore17==null){
					if(allScoresArray[16]!=null){
						l17 =window.localStorage.setItem('l17', allScoresArray[16]);
					}
				}
				else{
					l17 =window.localStorage.setItem('l17', storeScore17);
				}
				localStorageSubCatForms('D_4');
			}
			else if(storePage=="E_1"){
				if(getScore18==null){
					if(allScoresArray[17]!=null){
						l18 =window.localStorage.setItem('l18', allScoresArray[17]);
					}
				}
				else{
					l18 =window.localStorage.setItem('l18', storeScore18);
				}
				localStorageSubCatForms('E_1');
			}
			else if(storePage=="E_2"){
				if(getScore19==null){
					if(allScoresArray[18]!=null){
						l19 =window.localStorage.setItem('l19', allScoresArray[18]);
					}
				}
				else{
					l19 =window.localStorage.setItem('l19', storeScore19);
				}
				localStorageSubCatForms('E_2');
			}
			else if(storePage=="E_3"){
				if(getScore20==null){
					if(allScoresArray[19]!=null){
						l20 =window.localStorage.setItem('l20', allScoresArray[19]);
					}
				}
				else{
					l20 =window.localStorage.setItem('l20', storeScore20);
				}
				localStorageSubCatForms('E_3');
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
					else if(x==12){
						z = "C_2";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="C.2.html";
					}
					else if(x==13){
						z = "D_1";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="D.1.html";
					}
					else if(x==14){
						z = "D_2";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="D.2.html";
					}
					else if(x==15){
						z = "D_3";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="D.3.html";
					}
					else if(x==16){
						z = "D_4";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="D.4.html";
					}
					else if(x==17){
						z = "E_1";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="E.1.html";
					}
					else if(x==18){
						z = "E_2";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="E.2.html";
					}
					else if(x==19){
						z = "E_3";
						s=window.localStorage.setItem("s", z);
						zeroOutScore();
						window.location.href="E.3.html";
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
			else if(page=="C_2"){
				if(getScore13==null){
					if(allScoresArray[12]!=null){
						l13 =window.localStorage.setItem('l13', allScoresArray[12]);
					}
				}
				else{
					l13 =window.localStorage.setItem('l13', storeScore13);
				}
				localStorageSubCatForms('C_2');
			}
			else if(page=="D_1"){
				if(getScore14==null){
					if(allScoresArray[13]!=null){
						l14 =window.localStorage.setItem('l14', allScoresArray[13]);
					}
				}
				else{
					l14 =window.localStorage.setItem('l14', storeScore14);
				}
				localStorageSubCatForms('D_1');
			}
			else if(page=="D_2"){
				if(getScore15==null){
					if(allScoresArray[14]!=null){
						l15 =window.localStorage.setItem('l15', allScoresArray[14]);
					}
				}
				else{
					l15 =window.localStorage.setItem('l15', storeScore15);
				}
				localStorageSubCatForms('D_2');
			}
			else if(page=="D_3"){
				if(getScore16==null){
					if(allScoresArray[15]!=null){
						l16 =window.localStorage.setItem('l16', allScoresArray[15]);
					}
				}
				else{
					l16 =window.localStorage.setItem('l16', storeScore16);
				}
				localStorageSubCatForms('D_3');
			}
			else if(page=="D_4"){
				if(getScore17==null){
					if(allScoresArray[16]!=null){
						l17 =window.localStorage.setItem('l17', allScoresArray[16]);
					}
				}
				else{
					l17 =window.localStorage.setItem('l17', storeScore17);
				}
				localStorageSubCatForms('D_4');
			}
			else if(page=="E_1"){
				if(getScore18==null){
					if(allScoresArray[17]!=null){
						l18 =window.localStorage.setItem('l18', allScoresArray[17]);
					}
				}
				else{
					l18 =window.localStorage.setItem('l18', storeScore18);
				}
				localStorageSubCatForms('E_1');
			}
			else if(page=="E_2"){
				if(getScore19==null){
					if(allScoresArray[18]!=null){
						l19 =window.localStorage.setItem('l19', allScoresArray[18]);
					}
				}
				else{
					l19 =window.localStorage.setItem('l19', storeScore19);
				}
				localStorageSubCatForms('E_2');
			}
			else if(page=="E_3"){
				if(getScore20==null){
					if(allScoresArray[19]!=null){
						l20 =window.localStorage.setItem('l20', allScoresArray[19]);
					}
				}
				else{
					l20 =window.localStorage.setItem('l20', storeScore20);
				}
				localStorageSubCatForms('E_3');
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
					
					if(localStorage.getItem('imagepath1')!=null){
						var ip1 = localStorage.getItem('imagepath1');
						var photo1 = document.getElementById("photo1");
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'block';
	                }
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
				else if(page=="C_2"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('C_2arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('C.2notes').value = window.localStorage.getItem('C.2notes');
					var initGetScore13=localStorage.getItem('l13');
					if(initGetScore13!=null){
						document.getElementById('C.2score').innerHTML = window.localStorage.getItem('C.2score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('C.2compliance1').value = window.localStorage.getItem('C.2compliance1');
								var showDiv=document.getElementById('C.2firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('C.2compliance2').value = window.localStorage.getItem('C.2compliance2');
								var showDiv=document.getElementById('C.2secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('C.2compliance3').value = window.localStorage.getItem('C.2compliance3');
								var showDiv=document.getElementById('C.2thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('C.2compliance4').value = window.localStorage.getItem('C.2compliance4');
								var showDiv=document.getElementById('C.2fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('C.2compliance5').value = window.localStorage.getItem('C.2compliance5');
								var showDiv=document.getElementById('C.2fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('C.2compliance6').value = window.localStorage.getItem('C.2compliance6');
								var showDiv=document.getElementById('C.2sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('C.2compliance7').value = window.localStorage.getItem('C.2compliance7');
								var showDiv=document.getElementById('C.2seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('C.2compliance8').value = window.localStorage.getItem('C.2compliance8');
								var showDiv=document.getElementById('C.2eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('C.2compliance9').value = window.localStorage.getItem('C.2compliance9');
								var showDiv=document.getElementById('C.2ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="D_1"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('D_1arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('D.1notes').value = window.localStorage.getItem('D.1notes');
					var initGetScore14=localStorage.getItem('l14');
					if(initGetScore14!=null){
						document.getElementById('D.1score').innerHTML = window.localStorage.getItem('D.1score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('D.1compliance1').value = window.localStorage.getItem('D.1compliance1');
								var showDiv=document.getElementById('D.1firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('D.1compliance2').value = window.localStorage.getItem('D.1compliance2');
								var showDiv=document.getElementById('D.1secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('D.1compliance3').value = window.localStorage.getItem('D.1compliance3');
								var showDiv=document.getElementById('D.1thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('D.1compliance4').value = window.localStorage.getItem('D.1compliance4');
								var showDiv=document.getElementById('D.1fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('D.1compliance5').value = window.localStorage.getItem('D.1compliance5');
								var showDiv=document.getElementById('D.1fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('D.1compliance6').value = window.localStorage.getItem('D.1compliance6');
								var showDiv=document.getElementById('D.1sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('D.1compliance7').value = window.localStorage.getItem('D.1compliance7');
								var showDiv=document.getElementById('D.1seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('D.1compliance8').value = window.localStorage.getItem('D.1compliance8');
								var showDiv=document.getElementById('D.1eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('D.1compliance9').value = window.localStorage.getItem('D.1compliance9');
								var showDiv=document.getElementById('D.1ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('D.1compliance10').value = window.localStorage.getItem('D.1compliance10');
								var showDiv=document.getElementById('D.1tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('D.1compliance11').value = window.localStorage.getItem('D.1compliance11');
								var showDiv=document.getElementById('D.1eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box12'){
								document.getElementById('D.1compliance12').value = window.localStorage.getItem('D.1compliance12');
								var showDiv=document.getElementById('D.1twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box13'){
								document.getElementById('D.1compliance13').value = window.localStorage.getItem('D.1compliance13');
								var showDiv=document.getElementById('D.1thirteenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="D_2"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('D_2arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('D.2notes').value = window.localStorage.getItem('D.2notes');
					var initGetScore15=localStorage.getItem('l15');
					if(initGetScore15!=null){
						document.getElementById('D.2score').innerHTML = window.localStorage.getItem('D.2score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('D.2compliance1').value = window.localStorage.getItem('D.2compliance1');
								var showDiv=document.getElementById('D.2firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('D.2compliance2').value = window.localStorage.getItem('D.2compliance2');
								var showDiv=document.getElementById('D.2secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('D.2compliance3').value = window.localStorage.getItem('D.2compliance3');
								var showDiv=document.getElementById('D.2thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('D.2compliance4').value = window.localStorage.getItem('D.2compliance4');
								var showDiv=document.getElementById('D.2fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('D.2compliance5').value = window.localStorage.getItem('D.2compliance5');
								var showDiv=document.getElementById('D.2fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('D.2compliance6').value = window.localStorage.getItem('D.2compliance6');
								var showDiv=document.getElementById('D.2sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('D.2compliance7').value = window.localStorage.getItem('D.2compliance7');
								var showDiv=document.getElementById('D.2seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('D.2compliance8').value = window.localStorage.getItem('D.2compliance8');
								var showDiv=document.getElementById('D.2eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('D.2compliance9').value = window.localStorage.getItem('D.2compliance9');
								var showDiv=document.getElementById('D.2ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('D.2compliance10').value = window.localStorage.getItem('D.2compliance10');
								var showDiv=document.getElementById('D.2tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('D.2compliance11').value = window.localStorage.getItem('D.2compliance11');
								var showDiv=document.getElementById('D.2eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box12'){
								document.getElementById('D.2compliance12').value = window.localStorage.getItem('D.2compliance12');
								var showDiv=document.getElementById('D.2twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box13'){
								document.getElementById('D.2compliance13').value = window.localStorage.getItem('D.2compliance13');
								var showDiv=document.getElementById('D.2thirteenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="D_3"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('D_3arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('D.3notes').value = window.localStorage.getItem('D.3notes');
					var initGetScore16=localStorage.getItem('l16');
					if(initGetScore16!=null){
						document.getElementById('D.3score').innerHTML = window.localStorage.getItem('D.3score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('D.3compliance1').value = window.localStorage.getItem('D.3compliance1');
								var showDiv=document.getElementById('D.3firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('D.3compliance2').value = window.localStorage.getItem('D.3compliance2');
								var showDiv=document.getElementById('D.3secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('D.3compliance3').value = window.localStorage.getItem('D.3compliance3');
								var showDiv=document.getElementById('D.3thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('D.3compliance4').value = window.localStorage.getItem('D.3compliance4');
								var showDiv=document.getElementById('D.3fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('D.3compliance5').value = window.localStorage.getItem('D.3compliance5');
								var showDiv=document.getElementById('D.3fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('D.3compliance6').value = window.localStorage.getItem('D.3compliance6');
								var showDiv=document.getElementById('D.3sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('D.3compliance7').value = window.localStorage.getItem('D.3compliance7');
								var showDiv=document.getElementById('D.3seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('D.3compliance8').value = window.localStorage.getItem('D.3compliance8');
								var showDiv=document.getElementById('D.3eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('D.3compliance9').value = window.localStorage.getItem('D.3compliance9');
								var showDiv=document.getElementById('D.3ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('D.3compliance10').value = window.localStorage.getItem('D.3compliance10');
								var showDiv=document.getElementById('D.3tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('D.3compliance11').value = window.localStorage.getItem('D.3compliance11');
								var showDiv=document.getElementById('D.3eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box12'){
								document.getElementById('D.3compliance12').value = window.localStorage.getItem('D.3compliance12');
								var showDiv=document.getElementById('D.3twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="D_4"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('D_4arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('D.4notes').value = window.localStorage.getItem('D.4notes');
					var initGetScore17=localStorage.getItem('l17');
					if(initGetScore17!=null){
						document.getElementById('D.4score').innerHTML = window.localStorage.getItem('D.4score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('D.4compliance1').value = window.localStorage.getItem('D.4compliance1');
								var showDiv=document.getElementById('D.4firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('D.4compliance2').value = window.localStorage.getItem('D.4compliance2');
								var showDiv=document.getElementById('D.4secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('D.4compliance3').value = window.localStorage.getItem('D.4compliance3');
								var showDiv=document.getElementById('D.4thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('D.4compliance4').value = window.localStorage.getItem('D.4compliance4');
								var showDiv=document.getElementById('D.4fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('D.4compliance5').value = window.localStorage.getItem('D.4compliance5');
								var showDiv=document.getElementById('D.4fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('D.4compliance6').value = window.localStorage.getItem('D.4compliance6');
								var showDiv=document.getElementById('D.4sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('D.4compliance7').value = window.localStorage.getItem('D.4compliance7');
								var showDiv=document.getElementById('D.4seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('D.4compliance8').value = window.localStorage.getItem('D.4compliance8');
								var showDiv=document.getElementById('D.4eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('D.4compliance9').value = window.localStorage.getItem('D.4compliance9');
								var showDiv=document.getElementById('D.4ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('D.4compliance10').value = window.localStorage.getItem('D.4compliance10');
								var showDiv=document.getElementById('D.4tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('D.4compliance11').value = window.localStorage.getItem('D.4compliance11');
								var showDiv=document.getElementById('D.4eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box12'){
								document.getElementById('D.4compliance12').value = window.localStorage.getItem('D.4compliance12');
								var showDiv=document.getElementById('D.4twelthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box13'){
								document.getElementById('D.4compliance13').value = window.localStorage.getItem('D.4compliance13');
								var showDiv=document.getElementById('D.4thirteenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box14'){
								document.getElementById('D.4compliance14').value = window.localStorage.getItem('D.4compliance14');
								var showDiv=document.getElementById('D.4fourteenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box15'){
								document.getElementById('D.4compliance15').value = window.localStorage.getItem('D.4compliance15');
								var showDiv=document.getElementById('D.4fifteenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="E_1"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('E_1arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('E.1notes').value = window.localStorage.getItem('E.1notes');
					var initGetScore18=localStorage.getItem('l18');
					if(initGetScore18!=null){
						document.getElementById('E.1score').innerHTML = window.localStorage.getItem('E.1score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('E.1compliance1').value = window.localStorage.getItem('E.1compliance1');
								var showDiv=document.getElementById('E.1firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('E.1compliance2').value = window.localStorage.getItem('E.1compliance2');
								var showDiv=document.getElementById('E.1secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('E.1compliance3').value = window.localStorage.getItem('E.1compliance3');
								var showDiv=document.getElementById('E.1thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('E.1compliance4').value = window.localStorage.getItem('E.1compliance4');
								var showDiv=document.getElementById('E.1fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('E.1compliance5').value = window.localStorage.getItem('E.1compliance5');
								var showDiv=document.getElementById('E.1fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('E.1compliance6').value = window.localStorage.getItem('E.1compliance6');
								var showDiv=document.getElementById('E.1sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('E.1compliance7').value = window.localStorage.getItem('E.1compliance7');
								var showDiv=document.getElementById('E.1seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('E.1compliance8').value = window.localStorage.getItem('E.1compliance8');
								var showDiv=document.getElementById('E.1eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="E_2"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('E_2arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('E.2notes').value = window.localStorage.getItem('E.2notes');
					var initGetScore19=localStorage.getItem('l19');
					if(initGetScore19!=null){
						document.getElementById('E.2score').innerHTML = window.localStorage.getItem('E.2score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('E.2compliance1').value = window.localStorage.getItem('E.2compliance1');
								var showDiv=document.getElementById('E.2firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('E.2compliance2').value = window.localStorage.getItem('E.2compliance2');
								var showDiv=document.getElementById('E.2secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('E.2compliance3').value = window.localStorage.getItem('E.2compliance3');
								var showDiv=document.getElementById('E.2thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('E.2compliance4').value = window.localStorage.getItem('E.2compliance4');
								var showDiv=document.getElementById('E.2fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('E.2compliance5').value = window.localStorage.getItem('E.2compliance5');
								var showDiv=document.getElementById('E.2fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('E.2compliance6').value = window.localStorage.getItem('E.2compliance6');
								var showDiv=document.getElementById('E.2sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('E.2compliance7').value = window.localStorage.getItem('E.2compliance7');
								var showDiv=document.getElementById('E.2seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('E.2compliance8').value = window.localStorage.getItem('E.2compliance8');
								var showDiv=document.getElementById('E.2eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="E_3"){
					//to see if your on the last form. Replaces next arrow with submit button.
					if(pNum==fLen){
						document.getElementById('btnNext').style.visibility="hidden";
						document.getElementById('E_3arrow').style.visibility="hidden";
						document.getElementById('btnSubmit').style.visibility="visible";
					}
					document.getElementById('E.3notes').value = window.localStorage.getItem('E.3notes');
					var initGetScore20=localStorage.getItem('l20');
					if(initGetScore20!=null){
						document.getElementById('E.3score').innerHTML = window.localStorage.getItem('E.3score');
					}
					$('input[type=radio]').each(function()
				    {
				        var state = JSON.parse( localStorage.getItem('radio_'  + $(this).attr('id')) );
				        
				        if (state) this.checked = state.checked;
						if((this.value=='partiallyCompliant' || this.value=='nonCompliant') && state.checked){
							if(this.name=='box1'){
								document.getElementById('E.3compliance1').value = window.localStorage.getItem('E.3compliance1');
								var showDiv=document.getElementById('E.3firstDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box2'){
								document.getElementById('E.3compliance2').value = window.localStorage.getItem('E.3compliance2');
								var showDiv=document.getElementById('E.3secondDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box3'){
								document.getElementById('E.3compliance3').value = window.localStorage.getItem('E.3compliance3');
								var showDiv=document.getElementById('E.3thirdDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box4'){
								document.getElementById('E.3compliance4').value = window.localStorage.getItem('E.3compliance4');
								var showDiv=document.getElementById('E.3fourthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box5'){
								document.getElementById('E.3compliance5').value = window.localStorage.getItem('E.3compliance5');
								var showDiv=document.getElementById('E.3fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box6'){
								document.getElementById('E.3compliance6').value = window.localStorage.getItem('E.3compliance6');
								var showDiv=document.getElementById('E.3sixthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box7'){
								document.getElementById('E.3compliance7').value = window.localStorage.getItem('E.3compliance7');
								var showDiv=document.getElementById('E.3seventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box8'){
								document.getElementById('E.3compliance8').value = window.localStorage.getItem('E.3compliance8');
								var showDiv=document.getElementById('E.3eigthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box9'){
								document.getElementById('E.3compliance9').value = window.localStorage.getItem('E.3compliance9');
								var showDiv=document.getElementById('E.3ninthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box10'){
								document.getElementById('E.3compliance10').value = window.localStorage.getItem('E.3compliance10');
								var showDiv=document.getElementById('E.3tenthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box11'){
								document.getElementById('E.3compliance11').value = window.localStorage.getItem('E.3compliance11');
								var showDiv=document.getElementById('E.3eleventhDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
							else if(this.name=='box12'){
								document.getElementById('E.3compliance12').value = window.localStorage.getItem('E.3compliance12');
								var showDiv=document.getElementById('E.3twelthDiv');
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
			else if(page=="C_2"){
				var score13 = document.getElementById('C.2score').innerHTML;
				var endNotes13 = document.getElementById('C.2notes').value;
				var C_2firstCompliance = document.getElementById('C.2compliance1').value;
				var C_2secondCompliance = document.getElementById('C.2compliance2').value;
				var C_2thirdCompliance = document.getElementById('C.2compliance3').value;
				var C_2fourthCompliance = document.getElementById('C.2compliance4').value;
				var C_2fifthCompliance = document.getElementById('C.2compliance5').value;
				var C_2sixthCompliance = document.getElementById('C.2compliance6').value;
				var C_2seventhCompliance = document.getElementById('C.2compliance7').value;
				var C_2eigthCompliance = document.getElementById('C.2compliance8').value;
				var C_2ninthCompliance = document.getElementById('C.2compliance9').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('C.2notes', endNotes13);
				window.localStorage.setItem('C.2score', score13);
				window.localStorage.setItem('C.2compliance1', C_2firstCompliance);
				window.localStorage.setItem('C.2compliance2', C_2secondCompliance);
				window.localStorage.setItem('C.2compliance3', C_2thirdCompliance);
				window.localStorage.setItem('C.2compliance4', C_2fourthCompliance);
				window.localStorage.setItem('C.2compliance5', C_2fifthCompliance);
				window.localStorage.setItem('C.2compliance6', C_2sixthCompliance);
				window.localStorage.setItem('C.2compliance7', C_2seventhCompliance);
				window.localStorage.setItem('C.2compliance8', C_2eigthCompliance);
				window.localStorage.setItem('C.2compliance9', C_2ninthCompliance);
			}
			else if(page=="D_1"){
				var score14 = document.getElementById('D.1score').innerHTML;
				var endNotes14 = document.getElementById('D.1notes').value;
				var D_1firstCompliance = document.getElementById('D.1compliance1').value;
				var D_1secondCompliance = document.getElementById('D.1compliance2').value;
				var D_1thirdCompliance = document.getElementById('D.1compliance3').value;
				var D_1fourthCompliance = document.getElementById('D.1compliance4').value;
				var D_1fifthCompliance = document.getElementById('D.1compliance5').value;
				var D_1sixthCompliance = document.getElementById('D.1compliance6').value;
				var D_1seventhCompliance = document.getElementById('D.1compliance7').value;
				var D_1eigthCompliance = document.getElementById('D.1compliance8').value;
				var D_1ninthCompliance = document.getElementById('D.1compliance9').value;
				var D_1tenthCompliance = document.getElementById('D.1compliance10').value;
				var D_1eleventhCompliance = document.getElementById('D.1compliance11').value;
				var D_1twelthCompliance = document.getElementById('D.1compliance12').value;
				var D_1thirteenthCompliance = document.getElementById('D.1compliance13').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('D.1notes', endNotes14);
				window.localStorage.setItem('D.1score', score14);
				window.localStorage.setItem('D.1compliance1', D_1firstCompliance);
				window.localStorage.setItem('D.1compliance2', D_1secondCompliance);
				window.localStorage.setItem('D.1compliance3', D_1thirdCompliance);
				window.localStorage.setItem('D.1compliance4', D_1fourthCompliance);
				window.localStorage.setItem('D.1compliance5', D_1fifthCompliance);
				window.localStorage.setItem('D.1compliance6', D_1sixthCompliance);
				window.localStorage.setItem('D.1compliance7', D_1seventhCompliance);
				window.localStorage.setItem('D.1compliance8', D_1eigthCompliance);
				window.localStorage.setItem('D.1compliance9', D_1ninthCompliance);
				window.localStorage.setItem('D.1compliance10', D_1tenthCompliance);
				window.localStorage.setItem('D.1compliance11', D_1eleventhCompliance);
				window.localStorage.setItem('D.1compliance12', D_1twelthCompliance);
				window.localStorage.setItem('D.1compliance13', D_1thirteenthCompliance);
			}
			else if(page=="D_2"){
				var score15 = document.getElementById('D.2score').innerHTML;
				var endNotes15 = document.getElementById('D.2notes').value;
				var D_2firstCompliance = document.getElementById('D.2compliance1').value;
				var D_2secondCompliance = document.getElementById('D.2compliance2').value;
				var D_2thirdCompliance = document.getElementById('D.2compliance3').value;
				var D_2fourthCompliance = document.getElementById('D.2compliance4').value;
				var D_2fifthCompliance = document.getElementById('D.2compliance5').value;
				var D_2sixthCompliance = document.getElementById('D.2compliance6').value;
				var D_2seventhCompliance = document.getElementById('D.2compliance7').value;
				var D_2eigthCompliance = document.getElementById('D.2compliance8').value;
				var D_2ninthCompliance = document.getElementById('D.2compliance9').value;
				var D_2tenthCompliance = document.getElementById('D.2compliance10').value;
				var D_2eleventhCompliance = document.getElementById('D.2compliance11').value;
				var D_2twelthCompliance = document.getElementById('D.2compliance12').value;
				var D_2thirteenthCompliance = document.getElementById('D.2compliance13').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('D.2notes', endNotes15);
				window.localStorage.setItem('D.2score', score15);
				window.localStorage.setItem('D.2compliance1', D_2firstCompliance);
				window.localStorage.setItem('D.2compliance2', D_2secondCompliance);
				window.localStorage.setItem('D.2compliance3', D_2thirdCompliance);
				window.localStorage.setItem('D.2compliance4', D_2fourthCompliance);
				window.localStorage.setItem('D.2compliance5', D_2fifthCompliance);
				window.localStorage.setItem('D.2compliance6', D_2sixthCompliance);
				window.localStorage.setItem('D.2compliance7', D_2seventhCompliance);
				window.localStorage.setItem('D.2compliance8', D_2eigthCompliance);
				window.localStorage.setItem('D.2compliance9', D_2ninthCompliance);
				window.localStorage.setItem('D.2compliance10', D_2tenthCompliance);
				window.localStorage.setItem('D.2compliance11', D_2eleventhCompliance);
				window.localStorage.setItem('D.2compliance12', D_2twelthCompliance);
				window.localStorage.setItem('D.2compliance13', D_2thirteenthCompliance);
			}
			else if(page=="D_3"){
				var score16 = document.getElementById('D.3score').innerHTML;
				var endNotes16 = document.getElementById('D.3notes').value;
				var D_3firstCompliance = document.getElementById('D.3compliance1').value;
				var D_3secondCompliance = document.getElementById('D.3compliance2').value;
				var D_3thirdCompliance = document.getElementById('D.3compliance3').value;
				var D_3fourthCompliance = document.getElementById('D.3compliance4').value;
				var D_3fifthCompliance = document.getElementById('D.3compliance5').value;
				var D_3sixthCompliance = document.getElementById('D.3compliance6').value;
				var D_3seventhCompliance = document.getElementById('D.3compliance7').value;
				var D_3eigthCompliance = document.getElementById('D.3compliance8').value;
				var D_3ninthCompliance = document.getElementById('D.3compliance9').value;
				var D_3tenthCompliance = document.getElementById('D.3compliance10').value;
				var D_3eleventhCompliance = document.getElementById('D.3compliance11').value;
				var D_3twelthCompliance = document.getElementById('D.3compliance12').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('D.3notes', endNotes16);
				window.localStorage.setItem('D.3score', score16);
				window.localStorage.setItem('D.3compliance1', D_3firstCompliance);
				window.localStorage.setItem('D.3compliance2', D_3secondCompliance);
				window.localStorage.setItem('D.3compliance3', D_3thirdCompliance);
				window.localStorage.setItem('D.3compliance4', D_3fourthCompliance);
				window.localStorage.setItem('D.3compliance5', D_3fifthCompliance);
				window.localStorage.setItem('D.3compliance6', D_3sixthCompliance);
				window.localStorage.setItem('D.3compliance7', D_3seventhCompliance);
				window.localStorage.setItem('D.3compliance8', D_3eigthCompliance);
				window.localStorage.setItem('D.3compliance9', D_3ninthCompliance);
				window.localStorage.setItem('D.3compliance10', D_3tenthCompliance);
				window.localStorage.setItem('D.3compliance11', D_3eleventhCompliance);
				window.localStorage.setItem('D.3compliance12', D_3twelthCompliance);
			}
			else if(page=="D_4"){
				var score17 = document.getElementById('D.4score').innerHTML;
				var endNotes17 = document.getElementById('D.4notes').value;
				var D_4firstCompliance = document.getElementById('D.4compliance1').value;
				var D_4secondCompliance = document.getElementById('D.4compliance2').value;
				var D_4thirdCompliance = document.getElementById('D.4compliance3').value;
				var D_4fourthCompliance = document.getElementById('D.4compliance4').value;
				var D_4fifthCompliance = document.getElementById('D.4compliance5').value;
				var D_4sixthCompliance = document.getElementById('D.4compliance6').value;
				var D_4seventhCompliance = document.getElementById('D.4compliance7').value;
				var D_4eigthCompliance = document.getElementById('D.4compliance8').value;
				var D_4ninthCompliance = document.getElementById('D.4compliance9').value;
				var D_4tenthCompliance = document.getElementById('D.4compliance10').value;
				var D_4eleventhCompliance = document.getElementById('D.4compliance11').value;
				var D_4twelthCompliance = document.getElementById('D.4compliance12').value;
				var D_4thirteenthCompliance = document.getElementById('D.4compliance13').value;
				var D_4fourteenthCompliance = document.getElementById('D.4compliance14').value;
				var D_4fifteenthCompliance = document.getElementById('D.4compliance15').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('D.4notes', endNotes17);
				window.localStorage.setItem('D.4score', score17);
				window.localStorage.setItem('D.4compliance1', D_4firstCompliance);
				window.localStorage.setItem('D.4compliance2', D_4secondCompliance);
				window.localStorage.setItem('D.4compliance3', D_4thirdCompliance);
				window.localStorage.setItem('D.4compliance4', D_4fourthCompliance);
				window.localStorage.setItem('D.4compliance5', D_4fifthCompliance);
				window.localStorage.setItem('D.4compliance6', D_4sixthCompliance);
				window.localStorage.setItem('D.4compliance7', D_4seventhCompliance);
				window.localStorage.setItem('D.4compliance8', D_4eigthCompliance);
				window.localStorage.setItem('D.4compliance9', D_4ninthCompliance);
				window.localStorage.setItem('D.4compliance10', D_4tenthCompliance);
				window.localStorage.setItem('D.4compliance11', D_4eleventhCompliance);
				window.localStorage.setItem('D.4compliance12', D_4twelthCompliance);
				window.localStorage.setItem('D.4compliance13', D_4thirteenthCompliance);
				window.localStorage.setItem('D.4compliance14', D_4fourteenthCompliance);
				window.localStorage.setItem('D.4compliance15', D_4fifteenthCompliance);
			}
			else if(page=="E_1"){
				var score18 = document.getElementById('E.1score').innerHTML;
				var endNotes18 = document.getElementById('E.1notes').value;
				var E_1firstCompliance = document.getElementById('E.1compliance1').value;
				var E_1secondCompliance = document.getElementById('E.1compliance2').value;
				var E_1thirdCompliance = document.getElementById('E.1compliance3').value;
				var E_1fourthCompliance = document.getElementById('E.1compliance4').value;
				var E_1fifthCompliance = document.getElementById('E.1compliance5').value;
				var E_1sixthCompliance = document.getElementById('E.1compliance6').value;
				var E_1seventhCompliance = document.getElementById('E.1compliance7').value;
				var E_1eigthCompliance = document.getElementById('E.1compliance8').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('E.1notes', endNotes18);
				window.localStorage.setItem('E.1score', score18);
				window.localStorage.setItem('E.1compliance1', E_1firstCompliance);
				window.localStorage.setItem('E.1compliance2', E_1secondCompliance);
				window.localStorage.setItem('E.1compliance3', E_1thirdCompliance);
				window.localStorage.setItem('E.1compliance4', E_1fourthCompliance);
				window.localStorage.setItem('E.1compliance5', E_1fifthCompliance);
				window.localStorage.setItem('E.1compliance6', E_1sixthCompliance);
				window.localStorage.setItem('E.1compliance7', E_1seventhCompliance);
				window.localStorage.setItem('E.1compliance8', E_1eigthCompliance);
			}
			else if(page=="E_2"){
				var score19 = document.getElementById('E.2score').innerHTML;
				var endNotes19 = document.getElementById('E.2notes').value;
				var E_2firstCompliance = document.getElementById('E.2compliance1').value;
				var E_2secondCompliance = document.getElementById('E.2compliance2').value;
				var E_2thirdCompliance = document.getElementById('E.2compliance3').value;
				var E_2fourthCompliance = document.getElementById('E.2compliance4').value;
				var E_2fifthCompliance = document.getElementById('E.2compliance5').value;
				var E_2sixthCompliance = document.getElementById('E.2compliance6').value;
				var E_2seventhCompliance = document.getElementById('E.2compliance7').value;
				var E_2eigthCompliance = document.getElementById('E.2compliance8').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('E.2notes', endNotes19);
				window.localStorage.setItem('E.2score', score19);
				window.localStorage.setItem('E.2compliance1', E_2firstCompliance);
				window.localStorage.setItem('E.2compliance2', E_2secondCompliance);
				window.localStorage.setItem('E.2compliance3', E_2thirdCompliance);
				window.localStorage.setItem('E.2compliance4', E_2fourthCompliance);
				window.localStorage.setItem('E.2compliance5', E_2fifthCompliance);
				window.localStorage.setItem('E.2compliance6', E_2sixthCompliance);
				window.localStorage.setItem('E.2compliance7', E_2seventhCompliance);
				window.localStorage.setItem('E.2compliance8', E_2eigthCompliance);
			}
			else if(page=="E_3"){
				var score20 = document.getElementById('E.3score').innerHTML;
				var endNotes20 = document.getElementById('E.3notes').value;
				var E_3firstCompliance = document.getElementById('E.3compliance1').value;
				var E_3secondCompliance = document.getElementById('E.3compliance2').value;
				var E_3thirdCompliance = document.getElementById('E.3compliance3').value;
				var E_3fourthCompliance = document.getElementById('E.3compliance4').value;
				var E_3fifthCompliance = document.getElementById('E.3compliance5').value;
				var E_3sixthCompliance = document.getElementById('E.3compliance6').value;
				var E_3seventhCompliance = document.getElementById('E.3compliance7').value;
				var E_3eigthCompliance = document.getElementById('E.3compliance8').value;
				var E_3ninthCompliance = document.getElementById('E.3compliance9').value;
				var E_3tenthCompliance = document.getElementById('E.3compliance10').value;
				var E_3eleventhCompliance = document.getElementById('E.3compliance11').value;
				var E_3twelthCompliance = document.getElementById('E.3compliance12').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('E.3notes', endNotes20);
				window.localStorage.setItem('E.3score', score20);
				window.localStorage.setItem('E.3compliance1', E_3firstCompliance);
				window.localStorage.setItem('E.3compliance2', E_3secondCompliance);
				window.localStorage.setItem('E.3compliance3', E_3thirdCompliance);
				window.localStorage.setItem('E.3compliance4', E_3fourthCompliance);
				window.localStorage.setItem('E.3compliance5', E_3fifthCompliance);
				window.localStorage.setItem('E.3compliance6', E_3sixthCompliance);
				window.localStorage.setItem('E.3compliance7', E_3seventhCompliance);
				window.localStorage.setItem('E.3compliance8', E_3eigthCompliance);
				window.localStorage.setItem('E.3compliance9', E_3ninthCompliance);
				window.localStorage.setItem('E.3compliance10', E_3tenthCompliance);
				window.localStorage.setItem('E.3compliance11', E_3eleventhCompliance);
				window.localStorage.setItem('E.3compliance12', E_3twelthCompliance);
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
				// Called when a photo is successfully retrieved
                var pictureCount;
                function onPhotoURISuccess(imageURI) {
                  // Uncomment to view the image file URI
                  // Get image handle
                  //
                  var pCount=localStorage.getItem('pictureCount');
                  if(pCount==1){
                    var photo1 = document.getElementById('photo1');
                    photo1.style.display = 'block';
                    photo1.src = imageURI;
                  }
                    movePic(imageURI);
                    console.log("gets");
                }

                // A button will call this function
                //
                function capturePhoto(pNum){
                  if(pNum==1){
                    pictureCount=1;
                    localStorage.setItem('pictureCount', pictureCount);
                  }
                  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                    destinationType: Camera.DestinationType.FILE_URI});
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
                function getPhoto(source, pNum) {
                  if(pNum==1){
                    pictureCount=1;
                    localStorage.setItem('pictureCount', pictureCount);
                  }
                  // Retrieve image file location from specified source
                  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                    destinationType: destinationType.FILE_URI,
                    sourceType: source });
                }
                function clearStorage(){
                  localStorage.clear();
                  ClearDirectory();
                  var photo1 = document.getElementById("photo1");
                  photo1.src = "";
                } 
                function movePic(file){ 
                    window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError); 
                } 
                function resolveOnSuccess(entry){ 
                  var d = new Date();
                  var n = d.getTime();
                  //new file name
                  var newFileName = n + ".jpg";
                  var myFolderApp = "MyAppFolder";

                  window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSys) {      
                  //The folder is created if doesn't exist
                  fileSys.root.getDirectory( myFolderApp,
                                  {create:true, exclusive: false},
                                  function(directory) {
                                      entry.moveTo(directory, newFileName,  successMove, resOnError);
                                  },
                                  resOnError);
                                  },
                  resOnError);
              }

              //Callback function when the file has been moved successfully - inserting the complete path
              //var entryReader; 
              function successMove(entry) {
                  //Store imagepath in session for future use
                  // like to store it in database
                  var picCount=localStorage.getItem('pictureCount');
                  if(picCount==1){
                    console.log("first");
                    localStorage.setItem('imagepath1', entry.toURL());
                    console.log("entry.toURL()" + entry.toURL());
                    console.log("entry.fullPath" + entry.fullPath);
                  }
              }
              // Get a directory reader
              //var dirEntry = new DirectoryEntry(MyAppFolder, 'file:///var/mobile/Containers/Data/Application/E6BF8F6A-405D-4BEF-B556-CA1D46E4436A/Documents/MyAppFolder');
              // Get a list of all the entries in the directory
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
                  }
              }
              function resOnError(error) {
                  alert(error.code);
              }
              function onFail(message) {
                alert('Failed because: ' + message);
              }
              function openImage(){
                /*
                var path = localStorage.getItem('imagepath1');
                console.log(path);
                window.open('path', '_system', ' ');
                console.log('get');
                */
                var image1 = document.getElementById('photo1');
                if(image1.style.height!='75vh'){
                  image1.style.height = '75vh';
                  image1.style.width = '75vw';

                }
                else{
                	image1.style.height = '7%'; 
                	image1.style.width = '7%';
                }
                
                console.log('here');
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
		window.onload=initialize('C_1');
	}
	else if(globalPageIdentifier=="C_2"){
		window.onload=initialize('C_2');
	}
	else if(globalPageIdentifier=="D_1"){
		window.onload=initialize('D_1');
	}
	else if(globalPageIdentifier=="D_2"){
		window.onload=initialize('D_2');
	}
	else if(globalPageIdentifier=="D_3"){
		window.onload=initialize('D_3');
	}
	else if(globalPageIdentifier=="D_4"){
		window.onload=initialize('D_4');
	}
	else if(globalPageIdentifier=="E_1"){
		window.onload=initialize('E_1');
	}
	else if(globalPageIdentifier=="E_2"){
		window.onload=initialize('E_2');
	}
	else if(globalPageIdentifier=="E_3"){
		window.onload=initialize('E_3');
	}
	else{
		window.onload=initialize('checks');
	}
	//something to do
	window.onbeforeunload = exit();

	function exit(){
		console.log('wait!!');
	}