/* Importing the routes from the PublicRoute and PrivateRoute files and then exporting them as Routes. */

import PublicRoutes from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const Routes = [...PublicRoutes, ...PrivateRoute];

export default Routes;
