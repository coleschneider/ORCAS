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
  setActiveElement: (el: Element) => void;
  selector: string;
  Text: string;
}

export const withScrollView = compose(
  defaultProps<DefaultProps>({ initial: 'Home', Text: 'Home' }),
  withHandlers<OuterProps, EnhanceProps>({
    scrollIntoView: ({ selector, setActiveElement }) => () => {
      const el = document.querySelector(selector);
      el.scrollIntoView({ behavior: 'smooth' });
    },
  }),
);

export default withScrollView(ScrollIntoView);
