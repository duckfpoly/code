<?php 
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $captcha;
        // post value 
        if(isset($_POST['g-recaptcha-response'])){
            $captcha = $_POST['g-recaptcha-response'];
        }
        if(!$captcha){
            $err = 'Please accept captcha !';
        }else{
            $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6Lcj8zYjAAAAAGHQeGZaLMxrtZD_sGX6zj0e3cUK&response=".$captcha."&remoteip=".$_SERVER['REMOTE_ADDR']);
            $data = json_decode($response);
            if($data->success == false){
                $err = 'Spam';
            }else{
                // function process signin/signup
            }
        }
    }
?>

<form action="">
    <div class="g-recaptcha" data-sitekey="6Lcj8zYjAAAAAGHVzb_jOrfsspG4G1xxJa5wWDCO"></div>
</form>

    