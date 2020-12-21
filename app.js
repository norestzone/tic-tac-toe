// Page loads
document.addEventListener("DOMContentLoaded", (e) => {
    let gameGrid = document.querySelector(".gameGrid");

    const cellSpaces = [null,null, null, null, null,null, null, null, null]
    let playerTurn = "x"
    let playerX = []
    let playerO = []
    let winCombos = [
        ["box1", "box2", "box3"],
        ["box1", "box4", "box7"],
        ["box1", "box5", "box9"],
        ["box2", "box4", "box8"],
        ["box3", "box5", "box7"],
        ["box3", "box6", "box9"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
    ]

    gameGrid.addEventListener("click", cellClick);

    function cellClick(e) {
        // Player 1 clicks a cell to start the game  & cell changes to X
        if (playerTurn === "x") {
            e.target.innerText="X"
            playerX.push(e.target.className)
            console.log(playerX)
            // Players alternate turns
            playerTurn = "o"
        } else {
            // Player 2 clicks a cell & cell changes to O
            e.target.innerText="O"
            playerO.push(e.target.className)
            console.log(playerO)
            // Players alternate turns
            playerTurn = "x"
        }
    } 
})

// Check for win
// function checkForWin() {
// const xSelection = playerX.forEach(item => {
//     playerX.push(item.toString())
//     console.log(playerX);
// })
// let win1 = [];
// winCombos[0].forEach(items => {
//     win1.push(items.toString())
//     console.log(playerX);
// }

// Checks for win upon each selection, determine what a win is
    // Compare winning combinations versus what Players have chosen

// When Player X gets 3 Xs in a line of cells in any direction or Player O gets 3 Os in a line of cells in any direction, that Player wins the game

// If neither Player X or Player O gets 3 in a line of cells in any direction, and all spaces are filled, it is a draw