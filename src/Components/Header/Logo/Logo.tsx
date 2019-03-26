import React from 'react';
import ImageLogo from 'Images/logo.svg';

const Logo = () => (
  <div className="header-logo">
    <div className="site-logo">
      <img src={ImageLogo} alt="Homepage" />
    </div>
  </div>
);

export default Logo;
