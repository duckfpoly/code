<?php 
    if(isset($_GET['page'])){
        $page = $_GET['page'];
    }
    else {
        $page = "";
    }
    if($page == "add") { 
        include('add.php');
    }
    elseif($page == "edit") { 
        include('edit.php');
    }
    elseif($page == "delete") {  
        include('delete.php');
    }
    else {
        include('view.php');
    }
?>