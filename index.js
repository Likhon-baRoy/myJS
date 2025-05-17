let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let timer = document.getElementById("timer");

let countdownInterval = null;

function addScore(team, points) {
    if (countdownInterval === null) {
        alert("First you have to START NEW GAME")
        return;
    }

    if(team === "home") {
        homeScore += points;
        homeEl.innerText = homeScore;
    } else {
        guestScore += points;
        guestEl.innerText = guestScore;
    }
}

function startCountdown(seconds) {
    let timeLeft = seconds;
    updateTimerDisplay(timeLeft);

    countdownInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            declearWinner();
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    let display = seconds < 10 ? `00:0${seconds}` : `00:${seconds}`;
    timer.innerText = display;
}

function declearWinner() {
    if (homeScore > guestScore) {
        timer.innerText = "Home Won!";
    } else if (homeScore < guestScore) {
        timer.innerText = "Guest Won!";
    } else {
        timer.innerHTML = "It's a Tie :)";
    }
}

let reset = document.getElementById("resetGame").addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    homeEl.innerText = 0;
    guestEl.innerText = 0;
    startCountdown(10);
});
