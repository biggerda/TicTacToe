import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-frame',
  templateUrl: './game-frame.component.html',
  styleUrls: ['./game-frame.component.sass']
})
export class GameFrameComponent implements OnInit {

  closePlayerSelect: boolean;
  playerIsX: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  iconPicked($event) {
    this.playerIsX = $event;
    this.closePlayerSelect = true;
  }

  reset() {
    this.closePlayerSelect = false;
  }
}
