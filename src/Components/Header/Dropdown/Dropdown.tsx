import * as React from 'react';
import { Link } from 'react-scroll';
import { SubItem } from 'Common/NavLinks/AnimatedLinks';

const Dropdown = ({ isOpen, isDropdown, isMobile, linkNodes }) => {
  return (
    <SubItem pose={isDropdown ? 'dropdownOpen' : 'dropdownClosed'} className="dropdown-content">
      {linkNodes &&
        linkNodes.map((menuItem, i) => (
          <Link key={i} to={menuItem.to} activeClass="active-submenu" smooth={true} duration={500}>
            {menuItem.to}
          </Link>
        ))}
    </SubItem>
  );
};

export default Dropdown;
