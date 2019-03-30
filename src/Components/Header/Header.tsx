import * as React from 'react';
import { animated, Spring } from 'react-spring/renderprops.cjs';

import { createScroller } from 'utils/scrollUtils';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
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
      activeElement: 'home',
      isMobile: window.innerWidth <= 800,
      isOpen: false,
      isSticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setSticky, { passive: true });
    window.addEventListener('resize', this.setDisplay);
    this.scroller = createScroller(this.handleIntersect, { threshold: 0.25 });
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.setSticky);
    window.removeEventListener('resize', this.setDisplay);
  }

  setActiveElement = ({ id }) => {
    this.setState({
      activeElement: id,
    });
  };

  toggle = () =>
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));

  handleIntersect = el => {
    if (el.id === 'mission') this.missionRef = el;
    return entries => {
      entries.forEach(({ isIntersecting, intersectionRatio, target }) => {
        if (isIntersecting && intersectionRatio > 0) this.setActiveElement(target);
      });
    };
  };
  setDisplay = () =>
    this.setState({
      isMobile: window.innerWidth <= 767,
    });
  setSticky = () => {
    const { setHeaderScroll } = this.props;
    const { offsetTop } = this.missionRef;
    const { top } = this.headerRef.getBoundingClientRect();
    setHeaderScroll(offsetTop < window.scrollY);
    this.setState({ isSticky: window.scrollY > top });
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
          {isMobile ? <Toggle onClick={this.toggle} isOpen={isOpen} /> : null}
        </div>
      </header>
    );
  }
}
export default Header;
