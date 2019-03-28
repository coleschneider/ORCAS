import * as React from 'react';
import ShortDonation from './ShortDonation/ShortDonation';
import './donate.scss';
import { createSection } from 'utils/sectionUtils';
interface DonateState {
  tryFormSubmission: boolean;
}

const DonateWrapper = createSection({
  description: `Et nihil atque ex. Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. Ut quis enim rerum quia
  assumenda repudiandae non cumque qui. Amet repellat omnis ea.`,
  displayTitle: 'You Can Help with your Donation.',
  sectionName: 'donate',
});

class Donate extends React.Component<{}, DonateState> {
  submitDonation = null;
  handleSubmit = e => {
    if (this.submitDonation) {
      this.submitDonation(e);
    }
  };
  bindSubmitForm = (submitDonation: () => void) => {
    this.submitDonation = submitDonation;
  };
  render() {
    return (
      <DonateWrapper>
        <div className="row plans block-1-2 block-m-1-2 block-tab-full stack">
          <div className="col-block item-plan">
            <div className="item-plan__block">
              <div className="item-plan__top-part">
                <h3 className="item-plan__title">Give</h3>
                <p className="item-plan__price">$5</p>
                <p className="item-plan__per">To ORCAS</p>
              </div>
              <div className="item-plan__bottom-part">
                <ul className="item-plan__mission give-five">
                  <li>
                    <span>Email</span> Updates
                  </li>
                </ul>
                <a className="btn btn--primary large full-width" href="#0">
                  Give $5
                </a>
              </div>
            </div>
          </div>
          <div className="col-block item-plan item-plan--popular">
            <div className="item-plan__block">
              <ShortDonation bindSubmitForm={this.bindSubmitForm} />
              <div className="item-plan__bottom-part">
                <ul className="item-plan__mission">
                  <li>
                    <span>Give</span> Monthly
                  </li>
                  <li>
                    <span>Another's</span> Behalf
                  </li>
                  <li>
                    <span>Email</span> Updates
                  </li>
                  <li>Subscribe</li>
                </ul>
                <div className="btn btn--primary large full-width" onClick={this.handleSubmit}>
                  Donate
                </div>
              </div>
            </div>
          </div>
        </div>
      </DonateWrapper>
    );
  }
}

export default Donate;
