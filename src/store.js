import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { hotColdReducer } from './reducers';

export default createStore(hotColdReducer, devToolsEnhancer());