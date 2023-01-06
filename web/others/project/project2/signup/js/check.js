var is_check = true;
var fullname = document.getElementById('fullname');
var username = document.getElementById('username');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var showError = document.getElementsByClassName('error');
function is_phonenumber(phonenumber) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if(phonenumber.match(phoneno)) {
        return true;
    }  
    else {  
        return false;
    }
}
function is_Email(youremail){
    var emaio=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if(youremail.match(emaio)){
        return true;
    }
    else{
        return false;
    }
}
function validateForm() {
    is_check = true;
    if(fullname.value == "") {
        showError[0].innerText = "Not entered information !";
        showError[0].style.color = "red";
        is_check = false;
    }
    else {
        showError[0].innerText = "Success !";
        showError[0].style.color = "green";
        is_check = true;
    }
    if(username.value == "") {
        showError[1].innerText = "Not entered information !";
        showError[1].style.color = "red";
        is_check = false;
    }
    else if (username.value.length < 6) {
        showError[1].innerText = "username lenght > 6";
        showError[1].style.color = "red";
        is_check = false;
    }
    else {
        showError[1].innerText = "Success !";
        showError[1].style.color = "green";
        is_check = true;
    }
    if(email.value == "") {
        showError[2].innerText = "Not entered information !";
        showError[2].style.color = "red";
        is_check = false;
    }
    else if(!is_Email(email.value)){
        showError[2].innerText="Incorrect format !";
        showError[2].style.color='red';
        is_check = false;
    }
    else {
        showError[2].innerText = "Success !";
        showError[2].style.color = "green";
        is_check = true;
    }
    if(phone.value == "") {
        showError[3].innerText = "Not entered information !";
        showError[3].style.color = "red";
        is_check = false;
    }
    else if(!is_phonenumber(phone.value)){
        showError[3].innerText="Incorrect format !";
        showError[3].style.color='red';
        is_check = false;
    }
    else {
        showError[3].innerText = "Success !";
        showError[3].style.color = "green";
        is_check = true;
    }
    if(password.value == "") {
        showError[4].innerText = "Not entered information !";
        showError[4].style.color = "red";
        is_check = false;
    }
    else if (password.value.length < 6) {
        showError[4].innerText = "Length password > 6";
        showError[4].style.color = "red";
        is_check = false;
    }
    else {
        showError[4].innerText = "Success !";
        showError[4].style.color = "green";
        is_check = true;
    }
    if(repassword.value == "") {
        showError[5].innerText = "Not entered information !";
        showError[5].style.color = "red";
        is_check = false;
    }
    else if (repassword.value !== password.value) {
        showError[5].innerText = "Mismatch password !";
        showError[5].style.color = "red";
        is_check = false;
    }
    else {
        showError[5].innerText = "Success !";
        showError[5].style.color = "green";
        is_check = true;
    }
    return is_check;
}
function remove(){
    for(var i = 0; i < showError.length; i++) {
        showError[i].innerText = "";
    }
}