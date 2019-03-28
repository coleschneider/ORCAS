import * as React from 'react';
import { Link } from 'react-scroll';

const DonateButton = () => (
  <div className="mobile-nav-content__btn-wrap">
    <Link
      to="donate"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="btn btn--primary home-content__btn smoothscroll"
    >
      Donate
    </Link>
  </div>
);

export default DonateButton;
