import * as React from 'react';
import { Link } from 'react-scroll';
interface DonateButtonProps {
  style?: React.CSSProperties
}
const DonateButton = ({ style }: DonateButtonProps) => (
  <div className="mobile-nav-content__btn-wrap" style={style}>
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
