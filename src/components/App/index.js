import * as React from 'react';

import { CardList } from '../CardList';

import './styles.css';

export const App = ({ data, action }) => (
  <div className="app">
    <CardList items={data} action={action} />
  </div>
);
