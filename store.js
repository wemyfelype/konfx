/**
 * Created by jocelio on 22/02/18.
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

export default createStore(reducers, applyMiddleware(thunk));