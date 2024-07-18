/**
 * This file use to call api and gave you responce of that api and it's take following params
 * It takes in an endpoint, data, id, and params, and returns a response
 * @param endpoint - This is the endpoint object that we created in the previous step.
 * @param data - The data to be sent to the server.
 * @param id - The id of the resource you want to fetch.
 * @param params - This is the object that contains the query parameters.
 * @returns An object with a data property that has an error property and a data property.
 */

import axios from 'axios';
import toast from 'react-hot-toast';
import i18n from 'i18next';

import {
  clearTokenCookie,
  convertObjToQueryString,
  getCookie,
  isObjEmpty,
} from '../utils/utils';
import { toastErrorMessage } from '../constant/message';
import { BASE_URLS, USER_TOKEN_COOKIES_KEY } from '../constant/appConstants';

export const api = async (endpoint, data, id = null, params = null) => {
  const { method, isMultipart, url, showToast, module } = endpoint;
  let res = null;

  let token = getCookie(USER_TOKEN_COOKIES_KEY);
  try {
    let obj = {
      data,
      method: method,
      headers: {
        'Content-Type': isMultipart
          ? 'multipart/form-data'
          : 'application/json',
        lang: i18n.language,
      },
      url: `${BASE_URLS.get(module)}${url}${id ? id : ''}${
        params ? convertObjToQueryString(params) : ''
      }`,
    };
    if (method === 'GET' && data && typeof data === 'string') {
      obj.url += data;
    }
    if (method === 'POST') {
      if (!data) data = {};
    }
    if (token)
      obj.headers['Authorization'] = `Bearer ${getCookie(
        USER_TOKEN_COOKIES_KEY
      )}`;

    res = await axios(obj);
  } catch (err) {
    res = err.response;
    const { error, message, status } = res?.data;
    try {
      showToast &&
        toast.error(
          !isObjEmpty(error)
            ? error[Object.keys(error)[0]][0]
            : message
            ? message
            : toastErrorMessage.INTERNAL_SERVER_ERROR
        );
      if (status === 401 || status === 403) {
        clearTokenCookie(USER_TOKEN_COOKIES_KEY);
        window.location.replace(`${process.env.REACT_APP_BASENAME}/login`);
      }
      return {
        data: { error: true, data: res.data.data },
      };
    } catch (error) {
      return {
        data: { error: true, data: res.data.data },
      };
    }
  }
  if (res && res.data && !res.data.error && showToast)
    toast.success(res.data.message);
  return res;
};
