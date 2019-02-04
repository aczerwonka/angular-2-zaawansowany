import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { WsGameComponent } from './containers/ws-game/ws-game.component';

@NgModule({
  declarations: [WsGameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: WsGameComponent}])
  ]

})
export class GameModule { }
