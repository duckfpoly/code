$(document).ready(function () {
    $('#id_update').click(function ()        { showSuccessToast('WARNING !', 'You don\'t update ID items !', 'warning'); });
    $('#close_box_update').click(function () { close_model_update()                                                      });
    $('#overlay').click(function ()          { close_model_update()                                                      });
});

function close_model_update() {
    $("#overlay").css({
        'display': 'none'
    });
    $("#box_modal_update").css({
        'animation': '',
    });
    var myFnc = function () {
        $("#box_modal_update").css({
            'display': 'none'
        });
    };
    setTimeout(myFnc, 500);
    $("#box_modal_update").css({
        'animation': 'close_box_modal_update 0.7s',
    });
}

function no_data(message) {
    $("tbody").html(`
      <tr>
        <td colspan="4">
            <div class="span4">
                <div class="loader circle"></div>
                <div class="messg mt-3">${message}</div>
            </div>
        </td>
      </tr>
    `)
}

function showSuccessToast(title, message, type) {
    toast({
        title: title,
        message: message,
        type: type,
        duration: 3000
    });
}



function viewCreateItems(){
    $("tbody").html(`
      <tr>
        <td colspan="4">
            <div class="span4">
                <div class="loader circle"></div>
                <div class="messg mt-3">${message}</div>
            </div>
        </td>
      </tr>
    `);
}