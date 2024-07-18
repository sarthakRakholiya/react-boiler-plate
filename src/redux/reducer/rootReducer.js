/****
 * this is rootreducer file at where you need to combine your reduce
 * when you make new file for new reducer then you need to combine that reducer here
 */

// ** Redux Imports
import { combineReducers } from 'redux';

// ** Reducers Imports
import { login } from './login/loginReducer';

const rootReducer = combineReducers({
  login: login,
});

export default rootReducer;
