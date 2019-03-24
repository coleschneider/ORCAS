import * as React from 'react';
import Fade from 'react-reveal/Fade';
import PlaceholderAvatar from '../../images/avatar.png';

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
      <div className="meet-wrap">
        <div className="row">
          <div className="col-full meet-header">
            <h2 className="display-2">Meet the team!</h2>
          </div>
        </div>

        <div className="meet__slide">
          <img alt="Author image" src={PlaceholderAvatar} className="meet__avatar" />
          <p>
            Qui ipsam temporibus quisquam velMaiores eos cumque distinctio nam accusantium ipsum. Laudantium quia
            consequatur molestias delectus culpa facere hic dolores aperiam. Accusantium praesentium corpori.
          </p>
          <div className="meet__author">
            <span className="meet__name">A User</span>
            <a href="#0" className="meet__link">
              @member1
            </a>
          </div>
        </div>
        <div className="meet__slide">
          <img alt="Author image" src={PlaceholderAvatar} className="meet__avatar" />
          <p>
            Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
            Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
          </p>
          <div className="meet__author">
            <span className="meet__name">Team Member 2</span>
            <a href="#0" className="meet__link">
              @member2
            </a>
          </div>
        </div>
        <div className="meet__slide">
          <img alt="Author image" src={PlaceholderAvatar} className="meet__avatar" />
          <p>
            Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut
            sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
          </p>
          <div className="meet__author">
            <span className="meet__name">Team Member 3</span>
            <a href="#0" className="meet__link">
              @member3
            </a>
          </div>
        </div>
      </div>
    </Fade>
  </section>
);
