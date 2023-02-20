// Tic Tac Toe Board Generator
function GameBoard() {

    let gameboard = []


    function createBoard(elem, rows) {
        for (let i = 0; i < rows; i++) {
            gameboard.push([])
            for (let j = 0; j < rows; j++) {
                gameboard[i].push(Cell())
            }
        }
        console.log(gameboard)
    }

    let getBoard = () => gameboard


    function dropToken(row, column, player) {

        let availableCell = gameboard[column][row].get !== '';

        if (availableCell) return
        gameboard[column][row].addToken(player)

    }

    return { createBoard, getBoard, dropToken }
}


// Represents each Box to be played
function Cell() {
    let value = ''

    function addToken(player) {
        value = player
    }

    function getValue() {
        return value
    }

    return { addToken, getValue }
}


// Game Controller Function

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