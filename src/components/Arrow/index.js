import * as React from 'react';

import './styles.css';

export const Arrow = props => {
  const { direction } = props;
  return (
    <div>
      {direction &&
        (direction === 'up' ? (
          <svg className="arrow arrow--up" viewBox="840 147 16.109 44.299" width="16.109" height="44.299">
            <path d=" M 856.1 191.3 L 840 191.3 L 847.6 147 L 856.1 191.3 Z " fill="rgb(0,150,136)" />
          </svg>
        ) : (
          <svg className="arrow arrow--down" viewBox="890.891 147 16.109 44.299" width="16.109" height="44.299">
            <path d=" M 890.9 147 L 907 147 L 899.4 191.3 L 890.9 147 Z " fill="rgb(255,0,0)" />
          </svg>
        ))}
    </div>
  );
};
