import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';
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

class Pagination extends React.Component {
  constructor() {
    super();

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.renderDot = this.renderDot.bind(this);
  }

  handleChangeIndex(index) {
    this.props.onChangeIndex(index);
  }
  
  renderDot(index) {
    const isActive = index === this.props.index;
    
    return (
      
        
        <li className={isActive ? "slick-active" : undefined}
          onClick={() => this.handleChangeIndex(index)}
          id={`slick-slide1${index}`}
          >
        <button>
          {index} 
        </button> 
          </li>
    )
  }
  render() {
    const children = [];

    for (let index = 0; index < this.props.total; index += 1) {
      children.push(this.renderDot(index))
    }

    return (
      <ul className="slick-dots">
        {children}
      </ul>
    )
  }
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChangeIndex(index) {
    console.log(index)
    this.setState({ index });
  }

  public static Slide = ({children, author, avatar}) => (
    <div style={Object.assign({})} className="meet__slide">
    <img alt="Author image" src={avatar} className="meet__avatar" />
    <p>
    {children}
    </p>
    <div className="meet__author">
      <span className="meet__name">{author}</span>
      <a href="#0" className="meet__link">
        @{author}
      </a>
    </div>
    </div>
  )
  render(){
    return (
      <div className="meet-wrap">
      <div className="row">
      <div className="col-full meet-header">
        <h2 className="display-2">Meet the team!</h2>
      </div>
    </div>
    <div className="row meet slick-slider">
    <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex} enableMouseEvents resistance style={styles.root} slideStyle={styles.slideContainer}>
        {this.props.children}
      </SwipeableViews>
  <Pagination total={3} index={this.state.index} onChangeIndex={this.handleChangeIndex} />  
    
    </div>
  
      </div>
      
    );
  }
}
export default Carousel;
