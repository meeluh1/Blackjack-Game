
let cards = []
let sum = 0
let message = "";

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1

    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}


function startGame(){
    const firstcard = getRandomCard()
    const secondcard = getRandomCard()
    cards = [firstcard, secondcard];
    sum = firstcard + secondcard;
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards:  "

    for (let i=0; i<cards.length; i++){
    cardEl.textContent+= cards[i] + " "

}
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game"    
    }

    messageEl.textContent = message;
   
    sumEl.textContent = "Sum: " + sum;

}

function newCard() {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
}

function resetGame() {
    cards = [];
    sum = 0;
    message = "Want to play a round?";
    cardEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";
    messageEl.textContent = message;

    
}


