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
    // width: '1000px',
    alignItems: 'stretch',
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
