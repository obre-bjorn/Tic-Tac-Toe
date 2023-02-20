function GameBoard() {

    let gameboard = []

    let players = [{
            player: 'Player One',
            symbol: 'X'
        },
        {
            player: 'Player Two',
            symbol: 'O'
        }
    ]

    function createBoard(elem, rows) {
        for (let i = 0; i < rows; i++) {
            gameboard.push([])
            for (let j = 0; j < rows; j++) {
                gameboard[i].push('')
            }
        }
        console.log(gameboard)
    }

    function play(board, player) {

    }
    return { createBoard }
}


let game = GameBoard()
game.createBoard('', 3)