import * as React from 'react';

import { createSection, ServiceItem } from 'utils/sectionUtils';
import './services.scss';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const ServicesWrapper = createSection({
  description: `Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
                assumenda repudiandae molestiae cumque qui. Amet repellat omnis ea.`,
  displayTitle: 'New Services',
  sectionName: 'services',
});

export default () => (
  <ServicesWrapper>
    <div className="row services block-1-3 block-m-1-2">
      <ServiceItem icon="icon-chat" title="Donations and Fundraising">
        Reach out through social media, or sign up for the{' '}
        <ScrollLink smooth={true} duration={500} spy={true} to="contact">
          Newsletter!
        </ScrollLink>
      </ServiceItem>
      <ServiceItem icon="icon-shield" title="More Secure">
        ORCAS' wants to provide the community of oxnard a safe and secure facility
      </ServiceItem>
      <ServiceItem icon="icon-building" title="Building Plans">
        We are excited to share the new and upcoming schematics. Here are the new{' '}
        <Link
          to={{
            pathname: `/img/building_plans`,
            state: {
              modal: true,
            },
          }}
        >
          building plans
        </Link>
      </ServiceItem>
      <ServiceItem icon="icon-group" title="Senior Activities">
        Painting, gaming, Computer Lessons, and other activities!
      </ServiceItem>
    </div>
  </ServicesWrapper>
);
