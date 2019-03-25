import * as React from 'react';

import Nav from '../Header/Nav/Nav';
import Subscribe from './Subscribe/Subscribe';
import './footer.scss';
import { FooterViewScroll } from '../ScrollObserver/ScrollView';

export default ({ showScroller }) => (
  <footer className="s-footer footer" id="contact">
    <div className="row section-header align-center">
      <div className="col-full">
        <h1 className="display-1">Let's Stay In Touch.</h1>
        <p className="lead">Subscribe for updates, special offers, and other amazing stuff.</p>
      </div>
    </div>
    <div className="row footer__top">
      <div className="col-full footer__subscribe end">
        <Subscribe />
      </div>
    </div>
    <div className="row footer__bottom">
      <div className="footer__about col-five tab-full left">
        <h4>About ORCAS.</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          consectetur adipisicing elit do eiusmod tempor.
        </p>
        <ul className="footer__social">
          <li>
            <a href="#0">
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fab fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-five md-seven tab-full right end">
        <div className="row">
          <div className="footer__site-links col-five mob-full">
            <h4>Site links.</h4>
            <ul className="footer__site-links">
              <Nav />
            </ul>
          </div>
          <div className="footer__contact col-seven mob-full">
            <h4>Contact Us.</h4>
            <p>
              Phone: (+1) 800 ORCAS <br />
              Fax: (+1) 800 ORCAS
            </p>
            <p>
              Need help or have a question? Contact us at: <br />
              <a href="mailto:#0" className="footer__mail-link">
                support@orcas.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="col-full ss-copyright">
        <span>&copy; Copyright ORCAS 2019</span>
      </div>
    </div>
    <div id="message" className="network-status" />
    <FooterViewScroll Text="home" selector="#home" showScroller={showScroller} />
  </footer>
);
