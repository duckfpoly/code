<?php
    require_once 'vendor/autoload.php';
    $client         = new Google\Client();
    $google_oauth   = new Google\Service\Oauth2($client);
    $client->setClientId("860322000129-aa3jsl9jc2upei7jjitjeknhol9p552f.apps.googleusercontent.com");
    $client->setClientSecret("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");
    $client->addScope("email");
    $client->addScope("profile");
    $client->setRedirectUri('http://localhost/courses/login');
    if (isset($_GET['code'])) {
        $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        $client->setAccessToken($token['access_token']);
        $google_account_info = $google_oauth->userinfo->get();
        $email      =   $google_account_info->email;
        $name_user  =   $google_account_info->name;
        // function process
    }
?>
<a href="<?= $client->createAuthUrl() ?>">