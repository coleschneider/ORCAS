import * as React from 'react';
import Loader from 'Common/Loader/Loader';
import ReactPlayer from 'react-player';

interface VideoPlayerState {
  isFetching: boolean;
}
class VideoPlayer extends React.Component<{}, VideoPlayerState> {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
    };
  }
  render() {
    const { isFetching } = this.state;

    return (
      <React.Fragment>
        {isFetching && <Loader isFetching={isFetching} />}
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
      </React.Fragment>
    );
  }
}

export default VideoPlayer;
