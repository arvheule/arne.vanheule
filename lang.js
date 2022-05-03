
window.onload=function(){
    $('[lang="nl"]').hide();
    const button = document.getElementById("languagebutton");
    button.addEventListener("click", switchLang);
}


function switchLang() {
    $('[lang="nl"]').toggle();
    $('[lang="en"]').toggle();
}