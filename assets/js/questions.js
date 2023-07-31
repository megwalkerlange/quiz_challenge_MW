//Create variables to target the elements in the document
//initial variables created
var timeCount = document.querySelector(".timer");
var time = document.querySelector("#time");
var start = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionsCard = document.querySelector("#questions");
var questionChoices = document.querySelector("#choices");
var questionBlocks = document.querySelector("#question-title");
var end = document.querySelector("#end-screen");

//variables created for the click event on questions
// correct = document.getElementById("true");
// incorrect = document.getElementById("false");
var answerButtons = document.querySelectorAll(".choice");
incorrectAlert = document.getElementById("incorrect");
correctAlert = document.getElementById("correct");

//variables for time/score
var timeLeft = 90;
var score = 0;

//variables for individual questions hide/reveal

var questionOne = document.getElementById("questions-1");
var questionTwo = document.getElementById("questions-2");
var questionThree = document.getElementById("questions-3");
var questionFour = document.getElementById("questions-4");
var questionFive = document.getElementById("questions-5");

var questionTracker = 1;

//create array for question variables

// var questionList = [];

// questionList.push(questionOne);
// questionList.push(questionTwo);
// questionList.push(questionThree);
// questionList.push(questionFour);
// questionList.push(questionFive);

// console.log(questionList);

//function to hide start screen and show first question when start button is clicked
startButton.addEventListener("click", function startQuiz() {
  start.className = "hide";
  questionOne.style.display = "block";

  var countdown = setInterval(() => {
    time.innerHTML = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      console.log("stop");
    }
  }, 1000);
});

//function to set alert on page when incorrect anser is selected

for (let i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", function (e) {
    if (this.value === "correct") {
      console.log("correct");
    }

    if (this.value === "incorrect") {
      console.log("incorrect");
    }

    document.getElementById("questions-" + questionTracker).style.display =
      "none";

    questionTracker++;

    document.getElementById("questions-" + questionTracker).style.display =
      "block";
  });
}

// incorrect.addEventListener("click", function wrongAnswers() {
//   if ((incorrect.value = "false")) {
//     incorrectAlert.className = "start";
//     setInterval(() => {
//       incorrectAlert.className = "hide";
//     }, 3000);
//   }
// });

// //function to set alert on page when correct answer is selected
// correct.addEventListener("click", function correctAnswers() {
//   if ((correct.value = "true")) {
//     correctAlert.className = "start";
//     setInterval(() => {
//       correctAlert.className = "hide";
//     }, 3000);
//   }
// });

correct.addEventListener("click", function logScore() {
  if ((correct.value = "true")) {
    score++;
    console.log(score);
  }
  return;
});

// correct.addEventListener("click", function changeQuestion() {
//   var questionOne = document.getElementById("questions-1");
//   var questionTwo = document.getElementById("questions-2");
//   var questionThree = document.getElementById("questions-3");
//   var questionFour = document.getElementById("questions-4");
//   var questionFive = document.getElementById("questions-5");

//   var questionList = [];

//   questionList.push(questionOne);
//   questionList.push(questionTwo);
//   questionList.push(questionThree);
//   questionList.push(questionFour);
//   questionList.push(questionFive);

//   console.log(questionList);
//   for (let i = 0; i < questionList.length; i++) {
//     if ((correct.value = "true")) {
//       (questionList[i + 1].style.display = "block") +
//         (questionList[i].className = "hide");
//     }
//   }
//   return;
// });
// i = 0;
// for (let i = 0; i < questionList.length; i++);
// console.log(questionList[i]);

// correct.addEventListener("click", function changeQuestion() {
//   var next = questionList[i++];
//   var hide = questionList[i];
//   if ((correct.value = "true")) {
//     (next.style.display = "block") + (hide.className = "hide");
//   } else {
//     (next.style.display = "none") + (hide.className = "start");
//   }
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
