import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './containers/items/items.component';
import { RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';
import { DetailsItemComponent } from './containers/details-item/details-item.component';
import { StoreModule } from '@ngrx/store';
import * as fromItems from './store/items.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ItemsEffects } from './store/items.effects';

@NgModule({
  declarations: [ItemsComponent, ListaComponent, DetailsItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ItemsComponent }
      , { path: ':id', component: DetailsItemComponent }
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatButtonModule,
    StoreModule.forFeature('items', fromItems.reducer),
    EffectsModule.forFeature([ItemsEffects])
  ],
  providers: [
      ItemsService
  ]
})
export class ItemsModule {

 }
