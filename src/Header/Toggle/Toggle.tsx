import * as React from 'react';

const Toggle = ({ isOpen, isMobile, onClick }) => (
  <div
    data-testid="toggle"
    className={`header-menu-toggle ${isOpen && 'is-clicked'}`}
    id="header-menu-toggle-it"
    style={{ display: isMobile ? 'block' : undefined }}
    onClick={onClick}
  >
    <span>Menu</span>
  </div>
);
export default Toggle;
