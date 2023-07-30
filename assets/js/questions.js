//Create variables to target the elements in the document
var timeCount = document.querySelector(".timer");
var time = document.querySelector("#time");
var start = document.querySelector(".start-screen");
var startButton = document.querySelector("#start");
var questionsCard = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices");
var questionTitles = document.querySelector("#question-title");
var end = document.querySelector("#end-screen");
correct = document.getElementById("true");
incorrect = document.getElementById("false");
incorrectAlert = document.getElementById("incorrect");
correctAlert = document.getElementById("correct");

var timeLeft = 90;
var timeStart = 0;

time.innerHTML = timeLeft;

function timeCountdown(seconds) {
  timeLeft = seconds;
  var countDown = setInterval(() => {
    time.innerHTML = timeLeft;
    console.log(timeLeft);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countDown);
      console.log("stop");
    }
    // if ((countDown = "click")) {
    //   setInterval(countDown);
    //   console.log("start");
    // }
  }, 1000);
}

timeCountdown(90);
//function to show questions and hide start page
function startQuiz(q) {
  var q = document.getElementById("questions");
  var hide = document.getElementById("start-screen");
  if (q.style.display === "none") {
    (q.style.display = "block") + (hide.className = "hide");
  } else {
    (q.style.display = "none") + (hide.className = "start");
  }
  return;
}

// correct = document.getElementById("true");
// incorrect = document.getElementById("false");
// incorrectAlert = document.getElementById("incorrect");
// correctAlert = document.getElementById("correct");

incorrect.addEventListener("click", function wrongAnswers() {
  if ((incorrect.value = "false")) {
    incorrectAlert.className = "start";
    setInterval(() => {
      incorrectAlert.className = "hide";
    }, 3000);
  }
});

correct.addEventListener("click", function correctAnswers() {
  if ((correct.value = "true")) {
    correctAlert.className = "start";
    setInterval(() => {
      correctAlert.className = "hide";
    }, 3000);
  }
});

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
