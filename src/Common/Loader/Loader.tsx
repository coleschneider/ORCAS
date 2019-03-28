import React from 'react';
import { Keyframes, animated } from 'react-spring/renderprops.cjs';

const items = ['item1', 'item2', 'item3'];
export const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0, color: '#80d3d2' },
      to: { radians: 8 * Math.PI },
    });
  }
});
export const Content = ({ radians, color }) =>
  items.map((_, i) => (
    <animated.svg
      key={i}
      style={{
        height: 60,
        transform: radians.interpolate(r => `translate3d(0, ${20 * Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`),
        width: 60,
        willChange: 'transform',
      }}
      viewBox="0 0 175 175"
    >
      <animated.g fill={color} fillRule="evenodd">
        <circle cx="50" cy="50" r="50" />
      </animated.g>
    </animated.svg>
  ));
export const Loader = ({ isFetching }) => {
  return isFetching ? (
    <div>
      <Container reset={true} native={true} keys={items} config={{ duration: 2000 }}>
        {({ radians, color }) =>
          items.map((_, i) => (
            <animated.svg
              key={i}
              style={{
                height: 60,
                transform: radians.interpolate(r => `translate3d(0, ${20 * Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`),
                width: 60,
                willChange: 'transform',
              }}
              viewBox="0 0 175 175"
            >
              <animated.g fill={color} fillRule="evenodd">
                <circle cx="50" cy="50" r="50" />
              </animated.g>
            </animated.svg>
          ))
        }
      </Container>
    </div>
  ) : null;
};

export default Loader;
