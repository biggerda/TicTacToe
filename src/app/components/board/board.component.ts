import {Component, OnInit, Input} from '@angular/core';
import {Winner} from '../../models/Winner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  displayPlayerSelect = true;
  firstMove = true;
  humanPlayer: string;
  aiPlayer: string;
  board: any[];
  winner: Winner;
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

  makeHumanMove(box: number) {
    if (this.isGameOver) {
      return;
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


  isMovesLeft() {
    if (
      this.board.filter(value => value === null)
    ) {
      return true;
    }
    return false;
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
    }

    const winnerResult = this.calculateWinner(this.board);

    if (winnerResult) {
      this.winnerMsg(winnerResult);
    }
  }

  computerMove() {
    const aiChoices = [4, 0, 8, 6, 2, 1, 3, 5];

    for (const index of aiChoices) {
      if (!this.board[index]) {
        this.board[index] = this.aiPlayer;

        const winnerResult = this.calculateWinner(this.board);

        if (winnerResult) {
          this.winnerMsg(winnerResult);
        }
        break;
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
        return {winner: currentBoard[a], cells: [a, b, c]};
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
        this.winner.text = 'It is a draw!';
        break;
      case this.aiPlayer:
        this.winner.text = 'You lost!';
        break;
      case this.humanPlayer:
        this.winner.text = 'You won!';
        break;
    }
  }

  levelChange(currLevel: number) {
    this.currentLevel = +currLevel;
    this.newGame();
  }
}
