import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './containers/App';
import { pokemonReducer } from './reducers/pokemon';
import './index.css';
import pokemonSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt( applyMiddleware(sagaMiddleware));

const store = createStore(pokemonReducer, composedEnhancers);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);