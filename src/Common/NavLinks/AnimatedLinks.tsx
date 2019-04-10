import * as React from 'react';
import posed from 'react-pose';


export const AnimatedNav = posed.nav({
  closed: {
    delay: 100,
    paddingTop: 0,
    y: '-85%',
  },
  open: {
    beforeChildren: true,
    delayChildren: 60,
    paddingTop: 78,
    staggerChildren: 125,
    y: '0%',
  },
});

export const Item = posed.li({
  closed: { y: 20, opacity: 0 },
  open: {
    // delayChildren: 50,
    beforeChildren: true,
    opacity: 1,
    // staggerChildren: 0,
    y: 0,
  },
});
export const SubItem = posed.div({
  closed: { height: 0, },
  open: { height: 'auto' },
});