import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';



import { ItemsActionTypes, LoadItemssSuccess } from './items.actions';
import { tap, switchMap, map } from 'rxjs/operators';
import { ItemsService } from '../services/items.service';

@Injectable()
export class ItemsEffects {


  @Effect()
  loadItemss$ = this.actions$.pipe(
    ofType(ItemsActionTypes.LoadItemss),
    switchMap((state) => {
      return this.itemsService.fetch();
    }),
    map((resp) => {
      return new LoadItemssSuccess(resp.data);
    })
  );


  constructor(private actions$: Actions, private itemsService: ItemsService) { }

}
