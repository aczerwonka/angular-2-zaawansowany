import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './containers/items/items.component';
import { RouterModule } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './services/items.service';

@NgModule({
  declarations: [ItemsComponent, ListaComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ItemsComponent }]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
      ItemsService
  ]
})
export class ItemsModule {

 }
