<?php 
    ini_set('display_errors', 'On');
if(!isset($_POST['submit'])){
        //This page should not be accessed directly. Need to submit the form.
        echo "error; you need to submit the form!";
    }
    $to = "aditocco@ufl.edu"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $company = $_POST['company'];
    $trade = $_POST['trade'];
    $jobName = $_POST['jobName'];
    $jobNum = $_POST['jobNum'];
    $inspBy = $_POST['inspBy'];
    $title = $_POST['title'];
    $empNum = $_POST['empNum'];
    $repFirst = $_POST['repFirst'];
    $repLast = $_POST['repLast'];
    $trade = $_POST['trade'];
    $employeeNum = $_POST['employeeNum'];
    $weatherCom = $_POST['weatherCom'];
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = "Company: " . $company . "\n " . "Trade: " . $trade . "\n" . "jobName: " . $jobName . "\n" . "jobNum: " . $jobNum . "inspBy: " . $inspBy . "\n" . "title" . $title . "\n" . "empNum: " . $employeeNum . "\n" . "repFirst: " . $repFirst . "\n" .  "repLast: " . $repLast . "\n" .  "weatherCom: " . $weaterCom . "\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $repFirst . "\n\n" . $_POST['message2'];
    if(empty($from)) 
    {
        echo "Name and email are mandatory!";
        exit;
    }
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    //header('Location: index.html');
    echo "Mail Sent. Thank you " . $from . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    // Function to validate against any email injection attempts
    function IsInjected($str)
    {
      $injections = array('(\n+)',
                  '(\r+)',
                  '(\t+)',
                  '(%0A+)',
                  '(%0D+)',
                  '(%08+)',
                  '(%09+)'
                  );
      $inject = join('|', $injections);
      $inject = "/$inject/i";
      if(preg_match($inject,$str))
        {
        return true;
      }
      else
        {
        return false;
      }
    }
?>
<!--
<!DOCTYPE html>
<head>
<title>Form submission</title>
</head>
<body>

<form action="mail_handler.php" method="post">
First Name: <input type="text" name="first_name"><br>
Last Name: <input type="text" name="last_name"><br>
Email: <input type="text" name="email"><br>
Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
<input type="submit" name="submit" value="Submit">
</form>


