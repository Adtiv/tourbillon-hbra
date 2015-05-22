		var score= 0;
		var i;
		var index=0;
		var scoreTrack = new Array(5+1).join('0').split('').map(parseFloat);
		var allScoresArray = new Array(5);
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
	    function zeroOutScore(){
	    	for(i=0; i<scoreTrack.length; i++){
	    		scoreTrack[i]=0;
	    	}
	    }
	    //adds up the scores for each question and displays the final score
	    var l;
	    var l2;
	    var getScore1;
	    var getScore2;
	    var storeScore1 = new Array(4);
	    var storeScore2 = new Array(5);
	    function scoreTracker(index, page){
	    	getScore1 = localStorage.getItem('l');
	    	getScore2 = localStorage.getItem('l2');
	    	var finalScore=0;
	    	alert('getScore1' + getScore1);
	    	alert('getScore2' + getScore2);
	    	if(page=="A.1"){
	    		if(getScore1==null){
		    		scoreTrack[index]= score;
			    	allScoresArray[0]=scoreTrack;
			    	for(i=0; i<5; i++){
			    		finalScore+=allScoresArray[0][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.1score").innerHTML=score;
				}
				else{
					allScoresArray[0]=getScore1;
					for(i=0; i<8; i=i+2){
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
			    	for(i=0; i<4; i++){
			    		finalScore+=storeScore1[i];
			    	}
			    	score = finalScore;
			    	l =window.localStorage.setItem('l', storeScore1);
		    		document.getElementById("A.1score").innerHTML=score;
				}
	    	}
	    	else if(page=="A.2"){
	    		if(getScore2==null){
	    			alert('First');
		    		scoreTrack[index]= score;
			    	allScoresArray[1]=scoreTrack;
			    	for(i=0; i<5; i++){
			    		finalScore+=allScoresArray[1][i];
			    	}
			    	score = finalScore;
		    		document.getElementById("A.2score").innerHTML=score;
				}
				else{
					alert('second');
					allScoresArray[1]=getScore2;
					for(i=0; i<10; i=i+2){
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
			    	for(i=0; i<5; i++){
			    		finalScore+=storeScore2[i];
			    	}
			    	score = finalScore;
			    	l2 =window.localStorage.setItem('l2', storeScore2);
		    		document.getElementById("A.2score").innerHTML=score;
				}
	    	}
	    	else{
	    		scoreTrack[index]= score;
		    	allScoresArray[2]=scoreTrack;
		    	for(i=0; i<5; i++){
		    		finalScore+=allScoresArray[2][i];
		    	}
		    	score = finalScore;
	    		document.getElementById("A.3score").innerHTML=score;
	    	}
	    }
	  	function goBack() {
    		window.location.href="pageOne.html";
		}
		//Creates an array with 1 as a checked form 0 unchecked
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
		var s;
		var globalPageIdentifier="page";
		//Used for the form buttons, navigation/storing
		function processFormOrder(page, bound, btnID, storePage){
			//logic for storing local content on page
			if(storePage=="A_1"){
				//if first time store allScoresArray[0] else store test
				if(getScore1==null){
					l =window.localStorage.setItem('l', allScoresArray[0]);
				}
				else{
					l =window.localStorage.setItem('l', storeScore1);
				}
				localStorageSubCatForms('A_1');
			}
			else if(storePage=="A_2"){
				if(getScore2==null){
					l2 =window.localStorage.setItem('l2', allScoresArray[1]);
				}
				else{
					l2 =window.localStorage.setItem('l2', storeScore2);
				}
				localStorageSubCatForms('A_2');
			}
			else if(storePage=="A_3"){
				localStorageSubCatForms('A_3');
			}
			else if(storePage=="A_4"){
				localStorageSubCatForms('A_4');
			}
			else{
				localStorageSubCatForms('A_5');
			}
			//stores the order of forms selected from pageTwo
			var checked;
			if(page=="pageTwo"){
				var y = 0;
				localStorage["checkedForms"] = JSON.stringify(checkedForms);
				var count = localStorage.setItem("y", y);
			}
			var checked= JSON.parse(localStorage["checkedForms"]);
			var x = localStorage.getItem("y");
			var hidebutton = document.getElementById(btnID);
			//Back button 
			if(page=="lastPage"){
				if(x!=0){
					x--;
					while(x>0 && checked[x]!=1){
						x--;
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
			}
			var y;
			var z;
			//bound checks whether we want to go back to the checks page. 
			if(x==0 && page=="lastPage"){
				y = localStorage.setItem("y", x);
				if(checked[x]==1){
					if(bound==1){
						window.location.href="pageTwo.html";
					}
					else{
						z = "A_1";
						s=window.localStorage.setItem("s", z);
						window.location.href="subCategoryForm.html";
					}
				}
				else{
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
				//stores the x value
				y = localStorage.setItem("y", x);
			}
		}

		//Initializes the localstorage based on the page
		function initialize(page){
			var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
			if(!bSupportsLocal){
				document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
				return;
			}
			if(window.localStorage.length != 0){
				if(page=="A_1"){
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
				else if(page=="A_2"){
					document.getElementById('A.2notes').value = window.localStorage.getItem('A.2notes');
					document.getElementById('A.2score').innerHTML = window.localStorage.getItem('A.2score');
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
							else{
								document.getElementById('A.2compliance5').value = window.localStorage.getItem('A.2compliance5');
								var showDiv=document.getElementById('fifthDiv');
								showDiv.style.visibility="visible";
	        					showDiv.style.display="inline";
							}
						}
				    });
				}
				else if(page=="A_3"){
					document.getElementById('A.3notes').value = window.localStorage.getItem('A.3notes');
					document.getElementById('A.3score').innerHTML = window.localStorage.getItem('A.3score');
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
						}
				    });
				}
			}
		}
		//save to localStorage based on the page
		function localStorageSubCatForms(page){
			if(page=="A_1"){
				var score1 = document.getElementById('A.1score').innerHTML;
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
			else if(page=="A_2"){
				var score2 = document.getElementById('A.2score').innerHTML;
				var endNotes2 = document.getElementById('A.2notes').value;
				var A_2firstCompliance = document.getElementById('A.2compliance1').value;
				var A_2secondCompliance = document.getElementById('A.2compliance2').value;
				var A_2thirdCompliance = document.getElementById('A.2compliance3').value;
				var A_2fourthCompliance = document.getElementById('A.2compliance4').value;
				var A_2fifthCompliance = document.getElementById('A.2compliance5').value;
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
			}
			else if(page=="A_3"){
				var score3 = document.getElementById('A.3score').innerHTML;
				var endNotes3 = document.getElementById('A.3notes').value;
				var A_3firstCompliance = document.getElementById('A.3compliance1').value;
					    $('input[type=radio]').each(function()
					    {
					        localStorage.setItem(
					            'radio_' + $(this).attr('id'), JSON.stringify({checked: this.checked})
					        );
					    });
				window.localStorage.setItem('A.3notes', endNotes3);
				window.localStorage.setItem('A.3score', score3);
				window.localStorage.setItem('A.3compliance1', A_3firstCompliance);
			}
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
	if(globalPageIdentifier=="A_1"){
		window.onload=initialize('A_1');
	}
	else if(globalPageIdentifier=="A_2"){
		window.onload=initialize('A_2');
	}
	else{
		window.onload=initialize('A_3');
	}
