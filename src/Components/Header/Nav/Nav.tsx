import * as React from 'react';

import ScrollView from 'Common/ScrollObserver/ScrollView';

interface NavConfig {
  title: activeElementType;
}

export const navlinks: NavConfig[] = [
  {
    title: 'home',
  },
  {
    title: 'mission',
  },
  {
    title: 'about',
  },
  {
    title: 'services',
  },
  {
    title: 'seniors',
  },
  {
    title: 'donate',
  },
  {
    title: 'contact',
  },
];

const Nav = ({ activeElement, cb }) =>
  navlinks.map((link, index) => (
    <ScrollView key={index} Text={link.title} cb={cb} activeElement={activeElement} selector={`#${link.title}`} />
  ));

export default Nav;
