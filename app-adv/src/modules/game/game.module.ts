import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WsGameComponent } from './containers/ws-game/ws-game.component';
import { HttpClientModule } from '@angular/common/http';
import { WsGameService } from './services/ws-game.sevice';

@NgModule({
  declarations: [WsGameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: WsGameComponent}]),
    HttpClientModule
  ]

})
export class GameModule { }
