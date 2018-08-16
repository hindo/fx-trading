import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';

const composeWithExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const rootStore = createStore(rootReducer, composeWithExtension(applyMiddleware(thunk)));
