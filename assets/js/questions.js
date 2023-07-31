//Create variables to target the elements in the document
//initial variables created
var timeCount = document.querySelector(".timer");
var time = document.querySelector("#time");
var start = document.querySelector(".start-screen");
var startButton = document.querySelector("#start");
var questionsCard = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices");
var questionBlocks = document.querySelector("#question-title");
var end = document.querySelector("#end-screen");

//variables created for the click event on questions
correct = document.getElementById("true");
incorrect = document.getElementById("false");
incorrectAlert = document.getElementById("incorrect");
correctAlert = document.getElementById("correct");

//variables for time/score
var timeLeft = 90;
var score = 0;

//variables for individual questions hide/reveal

var questionOne = document.getElementsByClassName("question-one");
var questionTwo = document.getElementsByClassName("question-two");
var questionThree = document.getElementsByClassName("question-three");
var questionFour = document.getElementsByClassName("question-four");
var questionFive = document.getElementsByClassName("question-five");

//create array for question variables

var questionList = [];

questionList.push(questionOne);
questionList.push(questionTwo);
questionList.push(questionThree);
questionList.push(questionFour);
questionList.push(questionFive);

console.log(questionList);

//function to hide start screen and show first question when start button is clicked
startButton.addEventListener("click", function startQuiz(q) {
  var q = document.getElementById("questions");
  var hide = document.getElementById("start-screen");
  if (q.style.display === "none") {
    (q.style.display = "block") + (hide.className = "hide");
  } else {
    (q.style.display = "none") + (hide.className = "start");
    var countdown = setInterval(() => {
      time.innerHTML = timeLeft;
      console.log(timeLeft);
      timeLeft--;
      if (timeLeft <= 0) {
        clearInterval(countdown);
        console.log("stop");
      }
    }, 1000);
  }
  return;
});

//function to set alert on page when incorrect anser is selected
incorrect.addEventListener("click", function wrongAnswers() {
  if ((incorrect.value = "false")) {
    incorrectAlert.className = "start";
    setInterval(() => {
      incorrectAlert.className = "hide";
    }, 3000);
  }
});

//function to set alert on page when correct answer is selected
correct.addEventListener("click", function correctAnswers() {
  if ((correct.value = "true")) {
    correctAlert.className = "start";
    setInterval(() => {
      correctAlert.className = "hide";
    }, 3000);
  }
});

correct.addEventListener("click", function logScore() {
  if ((correct.value = "true")) {
    score++;
    console.log(score);
  }
  return;
});

// correct.addEventListener("click", function changeQuestion() {
//   for (let i = 0; i < questionList.length; i++) {
//     if ((correct.value = "true")) {
//       questionList.className = "hide";
//     }
//   }
//   return;
// });

// questionChoices.addEventListener("click", quizAnswers);
//show questions one by one as user selects questions

//set variable for the amount of questions

//set function to hide all the questions except one

//use

//Function/if else statements to determine what happens if user selects correct and incorrect answers
//if user (answer = true) - user + 1 point

//if user (answer = false) - user - 10 seconds of time

//Function to wipe time once all answers are correct

//Alert/display to show quiz is over

//Display of user's score

//Function to log the scores of user in browser

//start button event listener
