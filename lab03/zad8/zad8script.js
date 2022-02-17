let balloon = document.querySelector('.balloon');
let balloonSize = getBalloonSize();
let explosion = 401;
let maxBalloon = 400;
let minExplosion = 300;
let exploded = false;

document.addEventListener('keydown', arrowKeys);
document.addEventListener('keydown', checkKey);

function getBalloonSize() {
    return parseInt(window.getComputedStyle(balloon).fontSize);
}

function arrowKeys(key) {
    if (key.keyCode === 38 || key.keyCode === 40) {
        key.preventDefault();
    }
}

function checkKey(key) {
    let ballonSizeChange = balloonSize * 0.10;

    if (key.keyCode === 38) {
        increaseBalloonSize(ballonSizeChange);
    } else if (key.keyCode === 40 && balloonSize > 30) {
        decreaseBalloonSize(ballonSizeChange);
    }
}

function increaseBalloonSize(ballonSizeChange) {
    balloon.style.fontSize = `${(balloonSize + Math.ceil(ballonSizeChange))}px`;
    balloonSize = getBalloonSize();
    checkExplosion();
    Active();
    document.querySelector('.balloon').removeEventListener("contextmenu", menu);
}

function decreaseBalloonSize(ballonSizeChange) {
    balloon.style.fontSize = `${(balloonSize - ballonSizeChange)}px`;
    balloonSize = getBalloonSize();
    Active();
    document.querySelector('.balloon').removeEventListener("contextmenu", menu);
}

function calculateexplosion() {
    let maxBalloon = 400;
    let minExplosion = 300;
    return Math.floor(Math.random() * (maxBalloon - minExplosion + 1)) + minExplosion;
}

function checkExplosion() {
    if (balloonSize > explosion) {
        balloon.textContent = "💥";
        document.removeEventListener('keydown', checkKey);
        document.querySelector('.balloon').removeEventListener("contextmenu", function () { });
        exploded = true;

    }
}


// ---------------------------------

function Active() {
    document.getElementById("context-menu").classList.remove("active");
}

window.addEventListener("click", Active);


document.querySelector('.balloon').addEventListener("contextmenu", function (event) {
    if (event.ctrlKey && !exploded) {
        event.preventDefault();
        var contextElement = document.getElementById("context-menu");
        contextElement.style.top = event.offsetY + "px";
        contextElement.style.left = event.offsetX + "px";
        contextElement.classList.add("active");
        document.getElementById("tmp").innerHTML = balloonSize / maxBalloon * 100 + "%";
    }
});
