<?php 
    try {
        $conn = new PDO("mysql:host=localhost;dbname=db_quanlysinhvien",'root','');
    }      
    catch(PDOException $e) { 
        echo 'Connection error: ' . $e->getMessage();
    }
?>