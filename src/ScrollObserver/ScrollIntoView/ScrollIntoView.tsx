import * as React from 'react';
const ScrollIntoView = props => {
  return (
    <li className={props.activeElement === props.Text ? 'current' : undefined} onClick={props.scrollIntoView}>
      <a>{props.Text}</a>
      <div className={props.activeElement === props.Text ? 'underlined' : undefined} />
    </li>
  );
};

export default ScrollIntoView;
