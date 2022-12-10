<?php
    function notifications($channel,$message,$events){
        $options = array(
            'cluster' => 'ap1',
            'useTLS' => true
        );
        $pusher = new Pusher\Pusher(
            'fdd2d88095b96edb92f5',
            'd16dbc84782402e40487',
            '1516523',
            $options
        );
        $data['message'] = $message;
        $pusher->trigger($channel, $events, $data);
    //        $pusher->trigger('courses-app', 'notice', $data);
    }
?>