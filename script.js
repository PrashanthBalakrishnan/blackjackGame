let cards = []
let sum = 0;
let hasBlacJack = false;
let isAlive = false;
let message = "";
let gameStatus = document.getElementById("message-el");
let cardStatus = document.getElementById("card-el");
let sumStatus = document.getElementById("sum-el");

let player = {
    name: "Prashanth",
    chips: 150
}

let playerStatus = document.getElementById("player-el")

playerStatus.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;

    if (randomNum > 10) {
        return 10;
    } else if (randomNum === 1) {
        return 11;
    } else { return randomNum; }

}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}


function renderGame() {

    cardStatus.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardStatus.textContent += cards[i] + " "
    }

    sumStatus.textContent = "Sum : " + sum;

    if (sum <= 20) {
        message = "Do you want to hit?"
    }
    else if (sum === 21) {
        message = "Black Jack!!!"
        hasBlacJack = true;
    }
    else {
        message = "its a Bust."
        isAlive = false;
    }

    gameStatus.textContent = message;
}

function drawCard() {
    if (isAlive == true && hasBlacJack == false) {
        drawnCards = getRandomCard();
        cards.push(drawnCards);
        sum += drawnCards;
        renderGame()
    }


}




