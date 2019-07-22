import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import './index.css';
import App from './App';

import reduce from './store/reducers';
//import { fetchCars } from './store/actions';

const logger = createLogger();
const store = createStore(
  // combineReducers({ reduce }),
  reduce,
  applyMiddleware(thunk, logger)
);

//store.dispatch(fetchCars()).then(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
