import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GameFrameComponent} from './components/game-frame/game-frame.component';
import {PlayerSelectComponent} from './components/player-select/player-select.component';
import {BoardComponent} from './components/board/board.component';
import {SquareComponent} from './components/square/square.component';
import {NbButtonComponent, NbButtonModule, NbLayoutModule, NbThemeModule} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    GameFrameComponent,
    PlayerSelectComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({name: 'cosmic '}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
