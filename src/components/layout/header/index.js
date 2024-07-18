/**
 * This componenet return the header which have pofile and notification drop-down
 * @returns A header component.
 */

import PropTypes from 'prop-types';
import { BarChart, Bell, Lock, Power, User } from 'react-feather';
import { toast } from 'react-hot-toast';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { clearTokenCookie } from '../../../utils/utils';
import { toastSuccessMessage } from '../../../constant/message';
import { USER_TOKEN_COOKIES_KEY } from '../../../constant/appConstants';
import { setAuthToken } from '../../../redux/action/userAction';
import { useDispatch } from 'react-redux';

const Header = ({ setResSidebar, reSidebar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  /**
   * It clears the token cookie and navigates to the home page
   */
  const logoutHandler = () => {
    dispatch(setAuthToken(false))
    clearTokenCookie(USER_TOKEN_COOKIES_KEY);
    toast.success(toastSuccessMessage.LOGOUT_SUCCESS);
    navigate('/');
  };
  return (
    <header className="align-content-center">
      <div>
        <span
          className="toggle-button-header"
          onClick={() => setResSidebar(!reSidebar)}
        >
          <BarChart />
        </span>
      </div>
      <div className="profile-list">
        <ul className="d-flex align-items-center">
          <li>
            <div className="notification-li">
              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link">
                  <div className="notification-main">
                    <Bell />
                    <span className="notification-count">5</span>
                  </div>
                </DropdownToggle>
                <DropdownMenu>
                  <div>
                    <div className="notification-header w-100">
                      <h2>
                        Notificaton{' '}
                        <span className="badge text-bg-primary">4 new</span>
                      </h2>
                    </div>
                    <PerfectScrollbar
                      component="ul"
                      className="customizer-content"
                      options={{ wheelPropagation: false }}
                    >
                      {[0, 1, 2, 3, 4, 5].map((value, index) => {
                        return (
                          <li
                            key={`notification-${index}`}
                            className="d-flex  align-items-center gap-1"
                          >
                            <div className="avtar-main me-1 bg-success">
                              <span>BK</span>
                            </div>
                            <div className="notification-text ">
                              <p className="hide-data-line-1">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Reiciendis ratione rem magnam
                                nemo reprehenderit, eos itaque accusantium vero
                                voluptate esse ad facilis minima enim magni
                                beatae adipisci cumque expedita deserunt?
                              </p>
                              <span className="hide-data-line-1">
                                Won the monthly best seller badge.ly best seller
                                badge.ly best seller badge.ly best seller badge.
                              </span>
                            </div>
                          </li>
                        );
                      })}
                    </PerfectScrollbar>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </li>
          <li>
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" className="nav-link">
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <div className="d-none d-lg-block">
                    <span className="user-name">John Doe</span>
                    <span className="user-status">Employee</span>
                  </div>
                  <img
                    src="https://www.w3schools.com/howto/img_avatar.png"
                    alt="avatar"
                  />
                </div>
              </DropdownToggle>
              <DropdownMenu>
                <Link to="/profile" className="dropdown-item">
                  <User size={16} className="me-75" />
                  <span>Profile</span>
                </Link>
                <Link to="/change-password" className="dropdown-item">
                  <Lock size={16} className="me-75" />
                  <span>Change Password</span>
                </Link>
                <DropdownItem className="w-100" onClick={logoutHandler}>
                  <Power size={16} className="me-75" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </li>
        </ul>
      </div>
    </header>
  );
};

Header.propTypes = {
  reSidebar: PropTypes.bool.isRequired,
  setResSidebar: PropTypes.func.isRequired,
};
export default Header;
