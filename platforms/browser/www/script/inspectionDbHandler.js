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
try {  
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
//window.alert("Made it to DB Step 1");
var CHECKED_FORMS_ARRAY_db = null;
var COMPLIANCE_RESPONSE_ARRAY_db = null;
var NOTES_ARRAY_db = null;
var FINAL_NOTES_ARRAY_db = null;
var PHOTOS_db = null;
var E4HEADER_db = null;
var E4TITLES_db = null;
var COMP_db = null;
var TRADE_db = null;
var JOBNAME_db = null;
var JOBNUM_db = null;
var INSPBY_db = null;
var EMAIL_db = null;
var TITLE_db = null;
var EMPNUM_db = null;
var BEGINTIME_db = null;
var ENDTIME_db = null;
var REPNAME_db = null;
var EMPLOYEENUM_db = null;
var WEATHERCOM_db = null;
//window.alert("Made it to DB Step 2");

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
if (localStorage.getItem("HBRA_company") !== null) {
    COMP_db = localStorage.getItem("HBRA_company");
    } 
if (localStorage.getItem("HBRA_trade") !== null) {
    TRADE_db = localStorage.getItem("HBRA_trade");
    } 
if (localStorage.getItem("HBRA_jobName") !== null) {
   JOBNAME_db = localStorage.getItem("HBRA_jobName");
    } 
if (localStorage.getItem("HBRA_jobNum") !== null) {
   JOBNUM_db = localStorage.getItem("HBRA_jobNum");
    } 
if (localStorage.getItem("HBRA_inspBy") !== null) {
   INSPBY_db = localStorage.getItem("HBRA_inspBy");
    } 
if (localStorage.getItem("HBRA_email") !== null) {
    EMAIL_db = localStorage.getItem("HBRA_email");
    } 
if (localStorage.getItem("HBRA_title") !== null) {
    TITLE_db = localStorage.getItem("HBRA_title");
    } 
if (localStorage.getItem("HBRA_empNum") !== null) {
    EMPNUM_db = localStorage.getItem("HBRA_empNum");
    } 
if (localStorage.getItem("HBRA_beginTime") !== null) {
    BEGINTIME_db = localStorage.getItem("HBRA_beginTime");
    } 
if (localStorage.getItem("HBRA_endTime") !== null) {
    ENDTIME_db = localStorage.getItem("HBRA_endTime");
    } 
if (localStorage.getItem("HBRA_repName") !== null) {
    REPNAME_db = localStorage.getItem("HBRA_repName");
    } 
if (localStorage.getItem("HBRA_employeeNum") !== null) {
    EMPLOYEENUM_db = localStorage.getItem("HBRA_employeeNum");
    } 
if (localStorage.getItem("HBRA_weatherCom") !== null) {
    WEATHERCOM_db = localStorage.getItem("HBRA_weatherCom");
    } 
 //window.alert("Made it to DB Step 3");
//***********************Beginning of updateFunc****************
var updateFunc = function (tx) {
//window.alert("Before Insert SQL");
var sqlString = 'INSERT INTO Inspections_Table (DB_Id, DB_FormChecks, DB_Scores, DB_Notes, DB_FinalNotes, \
  DB_Photos, DB_E4Header, DB_E4Titles, \
  DB_Comp, DB_Trade, DB_JobName, DB_JobNum, DB_InspBy, DB_Email, DB_Title, DB_EmpNum, DB_BeginTime, \
  DB_EndTime, DB_RepName, DB_EmployeeNum, DB_WeatherCom) \
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
//window.alert("Made it to DB Step 6");
tx.executeSql(sqlString,
  [idNo, CHECKED_FORMS_ARRAY_db, COMPLIANCE_RESPONSE_ARRAY_db, NOTES_ARRAY_db, FINAL_NOTES_ARRAY_db,
   PHOTOS_db, E4HEADER_db, E4TITLES_db,
   COMP_db, TRADE_db, JOBNAME_db, JOBNUM_db, INSPBY_db, EMAIL_db, TITLE_db, EMPNUM_db,
   BEGINTIME_db, ENDTIME_db, REPNAME_db, EMPLOYEENUM_db, WEATHERCOM_db], 
  function(){
    //window.alert ("DB - UpdateInspection Callback Successful");
    //window.alert("Made it to DB Step 7 - Callback invoked, destpage: " + destpage);
  });
if (destpage == 'msg') {
  window.alert("Record Inserted into DB, ID: " + idNo);
}
}
//******************** End of updateFunc************************
//window.alert("Made it to DB Step 4");
DB.transaction(updateFunc);
//window.alert("Made it to DB Step 5");
} catch (e) {window.alert("DB Update Failed: " + e.message);}
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
var errorProcess = function (tx, error) {
  window.alert("DB SelectInspection Error Code: " + error.code + " Message: " + error.message);
}
var resultProcess = function (tx, results) {
    //window.alert("DB - Got into Selection resultProcess");
    if(results.rows.length === 0) {
        window.alert("No Inspection with that ID in DB: " + idNo);
      ClearInspectionLocalStorage();
    }
    //window.alert("DB - Rows Count: " + results.rows.length);
    for (i=0; i < results.rows.length; i++)
        {
          //window.alert("Rows Returend on SelectInspection: " + i);
          var row = results.rows.item(i);
          var temp = "Inspections table row " + (i+1)          
            + ": ID: " + row.DB_Id
            + " FormsCheck: " + row.DB_FormChecks 
            + " Scores: " + row.DB_Scores
            + " Notes: " + row.DB_Notes
            + " Final Notes: " + row.DB_FinalNotes
            + " Photos: " + row.DB_Photos
            + " E4 Header: " + row.DB_E4Header
            + " E4 Titles: " + row.DB_E4Titles
            + " Company: " + row.DB_Comp
            + " Trade: " + row.DB_Trade
            + " Job Name: " + row.DB_JOBNAME
            + " Job Number: " + row.DB_JOBNUM
            + " Inspected By: " + row.DB_INSPBY
            + " Email: " + row.DB_EMAIL
            + " Title: " + row.DB_TITLE
            + " Emp Num: " + row.DB_EMPNUM
            + " Begin Time: " + row.DB_BEGINTIME
            + " End Time: " + row.DB_ENDTIME
            + " Rep Name: " + row.DB_REPNAME
            + " Employee Number: " + row.DB_EMPLOYEENUM
            + " Weather: " + row.DB_WEATHERCOM;
          if (msgflag == "msg") {
            navigator.notification.alert(
            temp,  // message
            null,   // no callback  
            "Press OK",  // title
              'OK'      // buttonName
            );}
          LoadInspectionLocalStorage(row);
        } 
    }
