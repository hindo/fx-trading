import * as React from 'react';
import { connect } from 'react-redux';

import { composeHeader, composeValue } from '../../../utils';

import '../styles.css';

export const RightLeaf = props => {
  const { header, pair, value } = props;
  const composedHeader = composeHeader(pair, header);
  const composedValue = composeValue(value);
  return (
    <div className="leaf leaf__right">
      <svg viewBox="906.139 325.5 216.361 90.098" >
        <g>
          <path
            className="leaf__shape"
            d=" M 946.8 405.5 L 946.8 405.6 L 1121 405.6 L 1121 327 L 946.8 327 L 946.8 327.1 C 943.8 327.1 940.7 328.3 938.3 330.6 L 911.2 357.8 C 906.5 362.5 906.5 370.1 911.2 374.8 L 938.3 402 C 940.7 404.3 943.8 405.5 946.8 405.5 Z "
          />
          <g transform="matrix(1,0,0,1,1044,332)">
            <text
              className="leaf__inner-text leaf__inner-text--bold leaf__inner-text--smaller"
              transform="matrix(1,0,0,1,0,13.9)"
            >
              {composedHeader}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,959,367)">
            <text className="leaf__inner-text" transform="matrix(1,0,0,1,0,21.4)">
              {composedValue.first}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,1020.4,336)">
            <text
              className="leaf__inner-text leaf__inner-text--bold leaf__inner-text--bigger"
              transform="matrix(1,0,0,1,0,42.8)"
            >
              {composedValue.second}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,1090.5,347.1)">
            <text className="leaf__inner-text" transform="matrix(1,0,0,1,0,21.4)">
              {composedValue.third}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
