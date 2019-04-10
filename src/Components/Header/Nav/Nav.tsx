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
  open: {
    y: '0%',
  delayChildren: 100,
  staggerChildren: 200,
  beforeChildren: true,
  },
  closed: {
    y: '-100%',
    delay: 100,
  }
})

export const Item = posed.li({
  open: {
    y: 0,
    opacity: 1,
    // delayChildren: 50,
    // staggerChildren: 200,
    // beforeChildren: true
  },
  closed: { y: 20, opacity: 0, },
  dropdownOpen: {
    height: "auto"
  },
  dropdownClosed: {
    height: 'auto'
  }
});
export const SubItem = posed.div({
  open: { height: 0, },
  closed: { height: "auto" }
});
