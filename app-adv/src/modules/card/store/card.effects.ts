import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { RemoveFormCard, AddToCard, CardActionTypes, LoadCardsSuccess } from './card.action';
import { tap, map, take, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CardState } from 'src/app/utils/interfaces';
import { getCardData } from './card.selectors';
import { of } from 'rxjs';
import { dispatch } from 'rxjs/internal/observable/range';

const KEY = 'NG_APP_CARD';

@Injectable({ providedIn: 'root' })
export class CardEffectsService {
    constructor(private httpClient: HttpClient, private actions$: Actions, private store: Store<CardState>) {

    }

    @Effect() fetchCard = this.actions$.pipe(
        ofType(CardActionTypes.LoadCards),
        switchMap((state) => of(JSON.parse(localStorage.getItem(KEY)) || [])),
        map((data) => new LoadCardsSuccess(data))
    )

    @Effect({ dispatch: false }) updateCard = this.actions$.pipe(
        ofType(CardActionTypes.AddToCard, CardActionTypes.RemoveFromCard),
        tap((state) => {
            this.store.select(getCardData)
                .pipe(
                    take(1)
                )
                .subscribe((state) => {
                    localStorage.setItem(KEY, JSON.stringify(state));
                })
        })
    );
}
