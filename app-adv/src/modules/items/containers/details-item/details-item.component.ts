import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentItem } from '../../store/items.selectors';
import { ItemModel } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-details-item',
  templateUrl: './details-item.component.html',
  styleUrls: ['./details-item.component.scss']
})
export class DetailsItemComponent implements OnInit {
  data: ItemModel;


  constructor(private store: Store<any>){

  }
  ngOnInit() {
    this.store.select(getCurrentItem).subscribe((data)=>{
      this.data = data;
    })
  }

}
