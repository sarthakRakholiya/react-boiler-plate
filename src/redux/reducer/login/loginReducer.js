/****
 * Here you can define your action type in switch case
 * Here you need to take case from type file which is basically in redux folder
 * you need to define action type module wise like auhentication, user likewise
 */

import { SET_AUTH_TOKEN } from '../../type';

const intialState = {
  authToken: false
}

export const login = (state = { ...intialState }, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN: {
      return { ...state, authToken: action.data };
    }
    default: {
      return state;
    }
  }
};
