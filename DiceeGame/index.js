// -------------------
var name1=prompt("Enter Name of Player 1");
name1=name1.toUpperCase();
var name2=prompt("Enter Name of Player 2")
name2=name2.toUpperCase();
// ----------------------
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
document.querySelector("#p1").innerHTML=name1;
document.querySelector("#p2").innerHTML=name2;

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h2").innerHTML ="🎊"+ name1+"  Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h2").innerHTML ="🎊"+ name1+ "  Wins! ";
}
else {
  document.querySelector("h2").innerHTML = "Draw!";
}