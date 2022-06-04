let firstCard = 0;
let secondCard = 0;
let sum = 0;
let min = 1;
let max = 11;
let drawnCards = 0;
let hasBlacJack = false;
let isAlive = true;
let message = "";
let drawnCard = 0;
let gameStatus = document.getElementById("message-el");
let cardStatus = document.getElementById("card-el");
let sumStatus = document.getElementById("sum-el");


function startGame(min, max) {
    firstCard = Math.floor(Math.random() * (max - min + 1) + min);
    secondCard = Math.floor(Math.random() * (max - min + 1) + min)
    sum = firstCard + secondCard;
    if (sum <= 20) {
        message = "Do you want to hit?"
    }
    else if (sum === 21) {
        message = "Black Jack!!!"
        hasBlacJack = true;
    }
    else {
        message = "its a Bust."
        isAlive = true;
    }
    cardStatus.textContent = "Cards : " + firstCard + " " + secondCard;
    sumStatus.textContent = "Sum : " + sum;
    gameStatus.textContent = message;
}

function drawCard(min, max) {
    drawnCard = Math.floor(Math.random() * (max - min + 1) + min)
    sum += drawnCard;
    drawnCards += drawnCard;
    cardStatus.textContent = "Cards : " + firstCard + " " + secondCard + " " + drawnCards;
    sumStatus.textContent = "Sum : " + sum;
}




