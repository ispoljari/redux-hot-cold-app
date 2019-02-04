import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import * as Styled from './global-style';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <Styled.Global />
    <App />
  </Provider>,
  document.getElementById('root')
);