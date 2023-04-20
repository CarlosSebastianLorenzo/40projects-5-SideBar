const bars = document.getElementById("bars");
const none = document.getElementById("none");
const links = document.getElementById("links");

function toggleMenu() {
    bars.classList.toggle("none");
    none.classList.toggle("none");
    links.classList.toggle("show");
}

bars.addEventListener("click", toggleMenu);

none.addEventListener("click", toggleMenu);

/* CÓDIGO ANTIGUO:
const $bars = document.getElementById("bars");
const $close = document.getElementById("close");
const $links = document.getElementById("links");

$bars.addEventListener("click", function(){
    $bars.classList.toggle("none");
    $close.classList.toggle("none");
    $links.classList.toggle("show");
})
$close.addEventListener("click", function(){
    $close.classList.toggle("none");
    $bars.classList.toggle("none");
    $links.classList.toggle("show");
})
*/
