import * as React from 'react';

import { Link } from 'react-scroll';

interface NavConfig {
  to: activeElementType;
}

export const navlinks: NavConfig[] = [
  {
    to: 'home',
  },
  {
    to: 'mission',
  },
  {
    to: 'about',
  },
  {
    to: 'services',
  },
  {
    to: 'seniors',
  },
  {
    to: 'donate',
  },
  {
    to: 'contact',
  },
];

const NavLink = ({ to, handleSetActive }) => (
  <li>
    <Link
      activeClass="current"
      to={to}
      spy={true}
      smooth={true}
      onSetActive={(id, el) => handleSetActive && handleSetActive(id, el)}
      offset={-70}
      duration={500}
    >
      {to}
      <div className="underlined" />
    </Link>
  </li>
);

export default NavLink;
