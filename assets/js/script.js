
document.addEventListener('DOMContentLoaded', () => {
let movesElement = document.getElementById('moves');
/* this array contains the images for the revealed card */
let characters = ["assets/images/toad.png", "assets/images/super-mario.png", 
"assets/images/scared-boo.png", "assets/images/princess-peach.png",
    "assets/images/bowser.png", "assets/images/goomba.png"];
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

    // temp array for flipped cards
    let tempForFlippedCards = []

    // checks if cards match
    function checkIfCardsMatch (card) 
    {
        // If user clicked  a matched card
        if (card.classList.contains("disabledcard") || card.classList.contains("click"))
            return;

        // the card clicked was first one
        if (tempForFlippedCards.length === 0) {
            tempForFlippedCards.push(card.id);
            return;
        }

        // if second card that was click is not equal to first card
        if (tempForFlippedCards.length > 0 && !tempForFlippedCards.includes(card.id)) {
            tempForFlippedCards = [];

            setTimeout(() => {
                unflippingCard();
            }, 500);

            // update moves score by 1
            moves = moves + 1;
            updateUI();

            return;
        }
        // if second card is same as first card
        if (tempForFlippedCards.length > 0 && tempForFlippedCards.includes(card.id)) {
            tempForFlippedCards = [];
            setTimeout(() => {
                markAsMatched(card.id);
            }, 1000);
            return;
        }
    }

    //function taking 2 argument (card id) and adding disabled class to it which means its matched
    function markAsMatched(id) {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            if (card.id === id) {
                card.classList = ["card disabledcard click"];
            }
        });

        // Increment the matchedPairs count
        matchedPairs++;

        // Check if all pairs are matched
        if (matchedPairs === logos.length) {
            // Call a function to show the "You Won" overlay
            showWinOverlay();
        }
    }

    // Unflipping all the card but not those who are already matched
    function unflippingCard() {
        const cards = document.querySelectorAll(".card");

        // we will loop through each card and check if it is disabled means already matched
        cards.forEach((card) => {
            if (!card.classList.contains("disabledcard")) {
                card.classList = ["card"];
            }
        });
    }

    // update ui function for all possible state update up ahead
    function updateUI() {
        // update moves count
        movesElement.textContent = ` Moves: ${String(moves).padStart(1, "0")}`;
    }

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


    let characterCounts = {};
        // function to add image to the revealed card 
    function addImageToMemoryCard(card) { 
        const cardRevealed = card.querySelector(".card-revealed");

        // characters index
        let characterIndex;

        do {
            characterIndex = Math.floor(Math.random() * characters.length);
        } while (characterCounts[characterIndex] >= 2);
        characterCounts[characterIndex] = (characterCounts[characterIndex] || 0) + 1;

        // adding character index to card for furthur use
        card.setAttribute("id", characterIndex);

        // creating image
        const image = document.createElement("img");
        image.src = characters[characterIndex];

        cardRevealed.append(image);

        return card;

    }

 /* starts the game */
    function startGame () {
        for (let i = 0; i < 12; i++) {
        const card = createMemoryCard();

        const cardWithImage=addImageToMemoryCard(card)
    
        card.addEventListener("click", () => {
            checkIfCardsMatch(card);
            card.classList.add("click");
        });

        memoryCards.appendChild(cardWithImage);
    }
    }

    startGame();
});