import * as React from 'react';

const Toggle = ({ isOpen, onClick }) => (
  <div
    data-testid="toggle"
    className={`header-menu-toggle ${isOpen && 'is-clicked'}`}
    id="header-menu-toggle-it"
    onClick={onClick}
  >
    <span>Menu</span>
  </div>
);
export default Toggle;
