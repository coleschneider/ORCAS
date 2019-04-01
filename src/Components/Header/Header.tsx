import * as React from 'react';
import { animated, Spring, Transition } from 'react-spring/renderprops.cjs';

import Logo from './Logo/Logo';
import NavLink, { navlinks } from './Nav/Nav';
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import './header.scss';
import DonateButton from 'Common/DonateButton/DonateButton';

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
const submenuLinks = [
  {
    to: 'seniors',
  },
  {
    to: 'team',
  },
];

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
  toggleDropdown = () =>
    this.setState(({ isDropdown }) => ({
      isDropdown: !isDropdown,
    }));
  setDisplay = () =>
    this.setState({
      isMobile: window.innerWidth <= 767,
    });

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
                  <li>
                    <Link
                      activeClass="current"
                      to="home"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      home
                      <div className="underlined" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="current"
                      to="mission"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      mission
                      <div className="underlined" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="current"
                      to="about"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      about
                      <div className="underlined" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="current"
                      to="services"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      services
                      <div className="underlined" />
                    </Link>
                  </li>
                  <div className="dropdown">
                    <li>
                      <a
                        onClick={this.toggleDropdown}
                        // activeClass="current"
                        // to="meet"
                        // spy={false}
                        // smooth={true}
                        // onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                        // offset={-70}
                        // duration={500}
                      >
                        meet
                        <div className="underlined" />
                      </a>
                    </li>
                    <div className="dropdown-content">
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
                            <div style={props} className="dropdown-content">
                              {submenuLinks &&
                                submenuLinks.map(menuItem => (
                                  <Link
                                    to={menuItem.to}
                                    activeClass="active-submenu"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                  >
                                    {menuItem.to}
                                  </Link>
                                ))}
                            </div>
                          ))
                        }
                      </Transition>
                    </div>
                  </div>
                  <li>
                    <Link
                      activeClass="current"
                      to="donate"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      donate
                      <div className="underlined" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="current"
                      to="contact"
                      spy={true}
                      smooth={true}
                      onSetActive={(id, el) => this.handleSetActive && this.handleSetActive(id, el)}
                      offset={-70}
                      duration={500}
                    >
                      contact
                      <div className="underlined" />
                    </Link>
                  </li>
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
