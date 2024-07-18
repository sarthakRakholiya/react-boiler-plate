/****
 * You can put any key constant here which you want to use many times or one time
 */
export const USER_TOKEN_COOKIES_KEY = 'authToken';
export const USER_SERVICE_KEY = 'USER';
export const API_METHOD_GET = 'GET'
export const API_METHOD_POST = 'POST'

// this MAP for make diffrent service separated url
export const BASE_URLS = new Map();
BASE_URLS.set(USER_SERVICE_KEY, process.env.REACT_APP_API_URL_USER);