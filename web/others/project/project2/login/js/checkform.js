var is_check = true;
var username = document.getElementById('username');
var password = document.getElementById('password');
var showError = document.getElementsByClassName('error');
var showError2 = document.getElementsByClassName('form-control');
function validateForm() {
    is_check = true;
    if(username.value == "") {
        showError[0].innerText = "Not entered information !";
        showError[0].style.color = "red";
        is_check = false;
    }
    else if (username.value.length < 6) {
        showError[0].innerText = "username lenght > 6";
        showError[0].style.color = "red";
        is_check = false;
    }
    if(password.value == "") {
        showError[1].innerText = "Not entered information !";
        showError[1].style.color = "red";
        is_check = false;
    }
    else if (password.value.length < 6) {
        showError[1].innerText = "Length password > 6";
        showError[1].style.color = "red";
        is_check = false;
    }
    return is_check;
}
function remove() {
    for (var i = 0 ; i < showError.length; i++) {
        showError[i].innerText = "";
    }
}
// Wrong account or password !