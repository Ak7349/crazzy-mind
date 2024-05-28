var randomNumber1 = Math.floor((Math.random()*6)+1); //1-6
var firstImage = "./images/dice" +randomNumber1+".png"; //dice1.png - dice6.png
document.querySelector("img.img1").setAttribute("src", firstImage); 

var randomNumber2 = Math.floor((Math.random()*6)+1);
var secondImage = "./images/dice" +randomNumber2+".png";
document.querySelector("img.img2").setAttribute("src", secondImage);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🎉";
}
else{
    document.querySelector("h1").innerHTML = "🍻 Draw";
}