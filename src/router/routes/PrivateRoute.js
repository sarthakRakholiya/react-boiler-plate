/**
 * All private route defines here
 * Make one object for route
 * @path - Path for your route
 * @compnent - Import your component in this params
 */

// ***** start - import from packages *****
import { lazy } from 'react';
// ***** end - import from packages *****

const PrivateRoute = [
  {
    path: '/dashboard',
    component: lazy(() => import('../../pages/dashboard')),
    isPublic: false
  },
  {
    path: '/change-password',
    component: lazy(() => import('../../pages/changePassword')),
    isPublic: false
  },
  {
    path: '/profile',
    component: lazy(() => import('../../pages/profile')),
    isPublic: false
  },
  {
    path: '/user',
    component: lazy(() => import('../../pages/user')),
    isPublic: false
  },
];

export default PrivateRoute;
