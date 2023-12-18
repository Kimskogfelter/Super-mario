document.addEventListener('DOMContentLoaded', () => {
    const movesElement = document.getElementById('moves');
    const characters = [
        { src: "assets/images/toad.webp", alt: "Toad Image" },
        { src: "assets/images/super-mario.webp", alt: "Super Mario Image" },
        { src: "assets/images/scared-boo.webp", alt: "Boo Image" },
        { src: "assets/images/princess-peach.webp", alt: "Princess Peach Image" },
        { src: "assets/images/bowser.webp", alt: "Bowser Image" },
        { src: "assets/images/goomba.webp", alt: "Goomba Image" }
    ];
    const timerElement = document.getElementById('timer');
    const restartButton = document.getElementById('restartbutton');
    const memoryCards = document.querySelector(".memorycards");
    let tempForFlippedCards = [];
    let matchingPairs = 0;
    let moves = 0;
    let seconds = 0;
    let timerInterval;
    let comparingCards = false;
    let isProcessingMove = false;
    let characterCounts = {};

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

        const cardFrontImage = document.createElement("img");
        cardFrontImage.src = "assets/images/yellow-question-block.webp";
        cardFront.appendChild(cardFrontImage);
        cardFrontImage.alt = "Memory Card";

        const frontCardImageDimensions = { width: "100%", height: "100%" };
        Object.assign(cardFrontImage.style, frontCardImageDimensions);

        return card;
    }

    function addImageToMemoryCard(card) {
        const cardRevealed = card.querySelector(".card-revealed");
        let characterIndex;

        do {
            characterIndex = Math.floor(Math.random() * characters.length);
        } while (characterCounts[characterIndex] >= 2);
        characterCounts[characterIndex] = (characterCounts[characterIndex] || 0) + 1;

        card.setAttribute("data-character-id", characterIndex);

        const image = document.createElement("img");
        image.src = characters[characterIndex].src;
        image.alt = characters[characterIndex].alt;

        cardRevealed.append(image);

        return card;
    }

    function updateTimer() {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
        timerElement.textContent = `Timer: ${formattedTime}`;
    }

    function startTimer() {
        seconds = 0;
        timerInterval = setInterval(updateTimer, 1000);
    }

    function checkIfCardsMatch(card) {
        if (isProcessingMove || comparingCards) {
            return;
        }

        const cardId = card.getAttribute("data-character-id");
        const isFlipped = card.getAttribute("data-flipped") === "true";

        if (card.classList.contains("disabledcard") || isFlipped) {
            return;
        }

        card.setAttribute("data-flipped", "true");
        tempForFlippedCards.push(card);

        if (tempForFlippedCards.length === 2) {
            comparingCards = true;

            const [firstCard, secondCard] = tempForFlippedCards;
            const firstCardId = firstCard.getAttribute("data-character-id");
            const secondCardId = secondCard.getAttribute("data-character-id");

            if (firstCardId !== secondCardId) {
                setTimeout(() => {
                    unflippingCard();
                    isProcessingMove = false;
                    comparingCards = false;
                }, 1000);
            } else {
                markAsMatched(firstCardId);
                isProcessingMove = false;
                comparingCards = false;
            }

            tempForFlippedCards = [];
            moves++;
            updateUI();
        }
    }

    function unflippingCard() {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            const isFlipped = card.getAttribute("data-flipped") === "true";

            if (!card.classList.contains("disabledcard") && isFlipped) {
                card.setAttribute("data-flipped", "false");
            }
        });
    }

    function updateUI() {
        movesElement.textContent = ` Moves: ${String(moves).padStart(1, "0")}`;
    }

    function markAsMatched(id) {
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
            if (card.getAttribute("data-character-id") == id) {
                card.classList.add("disabledcard");
            }
        });

        matchingPairs++;

        if (matchingPairs === characters.length) {
            showWinResult();
        }
    }

    function showWinResult() {
        const existingWinResult = document.querySelector(".win-result");

        if (existingWinResult) {
            existingWinResult.remove();
        }

        const winResult = document.createElement("div");
        winResult.classList.add("win-result");

        const winMessage = document.createElement("div");
        winMessage.classList.add("winning-message");
        winMessage.textContent = "You made it! Congratulations!";

        const winRestartButton = document.createElement("button");
        winRestartButton.textContent = "Play Again";
        winRestartButton.addEventListener("click", restartGameButton);

        winResult.appendChild(winMessage);
        winResult.appendChild(winRestartButton);
        memoryCards.appendChild(winResult);

        clearInterval(timerInterval);
        timerInterval = null;
    }

    function restartGameButton() {
        clearInterval(timerInterval);
        const existingWinResult = document.querySelector(".win-result");

        if (existingWinResult) {
            existingWinResult.remove();
        }

        characterCounts = {};
        seconds = 0;
        moves = 0;
        matchingPairs = 0;
        tempForFlippedCards = [];
        memoryCards.innerHTML = "";

        startGame();
        updateUI();
        startTimer();
    }

    restartButton.addEventListener('click', restartGameButton);

    function startGame() {
        for (let i = 0; i < 12; i++) {
            const card = createMemoryCard();
            const cardWithImage = addImageToMemoryCard(card);

            card.setAttribute("data-id", i);
            memoryCards.appendChild(cardWithImage);

            card.addEventListener("click", function () {
                card.classList.toggle("click");
                checkIfCardsMatch(card);
            });
        }
    }

    startTimer();
    startGame();
});
