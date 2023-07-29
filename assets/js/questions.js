//Create variables to target the elements in the document
var timeCount = document.querySelector(".timer");
var time = document.querySelector("#time");
var start = document.querySelector(".start-screen");
var startButton = document.querySelector("#start");
var questionsCard = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices");
var questionTitles = document.querySelector("#question-title");
var end = document.querySelector("#end-screen");

// startButton.addEventListener("click", timeCountdown());
//Countdown function
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

//Create elements for the quiz

//set function to toggle and hide elements

//Function/if else statements to determine what happens if user selects correct and incorrect answers
//if user (answer = true) - user + 1 point

//if user (answer = false) - user - 10 seconds of time

//Function to wipe time once all answers are correct

//Alert/display to show quiz is over

//Display of user's score

//Function to log the scores of user in browser

//start button event listener
