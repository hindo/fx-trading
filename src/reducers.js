import { combineReducers } from 'redux';
import { RANDOMIZE_DATA, BUY_ACTION } from './actions';

import { fxTradingData } from './constant';

const data = (
  state = {
    items: fxTradingData,
    userStore: {}
  },
  action
) => {
  switch (action.type) {
    case RANDOMIZE_DATA:
      return {
        ...state,
        items: action.payload.items
      };
    case BUY_ACTION:
      const store = {
        ...state.userStore,
        [action.payload.pair]: action.payload.value
      };
      return {
        ...state,
        userStore: store
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ data });
