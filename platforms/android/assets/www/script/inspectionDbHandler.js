//*** GLobal Variables************************************************
var DB = null;
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//****Function UpdateInspection is used to update**********************
//*****or add the current inspection to the database*******************
//****It first calls CreateInspectionsDB ******************************
//********then it calls DeleteInspection*******************************
//****Before inserting the inspection**********************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function UpdateInspection(destpage) {
//window.alert('Made it to Update Inspection: ' + destpage);
CreateInspectionsDB();
if (window.localStorage.getItem('HBRA_InspectionId') === null) {
  window.alert("Update: Inspection ID does NOT Exist, assigning '99'");
  window.localStorage.setItem('HBRA_InspectionId', 99);
}
DeleteInspection();
//window.alert("Got to Delete Inspection");
//******************** Beginning of updateFunc******************
//**************************************************************
//var updateFunc = function (tx) {
//window.alert("Start of DB Update Function");
if (window.localStorage.getItem('HBRA_InspectionId') !== null) {
  var idNo = window.localStorage.getItem('HBRA_InspectionId');
} else {
  window.alert("Update: Inspection ID does NOT Exist");
  return;
}
var CHECKED_FORMS_ARRAY_db = null;
var COMPLIANCE_RESPONSE_ARRAY_db = null;
var NOTES_ARRAY_db = null;
var FINAL_NOTES_ARRAY_db = null;
var PHOTOS_db = null;
var E4HEADER_db = null;
var E4TITLES_db = null;
if (localStorage.getItem("HBRA_Checked_Forms") !== null) {
    CHECKED_FORMS_ARRAY_db = JSON.parse(localStorage.getItem("HBRA_Checked_Forms"));
    } 
if (localStorage.getItem("HBRA_Saved_Scores") !== null) {
    COMPLIANCE_RESPONSE_ARRAY_db = JSON.parse(localStorage.getItem("HBRA_Saved_Scores"));
    } 
if (localStorage.getItem("HBRA_Saved_Notes") !== null) {
    NOTES_ARRAY_db = JSON.parse(localStorage.getItem("HBRA_Saved_Notes"));
    } 
if (localStorage.getItem("HBRA_Saved_Final_Notes") !== null) {
    FINAL_NOTES_ARRAY_db = JSON.parse(localStorage.getItem("HBRA_Saved_Final_Notes"));
}
if (localStorage.getItem("HBRA_Photos") !== null) {
    PHOTOS_db = localStorage.getItem("HBRA_Photos");
} 
if (localStorage.getItem("HBRA_E.4Header") !== null) {
    E4HEADER_db = localStorage.getItem("HBRA_E.4Header");
}
if (localStorage.getItem("HBRA_E.4Titles") !== null) {
    E4TITLES_db = JSON.parse(localStorage.getItem("HBRA_E.4Titles"));
}
//***********************Beginning of updateFunc****************
var updateFunc = function (tx) {
//window.alert("Before Insert SQL");
var sqlString = 'INSERT INTO Inspections_Table (DB_Id , DB_FormChecks, DB_Scores, DB_Notes, DB_FinalNotes, DB_Photos, DB_E4Header, DB_E4Titles) VALUES (?,?,?,?,?,?,?,?)';
tx.executeSql(sqlString,
  [idNo, CHECKED_FORMS_ARRAY_db, COMPLIANCE_RESPONSE_ARRAY_db, NOTES_ARRAY_db, FINAL_NOTES_ARRAY_db, PHOTOS_db, E4HEADER_db, E4TITLES_db],
  function(){
    if (destpage != null) {
     window.location.href=destpage;
    }
  }
    );
}
//******************** End of updateFunc************************
DB.transaction(updateFunc);
}
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*******Function SelectInspection is used to populate*****************
//*******localStorage for the current inspection***********************
//*******from the database*********************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function SelectInspection(msgflag) {
//window.alert("Got to Select");
CreateInspectionsDB();
var resultProcess = function (tx, results) {
    if(results.rows.length === 0) {
      window.alert("No Inspections in DB");
    }
    for (i=0; i < results.rows.length; i++)
        {
          var row = results.rows.item(i);
          var temp = "Inspections table row " + (i+1)          
            + ": ID: " + row.DB_Id
            + " FormsCheck: " + row.DB_FormChecks 
            + " Scores: " + row.DB_Scores
            + " Notes: " + row.DB_Notes
            + " Final Notes: " + row.DB_FinalNotes
            + " Photos: " + row.DB_Photos
            + " E4 Header: " + row.DB_E4Header
            + " E4 Titles: " + row.DB_E4Titles;
          if (msgflag == "msg") {
            navigator.notification.alert(
            temp,  // message
            null,   // no callback  
            "Press OK",  // title
              'OK'      // buttonName
            );}
          LoadInspectionLocalStorage(row.DB_Id,
              row.DB_FormChecks,
              row.DB_Scores,
              row.DB_Notes,
              row.DB_FinalNotes,
              row.DB_Photos,
              row.DB_E4Header,
              row.DB_E4Titles
              );
        } 
    }
//*********************Beginning of selectFunc*****************
var selectFunc = function (tx) {
if (window.localStorage.getItem('HBRA_InspectionId') !== null) {
  var idNo = window.localStorage.getItem('HBRA_InspectionId');
} else {
  window.alert("Select: Inspection ID does NOT Exist");
  return;
}
tx.executeSql('SELECT * FROM Inspections_Table WHERE DB_Id=' + idNo, [], resultProcess);
}
//********************End of selectFunc************************
DB.transaction(selectFunc);
}
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//***Function CreateInspectionsDB is used to **************************
//***create the Inspections database  *******************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function CreateInspectionsDB(msgflag) {
//window.alert("Got to Create Inspection DB");
var sqlString = 'CREATE TABLE IF NOT EXISTS Inspections_Table (DB_Id  int, DB_FormChecks blob, DB_Scores blob, DB_Notes blob, DB_FinalNotes blob, DB_Photos blob, DB_E4Header blob, DB_E4Titles blob';
var createDB = function (tx) {
tx.executeSql(sqlString);
if (msgflag == "msg") {
  navigator.notification.alert(
            'Inspections table CREATED',  // message
            null,   // no callback  
            'Press OK',  // title
            'OK'      // buttonName
          );
}
}
DB = openDatabase('Inspections_Database', '1.0', 'Inspections Database', 15 * 1024 * 1024);
DB.transaction(createDB);
}
//*********************************************************************
//******Function DeleteInspection is used ***************************** 
//******to delete the current inspection ******************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function DeleteInspection(msgflag) {
//window.alert("Got to Delete Inspection");
var deleteFunc = null;
//********************Beginning of deleteFunc********************
deleteFunc = function (tx) {
//window.alert("Got into deleteFunc");
if (window.localStorage.getItem('HBRA_InspectionId') !== null) {
  var idNo = window.localStorage.getItem('HBRA_InspectionId');
} else {
  window.alert("Delete: Inspection ID does NOT Exist");
  return;
}
//window.alert("Just before Delete SQL, Flag + " + flag);
tx.executeSql('DELETE FROM Inspections_Table WHERE DB_Id=' + idNo, [], deleteSuccess);
if (msgflag == "msg") {
  navigator.notification.alert(
            'Inspection DELETED',  // message
            null,   // no callback  
              'Press OK',  // title
              'OK'      // buttonName
          );
}
function deleteSuccess() {
//window.alert('Delete was Successful');
}
}
//********************End of deleteFunc************************
DB.transaction(deleteFunc);
}
