import * as React from 'react';

import { animated, Spring } from 'react-spring/renderprops.cjs';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Toggle from './Toggle/Toggle';

interface HeaderState {
  activeElement: activeElementType;
  isMobile: boolean;
  isOpen: boolean;
  isSticky: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  headerRef;
  scroller;
  constructor(props) {
    super(props);
    this.state = {
      activeElement: 'home',
      isOpen: false,
      isMobile: window.innerWidth < 600,
      isSticky: false,
    };
    this.handleIntersect = this.handleIntersect.bind(this);
  }

  componentDidMount() {
    this.scroller = new IntersectionObserver(this.handleIntersect, { threshold: 0.25 });
    document.querySelectorAll('.target-section').forEach(el => this.scroller.observe(el));
    window.addEventListener('resize', this.setDisplay);
    window.addEventListener('scroll', this.setSticky, { passive: true });
  }

  setActiveElement = activeElement => {
    this.setState({
      activeElement: activeElement.id,
    });
  };

  toggle = () =>
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));

  handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        this.setActiveElement(entry.target);
      }
    });
  };
  setDisplay = () => ({
    isMobile: window.innerWidth <= 900,
  });
  setSticky = () => {
    if (window.scrollY > this.headerRef.offsetTop) {
      this.setState({
        isSticky: true,
      });
    } else {
      this.setState({
        isSticky: false,
      });
    }
  };

  render() {
    const { isOpen, activeElement, isSticky, isMobile } = this.state;
    return (
      <header
        ref={el => (this.headerRef = el)}
        className={isSticky ? `s-header ${'sticky'}` : 's-header'}
        id="header-it"
      >
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
                  <Nav cb={this.toggle} activeElement={activeElement} />
                  <div className="mobile-nav-content__btn-wrap">
                    <a href="#contact" className="btn btn--primary home-content__btn smoothscroll">
                      Donate
                    </a>
                  </div>
                </animated.ul>
              </animated.nav>
            )}
          </Spring>
          <Toggle onClick={this.toggle} isOpen={isOpen} isMobile={isMobile} />
        </div>
      </header>
    );
  }
}
export default Header;