//*********************Beginning of selectFunc*****************
var selectFunc = function (tx) {
if (window.localStorage.getItem('HBRA_InspectionId') !== null) {
  var idNo = window.localStorage.getItem('HBRA_InspectionId');
  //window.alert("DB Id is: " + idNo + " Length: " + idNo.length + " Type: " + typeof(idNo));
} else {
  window.alert("Select: Inspection ID does NOT Exist");
  return;
}
try {
  //window.alert("DB TX Select Inspection Id is: " + idNo + " Length: " + idNo.length + " Type: " + typeof(idNo));
  tx.executeSql("SELECT * FROM Inspections_Table WHERE DB_Id='" + idNo + "'", [], resultProcess, errorProcess);
  //window.alert("DB - SQL issued for Selection of Inspection: " + idNo);
} catch (e) {
  window.alert("DB Select Failed: " + e.message);
}
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
//*******Function ListInpsections is used to return back **************
//*******a list of Inspections/Jobnames for all of the Inpectons*******
//*******in the Database***********************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function ListInspections(msgflag) {
//window.alert("Got to ListInspections");
try {
CreateInspectionsDB();
//window.alert("Got past CreateInspectionDB");
var listErrorProcess = function (tx, error) {
  window.alert("DB ListInspections Error Code: " + error.code + " Message: " + error.message);
}
var listProcess = function (tx, results) {
    //window.alert("Got into listProcess");
    if(results.rows.length === 0) {
      if (msgflag == "msg") { 
        window.alert("No Inspections in DB: ");
      }
      //xxxxxClearInspectionLocalStorage();
    }
    //window.alert("Rows Returned: " + results.rows.length);
    var idlistARRAY = [];
    for (i=0; i < results.rows.length; i++)
        {
          row = results.rows.item(i);
          idlistARRAY.push(row.DB_Id);
          //window.alert("Row #" + i + " Returned: " + row.DB_Id);
        } 
        localStorage.setItem("HBRA_InspectionList",JSON.stringify(idlistARRAY));
        if (msgflag == "msg") {
            navigator.notification.alert(
            "Inspections List has been saved to local Storage",  // message
            null,   // no callback  
            "Press OK",  // title
              'OK'      // buttonName
            );}
        //window.alert("List Saved");
    }
//*********************Beginning of selectFunc*****************
var listFunc = function (tx) {
tx.executeSql('SELECT DB_Id FROM Inspections_Table ORDER BY DB_Id', [], listProcess, listErrorProcess);
}
//********************End of selectFunc************************
DB.transaction(listFunc);
} catch (e) {
  window.alert("Error inspectionDbHandler.js - ListInspection: " + e.message);
}
}
//*********************************************************************
//************************List Inpsection End**************************
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
var sqlString = 'CREATE TABLE IF NOT EXISTS Inspections_Table (DB_Id text, DB_FormChecks blob, DB_Scores blob, \
  DB_Notes blob, DB_FinalNotes blob, DB_Photos blob, DB_E4Header blob, DB_E4Titles blob, \
  DB_Comp blob, DB_Trade blob, DB_JobName blob, DB_JobNum blob, DB_InspBy blob, DB_Email blob, DB_Title blob, \
  DB_EmpNum blob, DB_BeginTime blob, DB_EndTime blob, DB_RepName blob, DB_EmployeeNum blob, DB_WeatherCom blob\
  )';
