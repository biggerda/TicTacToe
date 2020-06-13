export class Score {

  easyHuman: number;
  easyAI: number;
  easyDraw: number;

  hardHuman: number;
  hardAI: number;
  hardDraw: number;

  versusPlayer1: number;
  versusPlayer2: number;
  versusDraw: number;

  constructor() {
    this.setInitial();
  }

  reset() {
    this.setInitial();
  }

  setInitial() {
    this.easyHuman = 0;
    this.easyAI = 0;
    this.easyDraw = 0;

    this.hardHuman = 0;
    this.hardAI = 0;
    this.hardDraw = 0;

    this.versusPlayer1 = 0;
    this.versusPlayer2 = 0;
    this.versusDraw = 0;
  }
}
