import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CardState } from 'src/app/utils/interfaces';

const cardSelector = createFeatureSelector<CardState>('card');

export const getCardData = createSelector(
    cardSelector,
    (state) => state.data
)

export const getDataCount = createSelector(
    getCardData,
    (data) => data.reduce((prev, curr)=> prev + curr.count, 0)
)
