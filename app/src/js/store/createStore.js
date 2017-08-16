import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const store = __DEV__ ? // eslint-disable-line
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) :
  createStore(reducer, applyMiddleware(thunk));

export default store;
