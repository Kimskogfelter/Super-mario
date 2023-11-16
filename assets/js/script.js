let startButton = document.getElementById('startbutton');
let pauseButton = document.getElementById('stopbutton');
let timer = document.getElementById('timer');
let moves = document.getElementById('moves');
let memoryCardImages = ["assets/images/toad.png", "assets/images/toad.png", "assets/images/super-mario.png", "assets/images/super-mario.png", "assets/images/super-mario.png",
"assets/images/scared-boo.png", "assets/images/scared-boo.png", "assets/images/princess-peach.png", "assets/images/princess-peach.png",
    "assets/images/bowser.png", "assets/images/bowser.png", "assets/images/goomba.png", "assets/images/goomba.png"];


let card1;
let card2;
let cardPair = [card1, card2];

function startGame () {

}

function pauseGame () {

}

function flipCard () {

}

function checkMatchingCards () {

}

function matchingCards () {

}

/* starting the timer when user press "play game" button */
startButton.addEventListener('click', function startGame() {
    timer = setInterval(function () {
        console.log('!');
    }, 1000);
});
/* makes the timer stop when the user press the "pause game" button */
pauseButton.addEventListener('click', function pauseGame() {
    clearInterval(timer);
});