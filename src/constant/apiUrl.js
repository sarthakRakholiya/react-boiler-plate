/* *|MARKER_CURSOR|* */
import { API_METHOD_GET, USER_SERVICE_KEY } from './appConstants';
import { apiEndpoints } from './endpointConfig';

/****
 * @url - you need to pass endpoints of api which is comes from apiEndpoints object
 * @method - you need to pass method type of api which key comes from appConstants file
 * @withToken - true,false - if api required token or not
 * @module - if there is multiple service in backend
     so you need to key constant of that service key which comes from appConstants file
 * @isMultipart - you need to make true when api is for file upload otherwise false
 * @showToast - for success or error if you want show toast message then make it true otherwise false
 */

export const EDIT_USER_API = {
    url: apiEndpoints.ENDPOINTS_USER_EDIT,
    method: API_METHOD_GET,
    withToken: true,
    module: USER_SERVICE_KEY,
    isMultipart: false,
    showToast: true,
};
