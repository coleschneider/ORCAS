import * as React from 'react';
import { createSection } from 'utils/sectionUtils';
import Reveal from 'react-reveal';

import './mission.scss';

const MissionWrap = createSection({
  description: `Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
  assumenda repudiandae non cumque qui. Amet repellat omnis ea.`,
  displayTitle: 'Our Mission',
  sectionName: 'mission',
});

export default () => (
  <MissionWrap>
    <Reveal bottom={true}>
      <div className="row wide mission-desc">
        <div className="col-full slick-slider mission-desc__slider">
          <div className="mission-desc__slide">
            <h3 className="item-title">Community.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
          <div className="mission-desc__slide">
            <h3 className="item-title">Family.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
          <div className="mission-desc__slide">
            <h3 className="item-title">Secure.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>

          <div className="mission-desc__slide">
            <h3 className="item-title">Family.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </MissionWrap>
);
