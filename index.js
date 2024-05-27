// Declare variables for home and guest points
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

// Define functions for adding points 
function plusOne(team) {
    if (team === "home") {
        let sum = parseInt(homePoints.textContent) + 1
        homePoints.textContent = sum
    } else if (team === "guest") {
        let sum = parseInt(guestPoints.textContent) + 1
        guestPoints.textContent = sum
    }
}

function plusTwo(team) {
    if (team === "home") {
        let sum = parseInt(homePoints.textContent) + 2
        homePoints.textContent = sum
    } else if (team === "guest") {
        let sum = parseInt(guestPoints.textContent) + 2
        guestPoints.textContent = sum
    }
}

function plusThree(team) {
    if (team === "home") {
        let sum = parseInt(homePoints.textContent) + 3
        homePoints.textContent = sum
    } else if (team === "guest") {
        let sum = parseInt(guestPoints.textContent) + 3
        guestPoints.textContent = sum
    }
}