var begin = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#questionSect");
var choicesEl = document.querySelector("#choices");


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


function generate(currIndex) {
    questionEl.innerHTML = "";

    if (currIndex < questions.length) {
        questionEl.innerHTML = questions[currIndex].title;



        for (i = 0; i < questions[currIndex].choices.length; i++) {
            var choiceEl = document.createElement("button");
            choiceEl.innerText = questions[currIndex].choices[i];

            choiceEl.addEventListener("click", function (event) {
                
                if (choiceEl.innerText === questions[currIndex].answer) {
                    timeLeft += 10;
                }
                else {
                    timeLeft -= 10;
                }
                questionEl.innerHTML = "";
                if (currIndex === questions.length) {
                    return;
                }
                else {
                    currIndex++;
                    generate();
                }
            });
            choicesEl.append(choiceEl);
        }
    }
}
console.log(questions.length);


