export class Score {
  easyHuman: number;
  easyAI: number;
  easyDraw: number;

  mediumHuman: number;
  mediumAI: number;
  mediumDraw: number;

  hardHuman: number;
  hardAI: number;
  hardDraw: number;

  versusPlayer1: number;
  versusPlayer2: number;
  versusDraw: number;

  constructor() {
    this.setInitial();
  }

  setInitial() {
    this.resetEasy();
    this.resetMedium();
    this.resetHard();
    this.resetVersus();
  }

  resetEasy() {
    this.easyHuman = 0;
    this.easyAI = 0;
    this.easyDraw = 0;
  }

  resetMedium() {
    this.mediumHuman = 0;
    this.mediumAI = 0;
    this.mediumDraw = 0;
  }

  resetHard() {
    this.hardHuman = 0;
    this.hardAI = 0;
    this.hardDraw = 0;
  }

  resetVersus() {
    this.versusPlayer1 = 0;
    this.versusPlayer2 = 0;
    this.versusDraw = 0;
  }

  reset(level: number) {
    switch (level) {
      case 1:
        this.resetEasy();
        break;
      case 2:
        this.resetMedium();
        break;
      case 3:
        this.resetHard();
        break;
      case 4:
        this.resetVersus();
        break;
    }
  }
}