var createDB = function (tx) {
tx.executeSql(sqlString);
//window.alert("DB Created");
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
var deleteError = function (tx, error) {
  window.alert("DB DeleteInspection Error Code: " + error.code + " Message: " + error.message);
}
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
tx.executeSql("DELETE FROM Inspections_Table WHERE DB_Id='" + idNo + "'", [], deleteSuccess, deleteError);
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
function LoadInspectionLocalStorage(rowDB) {
    //window.alert("About to restore localStorage");
    //localStorage.setItem("HBRA_Checked_Forms", JSON.stringify(rowDB_FormChecks)); // no need to convert to JSON
    localStorage.setItem("HBRA_Checked_Forms", rowDB.DB_FormChecks);
    localStorage.setItem("HBRA_Saved_Scores", rowDB.DB_Scores);
    localStorage.setItem("HBRA_Saved_Notes", rowDB.DB_Notes);
    localStorage.setItem("HBRA_Saved_Final_Notes", rowDB.DB_FinalNotes);
    localStorage.getItem("HBRA_Photos", rowDB.DB_Photos);
    localStorage.getItem("HBRA_E.4Header", rowDB.DB_E4Header);
    localStorage.setItem("HBRA_E.4Titles", rowDB.DB_E4Titles);
    localStorage.setItem('HBRA_company', rowDB.DB_Comp);
    localStorage.setItem('HBRA_trade', rowDB.DB_Trade);
    localStorage.setItem('HBRA_jobName', rowDB.DB_JobName);
    localStorage.setItem('HBRA_jobNum', rowDB.DB_JobNum);
    localStorage.setItem('HBRA_inspBy', rowDB.DB_InspBy);
    localStorage.setItem('HBRA_email', rowDB.DB_Email);
    localStorage.setItem('HBRA_title', rowDB.DB_Title);
    localStorage.setItem('HBRA_empNum', rowDB.DB_EmpNum);
    localStorage.setItem('HBRA_beginTime', rowDB.DB_BeginTime);
    localStorage.setItem('HBRA_endTime', rowDB.DB_EndTime);
    localStorage.setItem('HBRA_repName', rowDB.DB_RepName);
    localStorage.setItem('HBRA_employeeNum', rowDB.DB_EmployeeNum);
    localStorage.setItem('HBRA_weatherCom', rowDB.DB_WeatherCom);
    //window.alert("LocalStorage Restored" + rowDB.DB_Comp + " " + rowDB.DB_Trade);
}
//*********************************************************************
//******Function ClearInspectionLocalStorage is used ****************** 
//******to clear localStorage when selecting an inpection *************
//******which has not yet been written to the database ****************
//*********************************************************************
//*********************************************************************
//*********************************************************************
function ClearInspectionLocalStorage() { 
  //window.alert("Got to ClearInspectionLocalStorage"); 
  localStorage.removeItem("HBRA_Checked_Forms");
  localStorage.removeItem("HBRA_Saved_Scores");
  localStorage.removeItem("HBRA_Saved_Notes");
  localStorage.removeItem("HBRA_Saved_Final_Notes");
  localStorage.removeItem("HBRA_Photos");
  localStorage.removeItem("HBRA_E.4Header");
  localStorage.removeItem("HBRA_E.4Titles");
  localStorage.removeItem('HBRA_company');
  localStorage.removeItem('HBRA_trade');
  localStorage.removeItem('HBRA_jobName');
  localStorage.removeItem('HBRA_jobNum');
  localStorage.removeItem('HBRA_inspBy');
  localStorage.removeItem('HBRA_email');
  localStorage.removeItem('HBRA_title');
  localStorage.removeItem('HBRA_empNum');
  localStorage.removeItem('HBRA_beginTime');
  localStorage.removeItem('HBRA_endTime');
  localStorage.removeItem('HBRA_repName');
  localStorage.removeItem('HBRA_employeeNum');
  localStorage.removeItem('HBRA_weatherCom');
  //window.alert("Local Storage Has Been Cleared");
}