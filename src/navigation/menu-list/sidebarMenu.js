/**
 * Creating a list of menu items for the sidebar.
 * Add following things in object and put in array
 * @id - Unique id for menu
 * @titel - Title of the menu
 * @icon - Menu icon
 * @path - Menu redirection path
 * @subMenu - Sub menu if have any nested menu then add array of object for same props
 * */

// ***** start - import from packages *****
import { Home, Circle, User } from 'react-feather';
// ***** end - import from packages *****
const SiderMenuList = [
  {
    id: 'Dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    path: '/dashboard',
  },
  {
    id: 'User Management',
    title: 'User Management',
    icon: <User size={20} />,
    path: '/user',
    subMenu: [
      {
        id: 'edit user',
        title: 'Users',
        icon: <Circle size={10} />,
        path: '/user',
      },
    ],
  },
];
export default SiderMenuList;
