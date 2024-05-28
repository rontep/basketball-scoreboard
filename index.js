// Define function for adding points to correct team
function plusPoints(team, toAdd) {
    let teamPoints = document.getElementById(team)
    let sum = parseInt(teamPoints.textContent) + toAdd
    teamPoints.textContent = sum
}