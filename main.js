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

    function reset() {
        value = ''
    }

    return { addToken, getValue, reset }
}


// Game Controller Function
function gameController() {

    // Player that play the game
    let players = [];

    let activePlayer


    let setPlayers = (playersArr) => {
        playersArr.forEach(player => players.push(player))
        console.log(players)
        activePlayer = players[0]
    }

    let game = GameBoard();


    let switchPlayer = () => activePlayer = activePlayer === players[0] ? players[1] : players[0]

    let getActivePlayer = () => activePlayer


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
    let winner = checkWinner(game.getBoard());

    function getWinner() {
        return winner
    }

    function playRound(row, column) {
        console.log(getActivePlayer())
        console.log(`Dropping ${getActivePlayer().name}'s token`);

        // let player = getActivePlayer().control

        if (game.getBoard()[row][column].getValue() === '' && !winner) {

            game.dropToken(row, column, getActivePlayer().symbol)
            switchPlayer()
        }

        winner = checkWinner(game.getBoard())
        if (winner) return winner

    }


    // printNewRound()

    return {
        getActivePlayer,
        playRound,
        getWinner,
        getBoard: game.getBoard,
        player: players,
        setPlayers,

    }

}


//Game UI
function screenController() {

    // Game Setup
    let gameOn = gameController()
    let board = gameOn.getBoard()

    // resetButtion 


    // Game Settings
    let gameSetup = document.querySelector('#game-setup');
    let startGame = document.querySelector('#start-game');
    let playerCards = [...document.querySelectorAll('.player-card')]
    let controlSelect = [...document.querySelectorAll('.select-player')]

    controlSelect.forEach(button => button.addEventListener('click', function(e) {
        // console.log(e)
        button.textContent = button.textContent === 'Human' ? 'AI' : 'Human'
    }))

    startGame.addEventListener('click', function(e) {
        let players = []
        let valid = playerCards.every((card, index) => {
            let playername = card.querySelector('input').value
            let controller = card.querySelector('button').textContent
            let playerSymbol = card.querySelector('.symbol').textContent
            players.push({
                name: playername,
                symbol: playerSymbol,
                control: controller
            })
            return playername

        })

        if (valid) {
            gameSetup.style.display = 'none'
            gameOn.setPlayers(players)
            console.log('====================================');
            console.log(gameOn.getActivePlayer());
            console.log('====================================');
            //console.log(gameOn.player)

        }

    })






    // The Game
    let boardContainer = document.querySelector('.board')
    let playerActive = document.querySelector('#player')
        // console.log(board)

    board.forEach((row, rowIndex) => {

        row.forEach((column, columnIndex) => {

            let cellButton = document.createElement('button')
            cellButton.classList.add('cell')
            cellButton.dataset.row = rowIndex
            cellButton.dataset.column = columnIndex
            cellButton.addEventListener('click', playGame)

            boardContainer.appendChild(cellButton)

        })

    });



    let resetGame = document.querySelector('#reset')
    resetGame.addEventListener('click', function(e) {
        board.forEach(row => row.forEach(cell => cell.reset()))
        let cellButtons = [...document.querySelectorAll('.cell')]
        cellButtons.forEach(cell => cell.textContent = '')
    })


    // Click Handlers 
    function playGame(e) {
        let displayWinner = document.querySelector('#result')
        let row = e.target.dataset.row
        let column = e.target.dataset.column
        console.log(gameOn.playRound(row, column))

        this.textContent = board[row][column].getValue()
        playerActive.textContent = `${gameOn.getActivePlayer().name}'s turn`
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