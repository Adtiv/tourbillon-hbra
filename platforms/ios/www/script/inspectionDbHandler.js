//*** GLobal Variables************************************************
//window.alert("DB Loaded");
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
    CHECKED_FORMS_ARRAY_db = localStorage.getItem("HBRA_Checked_Forms");
    //window.alert("Checked Array in DB: " + CHECKED_FORMS_ARRAY_db);
    } 
if (localStorage.getItem("HBRA_Saved_Scores") !== null) {
    COMPLIANCE_RESPONSE_ARRAY_db = localStorage.getItem("HBRA_Saved_Scores");
    } 
if (localStorage.getItem("HBRA_Saved_Notes") !== null) {
    NOTES_ARRAY_db = localStorage.getItem("HBRA_Saved_Notes");
    } 
if (localStorage.getItem("HBRA_Saved_Final_Notes") !== null) {
    FINAL_NOTES_ARRAY_db = localStorage.getItem("HBRA_Saved_Final_Notes");
}
if (localStorage.getItem("HBRA_Photos") !== null) {
    PHOTOS_db = localStorage.getItem("HBRA_Photos");
} 
if (localStorage.getItem("HBRA_E.4Header") !== null) {
    E4HEADER_db = localStorage.getItem("HBRA_E.4Header");
}
if (localStorage.getItem("HBRA_E.4Titles") !== null) {
    E4TITLES_db = localStorage.getItem("HBRA_E.4Titles");
}
//***********************Beginning of updateFunc****************
var updateFunc = function (tx) {
//window.alert("Before Insert SQL");
var sqlString = 'INSERT INTO Inspections_Table (DB_Id , DB_FormChecks, DB_Scores, DB_Notes, DB_FinalNotes, DB_Photos, DB_E4Header, DB_E4Titles) VALUES (?,?,?,?,?,?,?,?)';
tx.executeSql(sqlString,
  [idNo, CHECKED_FORMS_ARRAY_db, COMPLIANCE_RESPONSE_ARRAY_db, NOTES_ARRAY_db, FINAL_NOTES_ARRAY_db, PHOTOS_db, E4HEADER_db, E4TITLES_db],
  function(){
    //window.alert("Callback invoked, destpage: " + destpage);
  });
if (destpage == 'msg') {
  window.alert("Record Inserted into DB");
}
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
try {
CreateInspectionsDB();
var resultProcess = function (tx, results) {
    if(results.rows.length === 0) {
      if (msgflag == "msg") { 
        window.alert("No Inspection with that ID in DB");
      }
      ClearInspectionLocalStorage();
    }
    //window.alert("Rows Count: " + results.rows.length);
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
} catch (e) {
  window.alert("Error inspectionDbHandler.js - SelectInspection: " + e.message);
}
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
var sqlString = 'CREATE TABLE IF NOT EXISTS Inspections_Table (DB_Id  int, DB_FormChecks blob, DB_Scores blob, DB_Notes blob, DB_FinalNotes blob, DB_Photos blob, DB_E4Header blob, DB_E4Titles blob)';
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
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//***Function DeleteInspectionsDB *************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function DeleteInspectionsDB(msgflag) {
//window.alert("Got to Delete Inspection DB");
//var sqlString = 'DROP DATABASE Inspections_Database';
var sqlString = 'DROP TABLE Inspections_Table';
var deleteDB = function (tx) {
tx.executeSql(sqlString);
if (msgflag == "msg") {
  navigator.notification.alert(
            'Inspections TABLE DELETED',  // message
            null,   // no callback  
            'Press OK',  // title
            'OK'      // buttonName
          );
}
}
try {
  DB = openDatabase('Inspections_Database', '1.0', 'Inspections Database', 15 * 1024 * 1024);
  DB.transaction(deleteDB);
} catch (e) {
  navigator.notification.alert(
            'Error Attemting to Delete TABLE: ' + e,  // message
            null,   // no callback  
            'Press OK',  // title
            'OK'      // buttonName
          );
}
}
//*********************************************************************
//******Function DeleteInspection is used ***************************** 
//******to delete the current inspection ******************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function DeleteInspection(msgflag) {
//window.alert("Got to Delete Inspection");
CreateInspectionsDB();
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
//*********************************************************************
//******Function LoadInspectionLocalStorage is used ******************* 
//******to restore localSorage from the DB data ***********************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function LoadInspectionLocalStorage(rowDB_Id,
              rowDB_FormChecks,
              rowDB_Scores,
              rowDB_Notes,
              rowDB_FinalNotes,
              rowDB_Photos,
              rowDB_E4Header,
              rowDB_E4Titles) {
    //window.alert("about to restore localStorage");
    //localStorage.setItem("HBRA_Checked_Forms", JSON.stringify(rowDB_FormChecks)); // no need to convert to JSON
    localStorage.setItem("HBRA_Checked_Forms", rowDB_FormChecks);
    localStorage.setItem("HBRA_Saved_Scores", rowDB_Scores);
    localStorage.setItem("HBRA_Saved_Notes", rowDB_Notes);
    localStorage.setItem("HBRA_Saved_Final_Notes", rowDB_FinalNotes);
    localStorage.getItem("HBRA_Photos", rowDB_Photos);
    localStorage.getItem("HBRA_E.4Header", rowDB_E4Header);
    localStorage.setItem("HBRA_E.4Titles", rowDB_E4Titles);
    //window.alert("localStorage restored");
}
//*********************************************************************
//******Function ClearInspectionLocalStorage is used ****************** 
//******to clear localStorage when selecting an inpection *************
//******which has not yet been written to the database ****************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function ClearInspectionLocalStorage() {  
  localStorage.removeItem("HBRA_Checked_Forms");
  localStorage.removeItem("HBRA_Saved_Scores");
  localStorage.removeItem("HBRA_Saved_Notes");
  localStorage.removeItem("HBRA_Saved_Final_Notes");
  localStorage.removeItem("HBRA_Photos");
  localStorage.removeItem("HBRA_E.4Header");
  localStorage.removeItem("HBRA_E.4Titles");
  //window.alert("Local Storage Has Been Cleared");
}