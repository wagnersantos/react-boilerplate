import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from './sagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const tronMiddleware =
  process.env.NODE_ENV === 'development'
    ? console.tron.createEnhancer
    : () => {};

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(
        composeWithDevTools(applyMiddleware(...middlewares), tronMiddleware())
      )
    : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
