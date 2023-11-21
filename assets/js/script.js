
document.addEventListener('DOMContentLoaded', () => {
let moves = document.getElementById('moves');
/* this array contains the images for the revealed card */
let characters = [".assets/images/toad.png", ".assets/images/toad.png", ".assets/images/super-mario.png", ".assets/images/super-mario.png", ".assets/images/super-mario.png",
".assets/images/scared-boo.png", ".assets/images/scared-boo.png", ".assets/images/princess-peach.png", ".assets/images/princess-peach.png",
    ".assets/images/bowser.png", ".assets/images/bowser.png", ".assets/images/goomba.png", ".assets/images/goomba.png"];
const timerElement = document.getElementById('timer');
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



    /* NEW CODE */


    /* gets the element with the class memorycards */
    const memoryCards = document.querySelector(".memorycards");

    /* creates the memorycard */
    function createMemoryCard () {
        const card = document.createElement("div");
        card.classList.add("card");

        const innerCard = document.createElement("div");
        innerCard.classList.add("inner-card");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");

        const cardRevealed = document.createElement("div");
        cardRevealed.classList.add("card-revealed");

        innerCard.appendChild(cardFront);
        innerCard.appendChild(cardRevealed);

        card.appendChild(innerCard);

        return card;
    }

    /* creates a var for the character counts to be able to match the cards */
    let characterCounts = {};

    function addImageToMemoryCard(card) { 
        const cardRevealed = card.querySelector(".card-revealed");

        //* characters index
        let characterIndex;

        do {
            characterIndex = Math.floor(Math.random() * characters.length);
        } while (characterCounts[characterIndex] >= 2);
        characterCounts[characterIndex] = (characterCounts[characterIndex] || 0) + 1;

    }

 /* starts the game */
    function startGame () {
        for (let i = 0; i < 12; i++) {
        const card = createMemoryCard();

        const cardWithImage=addImageToMemoryCard(card)
    
        card.addEventListener("click", () => {
            card.classList.add("click");
        });

        memoryCards.appendChild(cardWithImage);
    }
    }

    startGame();
});