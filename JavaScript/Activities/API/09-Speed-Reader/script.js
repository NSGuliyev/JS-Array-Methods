var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");
console.log(words)

var timeEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

var wordsPerMillisecond = prompt("How many words per millisecond would you like to read?");

function setTimer () {
    var timeLeft = 5; 

    var timeInterval = setInterval(function () {
        timeLeft--
        timeEl.textContent = timeLeft + " Seconds remaining";

        if (timeLeft === 0) {
            timeEl.textContent = "";
            clearInterval(timeInterval);
            speedRead()
        }
    }, 1000)
}


function speedRead () {
    var i = 0;

    var poemInterval = setInterval(function () {
        if (words[i] === undefined) {
            clearInterval(poemInterval);
        } else {
            mainEl.textContent = words[i];
            i++;
        }
    }, wordsPerMillisecond);
};

setTimer();