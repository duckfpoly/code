var data_api = "http://localhost/api/courses";
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
              <td><img src="${items.image_course}" alt="Image Course" width="100px" height="70px"></td>
              <td>${items.name_course}</td>
              <td>${items.price_course}</td>
              <td>${items.category.name_category}</td>
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
