var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";

setTimeout(function(){
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);  
  },1000);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";


setTimeout(function(){
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

},1000);


if (randomNumber1 > randomNumber2) {
  setTimeout(function(){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  },2000);
}
else if (randomNumber2 > randomNumber1) {
  setTimeout(function(){
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  },2000);
}
else {
  setTimeout(function(){
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩";
    },2000);
}
