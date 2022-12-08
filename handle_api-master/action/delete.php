<?php
    if(isset($_POST['id'])){
        $id = (int)$_POST['id'];
        $data = array (
            "id" => $id
        );
        $data_string = json_encode($data);
        $curl = curl_init('https://apidataa.000webhostapp.com/delete/');
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json',
            'Content-Length: ' . strlen($data_string))
        );
        $result = curl_exec($curl);
        curl_close($curl);
    }
