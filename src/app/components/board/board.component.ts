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
  curPlayer: string;
  winningPlayer: string;
  board: any[];
  humanScoreVsComp: number;
  aiScoreVsHuman: number;
  player1Score: number;
  player2Score: number;
  winner: Winner;
  drawGame: boolean;
  isGameOver = true;
  askPlayAgain = false;
  canClick = true;
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
    this.resetScores();
    this.currentLevel = 1;
    this.newGame();
  }

  resetScores() {
    this.humanScoreVsComp = 0;
    this.aiScoreVsHuman = 0;
    this.player1Score = 0;
    this.player2Score = 0;
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.winningPlayer = null;
    this.drawGame = false;
    this.isGameOver = false;
    if (this.currentLevel !== 3 ) {
      this.onStartGameHuman();
    }
  }

  clearBoard() {
    if (!this.askPlayAgain) {
      this.board.fill(null);
      this.displayPlayerSelect = true;
    } else {
      this.askPlayAgain = false;
      this.newGame();
    }
  }


  get isBoardEmpty(): boolean {
    return this.board.every(box => box === null);
  }

  get currentPlayer(): string {
    return this.curPlayer;
  }

  onStartGameHuman() {
    this.humanPlayer = 'X';
    this.aiPlayer = 'O';
    this.curPlayer = this.humanPlayer;
  }

  onStartGameHuman2() {
    this.humanPlayer = 'O';
    this.aiPlayer = 'X';
    this.curPlayer = this.humanPlayer;
  }

  onSelectHuman(selection: number) {
    if (selection === 1) {
      this.onStartGameHuman();
    } else {
      this.onStartGameHuman2();
    }

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
    this.curPlayer = this.humanPlayer;
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
      this.curPlayer = this.aiPlayer;
      const winnerResult = this.calculateWinner(this.board);
      winnerResult ? this.winnerMsg(winnerResult) : this.makeComputerMove();
    }
  }

  onStartGameAI() {
    if (!this.askPlayAgain) {
      this.aiPlayer = 'X';
      this.humanPlayer = 'O';
      this.displayPlayerSelect = false;
      this.makeComputerMove();
    } else {
      this.newGame();
      this.aiPlayer = 'X';
      this.humanPlayer = 'O';
      this.askPlayAgain = false;
      this.makeComputerMove();
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

  makeComputerMove() {
    this.canClick = false;


    switch (this.currentLevel) {
      case 1: {
        setTimeout(() => {
          this.computerMove();
          this.canClick = true;
          this.curPlayer = this.humanPlayer;
        }, 750);
        break;
      }
      case 2: {
        setTimeout(() => {
          this.makeAIMove();
          this.canClick = true;
          this.curPlayer = this.humanPlayer;
        }, 500);
        break;
      }
      case 3: {
        this.switchPlayer();
        this.canClick = true;
        this.curPlayer = this.humanPlayer;
        const winnerResult = this.calculateWinner(this.board);

        if (winnerResult) {
          this.winnerMsg(winnerResult);
        }
        break;
      }
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

  makeAIMove() {
    const index = this.minimax(this.board, 0, this.aiPlayer);
    this.board[index] = this.aiPlayer;

    const winnerResult = this.calculateWinner(this.board);
    if (winnerResult) {
      this.winnerMsg(winnerResult);
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
    this.winningPlayer = winner.winner;

    switch (winner.winner) {
      case 'draw':
        this.drawGame = true;
        this.winner.text = 'DRAW GAME!';
        break;
      case this.aiPlayer:
        if (this.currentLevel === 1 || this.currentLevel === 2) {
          this.aiScoreVsHuman = this.aiScoreVsHuman + 1;
        } else if (this.currentLevel === 3) {
          this.player2Score = this.player2Score + 1;
        }
        this.winner.text = this.aiPlayer + ' WINS';
        break;
      case this.humanPlayer:
        if (this.currentLevel === 1 || this.currentLevel === 2) {
          this.humanScoreVsComp = this.humanScoreVsComp + 1;
        } else if (this.currentLevel === 3) {
          this.player1Score = this.player1Score + 1;
        }
        this.winner.text = this.humanPlayer + ' WINS';
        break;
    }
  }

  levelChange(currLevel: number) {
    this.currentLevel = +currLevel;
    this.newGame();
  }
}
