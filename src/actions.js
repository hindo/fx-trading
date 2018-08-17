import { randomizer } from './utils';
import { fxTradingData } from './constant';

export const GET_DATA = 'GET_DATA';
export const RANDOMIZE_DATA = 'RANDOMIZE_DATA';


export const randomizeData = items => ({
  type: RANDOMIZE_DATA,
  payload: {
    items
  }
});

export const randomizeItems = (items) => {
  return items.map(item => {
    const newBuyValue = randomizer(item.buy, 0.1);
    const newDirection = newBuyValue > item.buy ? 'up' : 'down';
    return {
      pair: item.pair,
      buy: newBuyValue,
      sell: randomizer(item.sell, 0.1),
      direction: newDirection
    };
  });
};

export const getRandomizedData = () => {
  return (dispatch) => {
    const newItems = randomizeItems(fxTradingData);
    return dispatch(randomizeData(newItems));
  };
};

