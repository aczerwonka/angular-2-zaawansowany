import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CanActivate } from '@angular/router';
import { switchMap, tap, filter, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { getItemsData } from '../store/items.selectors';
import { LoadCards } from 'src/modules/card/store/card.action';
import { LoadItemss } from '../store/items.actions';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {
  constructor(private store: Store<any>) { }

  canActivate(): Observable<boolean> {
    return this.checkData().pipe(
      switchMap(() => of(true))
    )
  }

  checkData(): Observable<any[]> {
    return this.store.select(getItemsData).pipe(
      tap((data) => {
        !data.length && this.store.dispatch(new LoadItemss());
      }),
      filter((data) => !!data.length),
      take(1)
    )
  }
}
