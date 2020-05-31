import {Component, OnInit, Input} from '@angular/core';
import {Winner} from '../../models/Winner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  displayPlayerSelect = true;
  humanPlayer: string;
  aiPlayer: string;
  board: any[];
  winner: Winner;
  drawGame: boolean;
  isGameOver = true;
  askPlayAgain = false;
  winningLines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Verticle
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  availableModes = [
    {
      id: 1,
      level: 'easy'
    },
    {
      id: 2,
      level: 'hard'
    },
    {
      id: 3,
      level: '2-Player'
    }
  ];
  currentLevel: number;

  constructor() {
  }

  ngOnInit() {
    console.log(`GAME INITIALIZED`);
    this.currentLevel = 1;
    this.newGame();
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.drawGame = false;
    this.isGameOver = false;
    this.onStartGameHuman();
  }

  clearBoard() {
    if (!this.askPlayAgain) {
      this.board.fill(null);
      this.onStartGameHuman();
      this.displayPlayerSelect = true;
    } else {
      this.askPlayAgain = false;
      this.newGame();
    }
  }


  get isBoardEmpty(): boolean {
    return this.board.every(box => box === null);
  }

  get randomChoice(): number {
    return Math.floor(Math.random() * 9);
  }

  onStartGameHuman() {
    this.humanPlayer = 'X';
    this.aiPlayer = 'O';
  }

  onSelectHuman() {
    if (!this.askPlayAgain) {
      this.displayPlayerSelect = false;
    } else {
      this.displayPlayerSelect = false;
      this.clearBoard();
    }
  }

  switchPlayer() {
    const temp = this.humanPlayer;
    this.humanPlayer = this.aiPlayer;
    this.aiPlayer = temp;
  }

  makeHumanMove(box: number) {
    if (this.isGameOver) {
      this.newGame();
      return;
    }

    if (this.askPlayAgain || this.displayPlayerSelect) {
      this.askPlayAgain = false;
      this.displayPlayerSelect = false;
    }

    if (this.board[box] === null) {
      this.board[box] = this.humanPlayer;
      const winnerResult = this.calculateWinner(this.board);
      winnerResult ? this.winnerMsg(winnerResult) : this.makeAIMove();
    }
  }

  onStartGameAI() {
    if (!this.askPlayAgain) {
      this.aiPlayer = 'X';
      this.humanPlayer = 'O';
      this.displayPlayerSelect = false;
      this.makeAIMove();
    } else {
      this.newGame();
      this.aiPlayer = 'X';
      this.humanPlayer = 'O';
      this.askPlayAgain = false;
      this.makeAIMove();
    }
  }


  movesLeft() {
    const newBoard: number[] = [];

    this.board.filter((value, index) => {
      if (value === null) {
        newBoard.push(index);
      }
      return value === null;
    });

    return newBoard;
  }

  makeAIMove() {

    switch (this.currentLevel) {
      case 1: {
        this.computerMove();
        break;
      }
      case 2: {
        const index = this.minimax(this.board, 0, this.aiPlayer);
        this.board[index] = this.aiPlayer;
        break;
      }
      case 3: {
        this.switchPlayer();
        break;
      }
    }

    const winnerResult = this.calculateWinner(this.board);

    if (winnerResult) {
      this.winnerMsg(winnerResult);
    }
  }

  computerMove() {
    const aiChoices = this.movesLeft();
    const randomSquare = aiChoices[Math.floor(Math.random() * aiChoices.length)];

    if (!this.board[randomSquare]) {
      this.board[randomSquare] = this.aiPlayer;

      const winnerResult = this.calculateWinner(this.board);

      if (winnerResult) {
        this.winnerMsg(winnerResult);
      }
    }
  }

  minimax(board: string[], depth, player) {
    const winnerResults = this.calculateWinner(board);

    if (winnerResults) {
      switch (winnerResults.winner) {
        case this.humanPlayer:
          return -100 + depth;
        case this.aiPlayer:
          return 100 - depth;
        case 'draw':
          return 0;
      }
    }

    const moves = [];
    board.forEach((box, index) => {
      if (box === null) {
        board[index] = player;
        const score = this.minimax(
          board,
          depth + 1,
          player === this.humanPlayer ? this.aiPlayer : this.humanPlayer
        );
        board[index] = null;
        moves.push({
          index,
          score,
        });
      }
    });

    const minOrMax =
      player === this.humanPlayer
        ? Math.min(...moves.map(x => x.score))
        : Math.max(...moves.map(x => x.score));

    const move = moves.find(x => x.score === minOrMax);

    return (depth === 0)
      ? move.index
      : move.score;
  }

  calculateWinner(currentBoard: string[]) {
    for (const line of this.winningLines) {
      const [a, b, c] = line;

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        const loserBoard: number[] = [];

        currentBoard.forEach((cell, index) => {
          if ((index !== a) && (index !== b) && (index !== c)) {
            loserBoard.push(index);
          }
        });

        return {winner: currentBoard[a], cells: [a, b, c], loserCells: loserBoard};
      }
    }

    return (currentBoard.every(cell => cell !== null))
      ? {winner: 'draw'}
      : false;
  }

  winnerMsg(winner) {
    this.isGameOver = true;
    this.askPlayAgain = true;
    this.winner = winner;

    switch (winner.winner) {
      case 'draw':
        this.drawGame = true;
        this.winner.text = 'DRAW GAME!';
        break;
      case this.aiPlayer:
        this.winner.text = this.aiPlayer + ' WINS';
        break;
      case this.humanPlayer:
        this.winner.text = this.humanPlayer + ' WINS';
        break;
    }
  }

  levelChange(currLevel: number) {
    this.currentLevel = +currLevel;
    this.newGame();
  }
}
