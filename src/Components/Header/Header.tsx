import * as React from 'react';

import Logo from './Logo/Logo';
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import './header.scss';
import DonateButton from 'Common/DonateButton/DonateButton';
import NavLinks from 'Common/NavLinks/NavLinks';
import { RouteComponentProps } from 'react-router';
import { AnimatedNav, Item } from 'Common/NavLinks/AnimatedLinks';
import Dropdown from './Dropdown/Dropdown';

interface HeaderState {
  isMobile: boolean;
  isOpen: boolean;
  isDropdown: boolean;
}

interface HeaderProps extends RouteComponentProps {
  setHeaderScroll: (isGreater: boolean) => void;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  headerRef: Element;
  missionRef: Element;
  scroller;
  constructor(props) {
    super(props);
    this.state = {
      isDropdown: false,
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
  toggleDropdown = () =>
    this.setState(({ isDropdown }) => ({
      isDropdown: !isDropdown,
    }));
  setDisplay = () =>
    this.setState({
      isDropdown: false,
      isMobile: window.innerWidth <= 800,
      isOpen: false,
    });
  handleSetActive = (id: activeElementType, el: Element) => {
    const { isMobile } = this.state;
    const { setHeaderScroll } = this.props;
    if (isMobile) {
      this.setState({
        isOpen: false,
      });
    }
    setHeaderScroll(id !== 'home');
  };
  renderDropdown = ({ linkNodes, to }) => {
    const { isMobile } = this.state;
    return (
      <Item
        tabIndex={1}
        key={to}
        onBlur={!isMobile ? this.toggleDropdown : undefined}
        onMouseEnter={!isMobile ? this.toggleDropdown : undefined}
        onMouseLeave={!isMobile ? this.toggleDropdown : undefined}
        onClick={this.toggleDropdown}
        className="tab-drop"
      >
        <a className="dropdown-text">{to}</a>
        <Dropdown {...this.state} linkNodes={linkNodes} />
      </Item>
    );
  };
  renderHeaderLinks = link => {
    const { history, match } = this.props;
    return link.linkNodes ? (
      this.renderDropdown(link)
    ) : (
      <Item key={link.to}>
        <Link
          {...link}
          onSetActive={(id, el) => this.handleSetActive(id, el)}
          onClick={() => {
            if (!match.isExact) {
              history.push('/');
            }
          }}
        >
          {link.to}
          <div className="underlined" />
        </Link>
      </Item>
    );
  };
  renderMobileNav = () => {
    const { isOpen } = this.state;
    return (
      <AnimatedNav
        test-id="mobileHeader-nav"
        pose={isOpen ? 'open' : 'closed'}
        className={`header-nav-wrap ${isOpen && 'is-open'}`}
      >
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton style={{ lineHeight: '4.6rem' }} />
        </ul>
      </AnimatedNav>
    );
  };
  renderNav = () => {
    const { isOpen } = this.state;
    return (
      <nav test-id="header-nav" pose={isOpen ? 'open' : 'closed'} className={`header-nav-wrap ${isOpen && 'is-open'}`}>
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton />
        </ul>
      </nav>
    );
  };
  render() {
    const { isMobile, isOpen } = this.state;
    return (
      <header test-id="header" ref={el => (this.headerRef = el)} className="s-header sticky" id="header-it">
        <div className="row">
          <Logo />
          {isMobile ? this.renderMobileNav() : this.renderNav()}
          {isMobile ? <Toggle onClick={this.toggle} isOpen={isOpen} /> : null}
        </div>
      </header>
    );
  }
}

export default Header;
