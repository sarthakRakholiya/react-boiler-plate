import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { USER_TOKEN_COOKIES_KEY } from '../constant/appConstants';

/**
 * It clears the cookie with the key passed in as an argument
 * @param key - The name of the cookie.
 */
export const clearTokenCookie = (key) => {
  destroyCookie(null, key);
};

/**
 * It creates a cookie
 * @param key - The name of the cookie
 * @param value - The value of the cookie.
 */
export const createCookie = (key, value) => {
  setCookie(null, key, value);
};

/**
 * It takes a key as an argument, parses the cookies, and returns the value of the cookie with the key
 * that was passed in
 * @param key - The name of the cookie you want to get.
 * @returns The value of the cookie with the key that is passed in.
 */
export const getCookie = (key) => {
  const cookies = parseCookies();
  return cookies[key];
};

/**
 * It takes an object and returns a query string
 * @param obj - The object you want to convert to a query string.
 * @returns A query string.
 */
export const convertObjToQueryString = (obj) => {
  return '?' + new URLSearchParams(obj).toString();
};

/**
 * If the object has no keys, then it's empty.
 * @param obj - The object to check if it's empty.
 */
export const isObjEmpty = (obj) => Object.keys(obj).length === 0;

// ** React Select Theme Colors
export const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: '#7367f01a', // for option hover bg-color
    primary: '#283046', // for selected option bg-color
    neutral20: '#ededed', // for input border-color
    neutral30: '#ededed', // for input hover border-color
  },
});
