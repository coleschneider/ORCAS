import * as React from 'react';
import Reveal from 'react-reveal/Reveal';

export default () => (
  <section id="mission" className="s-about target-section">
    <Reveal top={true} cascade={true}>
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h1 className="display-1">Our Mission</h1>
          <p className="lead">
            Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
            assumenda repudiandae non cumque qui. Amet repellat omnis ea.
          </p>
        </div>
      </div>
      <div className="row wide about-desc">
        <div className="col-full slick-slider about-desc__slider">
          <div className="about-desc__slide">
            <h3 className="item-title">Community.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
          <div className="about-desc__slide">
            <h3 className="item-title">Family.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
          <div className="about-desc__slide">
            <h3 className="item-title">Secure.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>

          <div className="about-desc__slide">
            <h3 className="item-title">Family.</h3>
            <p>
              Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
              assumenda repudiandae non cumque qui. Amet repellat omnis ea aut cumque eos.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  </section>
);
