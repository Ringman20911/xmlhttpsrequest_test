document.addEventListener("DOMContentLoaded", init);

function init() {
    setTimeout(loadImg, 1000);
}

function loadImg() {
    const myImage = new Image();
    myImage.src = "sus.jpg";
    document.body.appendChild(myImage);
}
