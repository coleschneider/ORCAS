import * as React from 'react';
import { Link } from 'react-router-dom';
import './modal-button.scss';

const ModalButton = ({ text, imageId, style }) => {
  return (
    // <div id="container">
    <Link
      className="media-btn learn-more"
      to={{
        pathname: `/img/${imageId}`,
        state: {
          modal: true,
        },
      }}
    >
      <div className="circle" style={style}>
        <span className="icon arrow" />
      </div>
      <p className="button-text">{text}</p>
    </Link>
  );
};

export default ModalButton;
