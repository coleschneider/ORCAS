import * as React from 'react';
import { animated, Spring, Transition } from 'react-spring/renderprops.cjs';

import Logo from './Logo/Logo';
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import './header.scss';
import DonateButton from 'Common/DonateButton/DonateButton';
import NavLinks from 'Common/NavLinks/NavLinks';

interface HeaderState {
  activeElement: activeElementType;
  isMobile: boolean;
  isOpen: boolean;
  isSticky: boolean;
  isDropdown: boolean;
}

interface HeaderProps {
  setHeaderScroll: (isGreater: boolean) => void;
}

const Dropdown = ({ isOpen, isDropdown, isMobile, linkNodes }) => (
  <Transition
    unique={true}
    reset={true}
    items={isMobile ? isDropdown && isOpen : isDropdown}
    from={{
      height: 0,
    }}
    enter={{
      height: 'auto',
    }}
    leave={{ height: 0 }}
  >
    {item =>
      item &&
      (props => (
        <animated.div style={props} className="dropdown-content">
          {linkNodes &&
            linkNodes.map(menuItem => (
              <Link to={menuItem.to} activeClass="active-submenu" smooth={true} duration={500}>
                {menuItem.to}
              </Link>
            ))}
        </animated.div>
      ))
    }
  </Transition>
);
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

  
     handleSetActive = (id: activeElementType, el: Element) => {
         const { isMobile } = this.state
         const { setHeaderScroll } = this.props
         if(isMobile){
           this.setState({
             isOpen: false,
           })
           }
         setHeaderScroll(id !== 'home');
  }
  toggleDropdown = () =>
    this.setState(({ isDropdown }) => ({
      isDropdown: !isDropdown,
    }));
  setDisplay = () =>
    this.setState({
      isMobile: window.innerWidth <= 800,
    });
  renderDropdown = ({ linkNodes, to }) => {
    return (
      <div
        tabIndex={1}
        key={to}
        onBlur={this.toggleDropdown}
        onClick={this.toggleDropdown}
        className={this.state.isDropdown ? 'dropdown show-items' : 'dropdown'}
      >
        <li>
          <a className="dropdown-text">{to}</a>
        </li>
        <Dropdown {...this.state} linkNodes={linkNodes} />
      </div>
    );
  };
  renderHeaderLinks = link => {
    return link.linkNodes ? (
      this.renderDropdown(link)
    ) : (
      <li key={link.to}>
        <Link {...link} onSetActive={(id, el) => this.handleSetActive(id, el)}>
          {link.to}
          <div className="underlined" />
        </Link>
      </li>
    );
  };
  render() {
    const { isMobile, isOpen, isDropdown } = this.state;

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
                  {NavLinks.map(link => this.renderHeaderLinks(link))}
                  <DonateButton />
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
