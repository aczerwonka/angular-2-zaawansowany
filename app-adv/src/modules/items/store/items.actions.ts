import { Action } from '@ngrx/store';

export enum ItemsActionTypes {
  LoadItemss = '[Items] Load Itemss',
  LoadItemssSuccess = '[Items] Load Itemss success',

}

export class LoadItemss implements Action {
  readonly type = ItemsActionTypes.LoadItemss;
}

export class LoadItemssSuccess implements Action {
  readonly type = ItemsActionTypes.LoadItemssSuccess;
  constructor(public payload){
  }
}


export type ItemsActions = LoadItemss | LoadItemssSuccess;
