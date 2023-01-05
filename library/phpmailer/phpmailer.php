<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    require_once 'vendor/autoload.php';
    function send_mail($mail,$output,$title){
        $mailer = new PHPMailer(true);
        try {
            $mailer->SMTPDebug = 0;
            $mailer->isSMTP();
            $mailer->Host       = 'smtp.gmail.com';
            $mailer->SMTPAuth   = true;
            $mailer->Username   = 'ndcake.store@gmail.com';
            $mailer->Password   = 'znbusgktghhcwbaw';
            $mailer->SMTPSecure = 'tls';
            $mailer->Port       = 587;
            $mailer->setFrom('ndcake.store@gmail.com', 'DDH Courses');
            $mailer->addAddress($mail);
            $mailer->isHTML(true);
            $mailer->AddReplyTo('ndcake.store@gmail.com', 'DDH Courses');
            $body = $output;
            $mailer->Subject = 'DDH Courses - '.$title;
            $mailer->Body = $body;
            $mailer->send();
        }catch (Exception $e){
//            echo "Mail not be sent. Error: {$e}";
//            echo "Mail not be sent. Error: {$mailer->ErrorInfo}";
        }
    }

?>
