import { combineReducers } from 'redux';
import { RANDOMIZE_DATA, BUY_ACTION } from './actions';

import { fxTradingData } from './constant';

export const data = (
  state = {
    items: fxTradingData,
  },
  action
) => {
  switch (action.type) {
    case RANDOMIZE_DATA:
      return {
        ...state,
        items: action.payload.items
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({ data });
