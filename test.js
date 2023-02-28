let board = [
    [0, 1, 0],
    [2, 0, 2],
    [0, 0, 2]
]



let availableCells = []


function checkAvailableCells() {
    for (let row = 0; row < board.length; row++) {
        for (let column = 0; column < board.length; column++) {

            if (board[row][column] === 0) {
                availableCells.push(row + '' + column)
            }
        }
    }

}


checkAvailableCells()

function computerPlay() {
    let token = "X"
    let index = availableCells[Math.floor(Math.random() * availableCells.length)]
    let [row, column] = index.split('')
    board[row][column] = token
    return board

}
console.log(availableCells[0].split(''))
console.log(availableCells.includes('00'))
console.log(computerPlay())

checkAvailableCells()
console.log(computerPlay())