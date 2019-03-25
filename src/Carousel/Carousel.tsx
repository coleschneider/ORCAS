import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Pagination from './Pagination';
const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
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

  handleChangeIndex(index) {
    this.setState({ index });
  }

  render() {
    const { children } = this.props;
    const total = React.Children.count(children);
    return (
      <div className="meet-wrap">
        <div className="row">
          <div className="col-full meet-header">
            <h2 className="display-2">Meet the team!</h2>
          </div>
        </div>
        <div className="row meet slick-slider">
          <SwipeableViews
            index={this.state.index}
            onChangeIndex={this.handleChangeIndex}
            enableMouseEvents={true}
            resistance={true}
          >
            {this.props.children}
          </SwipeableViews>
          <Pagination total={total} index={this.state.index} onChangeIndex={this.handleChangeIndex} />
        </div>
      </div>
    );
  }
}
export default Carousel;
