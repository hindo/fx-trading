import { randomizer } from './utils';
import { fxTradingData } from './constant';

export const GET_DATA = 'GET_DATA';
export const RANDOMIZE_DATA = 'RANDOMIZE_DATA';
export const BUY_ACTION = 'BUY_ACTION';
export const SELL_ACTION = 'SELL_ACTION';

export const randomizeData = items => ({
  type: RANDOMIZE_DATA,
  payload: {
    items
  }
});

export const buy = (pair, value) => ({
  type: BUY_ACTION,
  payload: {
    pair,
    value
  }
});

export const sell = (pair, value) => ({
  type: SELL_ACTION,
  payload: {
    pair,
    value
  }
});

const randomizeItems = (items, userStore) => {
  return items.map(item => {
    const newBuyValue = randomizer(item.buy, 0.1);
    const userBoughtValue = userStore[item.pair] || null;
    const newDirection = userBoughtValue && (newBuyValue > userBoughtValue ? 'up' : 'down');
    return {
      pair: item.pair,
      buy: newBuyValue,
      sell: randomizer(item.sell, 0.1),
      direction: newDirection
    };
  });
};

export const getRandomizedData = () => {
  return (dispatch, getState) => {
    const { data } = getState();
    const newItems = randomizeItems(fxTradingData, data.userStore);
    return dispatch(randomizeData(newItems));
  };
};

export const buyAction = (pair, value) => {
  return dispatch => dispatch(buy(pair, value));
};
