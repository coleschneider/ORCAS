import * as React from 'react';
import posed from 'react-pose';
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

export const AnimatedNav = posed.nav({
  closed: {
    delay: 100,
    y: '-88%',
  },
  open: {
    beforeChildren: true,
    delayChildren: 100,
    staggerChildren: 200,
    y: '0%',
  },
});

export const Item = posed.li({
  closed: { y: 20, opacity: 0 },
  dropdownClosed: {
    height: 'auto',
  },
  dropdownOpen: {
    height: 'auto',
  },

  open: {
    opacity: 1,
    y: 0,
    // delayChildren: 50,
    // staggerChildren: 200,
    // beforeChildren: true
  },
});
export const SubItem = posed.div({
  closed: { height: 'auto' },
  open: { height: 0 },
});
