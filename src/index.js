import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import * as Styled from './global-style';
import AppContainer from './AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <Styled.Global />
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);