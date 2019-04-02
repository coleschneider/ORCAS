import * as React from 'react';
import Loader from 'Common/Loader/Loader';
import { Route } from 'react-router-dom';

const LazyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <React.Suspense fallback={<Loader />}>
        <Component {...props} />
      </React.Suspense>
    )}
  />
);

export default LazyRoute;
