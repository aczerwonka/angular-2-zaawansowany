import { CardState } from 'src/app/utils/interfaces';
import { CardActionTypes, CardActions } from './card.action';

export const initialState: CardState = {
    data: [],
    loading: false
};

function findOne(data, wanted) {
    return data.find((item) => item.id === wanted.id);
}

function findAndReplace(data: any[], wanted) {
    return data.map((item) => wanted.id === item.id ? wanted : item);
}

const addToData = (data: any[], newItem) => {
    const found = findOne(data, newItem);
    if (found) {
        //found.count++;
        // return [...data]
        return findAndReplace(data, { ...found, count: found.count + 1 });
    } else {
        const foo = { ...newItem, count: 1 };
        return [...data, foo];
    }
}

function removeItem(data, item) {
    const found = findOne(data, item);
    if (found.count > 1) {
        const foundCopy = { ...found, count: --found.count };
        return findAndReplace(data, foundCopy);
    } else {
        return data.filter((item) => item.id !== found.id);
    }
}

export const cardReducer = (state = initialState, action: CardActions) => {

    switch (action.type) {
        case 'FETCH':
            return { ...state }
        case CardActionTypes.AddToCard:
            return { ...state, data: addToData(state.data, action.payload) }
        case CardActionTypes.RemoveFromCard:
            return { ...state, data: removeItem(state.data, action.payload) }
        case CardActionTypes.LoadCardsSuccess:
            return { ...state, data: action.payload }
        default:
            return state;
    }
}
