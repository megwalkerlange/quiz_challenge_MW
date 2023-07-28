//Create variables to target the elements in the document
var timeCount = document.querySelector(".timer");
var time = document.querySelector("#time");
var start = document.querySelector(".start-screen");
var startButton = document.querySelector(".start");
var questionsCard = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices");

var end = document.querySelector("#end-screen");

//Countdown function

var timeLeft = 90;

time.innerHTML = timeLeft;

function timeCountdown(seconds) {
  timeLeft = seconds;
  //   time.innerHTML = timeLeft;
  var countDown = setInterval(() => {
    time.innerHTML = timeLeft;
    console.log(timeLeft);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countDown);
      console.log(stop);
    }
  }, 1000);

  return;
}

timeCountdown(90);

//Create event listener to initiate start of quiz once button has been pressed - link to bottom of page

//Target ''timer'' class in html script/ use setInterval() function
// countDown = setTimeout(timeOut, 9000);

// function timeOut() {
//   document.getElementById("end-screen").innerHTML = "All Done!";
// }
// console.log(countDown);
//give user timer of 60 to 90 seconds

//Function to present questions on the page
//Target "Questions" ID - class of hide - review how to 'hide' and 'reveal' elements.

//May need to create elements/apend for the questions and answers

//Function to select a series of choices. Class of "hide" again.
//Structure for multiple choice selections
//Alert when the answer is correct/incorrect

//Function/if else statements to determine what happens if user selects correct and incorrect answers
//if user (answer = true) - user + 1 point

//if user (answer = false) - user - 10 seconds of time

//Function to wipe time once all answers are correct

//Alert/display to show quiz is over

//Display of user's score

//Function to log the scores of user in browser
