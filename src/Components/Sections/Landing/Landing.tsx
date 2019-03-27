import React from 'react';
import LandingImage from 'Images/beach.jpg';
import Reveal from 'react-reveal/Reveal';
import './landing.scss';
import { ViewScrollHelper } from 'Common/ScrollObserver/ScrollView';
export default (props, ref) => (
  <section id="home" className="s-home target-section">
    <div className="shadow-overlay" />
    <Reveal bottom={true} fraction={0.5}>
      <div className="home-content">
        <div className="row home-content__main">
          <div className="home-content__left">
            <h1>
              The Future of Oxnard's Senior Center <br />
              is Bright.
            </h1>
            <h3>
              Voluptatem ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explica. Nemo
              enim ipsam voluptatem quia. Ut quis enim.
            </h3>
          </div>
          <div className="home-content__right">
            <img src={LandingImage} />
          </div>
        </div>

        <ul className="home-content__social">
          <li>
            <a href="#0">Facebook</a>
          </li>
          <li>
            <a href="#0">twitter</a>
          </li>
          <li>
            <a href="#0">Instagram</a>
          </li>
        </ul>
      </div>
    </Reveal>
    <ViewScrollHelper Text="mission" selector="#mission" />
  </section>
);
