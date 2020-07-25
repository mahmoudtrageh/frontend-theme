<?php
    $toEmail = "geo.mahmoudtaha@gmail.com";
    $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
        print "<p class='alert alert-primary text-dark p-2 mt-4 success'>Message has been Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>