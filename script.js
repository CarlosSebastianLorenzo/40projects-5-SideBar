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