import * as React from 'react';

import { App } from '../../components/App';

import { fxTradingData } from '../../constant';

export class AppPage extends React.PureComponent {
  state = {
    data: []
  };

  componentDidMount() {
    this.setState(_ => ({
      data: fxTradingData
    }));
  }

  render() {
    return <App data={this.state.data} />;
  }
}
