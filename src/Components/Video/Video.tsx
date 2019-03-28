import * as React from 'react';
import { Link } from 'react-router-dom';

const Video = () => (
  <div className="row video-bg">
    <div className="shadow-overlay" />
    <Link
      to={{
        pathname: '/path',
        state: {
          modal: true,
        },
      }}
      className="btn-video"
    >
      <span className="video-icon" />
    </Link>
    <div className="stats">
      <div className="item-stats">
        <span className="item-stats__num">Oxnard</span>
        <span className="item-stats__title">A brief description of oxnard video</span>
      </div>
      <div className="item-stats">
        <span className="item-stats__num">24K</span>
        <span className="item-stats__title">Views</span>
      </div>
    </div>
  </div>
);

export default Video;
