function GameBoard() {

    let gameboard = []


    function createBoard(elem, rows) {
        for (let i = 0; i < rows; i++) {
            gameboard.push([])
            for (let j = 0; j < rows; j++) {
                gameboard[i].push('')
            }
        }
        console.log(gameboard)
    }

    let getBoard = () => gameboard

    function availableCell(row, column, player) {
        if (gameboard[column][row] !== '') return

        gameboard[column][row] = player.symbol

        return gameboard

    }
    return { createBoard, getBoard, availableCell }
}

function gameController() {


    let players = [{
            player: 'Player One',
            symbol: 'X'
        },
        {
            player: 'Player Two',
            symbol: 'O'
        }
    ]

    let game = GameBoard();
    game.createBoard('', 3);


    console.log(game.availableCell(1, 1, players[0]))
    console.log(game.availableCell(1, 1, players[1]))
    console.log(game.availableCell(0, 1, players[0]))
}

gameController()