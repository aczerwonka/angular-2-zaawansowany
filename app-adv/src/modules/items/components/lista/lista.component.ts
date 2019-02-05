import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ListaDataSource } from './lista-datasource';
import { ItemsService } from '../../services/items.service';
import { Store } from '@ngrx/store';
import { CardActionTypes, AddToCard } from 'src/modules/card/store/card.action';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ListaDataSource;

  constructor(private itemsService: ItemsService, private store: Store<any>) {
      this.store.subscribe((state)=>{
        console.log(state.card.data);
      })
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [ 'title', 'imgSrc', 'id'];

  ngOnInit() {
    this.itemsService.fetch().subscribe((data) => {
      this.dataSource = new ListaDataSource(this.paginator, this.sort);
      this.dataSource.data = data.data;
    });
    //this.dataSource = new ListaDataSource(this.paginator, this.sort);
  }

  buy(item){

   // this.store.dispatch( {type: CardActionTypes.AddToCard, payload: item});
   this.store.dispatch(new AddToCard(item));
  }
}
