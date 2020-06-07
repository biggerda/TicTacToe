import {Component, OnInit} from '@angular/core';
import {Winner} from '../../models/Winner';
import {Mode} from './mode';

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
  humanScoreVsCompEasy: number;
  humanScoreVsCompHard: number;
  aiScoreVsHumanEasy: number;
  aiScoreVsHumanHard: number;
  player1Score: number;
  player2Score: number;
  level1Draw: number;
  level2Draw: number;
  level3Draw: number;
  winner: Winner;
  drawGame: boolean;
  isGameOver = true;
  askPlayAgain = false;
  firstMove: boolean;
  canClick = true;
  currentLevel: number;
  availableModes = [
    new Mode(1, 'Easy'),
    new Mode(2, 'Hard'),
    new Mode(3, '2-Player'),
  ];
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

  constructor() {
  }

  ngOnInit() {
    this.currentLevel = 1;
    this.resetScores();
    this.newGame();
  }

  resetScores() {
    this.humanScoreVsCompEasy = 0;
    this.humanScoreVsCompHard = 0;
    this.aiScoreVsHumanEasy = 0;
    this.aiScoreVsHumanHard = 0;
    this.player1Score = 0;
    this.player2Score = 0;
    this.level1Draw = 0;
    this.level2Draw = 0;
    this.level3Draw = 0;
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.winningPlayer = null;
    this.drawGame = false;
    this.isGameOver = false;
    this.firstMove = true;
    if (this.currentLevel !== 3) {
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

  onSelectHuman(selection: number) {
    selection === 1
      ? this.curPlayer = 'X'
      : this.curPlayer = 'O';

    if (this.askPlayAgain) {
      this.clearBoard();
    }

    this.firstMove = false;
  }

  makeHumanMove(box: number) {
    if (this.isGameOver) {
      this.newGame();
      return;
    }

    if (this.askPlayAgain) {
      this.askPlayAgain = false;
    }

    if (!this.board[box]) {
      if (this.currentLevel !== 3) {
        this.board[box] = this.curPlayer;
        const winnerResult = this.calculateWinner(this.board);
        this.curPlayer = this.aiPlayer;
        this.firstMove = false;
        winnerResult ? this.winnerMsg(winnerResult) : this.makeComputerMove();
      } else {
        this.board[box] = this.curPlayer;
        this.curPlayer === 'X' ? this.curPlayer = 'O' : this.curPlayer = 'X';
        this.checkWinner();
      }
    }
  }

  onStartGameAI() {
    this.curPlayer = this.aiPlayer;

    if (!!this.askPlayAgain) {
      this.newGame();
      this.askPlayAgain = false;
    }

    this.makeComputerMove();
  }


  movesLeft() {
    const newBoard: number[] = [];

    this.board.filter((value, index) => {
      if (value === null) {
        newBoard.push(index);
      }
    });

    return newBoard;
  }

  makeComputerMove() {
    this.canClick = false;

    setTimeout(() => {
      if (this.currentLevel === 1) {
        this.computerMove();
      } else if (this.currentLevel === 2) {
        this.makeAIMove();
      }
      this.canClick = true;
      this.curPlayer = this.humanPlayer;
    }, 750);
  }

  computerMove() {
    const aiChoices = this.movesLeft();
    const randomSquare = aiChoices[Math.floor(Math.random() * aiChoices.length)];

    if (!this.board[randomSquare]) {
      this.board[randomSquare] = this.aiPlayer;
      this.checkWinner();
    }
  }

  makeAIMove() {
    let index;

    if (this.firstMove) {
      index = Math.floor(Math.random() * 9);
      this.firstMove = false;
    } else {
      index = this.minimax(this.board, 0, this.aiPlayer);
    }
    this.board[index] = this.aiPlayer;

    this.checkWinner();
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
        if (this.currentLevel === 1) {
          this.level1Draw = this.level1Draw + 1;
        } else if (this.currentLevel === 2) {
          this.level2Draw = this.level2Draw + 1;
        } else if (this.currentLevel === 3) {
          this.level3Draw = this.level3Draw + 1;
        }
        this.drawGame = true;
        this.winner.text = 'DRAW GAME!';
        break;
      case this.aiPlayer:
        if (this.currentLevel === 1) {
          this.aiScoreVsHumanEasy = this.aiScoreVsHumanEasy + 1;
        } else if (this.currentLevel === 2) {
          this.aiScoreVsHumanHard = this.aiScoreVsHumanHard + 1;
        } else if (this.currentLevel === 3) {
          this.player2Score = this.player2Score + 1;
        }
        this.winner.text = this.aiPlayer + ' WINS';
        break;
      case this.humanPlayer:
        if (this.currentLevel === 1) {
          this.humanScoreVsCompEasy = this.humanScoreVsCompEasy + 1;
        } else if (this.currentLevel === 2) {
          this.humanScoreVsCompHard = this.humanScoreVsCompHard + 1;
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

  checkWinner() {
    const winnerResult = this.calculateWinner(this.board);
    if (winnerResult) {
      this.winnerMsg(winnerResult);
    }
  }
}
