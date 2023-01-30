let homeScore = 0
let guestScore = 0

const homeScoreAmount = document.getElementById("home-score")
homeScoreAmount.textContent = homeScore

const guestScoreAmount = document.getElementById("guest-score")
guestScoreAmount.textContent = guestScore

const plusOneHomeBtn = document.getElementById("plus1-home")
const plusTwoHomeBtn = document.getElementById("plus2-home")
const plusThreeHomeBtn = document.getElementById("plus3-home")

const plusOneGuestBtn = document.getElementById("plus1-guest")
const plusTwoGuestBtn = document.getElementById("plus2-guest")
const plusThreeGuestBtn = document.getElementById("plus3-guest")

const resetBtn = document.getElementById("reset-btn")


//functions for the score buttons

function onePointHome() {
    homeScore += 1
    homeScoreAmount.textContent = homeScore
    console.log("Home: " + homeScore)
}

function twoPointsHome() {
    homeScore += 2
    homeScoreAmount.textContent = homeScore
    console.log("Home: " + homeScore)
}

function threePointsHome() {
    homeScore += 3
    homeScoreAmount.textContent = homeScore
    console.log("Home: " + homeScore)
}



function onePointGuest() {
    guestScore += 1
    guestScoreAmount.textContent = guestScore
    console.log("Guest: " + guestScore)
}

function twoPointsGuest() {
    guestScore += 2
    guestScoreAmount.textContent = guestScore
    console.log("Guest: " + guestScore)
}

function threePointsGuest() {
    guestScore += 3
    guestScoreAmount.textContent = guestScore
    console.log("Guest: " + guestScore)
}

//reset score

function resetPoints() {
    homeScore = 0
    guestScore = 0
    homeScoreAmount.textContent = homeScore
    guestScoreAmount.textContent = guestScore
    console.log("Reset btn clicked. New game!")
}


//Click events ofr the score buttons
plusOneHomeBtn.addEventListener("click", onePointHome)
plusTwoHomeBtn.addEventListener("click", twoPointsHome)
plusThreeHomeBtn.addEventListener("click", threePointsHome)

plusOneGuestBtn.addEventListener("click", onePointGuest)
plusTwoGuestBtn.addEventListener("click", twoPointsGuest)
plusThreeGuestBtn.addEventListener("click", threePointsGuest)

resetBtn.addEventListener("click", resetPoints)

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function gameClock() {
    let twelveMinutes = 60 * 12,
    display = document.querySelector('#time');
    startTimer(twelveMinutes, display);
};

const startGame = document.getElementById("start-game")

startGame.addEventListener("click", gameClock)