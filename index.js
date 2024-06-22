// Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var chooseImg1 = document.getElementsByTagName("img")[0];
var chooseImg2 = document.getElementsByTagName("img")[1];

var randomDiceImg = "dice" + randomNumber1 + ".png";

var randomDiceImgSource = "images/" + randomDiceImg;

chooseImg1.setAttribute("src", randomDiceImgSource);

// Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";
var randnomDiceImgSource2 = "images/" + randomDiceImg2;

chooseImg2.setAttribute("src", randnomDiceImgSource2);

// Who Win

var chooseH1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  chooseH1.innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  chooseH1.innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
  chooseImg1.innerHTML = "The dice fell evenly Refresh Me !";
} else if (randomNumber2 === randomNumber1) {
  chooseImg1.innerHTML = "The dice fell evenly Refresh Me !";
} else {
  chooseH1.innerHTML = "Draw !";
}
