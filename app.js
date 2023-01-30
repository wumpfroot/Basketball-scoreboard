
//initial scores. As the game starts with 0 points for both.
let homeScore = 0
let guestScore = 0

//Creating variables of different HTML elements to makee them work with JavaScript
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





//Countdown timer

const startingMinutes = 12
let time = startingMinutes * 60
const countdownTimer = document.getElementById("countdown")

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    seconds = seconds < 10 ? "0" + seconds : seconds

    countdownTimer.textContent = `${minutes}:${seconds}`
    time--

    if (time < 0) { //stop the setInterval whe time = 0 to avoid negative time
        let refreshIntervalId = setInterval(updateCountdown, 1000)
        clearInterval(refreshIntervalId);
    
}
}