/****
 * this is file is for store of redux
 * When you move to next js at that time
 * uncomment commented code from this file and comment below line from code
 * export const store = createStore(reducers, bindMiddleware([thunk]));
 */

import { createStore, applyMiddleware } from 'redux';
// import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunk from 'redux-thunk';
import reducers from '../reducer/rootReducer';

const bindMiddleware = (middleware) => {
  const { composeWithDevTools } = require('redux-devtools-extension');
  return composeWithDevTools(applyMiddleware(...middleware));
};

// const reducer = (state, action) => {
//     if (action.type === HYDRATE) {
//         const nextState = {
//             ...state,
//             ...action.payload,
//         };
//         return nextState;
//     } else {
//         return reducers(state, action);
//     }
// };
// export const store = () => createStore(reducer, bindMiddleware([thunk]));

export const store = createStore(reducers, bindMiddleware([thunk]));

// export const wrapper = createWrapper(store);
