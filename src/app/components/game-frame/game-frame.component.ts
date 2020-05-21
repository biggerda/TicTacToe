import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html',
  styleUrls: ['./game-frame.component.scss']
})
export class GameFrameComponent implements OnInit {

  playerIsX: boolean;
  gameMode: number;

  constructor() {
  }

  ngOnInit(): void {
    this.gameMode = 0;
  }
}
