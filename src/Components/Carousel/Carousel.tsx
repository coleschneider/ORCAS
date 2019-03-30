import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Pagination, { NextPage, PrevPage } from './Pagination/Pagination';
import './carousel.scss';
const styles = {
  slide: {
    color: '#fff',
    minHeight: 100,
    padding: 15,
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

interface CarouselProps {
  children: React.ReactChildren;
}
interface CarouselState {
  index: number;
}
class Carousel extends React.Component<CarouselProps, CarouselState> {
  static Slide = ({ children, author, avatar }) => (
    <div className="meet__slide">
      <img alt="Author image" src={avatar} className="meet__avatar" />
      <span className="quote">❝</span>
      <p>{children}</p>
      <div className="meet__author">
        <span className="meet__name">{author}</span>
        <a href="#0" className="meet__link">
          @{author}
        </a>
      </div>
    </div>
  );
  constructor(props) {
    super(props);

    this.state = { index: 0 };
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChangeIndex(nextIndex) {
    const { children } = this.props;
    const total = React.Children.count(children);
    this.setState({
      index: nextIndex > total - 1 ? 0 : nextIndex < 0 ? total - 1 : nextIndex,
    });
  }

  render() {
    const { children } = this.props;
    const total = React.Children.count(children);
    const { index } = this.state;
    return (
      <div className="row meet slick-slider">
        <SwipeableViews
          // style={{overflow: 'unset'}}
          // slideStyle={{overflow: 'visible'}}
          index={index}
          slideClassName="senior-card"
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents={true}
          resistance={true}
        >
          {this.props.children}
        </SwipeableViews>
        <PrevPage onClick={() => this.handleChangeIndex(index - 1)} />
        <NextPage onClick={() => this.handleChangeIndex(index + 1)} />
        <Pagination total={total} index={index} onChangeIndex={this.handleChangeIndex} />
      </div>
    );
  }
}
export default Carousel;
