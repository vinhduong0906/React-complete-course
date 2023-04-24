import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { counterProducer } from './components/Counter';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './store/index';
const store = configureStore({ reducer: counterReducer });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
