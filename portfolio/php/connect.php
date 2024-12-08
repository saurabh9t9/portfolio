<?php
 $BRANCH = $_POST['BRANCH'];
 $COURSE = $_POST['COURSE'];
 $CONFESSION = $_POST['CONFESSION'];
 $YEAR = $_POST['YEAR'];
 $SECTION = $_POST['SECTION'];
 $GENDER = $_POST['GENDER'];
 $ID = $_POST['ID'];
 
 //database conneection
 $conn = new mysqli('localhost','root','','test');
 if($conn->connect_error){
    die('connection failed : '.$conn->connect_error);
 }else{
    $stmt = $conn->prepare("inset into confess(BRANCH,COURSE,CONFESSION,YEAR,SECTION,GENDER,ID)
    values( ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss",$BRANCH,$COURSE,$CONFESSION,$YEAR,$SECTION,$GENDER,$ID);
    $stmt->execute();
    echo "congratulations you confessed....";
    $stmt->close();
    $conn->close();
 }
?>