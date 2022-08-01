let firstScore = document.getElementById('first-score-point')
let secondScore = document.getElementById('second-score-point')

let leftPlusOneBtn = document.getElementById('left-plus-one')
let leftPlusTwoBtn = document.getElementById('left-plus-two')
let leftPlusThreeBtn = document.getElementById('left-plus-three')

let rightPlusOneBtn = document.getElementById('right-plus-one')
let rightPlusTwoBtn = document.getElementById('right-plus-two')
let rightPlusThreeBtn = document.getElementById('right-plus-three')

var leftScore = 0;
var rightScore = 0;

function addLeftPlusOne(){
    leftScore += 1;
    firstScore.textContent= leftScore;
    highlightHighScore(leftScore, rightScore)
    console.log(leftScore, rightScore)
}
function addLeftPlusTwo(){
    leftScore += 2;
    firstScore.textContent= leftScore;
    highlightHighScore(leftScore, rightScore)
    console.log(leftScore)
}
function addLeftPlusThree(){
    leftScore += 3;
    firstScore.textContent= leftScore;
    highlightHighScore(leftScore, rightScore)
    console.log(leftScore)
}

function addRightPlusOne(){
    rightScore +=1;
    secondScore.textContent= rightScore;
    highlightHighScore(leftScore, rightScore)
    console.log(leftScore, rightScore)
}
function addRightPlusTwo(){
    rightScore += 2;
    secondScore.textContent= rightScore;
    highlightHighScore(leftScore, rightScore)
    console.log(rightScore)
}
function addRightPlusThree(){
    rightScore += 3;
    secondScore.textContent= rightScore;
    highlightHighScore(leftScore, rightScore)
    console.log(rightScore)
}

function highlightHighScore(leftScore, rightScore){
    if(leftScore > rightScore){
        firstScore.style.color = '#00ff00';
        secondScore.style.color = '#F94F6D';
    }
    else if(rightScore > leftScore){
        secondScore.style.color = '#00ff00'
        firstScore.style.color = '#F94F6D';
    }
    else{
        firstScore.style.color = '#F94F6D';
        secondScore.style.color = '#F94F6D';
    }
}

let timeleft = 9;
let counter = 0
const downloadTimer = setInterval(() => {
  if (timeleft == 0) {
    clearInterval(downloadTimer);
  }
  document.getElementById("second").textContent = "0" + (timeleft - counter);
  timeleft -= 1;
}, 1000);

function newGameHandler(){
    clearInterval(downloadTimer);
    document.getElementById("second").textContent = "30";

    leftScore = 0;
    rightScore = 0;
    firstScore.textContent= leftScore;
    secondScore.textContent= rightScore;
    firstScore.style.color = '#F94F6D';
    secondScore.style.color = '#F94F6D';

    console.log("new game")
}