import * as React from 'react';
import ReactModal from 'react-modal';

(() => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  ReactModal.setAppElement('#root');
})();

const customStyles = {
  content: {
    // width: '1000px',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: '5px',
    bottom: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1,
    height: '80vh',
    justifyContent: 'center',
    left: '50%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: 7,
  },
};

const MediaModal = ({ children, history }) => (
  <ReactModal
    isOpen={true}
    onRequestClose={e => {
      history.goBack();
    }}
    style={customStyles}
  >
    {children}
  </ReactModal>
);

export default MediaModal;
