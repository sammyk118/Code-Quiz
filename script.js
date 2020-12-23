var begin = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questionSect");
var choicesEl = document.querySelector("#choices");
var ScoreEl = document.querySelector("#highscore");

//array of objects to hold all the question data
//question, choices, answer
var questions = [
    {
        question: "Commonly used data types do NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },

    {
        question: "The condition in an if/else statement is enclosed within ____",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store ____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "string values must be enclosed within ____ when being assigned to variables",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful too used during web development and debugging for printing content to the debugger is ",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    }];


var score = 0;
var currIndex = 0;
var timeLeft = 60;
var listEl = document.createElement("ul");
var timeInterval = 0;

begin.addEventListener("click", function (event) {

    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        timeLeft--;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "End";
            finish();
        }
    }, 1000);
    generate(currIndex);
});

function generate() {
    begin.remove();
    questionEl.innerHTML = "";
    choices.innerHTML = "";

    if (currIndex < questions.length) {
        questionEl.innerHTML = questions[currIndex].question;

        for (i = 0; i < questions[currIndex].choices.length; i++) {
            var choiceEl = document.createElement("button");
            choiceEl.innerHTML = questions[currIndex].choices[i];
            // console.log("should be generating");
            choiceEl.addEventListener("click", (compare)); 
            choicesEl.append(choiceEl);
        }
    }
}

function compare(event) {
    var element = event.target;

    if (element.matches("button")) {

        if (element.innerText == questions[currIndex].answer) {
            timeLeft += 10;
            // console.log("correct.", element.innerText, " is ", questions[currIndex].answer);
            currIndex++;
            
            if (currIndex >= questions.length) {
                finish();
            }
            else {
                generate();
            }
        }
        else {
            timeLeft -= 10;
            // console.log("womp womp.", element.innerText, " is not ", questions[currIndex].answer);
        }
    }
}

function finish() {
    questionEl.innerHTML = "";
    timerEl.remove();
    choicesEl.remove();

    if (timeLeft > 0) {
        var newP = document.createElement("p");
        newP.textContent = "Your score is: " + timeLeft;
        questionEl.appendChild(newP);
        clearInterval(timeInterval);
    }

    var newLabel = document.createElement("label");
    newLabel.textContent = "enter your initials";
    questionEl.appendChild(newLabel);

    var newInput = document.createElement("input");
    newInput.textContent = "";
    questionEl.appendChild(newInput);

    var newSubmit = document.createElement("button");
    newSubmit.textContent = "Submit";
    questionEl.appendChild(newSubmit);

    newSubmit.addEventListener("click", function () {
        var initials = newInput.value;
        var yourInfo = { initials: initials, score: timeLeft }
        var scoreboard = localStorage.getItem("scoreboard");
        if (scoreboard === null) {
            scoreboard = [];
        }
        else {
            scoreboard = JSON.parse(scoreboard);
        }
        scoreboard.push(yourInfo);
        var newScore = JSON.stringify(scoreboard);
        localStorage.setItem("scoreboard", newScore);

        for (i = 0; i < scoreboard.length; i++){
            var score = document.createElement("li");
            score.textContent = scoreboard[i].initials + scoreboard[i].score;
            ScoreEl.appendChild(score);
            
        }
    })
}