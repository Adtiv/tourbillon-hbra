		//Initializes the localstorage based on the page
		function subCatInitialize(page){
			//window.alert("Entered subCatInitialize for page: " + page);
			var bSupportsLocal = (('localStorage' in window) && window['localStorage'] != null);
			if(!bSupportsLocal){
				document.getElementById('dataForm').innerHTML = "<p>Sorry, local storage is not supported</p>";
				return;
			}
			var pNum = localStorage.getItem("pageCount");			
			console.log("pNum" + pNum);
			if(window.localStorage.length !== 0){			
				if(page=="A_1"){
					if(localStorage.getItem('imagepath1')!==null){
						var ip1 = localStorage.getItem('imagepath1');
						var photo1 = document.getElementById("photo1");
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById("pic1").innerHTML="A.1-1.jpg";
	                }
	                if(localStorage.getItem('imagepath2')!==null){
						var ip2 = localStorage.getItem('imagepath2');
						var photo2 = document.getElementById("photo2");
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById("pic2").innerHTML="A.1-2.jpg";
	                }
	                if(localStorage.getItem('imagepath3')!==null){
						var ip3 = localStorage.getItem('imagepath3');
						var photo3 = document.getElementById("photo3");
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById("pic3").innerHTML="A.1-3.jpg";
	                }
	                if(localStorage.getItem('imagepath4')!==null){
						var ip4 = localStorage.getItem('imagepath4');
						var photo4 = document.getElementById("photo4");
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById("pic4").innerHTML="A.1-4.jpg";
	                }
	                if(localStorage.getItem('imagepath5')!==null){
						var ip5 = localStorage.getItem('imagepath5');
						var photo5 = document.getElementById("photo5");
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById("pic5").innerHTML="A.1-5.jpg";
	                }
	                if(localStorage.getItem('imagepath6')!==null){
						var ip6 = localStorage.getItem('imagepath6');
						var photo6 = document.getElementById("photo6");
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById("pic6").innerHTML="A.1-6.jpg";
	                }
	                if(localStorage.getItem('imagepath7')!==null){
						var ip7 = localStorage.getItem('imagepath7');
						var photo7 = document.getElementById("photo7");
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById("pic7").innerHTML="A.1-7.jpg";
	                }
	                if(localStorage.getItem('imagepath8')!==null){
						var ip8 = localStorage.getItem('imagepath8');
						var photo8 = document.getElementById("photo8");
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById("pic8").innerHTML="A.1-8.jpg";
	                }
	                if(localStorage.getItem('imagepath9')!==null){
						var ip9 = localStorage.getItem('imagepath9');
						var photo9 = document.getElementById("photo9");
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById("pic9").innerHTML="A.1-9.jpg";
	                }
	                if(localStorage.getItem('imagepath10')!==null){
						var ip10 = localStorage.getItem('imagepath10');
						var photo10 = document.getElementById("photo10");
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById("pic10").innerHTML="A.1-10.jpg";
	                }
	                if(localStorage.getItem('imagepath11')!==null){
						var ip11 = localStorage.getItem('imagepath11');
						var photo11 = document.getElementById("photo11");
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById("pic11").innerHTML="A.1-11.jpg";
	                }
	                if(localStorage.getItem('imagepath12')!==null){
						var ip12 = localStorage.getItem('imagepath12');
						var photo12 = document.getElementById("photo12");
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById("pic12").innerHTML="A.1-12.jpg";
	                }
			
				}
				else if(page=="A_2"){		
	                if(localStorage.getItem('A.2imagepath1')!==null){
						var ip1 = localStorage.getItem('A.2imagepath1');
						var photo1 = document.getElementById('A.2photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.2pic1').innerHTML="A.2-1.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath2')!==null){
						var ip2 = localStorage.getItem('A.2imagepath2');
						var photo2 = document.getElementById('A.2photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.2pic2').innerHTML="A.2-2.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath3')!==null){
						var ip3 = localStorage.getItem('A.2imagepath3');
						var photo3 = document.getElementById('A.2photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.2pic3').innerHTML="A.2-3.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath4')!==null){
						var ip4 = localStorage.getItem('A.2imagepath4');
						var photo4 = document.getElementById('A.2photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.2pic4').innerHTML="A.2-4.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath5')!==null){
						var ip5 = localStorage.getItem('A.2imagepath5');
						var photo5 = document.getElementById('A.2photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.2pic5').innerHTML="A.2-5.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath6')!==null){
						var ip6 = localStorage.getItem('A.2imagepath6');
						var photo6 = document.getElementById('A.2photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.2pic6').innerHTML="A.2-6.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath7')!==null){
						var ip7 = localStorage.getItem('A.2imagepath7');
						var photo7 = document.getElementById('A.2photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('A.2pic7').innerHTML="A.2-7.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath8')!==null){
						var ip8 = localStorage.getItem('A.2imagepath8');
						var photo8 = document.getElementById('A.2photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('A.2pic8').innerHTML="A.2-8.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath9')!==null){
						var ip9 = localStorage.getItem('A.2imagepath9');
						var photo9 = document.getElementById('A.2photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('A.2pic9').innerHTML="A.2-9.jpg";
	                }
	                if(localStorage.getItem('A.2imagepath10')!==null){
						var ip10 = localStorage.getItem('A.2imagepath10');
						var photo10 = document.getElementById('A.2photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('A.2pic10').innerHTML="A.2-10.jpg";
	                }					
				   
				}
				else if(page=="A_3"){	
					if(localStorage.getItem('A.3imagepath1')!==null){
						var ip1 = localStorage.getItem('A.3imagepath1');
						var photo1 = document.getElementById('A.3photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.3pic1').innerHTML="A.3-1.jpg";
	                }

	                if(localStorage.getItem('A.3imagepath2')!==null){
						var ip2 = localStorage.getItem('A.3imagepath2');
						var photo2 = document.getElementById('A.3photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.3pic2').innerHTML="A.3-2.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath3')!==null){
						var ip3 = localStorage.getItem('A.3imagepath3');
						var photo3 = document.getElementById('A.3photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.3pic3').innerHTML="A.3-3.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath4')!==null){
						var ip4 = localStorage.getItem('A.3imagepath4');
						var photo4 = document.getElementById('A.3photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.3pic4').innerHTML="A.3-4.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath5')!==null){
						var ip5 = localStorage.getItem('A.3imagepath5');
						var photo5 = document.getElementById('A.3photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.3pic5').innerHTML="A.3-5.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath6')!==null){
						var ip6 = localStorage.getItem('A.3imagepath6');
						var photo6 = document.getElementById('A.3photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.3pic6').innerHTML="A.3-6.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath7')!==null){
						var ip7 = localStorage.getItem('A.3imagepath7');
						var photo7 = document.getElementById('A.3photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('A.3pic7').innerHTML="A.3-7.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath8')!==null){
						var ip8 = localStorage.getItem('A.3imagepath8');
						var photo8 = document.getElementById('A.3photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('A.3pic8').innerHTML="A.3-8.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath9')!==null){
						var ip9 = localStorage.getItem('A.3imagepath9');
						var photo9 = document.getElementById('A.3photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('A.3pic9').innerHTML="A.3-9.jpg";
	                }
	                if(localStorage.getItem('A.3imagepath10')!==null){
						var ip10 = localStorage.getItem('A.3imagepath10');
						var photo10 = document.getElementById('A.3photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('A.3pic10').innerHTML="A.3-10.jpg";
	                }
				}
				else if(page=="A_4"){
					if(localStorage.getItem('A.4imagepath1')!==null){
						var ip1 = localStorage.getItem('A.4imagepath1');
						var photo1 = document.getElementById('A.4photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.4pic1').innerHTML="A.4-1.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath2')!==null){
						var ip2 = localStorage.getItem('A.4imagepath2');
						var photo2 = document.getElementById('A.4photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.4pic2').innerHTML="A.4-2.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath3')!==null){
						var ip3 = localStorage.getItem('A.4imagepath3');
						var photo3 = document.getElementById('A.4photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.4pic3').innerHTML="A.4-3.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath4')!==null){
						var ip4 = localStorage.getItem('A.4imagepath4');
						var photo4 = document.getElementById('A.4photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.4pic4').innerHTML="A.4-4.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath5')!==null){
						var ip5 = localStorage.getItem('A.4imagepath5');
						var photo5 = document.getElementById('A.4photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.4pic5').innerHTML="A.4-5.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath6')!==null){
						var ip6 = localStorage.getItem('A.4imagepath6');
						var photo6 = document.getElementById('A.4photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.4pic6').innerHTML="A.4-6.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath7')!==null){
						var ip7 = localStorage.getItem('A.4imagepath7');
						var photo7 = document.getElementById('A.4photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('A.4pic7').innerHTML="A.4-7.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath8')!==null){
						var ip8 = localStorage.getItem('A.4imagepath8');
						var photo8 = document.getElementById('A.4photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('A.4pic8').innerHTML="A.4-8.jpg";
	                }
	                if(localStorage.getItem('A.4imagepath9')!==null){
						var ip9 = localStorage.getItem('A.4imagepath9');
						var photo9 = document.getElementById('A.4photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('A.4pic9').innerHTML="A.4-9.jpg";
	                }
				}
				else if(page=="A_5"){
					if(localStorage.getItem('A.5imagepath1')!==null){
						var ip1 = localStorage.getItem('A.5imagepath1');
						var photo1 = document.getElementById('A.5photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.5pic1').innerHTML="A.5-1.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath2')!==null){
						var ip2 = localStorage.getItem('A.5imagepath2');
						var photo2 = document.getElementById('A.5photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.5pic2').innerHTML="A.5-2.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath3')!==null){
						var ip3 = localStorage.getItem('A.5imagepath3');
						var photo3 = document.getElementById('A.5photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.5pic3').innerHTML="A.5-3.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath4')!==null){
						var ip4 = localStorage.getItem('A.5imagepath4');
						var photo4 = document.getElementById('A.5photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.5pic4').innerHTML="A.5-4.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath5')!==null){
						var ip5 = localStorage.getItem('A.5imagepath5');
						var photo5 = document.getElementById('A.5photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.5pic5').innerHTML="A.5-5.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath6')!==null){
						var ip6 = localStorage.getItem('A.5imagepath6');
						var photo6 = document.getElementById('A.5photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.5pic6').innerHTML="A.5-6.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath7')!==null){
						var ip7 = localStorage.getItem('A.5imagepath7');
						var photo7 = document.getElementById('A.5photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('A.5pic7').innerHTML="A.5-7.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath8')!==null){
						var ip8 = localStorage.getItem('A.5imagepath8');
						var photo8 = document.getElementById('A.5photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('A.5pic8').innerHTML="A.5-8.jpg";
	                }
	                if(localStorage.getItem('A.5imagepath9')!==null){
						var ip9 = localStorage.getItem('A.5imagepath9');
						var photo9 = document.getElementById('A.5photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('A.5pic9').innerHTML="A.5-9.jpg";
	                }
				}
				else if(page=="A_6"){
					if(localStorage.getItem('A.6imagepath1')!==null){
						var ip1 = localStorage.getItem('A.6imagepath1');
						var photo1 = document.getElementById('A.6photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.6pic1').innerHTML="A.6-1.jpg";
	                }
	                if(localStorage.getItem('A.6imagepath2')!==null){
						var ip2 = localStorage.getItem('A.6imagepath2');
						var photo2 = document.getElementById('A.6photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.6pic2').innerHTML="A.6-2.jpg";
	                }
	                if(localStorage.getItem('A.6imagepath3')!==null){
						var ip3 = localStorage.getItem('A.6imagepath3');
						var photo3 = document.getElementById('A.6photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.6pic3').innerHTML="A.6-3.jpg";
	                }
	                if(localStorage.getItem('A.6imagepath4')!==null){
						var ip4 = localStorage.getItem('A.6imagepath4');
						var photo4 = document.getElementById('A.6photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.6pic4').innerHTML="A.6-4.jpg";
	                }
	                if(localStorage.getItem('A.6imagepath5')!==null){
						var ip5 = localStorage.getItem('A.6imagepath5');
						var photo5 = document.getElementById('A.6photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.6pic5').innerHTML="A.6-5.jpg";
	                }
	                if(localStorage.getItem('A.6imagepath6')!==null){
						var ip6 = localStorage.getItem('A.6imagepath6');
						var photo6 = document.getElementById('A.6photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.6pic6').innerHTML="A.6-6.jpg";
	                }
				}
				else if(page=="A_7"){
					if(localStorage.getItem('A.7imagepath1')!==null){
						var ip1 = localStorage.getItem('A.7imagepath1');
						var photo1 = document.getElementById('A.7photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.7pic1').innerHTML="A.7-1.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath2')!==null){
						var ip2 = localStorage.getItem('A.7imagepath2');
						var photo2 = document.getElementById('A.7photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.7pic2').innerHTML="A.7-2.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath3')!==null){
						var ip3 = localStorage.getItem('A.7imagepath3');
						var photo3 = document.getElementById('A.7photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.7pic3').innerHTML="A.7-3.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath4')!==null){
						var ip4 = localStorage.getItem('A.7imagepath4');
						var photo4 = document.getElementById('A.7photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.7pic4').innerHTML="A.7-4.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath5')!==null){
						var ip5 = localStorage.getItem('A.7imagepath5');
						var photo5 = document.getElementById('A.7photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.7pic5').innerHTML="A.7-5.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath6')!==null){
						var ip6 = localStorage.getItem('A.7imagepath6');
						var photo6 = document.getElementById('A.7photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('A.7pic6').innerHTML="A.7-6.jpg";
	                }
	                if(localStorage.getItem('A.7imagepath7')!==null){
						var ip7 = localStorage.getItem('A.7imagepath7');
						var photo7 = document.getElementById('A.7photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('A.7pic7').innerHTML="A.7-7.jpg";
	                }
				}
				else if(page=="A_8"){
					if(localStorage.getItem('A.8imagepath1')!==null){
						var ip1 = localStorage.getItem('A.8imagepath1');
						var photo1 = document.getElementById('A.8photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('A.8pic1').innerHTML="A.8-1.jpg";
	                }
	                if(localStorage.getItem('A.8imagepath2')!==null){
						var ip2 = localStorage.getItem('A.8imagepath2');
						var photo2 = document.getElementById('A.8photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('A.8pic2').innerHTML="A.8-2.jpg";
	                }
	                if(localStorage.getItem('A.8imagepath3')!==null){
						var ip3 = localStorage.getItem('A.8imagepath3');
						var photo3 = document.getElementById('A.8photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('A.8pic3').innerHTML="A.8-3.jpg";
	                }
	                if(localStorage.getItem('A.8imagepath4')!==null){
						var ip4 = localStorage.getItem('A.8imagepath4');
						var photo4 = document.getElementById('A.8photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('A.8pic4').innerHTML="A.8-4.jpg";
	                }
	                if(localStorage.getItem('A.8imagepath5')!==null){
						var ip5 = localStorage.getItem('A.8imagepath5');
						var photo5 = document.getElementById('A.8photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('A.8pic5').innerHTML="A.8-5.jpg";
	                }
				}
				else if(page=="B_1"){
					if(localStorage.getItem('B.1imagepath1')!==null){
						var ip1 = localStorage.getItem('B.1imagepath1');
						var photo1 = document.getElementById('B.1photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('B.1pic1').innerHTML="B.1-1.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath2')!==null){
						var ip2 = localStorage.getItem('B.1imagepath2');
						var photo2 = document.getElementById('B.1photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('B.1pic2').innerHTML="B.1-2.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath3')!==null){
						var ip3 = localStorage.getItem('B.1imagepath3');
						var photo3 = document.getElementById('B.1photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('B.1pic3').innerHTML="B.1-3.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath4')!==null){
						var ip4 = localStorage.getItem('B.1imagepath4');
						var photo4 = document.getElementById('B.1photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('B.1pic4').innerHTML="B.1-4.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath5')!==null){
						var ip5 = localStorage.getItem('B.1imagepath5');
						var photo5 = document.getElementById('B.1photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('B.1pic5').innerHTML="B.1-5.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath6')!==null){
						var ip6 = localStorage.getItem('B.1imagepath6');
						var photo6 = document.getElementById('B.1photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('B.1pic6').innerHTML="B.1-6.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath7')!==null){
						var ip7 = localStorage.getItem('B.1imagepath7');
						var photo7 = document.getElementById('B.1photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('B.1pic7').innerHTML="B.1-7.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath8')!==null){
						var ip8 = localStorage.getItem('B.1imagepath8');
						var photo8 = document.getElementById('B.1photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('B.1pic8').innerHTML="B.1-8.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath9')!==null){
						var ip9 = localStorage.getItem('B.1imagepath9');
						var photo9 = document.getElementById('B.1photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('B.1pic9').innerHTML="B.1-9.jpg";
	                }
	                if(localStorage.getItem('B.1imagepath10')!==null){
						var ip10 = localStorage.getItem('B.1imagepath10');
						var photo10 = document.getElementById('B.1photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('B.1pic10').innerHTML="B.1-10.jpg";
	                }
				}
				else if(page=="B_2"){
					if(localStorage.getItem('B.2imagepath1')!==null){
						var ip1 = localStorage.getItem('B.2imagepath1');
						var photo1 = document.getElementById('B.2photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('B.2pic1').innerHTML="B.2-1.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath2')!==null){
						var ip2 = localStorage.getItem('B.2imagepath2');
						var photo2 = document.getElementById('B.2photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('B.2pic2').innerHTML="B.2-2.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath3')!==null){
						var ip3 = localStorage.getItem('B.2imagepath3');
						var photo3 = document.getElementById('B.2photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('B.2pic3').innerHTML="B.2-3.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath4')!==null){
						var ip4 = localStorage.getItem('B.2imagepath4');
						var photo4 = document.getElementById('B.2photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('B.2pic4').innerHTML="B.2-4.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath5')!==null){
						var ip5 = localStorage.getItem('B.2imagepath5');
						var photo5 = document.getElementById('B.2photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('B.2pic5').innerHTML="B.2-5.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath6')!==null){
						var ip6 = localStorage.getItem('B.2imagepath6');
						var photo6 = document.getElementById('B.2photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('B.2pic6').innerHTML="B.2-6.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath7')!==null){
						var ip7 = localStorage.getItem('B.2imagepath7');
						var photo7 = document.getElementById('B.2photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('B.2pic7').innerHTML="B.2-7.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath8')!==null){
						var ip8 = localStorage.getItem('B.2imagepath8');
						var photo8 = document.getElementById('B.2photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('B.2pic8').innerHTML="B.2-8.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath9')!==null){
						var ip9 = localStorage.getItem('B.2imagepath9');
						var photo9 = document.getElementById('B.2photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('B.2pic9').innerHTML="B.2-9.jpg";
	                }
	                if(localStorage.getItem('B.2imagepath10')!==null){
						var ip10 = localStorage.getItem('B.2imagepath10');
						var photo10 = document.getElementById('B.2photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('B.2pic10').innerHTML="B.2-10.jpg";
	                }
				}
				else if(page=="B_3"){
					if(localStorage.getItem('B.3imagepath1')!==null){
						var ip1 = localStorage.getItem('B.3imagepath1');
						var photo1 = document.getElementById('B.3photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('B.3pic1').innerHTML="B.3-1.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath2')!==null){
						var ip2 = localStorage.getItem('B.3imagepath2');
						var photo2 = document.getElementById('B.3photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('B.3pic2').innerHTML="B.3-2.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath3')!==null){
						var ip3 = localStorage.getItem('B.3imagepath3');
						var photo3 = document.getElementById('B.3photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('B.3pic3').innerHTML="B.3-3.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath4')!==null){
						var ip4 = localStorage.getItem('B.3imagepath4');
						var photo4 = document.getElementById('B.3photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('B.3pic4').innerHTML="B.3-4.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath5')!==null){
						var ip5 = localStorage.getItem('B.3imagepath5');
						var photo5 = document.getElementById('B.3photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('B.3pic5').innerHTML="B.3-5.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath6')!==null){
						var ip6 = localStorage.getItem('B.3imagepath6');
						var photo6 = document.getElementById('B.3photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('B.3pic6').innerHTML="B.3-6.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath7')!==null){
						var ip7 = localStorage.getItem('B.3imagepath7');
						var photo7 = document.getElementById('B.3photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('B.3pic7').innerHTML="B.3-7.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath8')!==null){
						var ip8 = localStorage.getItem('B.3imagepath8');
						var photo8 = document.getElementById('B.3photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('B.3pic8').innerHTML="B.3-8.jpg";
	                }
	                if(localStorage.getItem('B.3imagepath9')!==null){
						var ip9 = localStorage.getItem('B.3imagepath9');
						var photo9 = document.getElementById('B.3photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('B.3pic9').innerHTML="B.3-9.jpg";
	                }
				}
				else if(page=="C_1"){
					if(localStorage.getItem('C.1imagepath1')!==null){
						var ip1 = localStorage.getItem('C.1imagepath1');
						var photo1 = document.getElementById('C.1photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('C.1pic1').innerHTML="C.1-1.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath2')!==null){
						var ip2 = localStorage.getItem('C.1imagepath2');
						var photo2 = document.getElementById('C.1photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('C.1pic2').innerHTML="C.1-2.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath3')!==null){
						var ip3 = localStorage.getItem('C.1imagepath3');
						var photo3 = document.getElementById('C.1photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('C.1pic3').innerHTML="C.1-3.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath4')!==null){
						var ip4 = localStorage.getItem('C.1imagepath4');
						var photo4 = document.getElementById('C.1photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('C.1pic4').innerHTML="C.1-4.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath5')!==null){
						var ip5 = localStorage.getItem('C.1imagepath5');
						var photo5 = document.getElementById('C.1photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('C.1pic5').innerHTML="C.1-5.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath6')!==null){
						var ip6 = localStorage.getItem('C.1imagepath6');
						var photo6 = document.getElementById('C.1photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('C.1pic6').innerHTML="C.1-6.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath7')!==null){
						var ip7 = localStorage.getItem('C.1imagepath7');
						var photo7 = document.getElementById('C.1photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('C.1pic7').innerHTML="C.1-7.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath8')!==null){
						var ip8 = localStorage.getItem('C.1imagepath8');
						var photo8 = document.getElementById('C.1photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('C.1pic8').innerHTML="C.1-8.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath9')!==null){
						var ip9 = localStorage.getItem('C.1imagepath9');
						var photo9 = document.getElementById('C.1photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('C.1pic9').innerHTML="C.1-9.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath10')!==null){
						var ip10 = localStorage.getItem('C.1imagepath10');
						var photo10 = document.getElementById('C.1photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('C.1pic10').innerHTML="C.1-10.jpg";
	                }
	                if(localStorage.getItem('C.1imagepath11')!==null){
						var ip11 = localStorage.getItem('C.1imagepath11');
						var photo11 = document.getElementById('C.1photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('C.1pic11').innerHTML="C.1-11.jpg";
	                }	
	                if(localStorage.getItem('C.1imagepath12')!==null){
						var ip12 = localStorage.getItem('C.1imagepath12');
						var photo12 = document.getElementById('C.1photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('C.1pic12').innerHTML="C.1-12.jpg";
	                }		
				}
				else if(page=="C_2"){
					if(localStorage.getItem('C.2imagepath1')!==null){
						var ip1 = localStorage.getItem('C.2imagepath1');
						var photo1 = document.getElementById('C.2photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('C.2pic1').innerHTML="C.2-1.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath2')!==null){
						var ip2 = localStorage.getItem('C.2imagepath2');
						var photo2 = document.getElementById('C.2photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('C.2pic2').innerHTML="C.2-2.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath3')!==null){
						var ip3 = localStorage.getItem('C.2imagepath3');
						var photo3 = document.getElementById('C.2photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('C.2pic3').innerHTML="C.2-3.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath4')!==null){
						var ip4 = localStorage.getItem('C.2imagepath4');
						var photo4 = document.getElementById('C.2photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('C.2pic4').innerHTML="C.2-4.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath5')!==null){
						var ip5 = localStorage.getItem('C.2imagepath5');
						var photo5 = document.getElementById('C.2photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('C.2pic5').innerHTML="C.2-5.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath6')!==null){
						var ip6 = localStorage.getItem('C.2imagepath6');
						var photo6 = document.getElementById('C.2photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('C.2pic6').innerHTML="C.2-6.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath7')!==null){
						var ip7 = localStorage.getItem('C.2imagepath7');
						var photo7 = document.getElementById('C.2photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('C.2pic7').innerHTML="C.2-7.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath8')!==null){
						var ip8 = localStorage.getItem('C.2imagepath8');
						var photo8 = document.getElementById('C.2photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('C.2pic8').innerHTML="C.2-8.jpg";
	                }
	                if(localStorage.getItem('C.2imagepath9')!==null){
						var ip9 = localStorage.getItem('C.2imagepath9');
						var photo9 = document.getElementById('C.2photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('C.2pic9').innerHTML="C.2-9.jpg";
	                }
				}
				else if(page=="D_1"){
					if(localStorage.getItem('D.1imagepath1')!==null){
						var ip1 = localStorage.getItem('D.1imagepath1');
						var photo1 = document.getElementById('D.1photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('D.1pic1').innerHTML="D.1-1.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath2')!==null){
						var ip2 = localStorage.getItem('D.1imagepath2');
						var photo2 = document.getElementById('D.1photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('D.1pic2').innerHTML="D.1-2.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath3')!==null){
						var ip3 = localStorage.getItem('D.1imagepath3');
						var photo3 = document.getElementById('D.1photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('D.1pic3').innerHTML="D.1-3.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath4')!==null){
						var ip4 = localStorage.getItem('D.1imagepath4');
						var photo4 = document.getElementById('D.1photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('D.1pic4').innerHTML="D.1-4.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath5')!==null){
						var ip5 = localStorage.getItem('D.1imagepath5');
						var photo5 = document.getElementById('D.1photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('D.1pic5').innerHTML="D.1-5.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath6')!==null){
						var ip6 = localStorage.getItem('D.1imagepath6');
						var photo6 = document.getElementById('D.1photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('D.1pic6').innerHTML="D.1-6.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath7')!==null){
						var ip7 = localStorage.getItem('D.1imagepath7');
						var photo7 = document.getElementById('D.1photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('D.1pic7').innerHTML="D.1-7.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath8')!==null){
						var ip8 = localStorage.getItem('D.1imagepath8');
						var photo8 = document.getElementById('D.1photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('D.1pic8').innerHTML="D.1-8.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath9')!==null){
						var ip9 = localStorage.getItem('D.1imagepath9');
						var photo9 = document.getElementById('D.1photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('D.1pic9').innerHTML="D.1-9.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath10')!==null){
						var ip10 = localStorage.getItem('D.1imagepath10');
						var photo10 = document.getElementById('D.1photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('D.1pic10').innerHTML="D.1-10.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath11')!==null){
						var ip11 = localStorage.getItem('D.1imagepath11');
						var photo11 = document.getElementById('D.1photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('D.1pic11').innerHTML="D.1-11.jpg";
	                }	
	                if(localStorage.getItem('D.1imagepath12')!==null){
						var ip12 = localStorage.getItem('D.1imagepath12');
						var photo12 = document.getElementById('D.1photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('D.1pic12').innerHTML="D.1-12.jpg";
	                }
	                if(localStorage.getItem('D.1imagepath13')!==null){
						var ip13 = localStorage.getItem('D.1imagepath13');
						var photo13 = document.getElementById('D.1photo13');
	                  	photo13.src = ip13; 
	                  	photo13.style.display = 'inline-block';
	                  	document.getElementById('D.1pic13').innerHTML="D.1-13.jpg";
	                }		
				}
				else if(page=="D_2"){
					if(localStorage.getItem('D.2imagepath1')!==null){
						var ip1 = localStorage.getItem('D.2imagepath1');
						var photo1 = document.getElementById('D.2photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('D.2pic1').innerHTML="D.2-1.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath2')!==null){
						var ip2 = localStorage.getItem('D.2imagepath2');
						var photo2 = document.getElementById('D.2photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('D.2pic2').innerHTML="D.2-2.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath3')!==null){
						var ip3 = localStorage.getItem('D.2imagepath3');
						var photo3 = document.getElementById('D.2photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('D.2pic3').innerHTML="D.2-3.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath4')!==null){
						var ip4 = localStorage.getItem('D.2imagepath4');
						var photo4 = document.getElementById('D.2photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('D.2pic4').innerHTML="D.2-4.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath5')!==null){
						var ip5 = localStorage.getItem('D.2imagepath5');
						var photo5 = document.getElementById('D.2photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('D.2pic5').innerHTML="D.2-5.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath6')!==null){
						var ip6 = localStorage.getItem('D.2imagepath6');
						var photo6 = document.getElementById('D.2photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('D.2pic6').innerHTML="D.2-6.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath7')!==null){
						var ip7 = localStorage.getItem('D.2imagepath7');
						var photo7 = document.getElementById('D.2photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('D.2pic7').innerHTML="D.2-7.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath8')!==null){
						var ip8 = localStorage.getItem('D.2imagepath8');
						var photo8 = document.getElementById('D.2photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('D.2pic8').innerHTML="D.2-8.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath9')!==null){
						var ip9 = localStorage.getItem('D.2imagepath9');
						var photo9 = document.getElementById('D.2photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('D.2pic9').innerHTML="D.2-9.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath10')!==null){
						var ip10 = localStorage.getItem('D.2imagepath10');
						var photo10 = document.getElementById('D.2photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('D.2pic10').innerHTML="D.2-10.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath11')!==null){
						var ip11 = localStorage.getItem('D.2imagepath11');
						var photo11 = document.getElementById('D.2photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('D.2pic11').innerHTML="D.2-11.jpg";
	                }	
	                if(localStorage.getItem('D.2imagepath12')!==null){
						var ip12 = localStorage.getItem('D.2imagepath12');
						var photo12 = document.getElementById('D.2photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('D.2pic12').innerHTML="D.2-12.jpg";
	                }
	                if(localStorage.getItem('D.2imagepath13')!==null){
						var ip13 = localStorage.getItem('D.2imagepath13');
						var photo13 = document.getElementById('D.2photo13');
	                  	photo13.src = ip13; 
	                  	photo13.style.display = 'inline-block';
	                  	document.getElementById('D.2pic13').innerHTML="D.2-13.jpg";
	                }	
				}
				else if(page=="D_3"){
					if(localStorage.getItem('D.3imagepath1')!==null){
						var ip1 = localStorage.getItem('D.3imagepath1');
						var photo1 = document.getElementById('D.3photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('D.3pic1').innerHTML="D.3-1.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath2')!==null){
						var ip2 = localStorage.getItem('D.3imagepath2');
						var photo2 = document.getElementById('D.3photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('D.3pic2').innerHTML="D.3-2.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath3')!==null){
						var ip3 = localStorage.getItem('D.3imagepath3');
						var photo3 = document.getElementById('D.3photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('D.3pic3').innerHTML="D.3-3.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath4')!==null){
						var ip4 = localStorage.getItem('D.3imagepath4');
						var photo4 = document.getElementById('D.3photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('D.3pic4').innerHTML="D.3-4.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath5')!==null){
						var ip5 = localStorage.getItem('D.3imagepath5');
						var photo5 = document.getElementById('D.3photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('D.3pic5').innerHTML="D.3-5.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath6')!==null){
						var ip6 = localStorage.getItem('D.3imagepath6');
						var photo6 = document.getElementById('D.3photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('D.3pic6').innerHTML="D.3-6.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath7')!==null){
						var ip7 = localStorage.getItem('D.3imagepath7');
						var photo7 = document.getElementById('D.3photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('D.3pic7').innerHTML="D.3-7.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath8')!==null){
						var ip8 = localStorage.getItem('D.3imagepath8');
						var photo8 = document.getElementById('D.3photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('D.3pic8').innerHTML="D.3-8.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath9')!==null){
						var ip9 = localStorage.getItem('D.3imagepath9');
						var photo9 = document.getElementById('D.3photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('D.3pic9').innerHTML="D.3-9.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath10')!==null){
						var ip10 = localStorage.getItem('D.3imagepath10');
						var photo10 = document.getElementById('D.3photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('D.3pic10').innerHTML="D.3-10.jpg";
	                }
	                if(localStorage.getItem('D.3imagepath11')!==null){
						var ip11 = localStorage.getItem('D.3imagepath11');
						var photo11 = document.getElementById('D.3photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('D.3pic11').innerHTML="D.3-11.jpg";
	                }	
	                if(localStorage.getItem('D.3imagepath12')!==null){
						var ip12 = localStorage.getItem('D.3imagepath12');
						var photo12 = document.getElementById('D.3photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('D.3pic12').innerHTML="D.3-12.jpg";
	                }
				}
				else if(page=="D_4"){
					if(localStorage.getItem('D.4imagepath1')!==null){
						var ip1 = localStorage.getItem('D.4imagepath1');
						var photo1 = document.getElementById('D.4photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('D.4pic1').innerHTML="D.4-1.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath2')!==null){
						var ip2 = localStorage.getItem('D.4imagepath2');
						var photo2 = document.getElementById('D.4photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('D.4pic2').innerHTML="D.4-2.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath3')!==null){
						var ip3 = localStorage.getItem('D.4imagepath3');
						var photo3 = document.getElementById('D.4photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('D.4pic3').innerHTML="D.4-3.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath4')!==null){
						var ip4 = localStorage.getItem('D.4imagepath4');
						var photo4 = document.getElementById('D.4photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('D.4pic4').innerHTML="D.4-4.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath5')!==null){
						var ip5 = localStorage.getItem('D.4imagepath5');
						var photo5 = document.getElementById('D.4photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('D.4pic5').innerHTML="D.4-5.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath6')!==null){
						var ip6 = localStorage.getItem('D.4imagepath6');
						var photo6 = document.getElementById('D.4photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('D.4pic6').innerHTML="D.4-6.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath7')!==null){
						var ip7 = localStorage.getItem('D.4imagepath7');
						var photo7 = document.getElementById('D.4photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('D.4pic7').innerHTML="D.4-7.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath8')!==null){
						var ip8 = localStorage.getItem('D.4imagepath8');
						var photo8 = document.getElementById('D.4photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('D.4pic8').innerHTML="D.4-8.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath9')!==null){
						var ip9 = localStorage.getItem('D.4imagepath9');
						var photo9 = document.getElementById('D.4photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('D.4pic9').innerHTML="D.4-9.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath10')!==null){
						var ip10 = localStorage.getItem('D.4imagepath10');
						var photo10 = document.getElementById('D.4photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('D.4pic10').innerHTML="D.4-10.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath11')!==null){
						var ip11 = localStorage.getItem('D.4imagepath11');
						var photo11 = document.getElementById('D.4photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('D.4pic11').innerHTML="D.4-11.jpg";
	                }	
	                if(localStorage.getItem('D.4imagepath12')!==null){
						var ip12 = localStorage.getItem('D.4imagepath12');
						var photo12 = document.getElementById('D.4photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('D.4pic12').innerHTML="D.4-12.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath13')!==null){
						var ip13 = localStorage.getItem('D.4imagepath13');
						var photo13 = document.getElementById('D.4photo13');
	                  	photo13.src = ip13; 
	                  	photo13.style.display = 'inline-block';
	                  	document.getElementById('D.4pic13').innerHTML="D.4-13.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath14')!==null){
						var ip14 = localStorage.getItem('D.4imagepath14');
						var photo14 = document.getElementById('D.4photo14');
	                  	photo14.src = ip14; 
	                  	photo14.style.display = 'inline-block';
	                  	document.getElementById('D.4pic14').innerHTML="D.4-14.jpg";
	                }
	                if(localStorage.getItem('D.4imagepath15')!==null){
						var ip15 = localStorage.getItem('D.4imagepath15');
						var photo15 = document.getElementById('D.4photo15');
	                  	photo15.src = ip15; 
	                  	photo15.style.display = 'inline-block';
	                  	document.getElementById('D.4pic15').innerHTML="D.4-15.jpg";
	                }
				}
				else if(page=="E_1"){
					if(localStorage.getItem('E.1imagepath1')!==null){
						var ip1 = localStorage.getItem('E.1imagepath1');
						var photo1 = document.getElementById('E.1photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('E.1pic1').innerHTML="E.1-1.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath2')!==null){
						var ip2 = localStorage.getItem('E.1imagepath2');
						var photo2 = document.getElementById('E.1photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('E.1pic2').innerHTML="E.1-2.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath3')!==null){
						var ip3 = localStorage.getItem('E.1imagepath3');
						var photo3 = document.getElementById('E.1photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('E.1pic3').innerHTML="E.1-3.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath4')!==null){
						var ip4 = localStorage.getItem('E.1imagepath4');
						var photo4 = document.getElementById('E.1photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('E.1pic4').innerHTML="E.1-4.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath5')!==null){
						var ip5 = localStorage.getItem('E.1imagepath5');
						var photo5 = document.getElementById('E.1photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('E.1pic5').innerHTML="E.1-5.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath6')!==null){
						var ip6 = localStorage.getItem('E.1imagepath6');
						var photo6 = document.getElementById('E.1photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('E.1pic6').innerHTML="E.1-6.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath7')!==null){
						var ip7 = localStorage.getItem('E.1imagepath7');
						var photo7 = document.getElementById('E.1photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('E.1pic7').innerHTML="E.1-7.jpg";
	                }
	                if(localStorage.getItem('E.1imagepath8')!==null){
						var ip8 = localStorage.getItem('E.1imagepath8');
						var photo8 = document.getElementById('E.1photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('E.1pic8').innerHTML="E.1-8.jpg";
	                }
				}
				else if(page=="E_2"){
					if(localStorage.getItem('E.2imagepath1')!==null){
						var ip1 = localStorage.getItem('E.2imagepath1');
						var photo1 = document.getElementById('E.2photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('E.2pic1').innerHTML="E.2-1.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath2')!==null){
						var ip2 = localStorage.getItem('E.2imagepath2');
						var photo2 = document.getElementById('E.2photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('E.2pic2').innerHTML="E.2-2.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath3')!==null){
						var ip3 = localStorage.getItem('E.2imagepath3');
						var photo3 = document.getElementById('E.2photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('E.2pic3').innerHTML="E.2-3.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath4')!==null){
						var ip4 = localStorage.getItem('E.2imagepath4');
						var photo4 = document.getElementById('E.2photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('E.2pic4').innerHTML="E.2-4.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath5')!==null){
						var ip5 = localStorage.getItem('E.2imagepath5');
						var photo5 = document.getElementById('E.2photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('E.2pic5').innerHTML="E.2-5.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath6')!==null){
						var ip6 = localStorage.getItem('E.2imagepath6');
						var photo6 = document.getElementById('E.2photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('E.2pic6').innerHTML="E.2-6.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath7')!==null){
						var ip7 = localStorage.getItem('E.2imagepath7');
						var photo7 = document.getElementById('E.2photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('E.2pic7').innerHTML="E.2-7.jpg";
	                }
	                if(localStorage.getItem('E.2imagepath8')!==null){
						var ip8 = localStorage.getItem('E.2imagepath8');
						var photo8 = document.getElementById('E.2photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('E.2pic8').innerHTML="E.2-8.jpg";
	                }
				}
				else if(page=="E_3"){
					if(localStorage.getItem('E.3imagepath1')!==null){
						var ip1 = localStorage.getItem('E.3imagepath1');
						var photo1 = document.getElementById('E.3photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('E.3pic1').innerHTML="E.3-1.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath2')!==null){
						var ip2 = localStorage.getItem('E.3imagepath2');
						var photo2 = document.getElementById('E.3photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('E.3pic2').innerHTML="E.3-2.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath3')!==null){
						var ip3 = localStorage.getItem('E.3imagepath3');
						var photo3 = document.getElementById('E.3photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('E.3pic3').innerHTML="E.3-3.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath4')!==null){
						var ip4 = localStorage.getItem('E.3imagepath4');
						var photo4 = document.getElementById('E.3photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('E.3pic4').innerHTML="E.3-4.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath5')!==null){
						var ip5 = localStorage.getItem('E.3imagepath5');
						var photo5 = document.getElementById('E.3photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('E.3pic5').innerHTML="E.3-5.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath6')!==null){
						var ip6 = localStorage.getItem('E.3imagepath6');
						var photo6 = document.getElementById('E.3photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('E.3pic6').innerHTML="E.3-6.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath7')!==null){
						var ip7 = localStorage.getItem('E.3imagepath7');
						var photo7 = document.getElementById('E.3photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('E.3pic7').innerHTML="E.3-7.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath8')!==null){
						var ip8 = localStorage.getItem('E.3imagepath8');
						var photo8 = document.getElementById('E.3photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('E.3pic8').innerHTML="E.3-8.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath9')!==null){
						var ip9 = localStorage.getItem('E.3imagepath9');
						var photo9 = document.getElementById('E.3photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('E.3pic9').innerHTML="E.3-9.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath10')!==null){
						var ip10 = localStorage.getItem('E.3imagepath10');
						var photo10 = document.getElementById('E.3photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('E.3pic10').innerHTML="E.3-10.jpg";
	                }
	                if(localStorage.getItem('E.3imagepath11')!==null){
						var ip11 = localStorage.getItem('E.3imagepath11');
						var photo11 = document.getElementById('E.3photo11');
	                  	photo11.src = ip11; 
	                  	photo11.style.display = 'inline-block';
	                  	document.getElementById('E.3pic11').innerHTML="E.3-11.jpg";
	                }	
	                if(localStorage.getItem('E.3imagepath12')!==null){
						var ip12 = localStorage.getItem('E.3imagepath12');
						var photo12 = document.getElementById('E.3photo12');
	                  	photo12.src = ip12; 
	                  	photo12.style.display = 'inline-block';
	                  	document.getElementById('E.3pic12').innerHTML="E.3-12.jpg";
	                }
				}
				else if(page=="E_4"){
					if(localStorage.getItem('E.4imagepath1')!==null){
						var ip1 = localStorage.getItem('E.4imagepath1');
						var photo1 = document.getElementById('E.4photo1');
	                  	photo1.src = ip1; 
	                  	photo1.style.display = 'inline-block';
	                  	document.getElementById('E.4pic1').innerHTML="E.4-1.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath2')!==null){
						var ip2 = localStorage.getItem('E.4imagepath2');
						var photo2 = document.getElementById('E.4photo2');
	                  	photo2.src = ip2; 
	                  	photo2.style.display = 'inline-block';
	                  	document.getElementById('E.4pic2').innerHTML="E.4-2.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath3')!==null){
						var ip3 = localStorage.getItem('E.4imagepath3');
						var photo3 = document.getElementById('E.4photo3');
	                  	photo3.src = ip3; 
	                  	photo3.style.display = 'inline-block';
	                  	document.getElementById('E.4pic3').innerHTML="E.4-3.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath4')!==null){
						var ip4 = localStorage.getItem('E.4imagepath4');
						var photo4 = document.getElementById('E.4photo4');
	                  	photo4.src = ip4; 
	                  	photo4.style.display = 'inline-block';
	                  	document.getElementById('E.4pic4').innerHTML="E.4-4.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath5')!==null){
						var ip5 = localStorage.getItem('E.4imagepath5');
						var photo5 = document.getElementById('E.4photo5');
	                  	photo5.src = ip5; 
	                  	photo5.style.display = 'inline-block';
	                  	document.getElementById('E.4pic5').innerHTML="E.4-5.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath6')!==null){
						var ip6 = localStorage.getItem('E.4imagepath6');
						var photo6 = document.getElementById('E.4photo6');
	                  	photo6.src = ip6; 
	                  	photo6.style.display = 'inline-block';
	                  	document.getElementById('E.4pic6').innerHTML="E.4-6.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath7')!==null){
						var ip7 = localStorage.getItem('E.4imagepath7');
						var photo7 = document.getElementById('E.4photo7');
	                  	photo7.src = ip7; 
	                  	photo7.style.display = 'inline-block';
	                  	document.getElementById('E.4pic7').innerHTML="E.4-7.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath8')!==null){
						var ip8 = localStorage.getItem('E.4imagepath8');
						var photo8 = document.getElementById('E.4photo8');
	                  	photo8.src = ip8; 
	                  	photo8.style.display = 'inline-block';
	                  	document.getElementById('E.4pic8').innerHTML="E.4-8.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath9')!==null){
						var ip9 = localStorage.getItem('E.4imagepath9');
						var photo9 = document.getElementById('E.4photo9');
	                  	photo9.src = ip9; 
	                  	photo9.style.display = 'inline-block';
	                  	document.getElementById('E.4pic9').innerHTML="E.4-9.jpg";
	                }
	                if(localStorage.getItem('E.4imagepath10')!==null){
						var ip10 = localStorage.getItem('E.4imagepath10');
						var photo10 = document.getElementById('E.4photo10');
	                  	photo10.src = ip10; 
	                  	photo10.style.display = 'inline-block';
	                  	document.getElementById('E.4pic10').innerHTML="E.4-10.jpg";
	                }
				}
				else{
					console.log('..');
				}
			}
		}
		
	function goSubmit() {
		window.alert("Got to goSubmit");
		window.location.href = "formComplete.html";
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
        FastClick.attach(document.body);
        	var btn = document.getElementById("btnNext");
	        var span = document.querySelector( "span" );
	        var delay;

		    btn.addEventListener( "touchend", function() {
		    	console.log("here1?");
		        delay = Date.now();
		        console.log(delay);
		    });
		    btn.addEventListener( "click", function() {
		    	console.log("here?");
		        //span.innerHTML = Date.now() - delay;
		        console.log("Time in ms: " + (Date.now()-delay));
		    });
        console.log(navigator.camera);
    }
	// Called when a photo is successfully retrieved
    var pictureCount;
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI
      // Get image handle
      //
      console.log("getsHERE");
      var pCount=localStorage.getItem('pictureCount');
      var photo = "photo";
      if(pCount<=12){
      	var imageID = "photo" + pCount;
      	var image = document.getElementById(imageID);
      }
      else if(pCount>12&&pCount<=22){
      	pCount=pCount-12;
        var imageID = "A.2photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>22&&pCount<=32){
      	pCount=pCount-22;
        var imageID = "A.3photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>32&&pCount<=41){
      	pCount=pCount-32;
        var imageID = "A.4photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>41&&pCount<=50){
      	pCount=pCount-41;
        var imageID = "A.5photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>50&&pCount<=56){
      	pCount=pCount-50;
        var imageID = "A.6photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>56&&pCount<=63){
      	pCount=pCount-56;
        var imageID = "A.7photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>63&&pCount<=68){
      	pCount=pCount-63;
        var imageID = "A.8photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>68&&pCount<=78){
      	pCount=pCount-68;
        var imageID = "B.1photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>78&&pCount<=88){
      	pCount=pCount-78;
        var imageID = "B.2photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>88&&pCount<=97){
      	pCount=pCount-88;
        var imageID = "B.3photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>97&&pCount<=109){
      	pCount=pCount-97;
        var imageID = "C.1photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>109&&pCount<=118){
      	pCount=pCount-109;
        var imageID = "C.2photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>118&&pCount<=131){
      	pCount=pCount-118;
        var imageID = "D.1photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>131&&pCount<=144){
      	pCount=pCount-131;
        var imageID = "D.2photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>144&&pCount<=156){
      	pCount=pCount-144;
        var imageID = "D.3photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>156&&pCount<=171){
      	pCount=pCount-156;
        var imageID = "D.4photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>171&&pCount<=179){
      	pCount=pCount-171;
        var imageID = "E.1photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>179&&pCount<=187){
      	pCount=pCount-179;
        var imageID = "E.2photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>187&&pCount<=199){
      	pCount=pCount-187;
        var imageID = "E.3photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      else if(pCount>199&&pCount<=209){
      	pCount=pCount-199;
        var imageID = "E.4photo" + pCount;
      	var image = document.getElementById(imageID);	
      }
      image.style.display = 'inline-block';
      image.src = imageURI;	
      movePic(imageURI);
    }

    // A button will call this function
    //
    function capturePhoto(pNum){
      pictureCount=pNum;
      localStorage.setItem('pictureCount', pictureCount);
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI});
    }
    // A button will call this function
    //
    function getPhoto(source, pNum){
      pictureCount=pNum;
      localStorage.setItem('pictureCount', pictureCount);         
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: source });
      console.log("HERE?");
    }
    function clearStorage(){
      localStorage.clear();
      ClearDirectory();
      //check this?
      navigator.camera.cleanup(onSuccess, onFail);
    } 
    function onSuccess() {
	    console.log("Camera cleanup success.");
	}
    function movePic(file){ 
        window.resolveLocalFileSystemURL(file, resolveOnSuccess, resOnError); 
    } 
    function resolveOnSuccess(entry){ 
      var d = new Date();
      var n = d.getTime();
      //new file name
      var x = localStorage.getItem('pictureCount');
      if(x<=12){
      	var newFileName = n + "_A.1-" + x + ".jpg";
      }
      if(x>12 && x<=22){
      	x=x-12;
      	var newFileName = n +"_A.2-" + x + ".jpg";
      }
      if(x>22 && x<=32){
      	x=x-22;
      	var newFileName = n +"_A.3-" + x + ".jpg";
      }
      if(x>32 && x<=41){
      	x=x-32;
      	var newFileName = n +"_A.4-" + x + ".jpg";
      }
      if(x>41 && x<=50){
      	x=x-41;
      	var newFileName = n +"_A.5-" + x + ".jpg";
      }
      if(x>50 && x<=56){
      	x=x-50;
      	var newFileName = n +"_A.6-" + x + ".jpg";
      }
      if(x>56 && x<=63){
      	x=x-56;
      	var newFileName = n +"_A.7-" + x + ".jpg";
      }
      if(x>63 && x<=68){
      	x=x-63;
      	var newFileName = n +"_A.8-" + x + ".jpg";
      }
      if(x>68 && x<=78){
      	x=x-68;
      	var newFileName = n +"_B.1-" + x + ".jpg";
      }
      if(x>78 && x<=88){
      	x=x-78;
      	var newFileName = n +"_B.2-" + x + ".jpg";
      }
      if(x>88 && x<=97){
      	x=x-88;
      	var newFileName = n +"_B.3-" + x + ".jpg";
      }
      if(x>97 && x<=109){
      	x=x-97;
      	var newFileName = n +"_C.1-" + x + ".jpg";
      }
      if(x>109 && x<=118){
      	x=x-109;
      	var newFileName = n +"_C.2-" + x + ".jpg";
      }
      if(x>118 && x<=131){
      	x=x-118;
      	var newFileName = n +"_D.1-" + x + ".jpg";
      }
      if(x>131 && x<=144){
      	x=x-131;
      	var newFileName = n +"_D.2-" + x + ".jpg";
      }
      if(x>144 && x<=156){
      	x=x-144;
      	var newFileName = n +"_D.3-" + x + ".jpg";
      }
      if(x>156 && x<=171){
      	x=x-156;
      	var newFileName = n +"_D.4-" + x + ".jpg";
      }
      if(x>171 && x<=179){
      	x=x-171;
      	var newFileName = n +"_E.1-" + x + ".jpg";
      }
      if(x>179 && x<=187){
      	x=x-179;
      	var newFileName = n +"_E.2-" + x + ".jpg";
      }
      if(x>187 && x<=199){
      	x=x-187;
      	var newFileName = n +"_E.3-" + x + ".jpg";
      }
      if(x>199 && x<=209){
      	x=x-199;
      	var newFileName = n +"_E.4-" + x + ".jpg";
      }
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
      var pathNum;
      var photoNum;
      var picNum;
      if(picCount<=12){
	      pathNum = "imagepath" + picCount;
	      photoNum = "photo" + picCount; 
	      picNum = "pic" + picCount; 
          document.getElementById(picNum).innerHTML="A.1-"+picCount+".jpg";
	  }
	  else if(picCount>12 && picCount <=22){
	  	  picCount=picCount-12;
	  	  pathNum = "A.2imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.2photo" + picCount; 
	      picNum = "A.2pic" + picCount;
          document.getElementById(picNum).innerHTML="A.2-"+picCount+".jpg"; 	
	  }
	  else if(picCount>22 && picCount <=32){
	  	  picCount=picCount-22;
	  	  pathNum = "A.3imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.3photo" + picCount; 
	      picNum = "A.3pic" + picCount;
          document.getElementById(picNum).innerHTML="A.3-"+picCount+".jpg"; 	
	  }
	  else if(picCount>32 && picCount <=41){
	  	  picCount=picCount-32;
	  	  pathNum = "A.4imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.4photo" + picCount; 
	      picNum = "A.4pic" + picCount;
          document.getElementById(picNum).innerHTML="A.4-"+picCount+".jpg"; 	
	  }
	  else if(picCount>41 && picCount <=50){
	  	  picCount=picCount-41;
	  	  pathNum = "A.5imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.5photo" + picCount; 
	      picNum = "A.5pic" + picCount;
          document.getElementById(picNum).innerHTML="A.5-"+picCount+".jpg"; 	
	  }
	  else if(picCount>50 && picCount <=56){
	  	  picCount=picCount-50;
	  	  pathNum = "A.6imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.6photo" + picCount; 
	      picNum = "A.6pic" + picCount;
          document.getElementById(picNum).innerHTML="A.6-"+picCount+".jpg"; 	
	  }
	  else if(picCount>56 && picCount <=63){
	  	  picCount=picCount-56;
	  	  pathNum = "A.7imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.7photo" + picCount; 
	      picNum = "A.7pic" + picCount;
          document.getElementById(picNum).innerHTML="A.7-"+picCount+".jpg"; 	
	  }
	  else if(picCount>63 && picCount <=68){
	  	  picCount=picCount-63;
	  	  pathNum = "A.8imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "A.8photo" + picCount; 
	      picNum = "A.8pic" + picCount;
          document.getElementById(picNum).innerHTML="A.8-"+picCount+".jpg"; 	
	  }
	  else if(picCount>68 && picCount <=78){
	  	  picCount=picCount-68;
	  	  pathNum = "B.1imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "B.1photo" + picCount; 
	      picNum = "B.1pic" + picCount;
          document.getElementById(picNum).innerHTML="B.1-"+picCount+".jpg"; 	
	  }
	  else if(picCount>78 && picCount <=88){
	  	  picCount=picCount-78;
	  	  pathNum = "B.2imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "B.2photo" + picCount; 
	      picNum = "B.2pic" + picCount;
          document.getElementById(picNum).innerHTML="B.2-"+picCount+".jpg"; 	
	  }
	  else if(picCount>88 && picCount <=97){
	  	  picCount=picCount-88;
	  	  pathNum = "B.3imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "B.3photo" + picCount; 
	      picNum = "B.3pic" + picCount;
          document.getElementById(picNum).innerHTML="B.3-"+picCount+".jpg"; 	
	  }
	  else if(picCount>97 && picCount <=109){
	  	  picCount=picCount-97;
	  	  pathNum = "C.1imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "C.1photo" + picCount; 
	      picNum = "C.1pic" + picCount;
          document.getElementById(picNum).innerHTML="C.1-"+picCount+".jpg"; 	
	  }
	  else if(picCount>109 && picCount <=118){
	  	  picCount=picCount-109;
	  	  pathNum = "C.2imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "C.2photo" + picCount; 
	      picNum = "C.2pic" + picCount;
          document.getElementById(picNum).innerHTML="C.2-"+picCount+".jpg"; 	
	  }
	  else if(picCount>118 && picCount <=131){
	  	  picCount=picCount-118;
	  	  pathNum = "D.1imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "D.1photo" + picCount; 
	      picNum = "D.1pic" + picCount;
          document.getElementById(picNum).innerHTML="D.1-"+picCount+".jpg"; 	
	  }
	  else if(picCount>131 && picCount <=144){
	  	  picCount=picCount-131;
	  	  pathNum = "D.2imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "D.2photo" + picCount; 
	      picNum = "D.2pic" + picCount;
          document.getElementById(picNum).innerHTML="D.2-"+picCount+".jpg"; 	
	  }
	  else if(picCount>144 && picCount <=156){
	  	  picCount=picCount-144;
	  	  pathNum = "D.3imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "D.3photo" + picCount; 
	      picNum = "D.3pic" + picCount;
          document.getElementById(picNum).innerHTML="D.3-"+picCount+".jpg"; 	
	  }
	  else if(picCount>156 && picCount <=171){
	  	  picCount=picCount-156;
	  	  pathNum = "D.4imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "D.4photo" + picCount; 
	      picNum = "D.4pic" + picCount;
          document.getElementById(picNum).innerHTML="D.4-"+picCount+".jpg"; 	
	  }
	  else if(picCount>171 && picCount <=179){
	  	  picCount=picCount-171;
	  	  pathNum = "E.1imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "E.1photo" + picCount; 
	      picNum = "E.1pic" + picCount;
          document.getElementById(picNum).innerHTML="E.1-"+picCount+".jpg"; 	
	  }
	  else if(picCount>179 && picCount <=187){
	  	  picCount=picCount-179;
	  	  pathNum = "E.2imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "E.2photo" + picCount; 
	      picNum = "E.2pic" + picCount;
          document.getElementById(picNum).innerHTML="E.2-"+picCount+".jpg"; 	
	  }
	  else if(picCount>187 && picCount <=199){
	  	  picCount=picCount-187;
	  	  pathNum = "E.3imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "E.3photo" + picCount; 
	      picNum = "E.3pic" + picCount;
          document.getElementById(picNum).innerHTML="E.3-"+picCount+".jpg"; 	
	  }
	  else if(picCount>199 && picCount <=209){
	  	  picCount=picCount-199;
	  	  pathNum = "E.4imagepath" + picCount; 
	  	  console.log(pathNum);
	      photoNum = "E.4photo" + picCount; 
	      picNum = "E.4pic" + picCount;
          document.getElementById(picNum).innerHTML="E.4-"+picCount+".jpg"; 	
	  }
	  var image = document.getElementById(photoNum);
      localStorage.setItem(pathNum, entry.toURL()); 
      image.src = localStorage.getItem(pathNum);
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
  function openImage(pNum){
  	if(pNum<=12){
  		var photo="photo";
  		var imageId = photo + pNum;
  	}
  	else if(pNum>12 && pNum<=22){
  		var photo="A.2photo";
  		var num=pNum-12;
  		var imageId =photo + num;
  	}
  	else if(pNum>22 && pNum<=32){
  		var photo="A.3photo";
  		var num=pNum-22;
  		var imageId =photo + num;
  	}
  	else if(pNum>32 && pNum<=41){
  		var photo="A.4photo";
  		var num=pNum-32;
  		var imageId =photo + num;
  	}
  	else if(pNum>41 && pNum<=50){
  		var photo="A.5photo";
  		var num=pNum-41;
  		var imageId =photo + num;
  	}
  	else if(pNum>50 && pNum<=56){
  		var photo="A.6photo";
  		var num=pNum-50;
  		var imageId =photo + num;
  	}
  	else if(pNum>56 && pNum<=63){
  		var photo="A.7photo";
  		var num=pNum-56;
  		var imageId =photo + num;
  	}
  	else if(pNum>63 && pNum<=68){
  		var photo="A.8photo";
  		var num=pNum-63;
  		var imageId =photo + num;
  	}    	
  	else if(pNum>68 && pNum<=78){
  		var photo="B.1photo";
  		var num=pNum-68;
  		var imageId =photo + num;
  	}    
  	else if(pNum>78 && pNum<=88){
  		var photo="B.2photo";
  		var num=pNum-78;
  		var imageId =photo + num;
  	}
  	else if(pNum>88 && pNum<=97){
  		var photo="B.3photo";
  		var num=pNum-88;
  		var imageId =photo + num;
  	}
  	else if(pNum>97 && pNum<=109){
  		var photo="C.1photo";
  		var num=pNum-97;
  		var imageId =photo + num;
  	}
  	else if(pNum>109 && pNum<=118){
  		var photo="C.2photo";
  		var num=pNum-109;
  		var imageId =photo + num;
  	} 
  	else if(pNum>118 && pNum<=131){
  		var photo="D.1photo";
  		var num=pNum-118;
  		var imageId =photo + num;
  	}
  	else if(pNum>131 && pNum<=144){
  		var photo="D.2photo";
  		var num=pNum-131;
  		var imageId =photo + num;
  	}
  	else if(pNum>144 && pNum<=156){
  		var photo="D.3photo";
  		var num=pNum-144;
  		var imageId =photo + num;
  	}
  	else if(pNum>156 && pNum<=171){
  		var photo="D.4photo";
  		var num=pNum-156;
  		var imageId =photo + num;
  	}            
  	else if(pNum>171 && pNum<=179){
  		var photo="E.1photo";
  		var num=pNum-171;
  		var imageId =photo + num;
  	}                      
  	else if(pNum>179 && pNum<=187){
  		var photo="E.2photo";
  		var num=pNum-179;
  		var imageId =photo + num;
  	}
  	else if(pNum>187 && pNum<=199){
  		var photo="E.3photo";
  		var num=pNum-187;
  		var imageId =photo + num;
  	} 
  	else if(pNum>199 && pNum<=209){
  		var photo="E.4photo";
  		var num=pNum-199;
  		var imageId =photo + num;
  	}         	             	        	             	
  	var image = document.getElementById(imageId);
	if(image.style.height!='75vh'){
      image.style.height = '75vh';
      image.style.width = '95%';
    }
    else{
    	image.style.height = '7%'; 
    	image.style.width = '7%';
    }                            
    console.log('here');
  }

	//something to do
	window.onbeforeunload = exit();

	function exit(){
		console.log('wait!!');
	}
	function setReset(){
		console.log("SET REset");
		if(document.getElementById('customHeaderInput').innerHTML!==null){
				if(document.getElementById('setReset').innerHTML="set"){
					document.getElementById('headingCustom').innerHTML= document.getElementById('customHeaderInput').innerHTML;
					document.getElementById('customHeaderInput').style.visibility=hidden;
			}
		}
	}