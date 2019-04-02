import * as React from 'react';
import ReactModal from 'react-modal';
// import ReactPlayer from 'react-player';
import { RouteComponentProps } from 'react-router';
import Loader from 'Common/Loader/Loader';
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
    // alignItems: 'stretch',
    borderRadius: '5px',
    bottom: 'auto',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flexShrink: 1,
    height: '80vh',
    justifyContent: 'center',
    left: '50%',
    overflowX: 'hidden',
    overflowY: 'hidden',
    position: 'absolute',
    backgroundColor: 'black',
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

interface MediaModalState {
  isFetching: boolean;
}
class MediaModal extends React.Component<RouteComponentProps, MediaModalState> {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
    };
  }

  render() {
    const { isFetching } = this.state;
    const { history } = this.props;
    return (
      <ReactModal
        isOpen={true}
        onRequestClose={e => {
          history.goBack();
        }}
        style={customStyles}
      >
        <Loader isFetching={isFetching} />
        <ReactPlayer
          width="100%"
          onReady={() => this.setState({ isFetching: false })}
          onError={() => this.setState({ isFetching: false })}
          style={{ display: isFetching ? 'none' : undefined }}
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
  }
}

export default MediaModal;
