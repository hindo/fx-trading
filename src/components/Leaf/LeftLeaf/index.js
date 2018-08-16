import * as React from 'react';

import { composeHeader, composeValue } from '../../../utils';

import '../styles.css';

export const LeftLeaf = props => {
  const { header, pair, value } = props;
  const composedHeader = composeHeader(pair, header);
  const composedValue = composeValue(value);
  return (
    <div className="leaf leaf__left">
      <svg viewBox="620.5 325.5 216.361 90.098">
        <g>
          <path
            className="leaf__shape"
            d="M 796.2 327.1 L 796.2 327 L 622 327 L 622 405.6 L 796.2 405.6 L 796.2 405.5 C 799.2 405.5 802.3 404.3 804.7 402 L 831.8 374.8 C 836.5 370.1 836.5 362.5 831.8 357.8 L 804.7 330.6 C 802.3 328.3 799.2 327.1 796.2 327.1 Z "
          />
          <g transform="matrix(1,0,0,1,638,332)">
            <text
              className="leaf__inner-text leaf__inner-text--bold leaf__inner-text--smaller"
              transform="matrix(1,0,0,1,0,13.9)"
            >
              {composedHeader}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,638,367)">
            <text className="leaf__inner-text" transform="matrix(1,0,0,1,0,21.4)">
              {composedValue.first}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,699.4,336)">
            <text
              className="leaf__inner-text leaf__inner-text--bold leaf__inner-text--bigger"
              transform="matrix(1,0,0,1,0,42.8)"
            >
              {composedValue.second}
            </text>
          </g>
          <g transform="matrix(1.5,0,0,1.5,769.5,347.1)">
            <text className="leaf__inner-text" transform="matrix(1,0,0,1,0,21.4)">
              {composedValue.third}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
