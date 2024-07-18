/**
 * It renders the sidebar and header components and passes the sidebar state to them
 * @returns The Layout component is being returned.
 */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { USER_TOKEN_COOKIES_KEY } from '../../constant/appConstants';

import { getCookie } from '../../utils/utils';
import Header from './header';
import Sidebar from './sidebar';

const Layout = ({ children }) => {
  /* States. */
  const [sidebar, setSidebar] = useState(false);
  const [reSidebar, setResSidebar] = useState(false);
  const [hoverSidebar, setHoverSidebar] = useState(false);

  return (
    <>
      {getCookie(USER_TOKEN_COOKIES_KEY) ? (
        <>
          <div
            className={`app-layout ${sidebar ? 'active' : ''} ${
              hoverSidebar ? 'small-sidebar' : ''
            } ${reSidebar ? 'res-active' : ''}`}
          >
            <Sidebar
              setSidebar={setSidebar}
              sidebar={sidebar}
              setHoverSidebar={setHoverSidebar}
              hoverSidebar={hoverSidebar}
              setResSidebar={setResSidebar}
              reSidebar={reSidebar}
            />
            <div className="main-section">
              <Header setResSidebar={setResSidebar} reSidebar={reSidebar} />
              {children}
            </div>
          </div>
        </>
      ) : (
        null
      )}
    </>
  );
};

/* A prop type validation. */
Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
