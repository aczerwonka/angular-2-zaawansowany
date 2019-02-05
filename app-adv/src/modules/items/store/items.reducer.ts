
import { ItemsActions, ItemsActionTypes } from './items.actions';
import { ItemsStateModel } from 'src/app/utils/interfaces';

export interface State {

}

export const initialState: ItemsStateModel = {
  data: [],
  loading: false
};

export function reducer(state = initialState, action: ItemsActions): ItemsStateModel {
  switch (action.type) {

    case ItemsActionTypes.LoadItemss:
      return {...state, loading: true};
    case ItemsActionTypes.LoadItemssSuccess:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
}
