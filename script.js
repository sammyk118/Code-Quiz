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


function generate() {
    begin.remove();
    questionEl.innerHTML = "";
    choices.innerHTML = "";

    if (currIndex < questions.length) {
        questionEl.innerHTML = questions[currIndex].question;



        for (i = 0; i < questions[currIndex].choices.length; i++) {
            var choiceEl = document.createElement("button");
            choiceEl.innerHTML = questions[currIndex].choices[i];
            console.log("should be generating");
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
            console.log("correct.", element.innerText, " is ", questions[currIndex].answer);
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
            console.log("womp womp.", element.innerText, " is not ", questions[currIndex].answer);
        }
    }
    



}

// function compare(event) {
//     var element = event.target;

//     if (element.matches("li")) {

//         var createDiv = document.createElement("div");
//         createDiv.setAttribute("id", "createDiv");
//         // Correct condition 
//         if (element.textContent == questions[questionIndex].answer) {
//             score++;
//             createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
//             // Correct condition 
//         } else {
//             // Will deduct -5 seconds off secondsLeft for wrong answers
//             secondsLeft = secondsLeft - penalty;
//             createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
//         }

//     }
//     // Question Index determines number question user is on
//     questionIndex++;

//     if (questionIndex >= questions.length) {
//         // All done will append last page with user stats
//         allDone();
//         createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
//     } else {
//         render(questionIndex);
//     }
//     questionsDiv.appendChild(createDiv);

// }
