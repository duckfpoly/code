function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// var view = getParameterByName("view");
const id    = getParameterByName('id');
const view  = getParameterByName('view');
if (view) {
    if(view === 'create'){
        $( "#app" ).load( "view/create.html" );
    }
    else if (view === 'edit'){
        $( "#app" ).load( "view/edit.html" );
    }

}
else {
    $( "#app" ).load( "view/home.html" );
}
// function demo(element){
//     element.remove();
//     history.pushState({}, "", "?view=create");
//     $( "#app" ).load( "view/create.html" );
// }
