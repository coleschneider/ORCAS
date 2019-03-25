import * as React from 'react';
const ScrollIntoView = props => {
  return (
    <li className={props.activeElement === props.Text ? 'current' : undefined} onClick={props.scrollIntoView}>
      <a>{props.Text}</a>
      <div className={props.activeElement === props.Text ? 'underlined' : undefined} />
    </li>
  );
};
export const ScrollHelper = props => {
  return (
    <div onClick={props.scrollIntoView} className="home-scroll smoothscroll">
      <span className="home-scroll__text">Scroll</span>
      <span className="home-scroll__icon" />
    </div>
  );
};
export const FooterScrollHelper = props => {
  return (
    <div onClick={props.scrollIntoView} className={props.showScroller ? 'go-top link-is-visible' : 'go-top'}>
      <a className="smoothscroll" title="Back to Top" />
    </div>
  );
};

export default ScrollIntoView;
