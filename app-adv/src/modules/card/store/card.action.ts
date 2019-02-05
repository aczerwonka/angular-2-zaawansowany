import { Action } from '@ngrx/store';


export enum CardActionTypes {
    LoadCards = '[Card] Load Cards',
    LoadCardsSuccess = '[Card] Load Cards Success',
    AddToCard = '[Card] Add to Card',
    RemoveFromCard = '[Card] Remove From Card'
}


export class AddToCard implements Action {
    type: string = CardActionTypes.AddToCard;
    constructor(public payload) {

    }
}

export class RemoveFormCard implements Action {
    type: string = CardActionTypes.RemoveFromCard;;
    constructor(public payload) { }
}
export class LoadCards implements Action {
    type: string = CardActionTypes.LoadCards;
    constructor(public payload?) { }
}
export class LoadCardsSuccess implements Action {
    type: string = CardActionTypes.LoadCardsSuccess;
    constructor(public payload?) { }
}


export type CardActions = LoadCards | AddToCard | LoadCardsSuccess | RemoveFormCard;
