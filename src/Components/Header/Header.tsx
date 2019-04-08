import * as React from 'react';
import posed from 'react-pose';

import Logo from './Logo/Logo';
import { Link } from 'react-scroll';
import Toggle from './Toggle/Toggle';
import './header.scss';
import DonateButton from 'Common/DonateButton/DonateButton';
import NavLinks from 'Common/NavLinks/NavLinks';
import { RouteComponentProps } from 'react-router';


interface HeaderState {
  isMobile: boolean;
  isOpen: boolean;
  isDropdown: boolean;
}

interface HeaderProps extends RouteComponentProps {
  setHeaderScroll: (isGreater: boolean) => void;
}

const Dropdown = ({ isOpen, isDropdown, isMobile, linkNodes }) => (
        <SubItem
        pose={isDropdown ? "open" : "closed"}
        className="dropdown-content">
          {linkNodes &&
            linkNodes.map((menuItem, i) => (
              <Link key={i} to={menuItem.to} activeClass="active-submenu" smooth={true} duration={500}>
                {menuItem.to}
              </Link>
            ))}
        </SubItem>
);
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
      <Item
        pose={this.props.isDropdown ? "dropdownOpen" : "dropdownClosed"}
        tabIndex={1}
        key={to}
        // onBlur={this.toggleDropdown}
        onClick={this.toggleDropdown}
        // className={this.state.isDropdown ? 'dropdown show-items' : 'dropdown'}
      >
        <li>
          <a className="dropdown-text">{to}</a>
        </li>
        <Dropdown {...this.state} linkNodes={linkNodes} />
      </Item>
    );
  };
  renderHeaderLinks = link => {
    const { history, match } = this.props;
    return link.linkNodes ? (
      this.renderDropdown(link)
    ) : (
      <Item>
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
      <AnimatedNav pose={isOpen ? "open" : "closed"} className={`header-nav-wrap ${isOpen && 'is-open'}`}>
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton />
        </ul>
      </AnimatedNav>
      )
  }
  renderNav = () => {
    const { isOpen, isMobile } = this.state;
      return isMobile ? this.renderMobileNav() : (
      <nav pose={isOpen ? "open" : "closed"} className={`header-nav-wrap ${isOpen && 'is-open'}`}>
        <ul className={`header-main-nav ${isOpen && 'is-open'}`}>
          {NavLinks.map(link => this.renderHeaderLinks(link))}
          <DonateButton />
        </ul>
      </nav>
      )
  }
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


const AnimatedNav = posed.nav({
  open: {
    y: '0%',
  delayChildren: 100,
  staggerChildren: 200,
  beforeChildren: true,
  },
  closed: {
    y: '-100%',
    delay: 100,
  }
})

const Item = posed.li({
  open: {
    y: 0,
    opacity: 1,
    // delayChildren: 50,
    // staggerChildren: 200,
    // beforeChildren: true
  },
  closed: { y: 20, opacity: 0, },
  dropdownOpen: {
    height: "auto"
  },
  dropdownClosed: {
    height: 'auto'
  }
});
const SubItem = posed.div({
  open: { height: 0, },
  closed: { height: "auto" }
});
export default Header;
