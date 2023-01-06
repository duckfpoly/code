var data_api = 'https://apidataa.000webhostapp.com/';
// get data from api link
getData(render_data)
async function getData(callback) {
  await axios.get(data_api)
    .then(function (response) {
      no_data('Loading');
      return response.data;
    })
    .then(callback)
    .catch(function (error) {
      console.log('Message: ' + error);
      no_data('Error data source !');
    });
}
// render data in table
function render_data(data) {
  axios.get(data_api)
    .then((response) => {
      if (response.data == "\r\n\r\n") {
        no_data('No data available !');
      }
      else {
        var htmls = data.map(items => {
          return `
            <tr id="items" class=" data-item-${items.id}">
              <td>${items.id}</td>
              <td>${items.name}</td>
              <td>${items.age}</td>
              <td>
                <input value="Edit" name="edit_items" id="edit_item" onclick="edit_data(${items.id})" type="button" class="btn btn-primary">
                <input onclick="del_data(${items.id})" type="button" class="btn btn-danger" value="Del">
              </td>
            </tr>
          `;
        });
        $("tbody").html(htmls.join(''))
      }
    })
    .catch(error => {
      if (error.response) {
        console.log(error.responderEnd);
      }
    });
}
// create items list
$(document).ready(function createItem() {
  $("#btn_submit").click(function (e) {
    var name_post = $("#name").val();
    var age_post = $("#age").val();
    var dataString = 'name=' + name_post + '&age=' + age_post;
    if (name_post == '' || age_post == '') {
      alert("Please Fill All Fields");
    }
    else {
      $.ajax({
        type: "POST",
        url: 'action/create.php',
        data: dataString,
        success: function () {
          getData(render_data);
          showSuccessToast('SUCCESS', 'Create Successfully !', 'success');
          $('input[name=name').val('');
          $('input[name=age').val('');
          $("#modal .close").click()
        }
      });
    }
  });
});
// delete item
function del_data(id_element) {
  $(document).ready(function () {
    $.ajax({
      type: "POST",
      url: 'action/delete.php',
      data: { id: id_element },
      success: function () {
        var data_item = document.querySelector('.data-item-' + id_element)
        if (data_item) {
          data_item.remove();
          showSuccessToast('SUCCESS', 'Delete Successfully !', 'success')
        }
        getData(render_data);
      }
    })
  });
}
// update item 
function edit_data(id) {
  // console.log(id);
  $("#box_modal_update").css({
    'animation': '',
    'display': 'none'
  });
  var box_modal = function () {
    $("#box_modal_update").css({
      'animation': 'box_modal_update 0.3s linear',
      'display': 'block'
    });
  };
  setTimeout(box_modal, 1);
  $("#overlay").css({
    'display': 'block'
  });
  axios.get(data_api)
    .then(function (response) {
      var data_items = response.data;
      data_items.forEach(element => {
        if (element.id == id) {
          $('input[name=id_update').val(element.id);
          $('input[name=name_update').val(element.name);
          $('input[name=age_update').val(element.age);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
$(document).ready(function updateItem() {
  $('#btn_update').click(function (e) {
    var id_update = $("#id_update").val();
    var name_update = $("#name_update").val();
    var age_update = $("#age_update").val();
    if (id_update == '' || name_update == '' || age_update == '') {
      alert("Please Fill All Fields");
    }
    else {
      var dataUpdate = 'id=' + id_update + '&name=' + name_update + '&age=' + age_update;
      if (dataUpdate == '') { console.log('Data Send is empty'); }
      else { var dataSend = dataUpdate; }
      $.ajax({
        type: "POST",
        url: 'action/update.php',
        data: dataSend,
        success: function () {
          getData(render_data);
          showSuccessToast('SUCCESS', 'Update Successfully !', 'success');
          $('input[name=id_update').val('');
          $('input[name=name_update').val('');
          $('input[name=age_update').val('');
          console.clear();
          close_model_update()
        }
      });
    }
  });
});
