import {Component, Input, OnInit} from '@angular/core';
import {Winner} from '../../models/Winner';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {
    @Input() value: 'X' | 'O';
    @Input() position: number;
    @Input() winner: Winner;
    @Input() drawGame: boolean;
}
