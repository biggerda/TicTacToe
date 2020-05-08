import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameFrameComponent } from './components/game-frame/game-frame.component';
import { PlayerSelectComponent } from './components/player-select/player-select.component';
import { BoardComponent } from './components/board/board.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    GameFrameComponent,
    PlayerSelectComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
