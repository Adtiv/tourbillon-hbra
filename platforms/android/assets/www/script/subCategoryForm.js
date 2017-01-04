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
		      var inspection = localStorage.getItem('HBRA_InspectionId');
		      if(window.localStorage.length !== 0){
		        if(page=="A_1"){
		          for(var i=1;i<=12;i++){
		            if(localStorage.getItem(inspection+'imagepath'+i)!==null){
		                var ip = localStorage.getItem(inspection+'imagepath'+i);
		                var photo = document.getElementById("photo"+i);
	                    photo.src = ip; 
	                    photo.style.display = 'inline-block';
	                    document.getElementById("pic"+i).innerHTML="A.1-"+i+".jpg";
	                }
		          }
		        }
				else if(page=="A_2"){		
					for(var i=1;i<=10;i++){
			            if(localStorage.getItem(inspection+'A.2imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.2imagepath'+i);
			              var photo = document.getElementById("A.2photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.2pic"+i).innerHTML="A.2-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="A_3"){	
					for(var i=1;i<=10;i++){
			            if(localStorage.getItem(inspection+'A.3imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.3imagepath'+i);
			              var photo = document.getElementById("A.3photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.3pic"+i).innerHTML="A.3-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="A_4"){
					for(var i=1;i<=9;i++){
			            if(localStorage.getItem(inspection+'A.4imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.4imagepath'+i);
			              var photo = document.getElementById("A.4photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.4pic"+i).innerHTML="A.4-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="A_5"){
					for(var i=1;i<=9;i++){
			            if(localStorage.getItem(inspection+'A.5imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.5imagepath'+i);
			              var photo = document.getElementById("A.5photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.5pic"+i).innerHTML="A.5-"+i+".jpg";
	                    }
			        }
				}
				else if(page=="A_6"){
					for(var i=1;i<=6;i++){
			            if(localStorage.getItem(inspection+'A.6imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.6imagepath'+i);
			              var photo = document.getElementById("A.6photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.6pic"+i).innerHTML="A.6-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="A_7"){
					for(var i=1;i<=7;i++){
			            if(localStorage.getItem(inspection+'A.7imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.7imagepath'+i);
			              var photo = document.getElementById("A.7photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.7pic"+i).innerHTML="A.7-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="A_8"){
					for(var i=1;i<=5;i++){
			            if(localStorage.getItem(inspection+'A.8imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'A.8imagepath'+i);
			              var photo = document.getElementById("A.8photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("A.8pic"+i).innerHTML="A.8-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="B_1"){
					for(var i=1;i<=10;i++){
			            if(localStorage.getItem(inspection+'B.1imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'B.1imagepath'+i);
			              var photo = document.getElementById("B.1photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("B.1pic"+i).innerHTML="B.1-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="B_2"){
					for(var i=1;i<=10;i++){
			            if(localStorage.getItem(inspection+'B.2imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'B.2imagepath'+i);
			              var photo = document.getElementById("B.2photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("B.2pic"+i).innerHTML="B.2-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="B_3"){
					for(var i=1;i<=9;i++){
			            if(localStorage.getItem(inspection+'B.3imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'B.3imagepath'+i);
			              var photo = document.getElementById("B.3photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("B.3pic"+i).innerHTML="B.3-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="C_1"){
					for(var i=1;i<=12;i++){
			            if(localStorage.getItem(inspection+'C.1imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'C.1imagepath'+i);
			              var photo = document.getElementById("C.1photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("C.1pic"+i).innerHTML="C.1-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="C_2"){
					for(var i=1;i<=9;i++){
			            if(localStorage.getItem(inspection+'C.2imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'C.2imagepath'+i);
			              var photo = document.getElementById("C.2photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("C.2pic"+i).innerHTML="C.2-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="D_1"){
					for(var i=1;i<=13;i++){
			            if(localStorage.getItem(inspection+'D.1imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'D.1imagepath'+i);
			              var photo = document.getElementById("D.1photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("D.1pic"+i).innerHTML="D.1-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="D_2"){
					for(var i=1;i<=13;i++){
			            if(localStorage.getItem(inspection+'D.2imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'D.2imagepath'+i);
			              var photo = document.getElementById("D.2photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("D.2pic"+i).innerHTML="D.2-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="D_3"){
					for(var i=1;i<=12;i++){
			            if(localStorage.getItem(inspection+'D.3imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'D.3imagepath'+i);
			              var photo = document.getElementById("D.3photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("D.3pic"+i).innerHTML="D.3-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="D_4"){
					for(var i=1;i<=15;i++){
			            if(localStorage.getItem(inspection+'D.4imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'D.4imagepath'+i);
			              var photo = document.getElementById("D.4photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("D.4pic"+i).innerHTML="D.4-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="E_1"){
					for(var i=1;i<=8;i++){
			            if(localStorage.getItem(inspection+'E.1imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'E.1imagepath'+i);
			              var photo = document.getElementById("E.1photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("E.1pic"+i).innerHTML="E.1-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="E_2"){
					for(var i=1;i<=8;i++){
			            if(localStorage.getItem(inspection+'E.2imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'E.2imagepath'+i);
			              var photo = document.getElementById("E.2photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("E.2pic"+i).innerHTML="E.2-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="E_3"){
					for(var i=1;i<=12;i++){
			            if(localStorage.getItem(inspection+'E.3imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'E.3imagepath'+i);
			              var photo = document.getElementById("E.3photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("E.3pic"+i).innerHTML="E.3-"+i+".jpg";
	                    }
			         }
				}
				else if(page=="E_4"){
					for(var i=1;i<=10;i++){
			            if(localStorage.getItem(inspection+'E.4imagepath'+i)!==null){
			              var ip = localStorage.getItem(inspection+'E.4imagepath'+i);
			              var photo = document.getElementById("E.4photo"+i);
	                      photo.src = ip; 
	                      photo.style.display = 'inline-block';
	                      document.getElementById("E.4pic"+i).innerHTML="E.4-"+i+".jpg";
	                    }
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
      //var myFolderApp = "MyAppFolder";
      var myFolderApp = localStorage.getItem('HBRA_InspectionId') + "pictureFolder";
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
    var inspection = localStorage.getItem('HBRA_InspectionId');
      localStorage.setItem((inspection+pathNum), entry.toURL()); 
      console.log(entry.toURL());
      image.src = localStorage.getItem(inspection+pathNum);
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
      	//var picFolder = localStorage.getItem('HBRA_InspectionId') + "pictureFolder";
        var picFolder ="MyAppFolder"; 
          fileSystem.root.getDirectory(
               picFolder,
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