import {Component, OnInit, Input} from '@angular/core';
import {Winner} from '../../models/Winner';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  humanPlayer: string;
  aiPlayer: string;
  board: any[];
  winner: Winner;
  isGameOver = true;
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
    this.newGame();
  }

  newGame() {
    this.board = Array(9).fill(null);
    this.winner = null;
    this.isGameOver = false;
    this.onStartGameHuman();
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

  onStartGameAI() {
    this.aiPlayer = 'X';
    this.humanPlayer = 'O';
    this.makeAIMove();
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
        return {winner: currentBoard[a], cells: [a, b, c]};
      }
    }

    return (currentBoard.every(cell => cell !== null))
      ? {winner: 'draw'}
      : false;
  }

  winnerMsg(winner) {
    this.isGameOver = true;
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
}
