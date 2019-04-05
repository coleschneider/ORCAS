import * as React from 'react';

import { createSection, ServiceItem } from 'utils/sectionUtils';
import './services.scss';
import { Link } from 'react-scroll';

const ServicesWrapper = createSection({
  description: `Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
                assumenda repudiandae molestiae cumque qui. Amet repellat omnis ea.`,
  displayTitle: 'Our Values and Services',
  sectionName: 'services',
});

export default () => (
  <ServicesWrapper>
    <div className="row services block-1-3 block-m-1-2">
      <ServiceItem icon="icon-chat" title="Donations and Fundraising">
        Reach out through social media, or sign up for the{' '}
        <Link smooth={true} duration={500} spy={true} to="contact">
          Newsletter
        </Link>
        !
      </ServiceItem>
      <ServiceItem icon="icon-shield" title="More Secure">
        ORCAS' wants to provide the community of oxnard a safe and secure facility
      </ServiceItem>
      <ServiceItem icon="icon-building" title="Building Plans">
        Here are the building plans, and schematics. Probably go into a bit more detail here once its more clear
      </ServiceItem>
    </div>
  </ServicesWrapper>
);
