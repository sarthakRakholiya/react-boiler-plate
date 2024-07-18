/****
 * you can write actions for api calling here like example
 */

import { api } from '../../api';
import { EDIT_USER_API } from '../../constant/apiUrl';
import { SET_AUTH_TOKEN } from '../type';



export const setAuthToken = (data) => {
  return (dispatch) => {
    dispatch({ type: SET_AUTH_TOKEN, data: data });
  };
};

/****
 * @EDIT_USER_API - api object from apiUrl for this api
 * @data - api data which you want pass in body of api
 * @id - if you want pass any url params to pass with url then you need to put that id there
 * @{ isAdmin: flag, date } - if you want pass any query params in api then you need pass key value pair in api
 * url ex - BASE_URL/END_POINT/id?isAdmin={flag}&date={date}
 */

export const userEdit = async ({ id, flag, data, date }) => {
  const response = await api(EDIT_USER_API, data, id, { isAdmin: flag, date });
  if (!response.data.error) {
    return response.data.data;
  }
};
