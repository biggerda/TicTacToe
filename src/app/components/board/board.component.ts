import {Component, OnInit} from '@angular/core';
import {Winner} from '../../models/Winner';
import {Mode} from './mode';
import {Score} from '../../models/Score';
import {log} from 'util';

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
  gameScore: Score = new Score();
  winner: Winner;
  drawGame: boolean;
  isGameOver = true;
  askPlayAgain = false;
  firstMove: boolean;
  canClick = true;
  currentLevel: number;
  availableModes = [
    new Mode(1, 'Easy'),
    new Mode(2, 'Medium'),
    new Mode(3, 'Hard'),
    new Mode(4, '2-Player'),
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
    this.currentLevel = 3;
    this.resetScores();
    this.newGame();
  }

  resetScores() {
    this.gameScore.reset(this.currentLevel);
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.winningPlayer = null;
    this.drawGame = false;
    this.isGameOver = false;
    this.firstMove = true;
    if (this.currentLevel !== 4) {
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
      if (this.currentLevel !== 4) {
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
        const random = Math.round(Math.random());
        switch (random) {
          case 0:
            this.makeRandomMove();
            break;
          case 1:
            this.makeAIMove();
            break;
        }
      } else if (this.currentLevel === 2) {
        const random = Math.round(Math.random() * 2);
        console.log(random);
        switch (random) {
          case 0:
            this.makeRandomMove();
            break;
          case 1:
          case 2:
            this.makeAIMove();
            break;
        }
      } else if (this.currentLevel === 3) {
        this.makeAIMove();
      }
      this.canClick = true;
      this.curPlayer = this.humanPlayer;
    }, 750);
  }

  makeRandomMove() {
    console.log(`rando`);
    const aiChoices = this.movesLeft();
    const randomSquare = aiChoices[Math.floor(Math.random() * aiChoices.length)];

    if (!this.board[randomSquare]) {
      this.board[randomSquare] = this.aiPlayer;
      this.checkWinner();
    }
  }

  makeAIMove() {
    console.log(`ai`);
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

  minimax(board: string[], depth = 4, player) {
    const winnerResults = this.calculateWinner(board);

    if (winnerResults) {
      switch (winnerResults.winner) {
        case this.humanPlayer:
          return -100 - depth;
        case this.aiPlayer:
          return 100 + depth;
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
          this.gameScore.easyDraw++;
        } else if (this.currentLevel === 2) {
          this.gameScore.mediumDraw++;
        } else if (this.currentLevel === 3) {
          this.gameScore.hardDraw++;
        } else if (this.currentLevel === 4) {
          this.gameScore.versusDraw++;
        }
        this.drawGame = true;
        this.winner.text = 'DRAW GAME!';
        break;
      case this.aiPlayer:
        if (this.currentLevel === 1) {
          this.gameScore.easyAI++;
        } else if (this.currentLevel === 2) {
          this.gameScore.mediumAI++;
        } else if (this.currentLevel === 3) {
          this.gameScore.hardAI++;
        } else if (this.currentLevel === 4) {
          this.gameScore.versusPlayer2++;
        }
        this.winner.text = this.aiPlayer + ' WINS';
        break;
      case this.humanPlayer:
        if (this.currentLevel === 1) {
          this.gameScore.easyHuman++;
        } else if (this.currentLevel === 2) {
          this.gameScore.mediumHuman++;
        } else if (this.currentLevel === 3) {
          this.gameScore.hardHuman++;
        } else if (this.currentLevel === 4) {
          this.gameScore.versusPlayer1++;
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
