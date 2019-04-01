import * as React from 'react';
import { animated, Spring } from 'react-spring/renderprops.cjs';

import Logo from './Logo/Logo';
import NavLink, { navlinks } from './Nav/Nav';
import Toggle from './Toggle/Toggle';
import './header.scss';

interface HeaderState {
  activeElement: activeElementType;
  isMobile: boolean;
  isOpen: boolean;
  isSticky: boolean;
}

interface HeaderProps {
  setHeaderScroll: (isGreater: boolean) => void;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  headerRef: Element;
  missionRef: Element;
  scroller;
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth <= 800,
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDisplay);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setDisplay);
  }

  toggle = () =>
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));

  handleSetActive = (id: string, el: Element) => {
    const { setHeaderScroll } = this.props;
    if (id === 'home') {
      setHeaderScroll(false);
    } else {
      setHeaderScroll(true);
    }
  };
  setDisplay = () =>
    this.setState({
      isMobile: window.innerWidth <= 767,
    });

  render() {
    const { isMobile, isOpen } = this.state;
    return (
      <header ref={el => (this.headerRef = el)} className="s-header sticky" id="header-it">
        <div className="row">
          <Logo />
          <Spring
            native={true}
            force={true}
            config={{ tension: 1500, friction: 100, precision: 1 }}
            from={{ height: isOpen ? 0 : 'auto' }}
            to={{ height: isOpen ? 'auto' : 0 }}
          >
            {props => (
              <animated.nav className={`header-nav-wrap ${isOpen && 'is-open'}`} style={isMobile ? props : undefined}>
                <animated.ul className={`header-main-nav ${isOpen && 'is-open'}`} style={props}>
                  {navlinks.map((link, i) => (
                    <NavLink {...link} key={i} handleSetActive={this.handleSetActive} />
                  ))}
                  <div className="mobile-nav-content__btn-wrap">
                    <a href="#contact" className="btn btn--primary home-content__btn smoothscroll">
                      Donate
                    </a>
                  </div>
                </animated.ul>
              </animated.nav>
            )}
          </Spring>
          {isMobile ? <Toggle onClick={this.toggle} isOpen={isOpen} /> : null}
        </div>
      </header>
    );
  }
}
export default Header;
