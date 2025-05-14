// For player 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
console.log("Player 1: " + randomNumber1);

if (randomNumber1 === 1){

        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");;
    } else if (randomNumber1 === 2) {
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber1 === 3){
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");   
    } else if (randomNumber1 === 4){
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber1 === 5){
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    } else if (randomNumber1 === 6){
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    }

// For Player 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

console.log("Player 2: " + randomNumber2);

if (randomNumber2 === 1){
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");;
    } else if (randomNumber2 === 2) {
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    } else if (randomNumber2 === 3){
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");   
    } else if (randomNumber2 === 4){
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    } else if (randomNumber2 === 5){
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    } else if (randomNumber2 === 6){
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    }

//Declaring Winner

if (randomNumber1 > randomNumber2){
    console.log("Result: Player 1 won!");
    document.querySelector("h1").innerHTML = "🏆 Player 1 Won!"
} else if (randomNumber1 === randomNumber2){
    console.log("Result: Draw!");
    document.querySelector("h1").innerHTML = "🤝 Draw! 🤝"
} else {
    console.log("Result: Player 2 won!")
    document.querySelector("h1").innerHTML = "Player 2 Won! 🏆 "
}



//Button functionality
// function refreshPage(){
//     window.location.reload();
// }

// function resetPage(){
//     window.location.href = "./dicee.html"
// }
