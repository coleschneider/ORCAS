import * as React from 'react';
import ScrollIntoView from './ScrollIntoView/ScrollIntoView';
import { compose, defaultProps, withHandlers } from 'recompose';

interface DefaultProps {
  initial?: string;
  Text?: string;
}

interface EnhanceProps {
  scrollIntoView: (ev: React.MouseEvent) => void;
}
interface OuterProps {
  activeElement: string;
  cb: any;
  selector: string;
  Text: string;
}

export const withScrollView = compose(
  defaultProps<DefaultProps>({ initial: 'Home', Text: 'Home' }),
  withHandlers<OuterProps, EnhanceProps>({
    scrollIntoView: ({ selector, cb }) => () => {
      const el = document.querySelector(selector);
      if(typeof cb === 'function'){
        cb()
      }
      el.scrollIntoView({ behavior: 'smooth' });
    },
  }),
);

export default withScrollView(ScrollIntoView);
