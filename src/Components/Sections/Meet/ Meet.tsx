import * as React from 'react';
import Carousel from 'Components/Carousel/Carousel';
import * as PlaceholderAvatar from 'Images/avatar.png';
import { createSection } from 'utils/sectionUtils';
const MeetWrapper = createSection({
  sectionName: 'seniors',
  displayTitle: 'Meet the Seniors!',
  className: 'about-how'
})
export const Meet = () => (
  <MeetWrapper>
    <Carousel>
      <Carousel.Slide author={'auser1'} avatar={PlaceholderAvatar}>
        
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
        
      </Carousel.Slide>
      <Carousel.Slide author={'auser2'} avatar={PlaceholderAvatar}>
      
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
        
      </Carousel.Slide>
      <Carousel.Slide author={'auser3'} avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </Carousel.Slide>
    </Carousel>
  </MeetWrapper>
);

export default Meet;
