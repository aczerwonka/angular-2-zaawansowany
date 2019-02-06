import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ItemsStateModel } from 'src/app/utils/interfaces';
import { getRoute } from 'src/app/reducers';

const getItems = createFeatureSelector('items');
export const getItemsData = createSelector(
    getItems,
    (   items: ItemsStateModel) => {
        return items.data;
    }
)
export const getCurrentItem = createSelector(
    getItemsData,
    getRoute,
    (data, { state: { params: { id } } }) => {
        return data.find((item) => item.id === id)
    })
