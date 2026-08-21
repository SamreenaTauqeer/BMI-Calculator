let count = 0;

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");


increaseButton.addEventListener("click", function() {

    count++;

    countDisplay.innerText = count;

});


decreaseButton.addEventListener("click", function() {

    count--;

    countDisplay.innerText = count;

});


resetButton.addEventListener("click", function() {

    count = 0;

    countDisplay.innerText = count;

});