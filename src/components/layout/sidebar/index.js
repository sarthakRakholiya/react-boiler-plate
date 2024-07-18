/**
 * It returns a sidebar component that has a button that toggles the sidebar, a logo, and a list of
 * menu items
 * @returns A sidebar component.
 */

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ChevronDown, Circle } from 'react-feather';
import { Collapse } from 'reactstrap';
import { NavLink, useLocation } from 'react-router-dom';

import SiderMenuList from '../../../navigation';
import Logo from '../../../assets/images/logo.svg';
import { CustomSvgIcon } from '../../common/CustomSvgIcon';

const Sidebar = ({
  setSidebar,
  sidebar,
  setHoverSidebar,
  hoverSidebar,
  setResSidebar,
  reSidebar,
}) => {
  /* A hook that is used to manage state in functional components. */
  const [dropDown, toggleDropDown] = useState(false);
  const [dropDownId, setDropDownId] = useState('');
  const [menuShow, setMenuShow] = useState(false);
  const { pathname } = useLocation()

  const matchRouter = () => {
    SiderMenuList.map((data) => {
      if (data.subMenu && data.subMenu.length !== 0) {
        const filterArray = data.subMenu.filter((ele) => pathname === ele.path)
        if (filterArray.length !== 0) {
          setDropDownId(data.id)
          toggleDropDown(true)
        }
      }
    })
  }

  useEffect(() => {
    matchRouter()
  }, []);

  return (
    <div
      className="sidebar"
      onMouseEnter={() => setHoverSidebar(!hoverSidebar)}
      onMouseLeave={() => setHoverSidebar(!hoverSidebar)}
    >
      <button className="toggle-btn" onClick={() => setSidebar(!sidebar)}>
        <CustomSvgIcon icon="icon-side" />
      </button>
      <button
        className="toggle-btn two"
        onClick={() => setResSidebar(!reSidebar)}
      >
        <CustomSvgIcon icon="icon-side" />
      </button>
      <div className="d-flex sidebar-header">
        <img src={Logo} className="img-fluid small-logo" alt="Logo" />
        <span>Zignuts</span>
      </div>
      <div className="sidebar-body">
        <ul>
          {SiderMenuList && SiderMenuList.length > 0
            ? SiderMenuList.map((item, index) => {
              const hasSubMenu = item?.subMenu && item?.subMenu?.length > 0;
              return (
                <li key={index}>
                  <div
                    className={`sidebar-dropdown dropdown ${menuShow && dropDownId === item.id ? 'bg-danger' : ''
                      }`}
                  >
                    {hasSubMenu ? (
                      <div
                        data-toggle="dropdown"
                        onClick={() => {
                          if (dropDownId === item.id) {
                            toggleDropDown(!dropDown);
                          } else {
                            toggleDropDown(true);
                          }
                          setDropDownId(item?.id);
                        }}
                        className="sidebar-toggle"
                      >
                        <div className="multi-nav d-flex align-items-center justify-content-between w-100 p-0">
                          <div>
                            {item?.icon || <Circle size="20" />}
                            <span>{item?.title || '-'}</span>
                          </div>
                          {hasSubMenu ? (
                            <div>
                              <ChevronDown
                                size={15}
                                className={`active-arrow ${hasSubMenu &&
                                  dropDown &&
                                  dropDownId === item.id &&
                                  'show '
                                  }`}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={item.path}
                        className="d-flex align-items-center justify-content-between w-100 "
                        onClick={() => {
                          toggleDropDown(() => false)
                          setDropDownId(() => '')
                        }}
                      >
                        <div>
                          {item?.icon || <Circle size="20" />}
                          <span>{item?.title || '-'}</span>
                        </div>
                        {hasSubMenu ? (
                          <div>
                            <ChevronDown size={15} />
                          </div>
                        ) : null}
                      </NavLink>
                    )}
                    {hasSubMenu ? (
                      <Collapse
                        isOpen={dropDown && dropDownId === item.id}
                        tag="ul"
                        className={`sidebar-dropdown-menu ${!hoverSidebar && sidebar ? 'd-none' : ''
                          }`}
                      >
                        {item?.subMenu.map((subItem, index) => {
                          return (
                            <NavLink
                              to={subItem?.path || '/'}
                              className="dropdown-items"
                              onClick={() => setMenuShow(true)}
                              key={index}
                            >
                              {subItem?.icon ? (
                                subItem.icon
                              ) : (
                                <Circle size={10} />
                              )}
                              <span>{subItem?.title || ''}</span>
                            </NavLink>
                          );
                        })}{' '}
                      </Collapse>
                    ) : null}
                  </div>
                </li>
              );
            })
            : null}
        </ul>
      </div>
    </div>
  );
};

/* A prop type validation. */
Sidebar.propTypes = {
  hoverSidebar: PropTypes.bool.isRequired,
  reSidebar: PropTypes.bool.isRequired,
  setHoverSidebar: PropTypes.func.isRequired,
  setResSidebar: PropTypes.func.isRequired,
  setSidebar: PropTypes.func.isRequired,
  sidebar: PropTypes.bool.isRequired,
};
export default Sidebar;
