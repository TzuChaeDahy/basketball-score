let homeDisplay = document.getElementById("home-score")
let guestDisplay = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

homeDisplay.textContent = homeScore
guestDisplay.textContent = guestScore

function homeOnePoint(){
    homeScore += 1
    homeDisplay.textContent = homeScore
}

function homeTwoPoints(){
    homeScore += 2
    homeDisplay.textContent = homeScore
}

function homeThreePoints(){
    homeScore += 3
    homeDisplay.textContent = homeScore
}

function guestOnePoint(){
    guestScore += 1
    guestDisplay.textContent = guestScore
}

function guestTwoPoints(){
    guestScore += 2
    guestDisplay.textContent = guestScore
}

function guestThreePoints(){
    guestScore += 3
    guestDisplay.textContent = guestScore
}

