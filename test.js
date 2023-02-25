let array = [
    [1, 3, 1],
    [1, 3, 5],
    [6, 3, 6]
]


// console.log(array.every((number) => {
//     number[0] === 1
// }))


function checkWinner(board) {
    result = false

    board.forEach((row, index) => {
        // check rows
        if (row.every(token => token === row[index])) {
            result = true;
            return
        }
        // Check Columns
        if (row.every(token => token[0] === row[index][0])) {
            result = true;
            return
        }
        //Check Diagonals
        if (row.every)

    });

    //Check columns

    return result
}
console.log(checkWinner(array))