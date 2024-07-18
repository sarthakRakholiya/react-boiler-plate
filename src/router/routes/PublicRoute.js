/**
 * All public route defines here
 * Make one object for route
 * @path - Path for your route
 * @compnent - Import your component in this params
 */

// ***** start - import from packages *****
import { lazy } from 'react';
// ***** end - import from packages *****

const PublicRoutes = [
  {
    path: '/',
    component: lazy(() => import('../../pages')),
    isPublic: true
  },
  {
    path: '/*',
    component: lazy(() => import('../../pages/404')),
    isPublic: true
  },
];

export default PublicRoutes;
