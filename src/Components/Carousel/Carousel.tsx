import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import Pagination, { NextPage, PrevPage } from './Pagination/Pagination';
import './carousel.scss';

const Swipable = bindKeyboard(SwipeableViews);
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
  style?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  paginationStyle?: React.CSSProperties;
}
interface CarouselState {
  index: number;
}
class Carousel extends React.Component<CarouselProps, CarouselState> {
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
    const { children, paginationStyle, arrowStyle } = this.props;
    const total = React.Children.count(children);
    const { index } = this.state;
    return (
      <div className="row slick-slider">
        <Swipable
          index={index}
          slideClassName="senior-card"
          onChangeIndex={this.handleChangeIndex}
          enableMouseEvents={true}
          resistance={true}
        >
          {this.props.children}
        </Swipable>
        <Pagination style={paginationStyle} total={total} index={index} onChangeIndex={this.handleChangeIndex} />
        <PrevPage style={arrowStyle} onClick={() => this.handleChangeIndex(index - 1)} />
        <NextPage style={arrowStyle} onClick={() => this.handleChangeIndex(index + 1)} />
      </div>
    );
  }
}
export default Carousel;
