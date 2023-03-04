let board = [
    ['X', '', ''],
    ['', '', ''],
    ['X', '', '']
]


function checkAvailableCells(board) {
    let availableCells = []

    for (let row = 0; row < board.length; row++) {
        for (let cell = 0; cell < board[row].length; cell++) {
            // console.log(board[row][cell])
            if (!board[row][cell]) availableCells.push(row + '' + cell)
        }
    }

    return availableCells
}


function computerPlay(board) {
    let availbaleSelections = checkAvailableCells(board)
    let computerPick = Math.floor(Math.random(0) * availbaleSelections.length)
    computerPick = availbaleSelections[computerPick]
    let [row, column] = computerPick.split('')
    board[row][column] = 'O'
    return board
}



console.table(computerPlay(board))
console.table(computerPlay(board))
console.table(computerPlay(board))
console.table(computerPlay(board))
    // 


// function Human() {

//     function sayName(name) {
//         console.log(`My name is ${name}`)
//     }

//     function eat() {
//         console.log('eat')
//     }

//     return {
//         sayName,
//         eat
//     }

// };


// Human().sayName('bjorn')
// Human().eat()me('bjorn')
// Human().eat()me('bjorn')
// Human().eat()me('bjorn')
// Human().eat()