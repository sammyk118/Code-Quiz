# 04 Web APIs: Code Quiz

This project is about creating a coding quiz with HTML CSS, and JavaScript, but mainly JavaScript. I had to create and display questions and their choices, and when the user selects the correct answer, the page renders the next question, and the time increments. If they get the answer wrong, the timer decrements.

## Technologies used

- HTML
- CSS
- Javascript
- Git
- GitHub

[Website](https://sammyk118.github.io/Code-Quiz/)

## Features

- an array of objects containing the questions and their answers

```javascript
var questions = [
    {question: "Commonly used data types do NOT include: ",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"},
```
- a timer
- the ability to generate HTML elements such as buttons when necessary
```javascript
    //run through each choice for a question
    for (i = 0; i < questions[currIndex].choices.length; i++) {
        var choiceEl = document.createElement("button");
        //creating and writing to buttons
        choiceEl.innerHTML = questions[currIndex].choices[i];
        // console.log("should be generating");
        choiceEl.addEventListener("click", (compare));
        choicesEl.append(choiceEl);
```
- a closing function that stops the timer, removes most elements from the page, lets you enter your initials, and shows you the locally stored scoreboard
```javascript
  if (timeLeft > 0) {
        var newP = document.createElement("p");
        newP.textContent = "Your score is: " + timeLeft;
        questionEl.appendChild(newP);
        clearInterval(timeInterval);
    }
```
```javascript
var newScore = JSON.stringify(scoreboard);
        localStorage.setItem("scoreboard", newScore);

        for (i = 0; i < scoreboard.length; i++){
            var score = document.createElement("li");
            score.textContent = scoreboard[i].initials + scoreboard[i].score;
            ScoreEl.appendChild(score); 
        }
```

## Author

**Sammy Kroner**

[LinkedIn](www.linkedin.com/in/samuel-kroner-44aa11169)

[GitHub](https://github.com/sammyk118)

## Acknowledgements

UC Berkeley Extension program
