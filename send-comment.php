<?php
    $toEmail = "geo.mahmoudtaha@gmail.com";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["website"], $_POST["comment"], $mailHeaders)) {
        print "<p class='alert alert-primary text-dark p-2 mt-4 success'>Comment has been Added.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Comment.</p>";
    }
?>