var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);
var img1 = document.querySelector('.img1');
console.log(img1);
if(randomNumber1 === 1){
    img1.setAttribute("src", "images/dice1.png");
}else if(randomNumber1 === 2){
    img1.setAttribute("src", "images/dice2.png");
}else if(randomNumber1 === 3){
    img1.setAttribute("src", "images/dice3.png");
}else if(randomNumber1 === 4){
    img1.setAttribute("src", "images/dice4.png");
}else if(randomNumber1 === 5){
    img1.setAttribute("src", "images/dice5.png");
}else{
    img1.setAttribute("src", "images/dice6.png");
}     

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);
var img2 = document.querySelector('.img2');
console.log(img2);
if(randomNumber2 === 1){
    img2.setAttribute("src", "images/dice1.png");
}else if(randomNumber2 === 2){
    img2.setAttribute("src", "images/dice2.png");
}else if(randomNumber2 === 3){
    img2.setAttribute("src", "images/dice3.png");
}else if(randomNumber2 === 4){
    img2.setAttribute("src", "images/dice4.png");
}else if(randomNumber2 === 5){
    img2.setAttribute("src", "images/dice5.png");
}else{
    img2.setAttribute("src", "images/dice6.png");
}   

if(randomNumber1 > randomNumber2){  
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}