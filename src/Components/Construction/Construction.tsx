import './construction.scss';
import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-scroll';

const Modal = posed.div({
  enter: {
    default: { duration: 300 },
    delay: 300,
    opacity: 1,
    transition: {
      y: { damping: 15, type: 'spring', stiffness: 1000 },
    },
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 },
    y: 100,
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConstruction: false,
    };
  }

  componentDidMount() {
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(
      {
        isConstruction: !this.state.isConstruction,
      },
      () => {
        if (this.state.isConstruction) return (document.body.style.overflow = 'hidden');
        document.body.style.overflow = '';
      },
    );
  };

  render() {
    const { isConstruction } = this.state;
    return (
      <PoseGroup>
        {isConstruction && [
          <Shade key="shade" className="shade" />,
          <Modal key="modal" className="modal">
            <div className="modal_content-wrapper">
              <div className="modal_content-container">
                <div className="modal_text-wrapper">ORCASENIORS.org is currently under construction.</div>
                <div className="modal_text-sub">Please leave your email if you wish to be contacted.</div>
                <div className="modal_button-group">
                  <Link
                    className="modal_button button-1"
                    to="contact"
                    onClick={() => this.toggleModal()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Sign up for newsletter
                  </Link>
                  <a className="modal_button button-1" onClick={() => this.toggleModal()}>
                    Continue to site
                  </a>
                </div>
              </div>
            </div>
          </Modal>,
        ]}
      </PoseGroup>
    );
  }
}
