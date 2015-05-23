function init(){
	var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);

	if(!bSupportsLocal){
		document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
		return;
	}

	if(window.localStorage.length != 0){
		
		var checkBoxesArr = $("input[name='option2']").map(function(){
			return $(this).val();
		}).get();
		console.log(checkBoxesArr);

		var loopThrough = 0;
		var fall0 = window.localStorage.getItem('fallPrev0');
		var fall1 = window.localStorage.getItem('fallPrev1');
		var fall2 = window.localStorage.getItem('fallPrev2');
		

		$.each(checkBoxesArr, function(){
			var valueSet = checkBoxesArr[loopThrough];
			

			console.log(valueSet);
			
			if(fall0 == valueSet){
				
				$("input[value='" + fall0 + "']").prop('checked', true);
				
			}
			if(fall1 == valueSet){
				
				$("input[value='" + fall1 + "']").prop('checked', true);
				
			}
			if(fall2 == valueSet){
				
				$("input[value='" + fall2 + "']").prop('checked', true);
				
			}
			

			loopThrough++;
		});		

	}
	
}

function storeLocalContent(){
		
		    var checkedValues = $("input[name='option2']:checked").map(function(){
		      return $(this).val();
		    }).get(); // <----
		    console.log(checkedValues);

		    var count = 0;

		    $.each(checkedValues, function(){
		    	var name = "fallPrev" + count;
		    	var value = checkedValues[count];
		    	window.localStorage.setItem(name, value);
		    	count++;
		    	console.log(value);
		    });
}

function clearLocalContent(){
	window.localStorage.clear();
}

window.onload = init;
