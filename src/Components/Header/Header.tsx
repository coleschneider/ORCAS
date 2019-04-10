import * as React from 'react';

import Logo from './Logo/Logo';
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import './header.scss';
import DonateButton from 'Common/DonateButton/DonateButton';
import NavLinks from 'Common/NavLinks/NavLinks';
import * as Animated from 'Common/NavLinks/AnimatedLinks';
import { RouteComponentProps } from 'react-router';
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

  toggle = () => this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  toggleDropdown = () =>
    this.setState(({ isDropdown }) => ({
      isDropdown: !isDropdown,
    }));
  setDisplay = () => this.setState({
      isMobile: window.innerWidth <= 800,
      isOpen: false,
      isDropdown: false,
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
    return (
      <Animated.Item
        className="list-dropdown"
        tabIndex={1}
        key={to}
        // onBlur={!this.state.isMobile && this.toggleDropdown}
        onClick={this.toggleDropdown}
        className={this.state.isDropdown ? 'dropdown show-items' : 'dropdown'}
      >
        <a className="dropdown-text">{to}</a>

        <Dropdown isDropdown={this.state.isDropdown} linkNodes={linkNodes} />
      </Animated.Item>
    );
  };
  renderHeaderLinks = link => {
    const { history, match } = this.props;
    return link.linkNodes ? (
      this.renderDropdown(link)
    ) : (
      <Animated.Item key={link.to}>
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
      </Animated.Item>
    );
  };
  renderMobileNav = () => {
    const { isOpen } = this.state;
    return (
      <Animated.AnimatedNav pose={isOpen ? 'open' : 'closed'} className={`header-nav-wrap ${isOpen && 'is-open'}`}>
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton style={{ lineHeight: '4.6rem' }} />
        </ul>
      </Animated.AnimatedNav>
    );
  };
  renderNav = () => {
    const { isOpen, isMobile } = this.state;
    return isMobile ? (
      this.renderMobileNav()
    ) : (
      <nav className={`header-nav-wrap ${isOpen && 'is-open'}`}>
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton />
        </ul>
      </nav>
    );
  };
  render() {
    const { isMobile, isOpen, isDropdown } = this.state;
    return (
      <header ref={el => (this.headerRef = el)} className="s-header sticky" id="header-it">
        <div className="row">
          <Logo />
          {this.renderNav()}
          {isMobile ? <Toggle onClick={this.toggle} isOpen={isOpen} /> : null}
        </div>
      </header>
    );
  }
}




export default Header;
