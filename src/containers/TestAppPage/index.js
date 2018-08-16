import * as React from 'react';
import { connect } from 'react-redux';
import { App } from '../../components/App';

import { getRandomizedData } from '../../actions';

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export const TestAppPage = connect(mapStateToProps)(
  class TestAppPage extends React.PureComponent {
    intervalId = null;

    handleAction = (pair, actionType, currentValue) => {
      const actions = [
        ...this.state.lastActions,
        {
          [pair]: {
            actionType: currentValue
          }
        }
      ];
      this.setState(_ => ({
        lastActions: actions
      }));
    };

    createInterval = () => {
      const { dispatch } = this.props;
      this.intervalId = setInterval(() => {
        dispatch(getRandomizedData());
      }, 1000);
    };

    componentDidMount() {
      this.createInterval();
    }

    componentWillUnmount() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
      this.intervalId = null;
    }

    compo;

    render() {
      const { data } = this.props;
      return <App data={data.items} />;
    }
  }
);
