/**
 * It maps through the routes array and returns a Route component for each route
 * @returns An array of routes.
 */

import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes as Routers } from 'react-router-dom';
import Routes from './routes';

const AppRouter = () => {
  const { authToken } = useSelector((state) => state?.login);

  const PrivateRoute = ({ children }) => {
    console.log('private call');
    return authToken ? children : <Navigate to="/" />;
  };

  const PublicRoute = ({ children }) => {
    console.log('public call');
    return authToken ? <Navigate to="/dashboard" /> : children;
  };

  return (
    <Routers>
      {Routes?.length > 0 ? (
        Routes.map((route, index) => {
          return (
            <Fragment key={index}>
              {route.isPublic ? (
                <Route
                  path={route.path}
                  element={
                    <PublicRoute>
                      {' '}
                      <route.component />
                    </PublicRoute>
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  element={
                    <PrivateRoute>
                      {' '}
                      <route.component />
                    </PrivateRoute>
                  }
                />
              )}
            </Fragment>
          );
        })
      ) : (
        <Navigate to="/" />
      )}
    </Routers>
  );
};

export default AppRouter;
