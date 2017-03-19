	initialize();

	function initialize() {  	
		$('input[type=radio]').each(function() {initializeButtons(this)});
	   calcScores();
	} 

	function initializeButtons(thisOne) {
		var boxNum = ($(thisOne).attr('name')).substring(3);
		var boxIndex = boxNum - 1; //to make index relative to 0
		var radioChoice = ($(thisOne).attr('id')).substring(0,1);
		var noteID = FORMS_ID + "compliance" + boxNum;
		var elRef = document.getElementById(noteID);
		var divRef = elRef.parentElement;
		if ((COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][boxIndex] == 1) && (radioChoice == "A")) {
			thisOne.checked = true;
			divRef.style.visibility="visible";
	        divRef.style.display="inline";
		} else if ((COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][boxIndex] == 3) && (radioChoice == "B")) {
			thisOne.checked = true;
			divRef.style.visibility="visible";
	        divRef.style.display="inline";
		} else if ((COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][boxIndex] == 5) && (radioChoice == "C")) {
			thisOne.checked = true;
		} else if ((COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][boxIndex] == 0) && (radioChoice == "D")) {
			thisOne.checked = true;
		}
	}


	   	//localStorage.setItem("HBRA_Saved_Scores",JSON.stringify(COMPLIANCE_RESPONSE_ARRAY)); //for save later on
		//opens the text area if non/partially compiant
		//specifies an index to put the score for that question 
	function openTextArea(id, questionNumber, divNum, page){
        //window.alert('openTextArea: ' + id + ' ' + questionNumber + ' ' + divNum + ' ' + page);
		var input = document.getElementById(id);
        var showDiv = document.getElementById(divNum);
        var questionIndex = setQuestionIndex(questionNumber);  //set question index
        var isChecked = input.checked;
        var inputParent = input.parentNode;
        inputParent = inputParent.parentNode;
        var mandatory = inputParent.getAttribute("mandatory");
        if ((mandatory=="Yes") && (input.value!="fullyCompliant")) {
           navigator.notification.alert(
            'This item MUST be "\Fully Compliant"\ for job to continue',  // message
            null,     // no callback    
            'Press OK',  // title
            'OK'      // buttonName
            ); 
        } 
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
	        }
        else if(input.value=="partiallyCompliant"){
        	score=3;
	        }
        else if(input.value=="fullyCompliant"){
	        	score=5;
	        }
        else{
        	score=0;
	        }
        COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][questionIndex] = score;
        //window.alert('Score: ' + score);
        calcScores();
    }
	    
    function setQuestionIndex(questionNumberText) {
    	var qNumberText = questionNumberText.substring(8);
    	var numbersText = ['One','Two','Three','Four','Five',
    						'Six','Seven','Eight','Nine','Ten',
    						'Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen',
    						'Eighteen','Nineteen','Twenty'];
    	for (i=0; i<numbersText.length; i++) {
    		if (qNumberText == numbersText[i]) {
    			return i;
    		}
    	} 
    	navigator.notification.alert(
			'Press OK',  // message
			null,	  // no callback	
	   	 	'Question Number Not Found',  // title
	   	 	'OK'      // buttonName
			);
	    }	

    function calcScores() {
       try {
    	var unansweredCount = 0;
    	var naCount = 0;
    	var noncompliantCount = 0;
    	var partiallycompliantCount = 0;
    	var compliantCount = 0;
    	var noncompliantSum = 0;
    	var partiallycompliantSum = 0;
    	var compliantSum = 0;
    	var countOf135 = 0;
    	for (i=0; i<COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX].length; i++) {
    		if (COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][i] == 1) {
    			noncompliantCount++;
    			noncompliantSum += 1;
    			countOf135++;
	    		}
    		else if (COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][i] == 3) {
    			partiallycompliantCount++;
    			partiallycompliantSum += 3;
    			countOf135++;
	    		}
    		else if (COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][i] == 5) {
    			compliantCount++;
    			compliantSum += 5;
    			countOf135++;
	    		}
    		else if (COMPLIANCE_RESPONSE_ARRAY[FORMS_INDEX][i] == 0) {
                naCount++;
                }
            else {
    			unansweredCount++;
    		} 
	   	}
    	var averageScore = ((noncompliantSum + partiallycompliantSum + compliantSum)/countOf135);
    	averageScore = Math.round(averageScore*10)/10;
    	if (isNaN(averageScore)) {
    		averageScore = 0;
    	}
    	document.getElementById('TotalUN').innerHTML = unansweredCount;
        document.getElementById('TotalN/A').innerHTML = naCount;
    	document.getElementById('TotalNC').innerHTML = noncompliantCount;
    	document.getElementById('TotalPC').innerHTML = partiallycompliantCount;
    	document.getElementById('TotalC').innerHTML = compliantCount;
    	document.getElementById('AVERAGE').innerHTML = averageScore;
	   } catch (ex)  {
        window.alert('Error in calcScores ' + ex.message);
       }
   }