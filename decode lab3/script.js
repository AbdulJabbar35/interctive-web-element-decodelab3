// Change Text
const message = document.getElementById("message");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
    message.textContent = "JavaScript makes webpages interactive!";
});

// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

// Counter App
let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increaseBtn").addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decreaseBtn").addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});