import * as React from 'react';
import Loader from 'Common/Loader/Loader';
import { Route } from 'react-router-dom';
import MediaModal from 'Components/MediaModal/MediaModal';

const LazyRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <React.Suspense fallback={<Loader />}>
        <MediaModal {...props}>
          <Component {...props} />
        </MediaModal>
      </React.Suspense>
    )}
  />
);

export default LazyRoute;
