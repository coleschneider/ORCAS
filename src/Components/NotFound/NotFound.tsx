import * as React from 'react';

import { createSection } from 'utils/sectionUtils';
import './not-found.scss';

const NotFound = ({ location }) => {
  const NotFoundWrapper = createSection({
    description: `The page you were looking for at ${location.pathname} could not be found`,
    displayTitle: 'Not Found',
    sectionName: '404',
  });
  return <NotFoundWrapper />;
};

export default NotFound;
