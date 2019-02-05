import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCardData } from '../../store/card.selectors';
import { Observable } from 'rxjs';
import { AddToCard, RemoveFormCard, LoadCards } from '../../store/card.action';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  data$: Observable<any>;

  constructor(private store: Store<any>) {
    // this.store.subscribe((state)=>{
    //   console.log(state.card.data);
    // })
    this.data$ = this.store.select(getCardData);
  }

  ngOnInit() {
    this.store.dispatch(new LoadCards());
  }


  add(item) {
    this.store.dispatch(new AddToCard(item));
  }
  remove(item) {
    this.store.dispatch(new RemoveFormCard(item));
  }
}
