/**
 * If the user is not logged in, render the children, otherwise redirect to the dashboard
 * @returns The children of the component.
 */
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { USER_TOKEN_COOKIES_KEY } from '../../constant/appConstants';

import { getCookie } from '../../utils/utils';

const FullLayout = ({ children }) => {
  return (
    <>
      {!getCookie(USER_TOKEN_COOKIES_KEY) ? (
        <Fragment>{children}</Fragment>
      ) : null}
    </>
  );
};

/* A prop type validation. */
FullLayout.propTypes = {
  children: PropTypes.any,
};

export default FullLayout;
