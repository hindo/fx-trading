import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { rootStore } from './store';

import { AppPage } from './containers/AppPage';
import { TestAppPage } from './containers/TestAppPage';

import './styles.css';

const el = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Provider store={rootStore}>
      <div className="index">
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">App</Link>
            </li>
            <li>
              <Link to="/test-app">Test App</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Route exact path="/" component={AppPage} />
          <Route path="/test-app" component={TestAppPage} />
        </div>
      </div>
    </Provider>
  </BrowserRouter>,
  el
);
