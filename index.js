let firstScore = document.getElementById("first-score-point");
let secondScore = document.getElementById("second-score-point");

let leftPlusOneBtn = document.getElementById("left-plus-one");
let leftPlusTwoBtn = document.getElementById("left-plus-two");
let leftPlusThreeBtn = document.getElementById("left-plus-three");

let rightPlusOneBtn = document.getElementById("right-plus-one");
let rightPlusTwoBtn = document.getElementById("right-plus-two");
let rightPlusThreeBtn = document.getElementById("right-plus-three");

var leftScore = 0;
var rightScore = 0;
var timeLeft = 10;
var counter = 0;

// score one point for the left team
function addLeftPlusOne() {
  leftScore += 1;
  firstScore.textContent = leftScore;
  highlightHighScore(leftScore, rightScore);
}

// score two points for the left team
function addLeftPlusTwo() {
  leftScore += 2;
  firstScore.textContent = leftScore;
  highlightHighScore(leftScore, rightScore);
}

// score three points for the left team
function addLeftPlusThree() {
  leftScore += 3;
  firstScore.textContent = leftScore;
  highlightHighScore(leftScore, rightScore);
}

// score one point for the right team
function addRightPlusOne() {
  rightScore += 1;
  secondScore.textContent = rightScore;
  highlightHighScore(leftScore, rightScore);
}

// score two points for the right team
function addRightPlusTwo() {
  rightScore += 2;
  secondScore.textContent = rightScore;
  highlightHighScore(leftScore, rightScore);
}

// score three points for the right team
function addRightPlusThree() {
  rightScore += 3;
  secondScore.textContent = rightScore;
  highlightHighScore(leftScore, rightScore);
}

// compare and calculate the score of both teams and decide the winner
function highlightHighScore(leftScore, rightScore) {
  if (leftScore > rightScore) {
    firstScore.style.color = "#00ff00";
    secondScore.style.color = "#F94F6D";
  } else if (rightScore > leftScore) {
    secondScore.style.color = "#00ff00";
    firstScore.style.color = "#F94F6D";
  } else {
    firstScore.style.color = "#F94F6D";
    secondScore.style.color = "#F94F6D";
  }
}

// countdown the timer for the last 10 seconds
const timerCounter = setInterval(() => {
  if (timeLeft == 0) {
    clearInterval(timerCounter);
    document.querySelector(".timer-p").style.color = "red";
    modal.style.display = "block";
    leftScore > rightScore
      ? (document.getElementById("winnerSpan").textContent = "Home")
      : (document.getElementById("winnerSpan").textContent = "Guest");
  }

  if (timeLeft - counter < 10) {
    document.getElementById("second").textContent = "0" + (timeLeft - counter);
  } else {
    document.getElementById("second").textContent = timeLeft - counter;
  }

  timeLeft -= 1;
}, 1000);

// start new game and countdown for 30 seconds
function newGameHandler() {
  leftScore = 0;
  rightScore = 0;
  firstScore.textContent = leftScore;
  secondScore.textContent = rightScore;
  firstScore.style.color = "#F94F6D";
  secondScore.style.color = "#F94F6D";
  timeLeft = 30;
  document.getElementById("second").textContent = timeLeft;
  document.querySelector(".timer-p").style.color = "rgb(252, 202, 109)";

  // Countdown the time for 30 seconds after start new game
  const timerCounter = setInterval(() => {
    if (timeLeft == 0) {
      clearInterval(timerCounter);
      document.querySelector(".timer-p").style.color = "red";
      modal.style.display = "block";
      leftScore > rightScore
        ? (document.getElementById("winnerSpan").textContent = "Home")
        : (document.getElementById("winnerSpan").textContent = "Guest");
    }

    if (timeLeft - counter < 10) {
      document.getElementById("second").textContent =
        "0" + (timeLeft - counter);
    } else {
      document.getElementById("second").textContent = timeLeft - counter;
    }

    timeLeft -= 1;
  }, 1000);
}

// Get the modal for the winner board
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  clearInterval(timerCounter);
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
