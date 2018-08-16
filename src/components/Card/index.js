import * as React from 'react';

import { Arrow } from '../Arrow';
import { RightLeaf } from '../Leaf/RightLeaf';
import { LeftLeaf } from '../Leaf/LeftLeaf';

import './styles.css';

export const Card = props => {
  const { pair, buy, sell, direction } = props;
  return (
    <div className="card">
      <div className="card__header">{pair}</div>
      <div className="card__content">
        <div className="card__item card__left">
          <LeftLeaf value={sell} pair={pair} header={'Sell'} />
        </div>
        <div className="card__item card__middle">
          <Arrow direction={direction} />
        </div>
        <div className="card__item card__right">
          <RightLeaf value={buy} pair={pair} header={'Buy'} />
        </div>
      </div>
    </div>
  );
};
