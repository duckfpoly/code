<?php 
    require('connectdb.php');
    $id = $_GET['id'];
    $sql = "DELETE FROM `students` WHERE students.id = '{$id}'";
    $query = $conn->prepare($sql);
    $query->execute();
    echo "<script>alert('Delete successfully !'); location.href='?'</script>";
?>