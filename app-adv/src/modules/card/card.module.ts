import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './containers/card/card.component';
import { RouterModule } from '@angular/router';
import { MatBadge, MatBadgeModule, MatChipsModule } from '@angular/material';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: CardComponent }]),
    MatBadgeModule,
    MatChipsModule
  ],

})
export class CardModule { }
