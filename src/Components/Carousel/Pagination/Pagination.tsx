import * as React from 'react';

interface PaginationProps {
  onChangeIndex: (index: number) => void;
  index: number;
  total: number;
}

class Pagination extends React.Component<PaginationProps> {
  constructor(props) {
    super(props);

    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.renderDot = this.renderDot.bind(this);
  }

  handleChangeIndex(index) {
    this.props.onChangeIndex(index);
  }

  renderDot(index) {
    const isActive = index === this.props.index;
    const { style, slideStyles } = this.props;
    return (
      <li
        className={isActive ? 'slick-active' : undefined}
        onClick={() => this.handleChangeIndex(index)}
        id={`slick-slide1${index}`}
        key={index}
      >
        <button style={!isActive ? style : undefined}>{index}</button>
      </li>
    );
  }
  render() {
    const children = [];
    const { total, slideStyles } = this.props;

    for (let index = 0; index < total; index += 1) {
      children.push(this.renderDot(index));
    }

    return (
      <ul className="slick-dots" style={slideStyles}>
        {children}
      </ul>
    );
  }
}
export default Pagination;
export const PrevPage = ({ onClick, style }) => (
  <a style={style} className="prev" onClick={onClick}>
    ❮
  </a>
);
export const NextPage = ({ onClick, style }) => (
  <a style={style} className="next" onClick={onClick}>
    ❯
  </a>
);
