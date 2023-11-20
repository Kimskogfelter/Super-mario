
document.addEventListener('DOMContentLoaded', () => {
let moves = document.getElementById('moves');
let memoryCardImages = ["assets/images/toad.png", "assets/images/toad.png", "assets/images/super-mario.png", "assets/images/super-mario.png", "assets/images/super-mario.png",
"assets/images/scared-boo.png", "assets/images/scared-boo.png", "assets/images/princess-peach.png", "assets/images/princess-peach.png",
    "assets/images/bowser.png", "assets/images/bowser.png", "assets/images/goomba.png", "assets/images/goomba.png"];

let card1;
let card2;
let cardPair = [card1, card2];


function flipCard () {

}

function checkMatchingCards () {

}

function matchingCards () {

}



/* new code */


    // Get the timer element
    const timerElement = document.getElementById('timer');

    // Get the restart button
    const restartButton = document.getElementById('restartbutton');

    // Set initial time
    let seconds = 0;
    let timerInterval;

    // Function to update the timer display
    function updateTimer() {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        // Format the time with leading zeros
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

        // Update the timer display
        timerElement.textContent = `Timer: ${formattedTime}`;
    }

    // Function to start the timer
    function startTimer() {
        // Reset the seconds
        seconds = 0;

        // Start the interval
        timerInterval = setInterval(updateTimer, 1000);
    }

    // Function to restart the timer
    function restartTimer() {
        // Clear the interval
        clearInterval(timerInterval);

        // Start the timer again
        startTimer();
    }

    // Add click event listener to the restart button
    restartButton.addEventListener('click', restartTimer);

    // Start the timer when the page is loaded
    startTimer();
});