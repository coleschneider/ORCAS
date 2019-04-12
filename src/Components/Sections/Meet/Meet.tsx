import * as React from 'react';
import Carousel from 'Components/Carousel/Carousel';
import * as PlaceholderAvatar from 'Images/avatar.png';
import './meet.scss';
import { createSection } from 'utils/sectionUtils';
const TeamWrapper = createSection({
  className: 'about-how',
  displayTitle: 'Meet the Team!',
  sectionName: 'team',
});
const TestimonialWrapper = createSection({
  className: 'senior-testimonials',
  description: 'Hear the stories...',
  displayTitle: 'Meet the Seniors!',
  sectionName: 'seniors',
});

export const MeetTheSeniors = () => (
  <TestimonialWrapper>
    <div className="testimonials">
      <div className="testimonial-container">
        <span className="quote">❝</span>
        Excepturi nam cupiditate culpa doloremque deleniti repellat.
        <span className="quote-2">❞</span>
        <br />
        -A User
      </div>
      <div className="testimonial-container">
        <span className="quote">❝</span>
        Excepturi nam cupiditate culpa doloremque deleniti repellat.
        <span className="quote-2">❞</span>
        <br />
        -A User
      </div>
      <div className="testimonial-container">
        <span className="quote">❝</span>
        Excepturi nam cupiditate culpa doloremque deleniti repellat.
        <span className="quote-2">❞</span>
        <br />
        -A User
      </div>
    </div>
  </TestimonialWrapper>
);

const UserSlide = ({ avatar, role, children, author }) => (
  <div className="meet__slide">
    <img alt="Author image" src={avatar} className="meet__avatar" />
    <p>{children}</p>
    <div className="meet__author">
      <span className="meet__name">{author}</span>
      <a href="#0" className="meet__link">
        - {role}
      </a>
    </div>
  </div>
);
export const MeetTheTeam = () => (
  <TeamWrapper>
    <Carousel>
      <UserSlide author="Kay Brainard" role="President" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
      <UserSlide author="Alison O’Neill" role="Vice-President" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
      <UserSlide author="Lori Nasatir" role="Second-In-Command" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
      <UserSlide author="Barbara Page" role="Publicity Contact" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
      <UserSlide author="Kathie Lanker" role="Member" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
      <UserSlide author="Michael Williams" role="Member" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>

      <UserSlide author="Clark Owens" role="Member" avatar={PlaceholderAvatar}>
        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci. Nisi
        eaque consequatur. Quasi voluptas eius distinctio. Atque eos maxime. Qui ipsam temporibus quisquam vel.
      </UserSlide>
    </Carousel>
  </TeamWrapper>
);
