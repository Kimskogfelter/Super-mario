document.addEventListener('DOMContentLoaded', () => {
    
    const movesElement = document.getElementById('moves');
    // this array contains the images for the revealed card 
    const characters = [{ src: "assets/images/toad.webp", alt: "Toad Image" }, { src: "assets/images/super-mario.webp", alt: "Super Mario Image" },
    { src: "assets/images/scared-boo.webp", alt: "Boo Image" }, { src: "assets/images/princess-peach.webp", alt: "Princess Peach Image" },
    { src: "assets/images/bowser.webp", alt: "Bowser Image" }, { src: "assets/images/goomba.webp", alt: "Goomba Image" }];
    const timerElement = document.getElementById('timer');
    const restartButton = document.getElementById('restartbutton');
    // gets the element with the class memorycards
    const memoryCards = document.querySelector(".memorycards");

    // temp array for flipped cards
    let tempForFlippedCards = [];

    let matchingPairs = 0;
    let moves = 0;
    // Set initial time
    let seconds = 0;
    let timerInterval;

    let comparingCards = false;

    let isProcessingMove = false;

    // creates the memorycard 
    function createMemoryCard() {
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

        // add image to front card
        const cardFrontImage = document.createElement("img");
        cardFrontImage.src = "assets/images/yellow-question-block.webp";
        cardFront.appendChild(cardFrontImage);
        cardFrontImage.alt = "Memory Card";

        // set dimensions for front card image
        const frontCardImageDimensions = { width: "100%", height: "100%" };
        // add dimensions to front card image
        Object.assign(cardFrontImage.style, frontCardImageDimensions);

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
        card.setAttribute("data-character-id", characterIndex);

        // creating image
        const image = document.createElement("img");
        image.src = characters[characterIndex].src;
        image.alt = characters[characterIndex].alt;

        cardRevealed.append(image);

        return card;

    }


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



    // checks if cards match
    function checkIfCardsMatch(card) {
        if (isProcessingMove) {
            // If the game is still processing a move, return early to ignore additional clicks
            return;
        }
        if (comparingCards) {
            // If cards are being compared, return early to ignore additional clicks
            return;
        }

        const cardId = card.getAttribute("data-character-id");
        const isFlipped = card.getAttribute("data-flipped") === "true";

        if (card.classList.contains("disabledcard") || isFlipped) {
            return;
        }

        card.setAttribute("data-flipped", "true");

        if (tempForFlippedCards.length > 0 && tempForFlippedCards[0] !== cardId) {
            comparingCards = true;

            // Set the state to indicate that the move is being processed
            isProcessingMove = true;

            setTimeout(() => {
                unflippingCard();
                comparingCards = false;
                isProcessingMove = false; // Reset the state when the move is processed
            }, 3000);

            moves++;
            updateUI();

            tempForFlippedCards = [];
            return;
        }

        if (tempForFlippedCards.length > 0 && tempForFlippedCards[0] === cardId) {
            comparingCards = true;

            // Set the state to indicate that the move is being processed
            isProcessingMove = true;

            setTimeout(() => {
                markAsMatched(card);
                comparingCards = false;
                isProcessingMove = false; // Reset the state when the move is processed
            }, 3000);

            tempForFlippedCards = [];
        }
    }

    // Unflipping all the card but not those who are already matched
    function unflippingCard() {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            const isFlipped = card.getAttribute("data-flipped") === "true";

            if (!card.classList.contains("disabledcard") && isFlipped) {
                card.setAttribute("data-flipped", "false");
            }
        });
    }

    // update ui function for all possible state update up ahead
    function updateUI() {
        // update moves count
        movesElement.textContent = ` Moves: ${String(moves).padStart(1, "0")}`;
    }



    //function taking 2 card ids and adding disabledcard class to it which means its matched
    function markAsMatched(id) {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            if (card.getAttribute("data-character-id") == id) {
                card.classList.add("card", "disabledcard", "click");
            }
        });
        // Add to the matchedPairs count
        matchingPairs++;

        // Check if all pairs are matched
        if (matchingPairs === characters.length) {

            // Call a function to show the "You Won" overlay
            showWinResult();
        }
    }

    // To show the result when a user wins the game
    function showWinResult() {
        // Check if a win result element already exists
        const existingWinResult = document.querySelector(".win-result");

        // If it exists, remove it
        if (existingWinResult) {
            existingWinResult.remove();
        }

        // Create a new win result element
        const winResult = document.createElement("div");
        winResult.classList.add("win-result");

        const winMessage = document.createElement("div");
        winMessage.classList.add("winning-message");
        winMessage.textContent = "You made it! Congratulations!";

        const winRestartButton = document.createElement("button");
        winRestartButton.textContent = "Play Again";
        // Add click event listener to the restart button that appears when you win the game
        winRestartButton.addEventListener("click", restartGameButton);

        winResult.appendChild(winMessage);
        winResult.appendChild(winRestartButton);

        // Append the new win result to the game container
        memoryCards.appendChild(winResult);

        // Clear the timer interval
        clearInterval(timerInterval);
        timerInterval = null;
    }


    // Function to restart the game when the restart game button is clicked

    function restartGameButton() {
        // Clear the timer interval
        clearInterval(timerInterval);

        // Remove the existing win result
        const existingWinResult = document.querySelector(".win-result");
        if (existingWinResult) {
            existingWinResult.remove();
        }

        // Reset variables
        characterCounts = {};
        seconds = 0;
        moves = 0;
        matchingPairs = 0;

        // Clear the array of flipped card IDs
        tempForFlippedCards = [];

        // removes all the memory cards so the front side is up again
        memoryCards.innerHTML = "";

        // Restart the game
        startGame();

        // Update the UI
        updateUI();

        // restart timer
        startTimer();
    }
    // Add click event listener to the restart button
    restartButton.addEventListener('click', restartGameButton);


    /* starts the game */
    function startGame() {
        for (let i = 0; i < 12; i++) {
            const card = createMemoryCard();

            const cardWithImage = addImageToMemoryCard(card);

            // Use the data-id attribute for identification
            card.setAttribute("data-id", i);

            memoryCards.appendChild(cardWithImage);

            // Move the event listener after adding the image
            card.addEventListener("click", () => {
                checkIfCardsMatch(card);
                card.classList.add("click");
            });
        }
    }


    // Start the timer when the page is loaded
    startTimer();
    startGame();
});