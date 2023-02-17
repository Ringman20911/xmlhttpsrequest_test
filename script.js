document.addEventListener("DOMContentLoaded", init);

function init() {
    let xml = new XMLHttpRequest();
    xml.addEventListener("load", setImg);
    xml.open("GET", "sus.jpg");
    xml.send();
}

function setImg() {
    console.log("Balls");
}