import React from 'react';
import { Keyframes, animated } from 'react-spring/renderprops.cjs';
//import { TimingAnimation, Easing } from '../../../src/addons'

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: '#80d3d2' },
      to: { radians: 8 * Math.PI },
    });
  }
});

const Loader = ({isFetching}) => {
  const items = ['item1', 'item2', 'item3'] 
    const Content = ({ radians, color }) =>
      items.map((_, i) => (
        <animated.svg
          key={i}
          style={{
            width: 60,
            height: 60,
            willChange: 'transform',
            transform: radians.interpolate(r => `translate3d(0, ${20 * Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`),
          }}
          viewBox="0 0 175 175"
        >
          <animated.g fill={color} fillRule="evenodd">
            <circle cx="50" cy="50" r="50" />
          </animated.g>
        </animated.svg>
      ));
    return isFetching ? (
      <div>
        <Container reset native keys={items} config={{ duration: 2000 }}>
          {Content}
        </Container>
      </div>
    ) : null
  }

export default Loader