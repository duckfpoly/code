<?php 
    $id   = $_POST['id'];
    $name = $_POST['name'];
    $age  = $_POST['age'];
    $data = array (
        "id" => $id,
        "name" => $name,
        "age" => $age
    );
    $data_string = json_encode($data);
    $curl = curl_init('https://apidataa.000webhostapp.com/update/');
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json',
        'Content-Length: ' . strlen($data_string))
    );
    $result = curl_exec($curl);
    curl_close($curl);
?>