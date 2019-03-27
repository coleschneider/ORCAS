import * as React from 'react';
import Fade from 'react-reveal/Fade';
import PlaceholderAvatar from 'Images/avatar.png';
import Carousel from 'Components/Carousel/Carousel';
export default () => (
  <section id="services" className="s-services target-section">
    <Fade bottom={true} cascade={true}>
      <div className="row section-header has-bottom-sep">
        <div className="col-full">
          <h1 className="display-1">Our Values and Services</h1>
          <p className="lead">
            Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
            assumenda repudiandae molestiae cumque qui. Amet repellat omnis ea.
          </p>
        </div>
      </div>

      <div className="row services block-1-3 block-m-1-2">
        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-heart" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Giving</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-group" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Activities</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-shield" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">More Secure</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-building" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Facility</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-chat" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Fundraise</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>

        <div className="col-block item-feature">
          <div className="item-feature__icon">
            <i className="icon-wallet" />
          </div>
          <div className="item-feature__text">
            <h3 className="item-title">Donations</h3>
            <p>
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
            </p>
          </div>
        </div>
      </div>

      <Carousel>
        <Carousel.Slide author={'auser1'} avatar={PlaceholderAvatar}>
          Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
          Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
        </Carousel.Slide>
        <Carousel.Slide author={'auser2'} avatar={PlaceholderAvatar}>
          Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
          Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
        </Carousel.Slide>
        <Carousel.Slide author={'auser3'} avatar={PlaceholderAvatar}>
          Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
          Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
        </Carousel.Slide>
      </Carousel>
    </Fade>
  </section>
);