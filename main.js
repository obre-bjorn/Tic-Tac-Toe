// Tic Tac Toe Board Generator
function GameBoard() {

    let gameboard = []

    function createBoard(rows) {
        for (let i = 0; i < rows; i++) {
            gameboard.push([])
            for (let j = 0; j < rows; j++) {
                gameboard[i].push(Cell())
            }
        }
    }

    // Creates Board 
    createBoard(3);


    // Board Getter
    let getBoard = () => gameboard


    // Place Value on the Board
    function dropToken(row, column, player) {

        let availableCell = gameboard[row][column].getValue() !== '';

        if (availableCell) return
        gameboard[column][row].addToken(player)

    }


    // Prints Board to the Screen / Console.
    function printBoard() {
        let boardWithValues = gameboard.map(row => row.map(cell => cell.getValue()));
        return boardWithValues;

    }


    return { getBoard, dropToken, printBoard }
}


// Represents each Box to be displayed on the board
function Cell() {
    let value = ''


    // Add Player value to Cell
    function addToken(player) {
        value = player
    }


    // Get the cell value
    function getValue() {
        return value
    }

    return { addToken, getValue }
}


// Game Controller Function

function gameController() {

    // Player that play the game
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

    let activePlayer = players[0]

    let switchPlayer = () => activePlayer === players[0] ? players[1] : players[0]

    let getActivePlayer = () => activePlayer

    function printNewRound() {
        console.log(game.printBoard())

        console.log(`${activePlayer.player}'s Turn `)
    }

    function playRound(row, column) {
        console.log(`Dropping ${getActivePlayer}'s token`);
        game.dropToken(row, column, getActivePlayer.symbol)

        switchPlayer()
        printNewRound()

    }

    printNewRound()

    return {
        getActivePlayer,
        playRound

    }

}

let TicTacToe = gameController()
TicTacToe.playRound(1, 2)
TicTacToe.playRound(0, 0)
console.log(TicTacToe);