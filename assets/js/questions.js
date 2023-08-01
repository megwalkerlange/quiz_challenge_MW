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
var finalScore = document.querySelector("#final-score");
var submitButton = document.querySelector("#submit");
var input = document.querySelector("initials");

//variables created for the click event on questions
var correct = document.getElementById("#true");
var incorrect = document.getElementById("#false");
var answerButtons = document.querySelectorAll(".choice");
var answerButtons = document.querySelectorAll(".choice");
var incorrectAlert = document.querySelectorAll(".hide");
var correctAlert = document.getElementById("#correct");

//variables for time/score

var timeLeft = 30;
var score = 0;
var countwrong = 5;

//variables for individual questions hide/reveal

var questionOne = document.getElementById("questions-1");
var questionTwo = document.getElementById("questions-2");
var questionThree = document.getElementById("questions-3");
var questionFour = document.getElementById("questions-4");
var questionFive = document.getElementById("questions-5");

var questionTracker = 1;

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
      alert("Time's Up!");
      // ((start.style.display = "block") +
      //   (questions.style.display = "none"));
    }
  }, 1000);
});

for (let i = 0; i < answerButtons.length; i++)
  answerButtons[i].addEventListener("click", function (e) {
    if (answerButtons[i].value === "correct") {
      console.log("correct");
      score++;
      console.log("the score is  " + score);
      finalScore.innerHTML = score;
    }
    if (answerButtons[i].value === "incorrect") {
      console.log("incorrect");
      score--;
      setInterval(() => {
        time.innerHTML = timeLeft;
        timeLeft - 5;
      }, 1000);
      console.log(timeLeft - countwrong);
      document.getElementById("questions-" + questionTracker).style.display =
        "block";
    } else {
      document.getElementById("questions-" + questionTracker).style.display =
        "none";

      questionTracker++;

      document.getElementById("questions-" + questionTracker).style.display =
        "block";

      if (questionTracker === "questions-6") {
        end.className = "start";
      }
    }
  });

submitButton.addEventListener("click", function submitScore() {
  input = "" + score;

  console.log(input);

  localStorage.setItem("name", input);
});
