var begin = document.querySelector("#start");
var timerEl = document.querySelector("#countdown");
var questionSect = document.querySelector("#questionSect");
var choicesList = document.querySelector("#choicesList");

var score = 0;
var currIndex = 0;
var timeleft = 60;

begin.addEventListener("click", function (event) {

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft + "seconds remaining";
        timeLeft--;

        if (timeLeft === 0) {
            timerEl.textContent = "End";
            clearInterval(timeInterval);
        }
    }, 1000);
    generate(currIndex);
});


function generate() {
    
}