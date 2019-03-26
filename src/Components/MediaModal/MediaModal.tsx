import * as React from 'react';
import ReactModal from 'react-modal';
import ReactPlayer from 'react-player';

(() => {
  if (process.env.NODE_ENV === 'test') {
    return;
  }
  ReactModal.setAppElement('#root');
})();

const customStyles = {
  content: {
    borderRadius: '5px',
    flexShrink: 1,
    overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    // width: '1000px',
    right: 'auto',
    bottom: 'auto',
    height: '80vh',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 7,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    justifyContent: 'center',
    position: 'fixed',
    display: 'flex',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
};

const MediaModal = ({ history }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={e => {
        // e.preventDefault();
        // e.stopPropagation();
        history.goBack();
      }}
      style={customStyles}
    >
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://player.vimeo.com/video/223376401?color=00a650&title=0&byline=0&portrait=0"
        config={{
          vimeo: {
            playerOptions: {
              height: 200,
            },
          },
        }}
      />
    </ReactModal>
  );
};

export default MediaModal;
