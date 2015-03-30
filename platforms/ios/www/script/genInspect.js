function init(){
	//variable checks if localstorage is supported
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
	
	//if localstorage is not supported the user is given this message
	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}//-->END IF
	
	//Checks if localstorage already has items stored
	//if so it populates those items into the corresponding fields
	if(window.localStorage.length != 0){
		
		//variable getting stored values into an Array
		var checkBoxesArr = $("input[name='option1']").map(function(){
			return $(this).val();
		}).get();//stored values are pulled into an array
		//console.log(checkBoxesArr);

		//counter is initialized for array walkthrough
		//var loopThrough = 0;
		
		//new counter initialized to create array
		var val = [];
		val[0] = window.localStorage.getItem('check0');
		val[1] = window.localStorage.getItem('check1');
		val[2] = window.localStorage.getItem('check2');
		val[3] = window.localStorage.getItem('check3');
		val[4] = window.localStorage.getItem('check4');
		val[5] = window.localStorage.getItem('check5');
		val[6] = window.localStorage.getItem('check6');
		val[7] = window.localStorage.getItem('check7');
		val[8] = window.localStorage.getItem('check8');
		val[9] = window.localStorage.getItem('check9');
		val[10] = window.localStorage.getItem('check10');
		val[11] = window.localStorage.getItem('check11');
		val[12] = window.localStorage.getItem('check12');
		val[13] = window.localStorage.getItem('check13');
		val[14] = window.localStorage.getItem('check14');
		val[15] = window.localStorage.getItem('check15');
		val[16] = window.localStorage.getItem('check16');
		val[17] = window.localStorage.getItem('check17');
		val[18] = window.localStorage.getItem('check18');
		val[19] = window.localStorage.getItem('check19');
		//variable is set for each possible space in localmemory
		//THIS NEEDS TO BE MORE DYNAMIC
		/*
		var val0 = window.localStorage.getItem('check0');
		var val1 = window.localStorage.getItem('check1');
		var val2 = window.localStorage.getItem('check2');
		var val3 = window.localStorage.getItem('check3');
		var val4 = window.localStorage.getItem('check4');
		var val5 = window.localStorage.getItem('check5');
		var val6 = window.localStorage.getItem('check6');
		var val7 = window.localStorage.getItem('check7');
		var val8 = window.localStorage.getItem('check8');
		var val9 = window.localStorage.getItem('check9');
		var val10 = window.localStorage.getItem('check10');
		var val11 = window.localStorage.getItem('check11');
		var val12 = window.localStorage.getItem('check12');
		var val13 = window.localStorage.getItem('check13');
		var val14 = window.localStorage.getItem('check14');
		var val15 = window.localStorage.getItem('check15');
		var val16 = window.localStorage.getItem('check16');
		var val17 = window.localStorage.getItem('check17');
		var val18 = window.localStorage.getItem('check18');
		var val19 = window.localStorage.getItem('check19'); */

		
		//the values from localstorage are cycled through and compared to the values
		//of the input elements on the forms page
		//if a match is found the field is populated or the checkbox is checked
		//THIS ALSO NEEDS TO BE MORE DYNAMIC
		$.each(checkBoxesArr, function(){
			for(b = 0; b < checkBoxesArr.length; b++){
				var valueSet = checkBoxesArr[b];
				console.log('hit');
			}
			
			

			// console.log(valueSet);
			
			//Values are cycled through
			//NEEDS TO BE DYNAMIC CHANGE TO FOR STATEMENT
			for (i = 0; i < val.length; i++) { 
    				if(val[i] == valueSet){
				
					$("input[value='" + val[i] + "']").prop('checked', true);
				
				}
			}
			/* if(val0 == valueSet){
				
				$("input[value='" + val0 + "']").prop('checked', true);
				
			}
			if(val1 == valueSet){
				
				$("input[value='" + val1 + "']").prop('checked', true);
				
			}
			if(val2 == valueSet){
				
				$("input[value='" + val2 + "']").prop('checked', true);
				
			}
			if(val3 == valueSet){
				
				$("input[value='" + val3 + "']").prop('checked', true);
				
			}
			if(val4 == valueSet){
				
				$("input[value='" + val4 + "']").prop('checked', true);
				
			}
			if(val5 == valueSet){
				
				$("input[value='" + val5 + "']").prop('checked', true);
				
			}
			if(val6 == valueSet){
				
				$("input[value='" + val6 + "']").prop('checked', true);
				
			}
			if(val7 == valueSet){
				
				$("input[value='" + val7 + "']").prop('checked', true);
				
			}
			if(val8 == valueSet){
				
				$("input[value='" + val8 + "']").prop('checked', true);
				
			}
			if(val9 == valueSet){
				
				$("input[value='" + val9 + "']").prop('checked', true);
				
			}
			if(val10 == valueSet){
				
				$("input[value='" + val10 + "']").prop('checked', true);
				
			}
			if(val11 == valueSet){
				
				$("input[value='" + val11 + "']").prop('checked', true);
				
			}
			if(val12 == valueSet){
				
				$("input[value='" + val12 + "']").prop('checked', true);
				
			}
			if(val13 == valueSet){
				
				$("input[value='" + val13 + "']").prop('checked', true);
				
			}
			if(val14 == valueSet){
				
				$("input[value='" + val14 + "']").prop('checked', true);
				
			}
			if(val15 == valueSet){
				
				$("input[value='" + val15 + "']").prop('checked', true);
				
			}
			if(val16 == valueSet){
				
				$("input[value='" + val16 + "']").prop('checked', true);
				
			}
			if(val17 == valueSet){
				
				$("input[value='" + val17 + "']").prop('checked', true);
				
			}
			if(val18 == valueSet){
				
				$("input[value='" + val18 + "']").prop('checked', true);
				
			}
			if(val19 == valueSet){
				
				$("input[value='" + val19 + "']").prop('checked', true);
				
			}

			loopThrough++; */
		});		

	}
	
}

//funciton for storing localcontent upon buttton click
function storeLocalContent(){
		
		//variable for storing the input values into an array
		    var checkedValues = $("input[name='option1']:checked").map(function(){
		      return $(this).val();
		    }).get(); // <----
		    console.log(checkedValues);

		    var count = 0;

		//array is cycled through and each individal entry is 
		//catologued into localstorage
		    $.each(checkedValues, function(){
		    	var name = "check" + count;
		    	var value = checkedValues[count];
		    	window.localStorage.setItem(name, value);
		    	count++;
		    	console.log(value);
		    });
}




//funciton for clearing localstorage
function clearLocalContent(){
	window.localStorage.clear();
}

window.onload = init;