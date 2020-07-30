var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 11; 
function setTime () {
    var timeInterval = setInterval(function () {
        secondsLeft--
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

        if (secondsLeft === 0 ) {
            clearInterval(timeInterval)
            sendMesssage();
        }
    }, 1000)
}

function sendMesssage() {
    timeEl.textContent = ""
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
}


setTime()