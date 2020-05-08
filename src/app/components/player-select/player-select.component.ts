import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.scss']
})
export class PlayerSelectComponent implements OnInit {
  @Output() playerIsX: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  selectPlayerIcon(isX: boolean) {
    this.playerIsX.emit(isX);
  }

}
