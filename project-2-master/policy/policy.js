var slide_bar_menu = document.getElementById("slide_bar_menu");
var overlay = document.getElementById("overlay");
var menu_mob = document.getElementById("menu_mob");
function showSlideMenu() {
  menu_mob.style.display = "block";
  overlay.style.display = "block";
}
function hideSlideMenu() {
  menu_mob.style.display = "none";
  overlay.style.display = "none";
}