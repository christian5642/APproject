// Variable
const cards = document.querySelectorAll(".card"),
      timeTag = document.querySelector(".time b"),
      flipsTag = document.querySelector(".flips b"),
      refreshBtn = document.querySelector(".details button");

let maxTime = 20;
let timeLeft =  maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;




//Function to chech if two flipped cards match
function matchCards(img1, img2) {
    if (cardOne && cardTwo) {
        if (img1 === img2) {
            matchedCard++;
            if (matchedCard == 6 && timeLeft > 0) {
                clearInterval(timer);
            }

            // Remove event listeners only when cards are matched
            cardOne.removeEventListener("click", flipCard);
            cardTwo.removeEventListener("click", flipCard);

            // Reset cardOne and cardTwo after matching cards
            cardOne = null;
            cardTwo = null;

            disableDeck = false;
        } else {
            // Apply shaking effect to both cards using a loop
            for (let i = 0; i < 2; i++) {
                if ([cardOne, cardTwo][i]) {
                    setTimeout(() => {
                        [cardOne, cardTwo][i].classList.add("shake");
                    }, 400);
                }
            }

            // Remove shaking effect and flip back after a delay
            setTimeout(() => {
                for (let i = 0; i < 2; i++) {
                    if ([cardOne, cardTwo][i]) {
                        [cardOne, cardTwo][i].classList.remove("shake", "flip");
                    }
                }
                cardOne = null;
                cardTwo = null;
                disableDeck = false;
            }, 1200);
        }
    }
}




//Function to initialize the timer
function initTimer() {
    if (timeLeft <= 0) {
        clearInterval(timer);
        return; // Exit the function when time runs out
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({ target: clickedCard }) {
    if (!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if (!cardOne) {
            cardOne = clickedCard;
            return; // Exit the function after setting the first card
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;

        // Add event listener to the clicked cards here
        cardOne.addEventListener("click", flipCard);
        cardTwo.addEventListener("click", flipCard);

        matchCards(cardOneImg, cardTwoImg);
        matchCards(cardTwoImg, cardOneImg); // Call matchCards() for the second card
    }
}



//Function is to shuffle cards and reset the game 
function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() =>{
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});