let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");
let timer = document.getElementById("g");
let homeOne = document.getElementById("home-one");

function addScore(team, points) {
    if(team === "home") {
        homeScore += points;
        homeEl.innerText = homeScore;
    } else {
        guestScore += points;
        guestEl.innerText = guestScore;
    }
}

// if(homeScore > guestScore) {

// }


let reset = document.getElementById("resetGame").addEventListener("click", () => {
    homeScore = 0;
    guestScore = 0;
    homeEl.innerText = 0;
    guestEl.innerText = 0;
});
