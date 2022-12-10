function allow_notification(){
    document.addEventListener("DOMContentLoaded", function () {
        if (!Notification) {
            alert("Trình duyệt của bạn không hỗ trợ chức năng này.");
            return;
        }
        if (Notification.permission !== "granted") Notification.requestPermission();
    });
}
function show_notification(channels,events,name,icon_notification,url_direct){
    Pusher.logToConsole = true;
    var pusher = new Pusher('fdd2d88095b96edb92f5', {
        cluster: 'ap1'
    });
    var channel = pusher.subscribe(channels);
    channel.bind(events, function (data) {
        n = new Notification(
            name, {
                body: data.message,
                icon: icon_notification,
                tag:  url_direct
            }
        );
        setTimeout(n.close.bind(n), 6000);
        n.onclick = function () {
            window.location.href = this.tag;
        }
    });
}

