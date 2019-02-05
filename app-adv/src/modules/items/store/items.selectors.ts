import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemsStateModel } from 'src/app/utils/interfaces';

const getItems = createFeatureSelector('items');
export const getItemsData = createSelector(
    getItems,
        (items: ItemsStateModel) => items.data

)
