import * as React from 'react';
import Reveal from 'react-reveal/Reveal';
import './services.scss';
import { createSection, ServiceItem } from 'utils/sectionUtils';


const ServicesWrapper = createSection({
  displayTitle: 'Our Values and Services',
  description: `Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
  assumenda repudiandae molestiae cumque qui. Amet repellat omnis ea.`,
  sectionName: 'services'
})

export default () => (
    <ServicesWrapper>
      <div className="row services block-1-3 block-m-1-2">
        <ServiceItem icon="icon-heart" title="Giving">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>
        <ServiceItem icon="icon-group" title="Activities">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>
        <ServiceItem icon="icon-shield" title="More Secure">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>
        <ServiceItem icon="icon-building" title="Facility">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>
        <ServiceItem icon="icon-chat" title="Fundraise">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>      
        <ServiceItem icon="icon-wallet" title="Donations">
              Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo delectus est.
              Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque veritatis. Sunt suscipit voluptas ipsa in
              tempora esse soluta sint.
        </ServiceItem>      
      </div>
    </ServicesWrapper>
);
