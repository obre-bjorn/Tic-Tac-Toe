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
        gameboard[row][column].addToken(player)

    }

    // Prints Board to the Screen / Console.
    function printBoard() {
        let boardWithValues = gameboard.map(row => row.map(cell => cell.getValue()));
        return boardWithValues;

    }


    return { dropToken, printBoard, getBoard }
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
            symbol: 'X',
            control: 'human'
        },
        {
            player: 'Player Two',
            symbol: 'O',
            control: 'computer'
        }
    ]

    let game = GameBoard();

    let activePlayer = players[0]

    let switchPlayer = () => activePlayer = activePlayer === players[0] ? players[1] : players[0]

    let getActivePlayer = () => activePlayer

    let winner = null;

    function getWinner() {
        return winner
    }
    // function printNewRound() {
    //     console.log(game.printBoard())

    //     console.log(`${getActivePlayer().player}'s Turn `)
    // }

    let checkWinner = (board) => {
        const winningCombinations = [
            [
                [0, 0],
                [0, 1],
                [0, 2]
            ], // horizontal line 1
            [
                [1, 0],
                [1, 1],
                [1, 2]
            ], // horizontal line 2
            [
                [2, 0],
                [2, 1],
                [2, 2]
            ], // horizontal line 3
            [
                [0, 0],
                [1, 0],
                [2, 0]
            ], // vertical line 1
            [
                [0, 1],
                [1, 1],
                [2, 1]
            ], // vertical line 2
            [
                [0, 2],
                [1, 2],
                [2, 2]
            ], // vertical line 3
            [
                [0, 0],
                [1, 1],
                [2, 2]
            ], // diagonal line 1
            [
                [0, 2],
                [1, 1],
                [2, 0]
            ], // diagonal line 2
        ];

        // Iterate through each winning combination
        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (
                board[a[0]][a[1]].getValue() && board[a[0]][a[1]].getValue() ===
                board[b[0]][b[1]].getValue() && board[a[0]][a[1]].getValue() ===
                board[c[0]][c[1]].getValue()) {

                // Found a winning combination
                if (board[a[0]][a[1]].getValue()) return board[a[0]][a[1]].getValue(); // Return the player symbol (either "X" or "O")
            }
        }

        // No winner found
        return null;

    }

    function playRound(row, column) {
        console.log(`Dropping ${getActivePlayer().player}'s token`);

        let player = getActivePlayer().control

        if (game.getBoard()[row][column].getValue() === '' && !winner) {
            if (player === 'human') {
                game.dropToken(row, column, getActivePlayer().symbol)
                switchPlayer()
            } else {

            }
            // printNewRound()
            //return 'Game is still On'
        }
        winner = checkWinner(game.getBoard())
        if (winner) return winner

    }

    // printNewRound()

    return {
        getActivePlayer,
        playRound,
        getWinner,
        getBoard: game.getBoard
    }

}


//Game UI
function screenController() {
    let boardContainer = document.querySelector('.board')
    let playerActive = document.querySelector('#player')
    let gameOn = gameController()


    let board = gameOn.getBoard()
        // console.log(board)

    board.forEach((row, rowIndex) => {

        row.forEach((column, columnIndex) => {

            let cellButton = document.createElement('button')
            cellButton.classList.add('cell')
            cellButton.dataset.row = rowIndex
            cellButton.dataset.column = columnIndex
            cellButton.addEventListener('click', clickHandler)

            boardContainer.appendChild(cellButton)

        })

    });


    function clickHandler(e) {
        let displayWinner = document.querySelector('#result')
        let row = e.target.dataset.row
        let column = e.target.dataset.column
        console.log(gameOn.playRound(row, column))

        this.textContent = board[row][column].getValue()
        playerActive.textContent = `${gameOn.getActivePlayer().player}'s turn`
            // console.log(displayWinner)
        if (gameOn.getWinner()) { displayWinner.textContent = `${gameOn.getWinner()} has Won` };

    }

}


//MinMax Algorithm

// Testing Values
// let TicTacToe = gameController()
// TicTacToe.playRound(1, 2)
// TicTacToe.playRound(0, 0)
// TicTacToe.playRound(0, 0)
// TicTacToe.playRound(0, 2)
// TicTacToe.playRound(0, 1)
// console.log(TicTacToe);
screenController()