const dice = document.querySelector("#dice");
const rollButton = document.querySelector("#roll");
const rollCount = document.querySelector("#roll-count");
const historyList = document.querySelector("#history-list");
const clearHistoryButton = document.querySelector("#clear-history");
const status = document.querySelector("#status");

let rolls = 0;

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

function rollDice() {

    const randomIndex = Math.floor(Math.random() * diceFaces.length);

    dice.textContent = diceFaces[randomIndex];

}

rollButton.addEventListener("click", function() {

    rollDice();

    status.textContent = `You rolled ${dice.textContent}`;
    
    dice.style.animation = "none";

    dice.offsetHeight;

    dice.style.animation = "roll 0.4s";

    rolls++;

    rollCount.textContent = rolls;

    const historyItem = document.createElement("li");

    historyItem.textContent = `Roll ${rolls}: ${dice.textContent}`;

    historyList.appendChild(historyItem);
    if (historyList.children.length > 10) {
        
        historyList.removeChild(historyList.firstElementChild);

    }

});

clearHistoryButton.addEventListener("click", function() {

    historyList.innerHTML = "";

    rolls = 0;

    rollCount.textContent = rolls;

    clearHistoryButton.disabled = true;

});

