import React from 'react';
import './CarItem.scss';

const CarItem = props => {
  const { main, color, price, options, year, status } = props;
  const background =
    color === 'white' || color === '#fff'
      ? { background: color, border: '1px solid #ddd' }
      : { background: color };
  const row1 = () => {
    return (
      <div className="carItem--row1">
        <div className="carItem--main">{main}</div>
        <div className="carItem--color" style={background} />
        <div className="carItem--price">{price}</div>
      </div>
    );
  };
  const row2 = () => {
    if (options.length) {
      return (
        <div className="carItem--row2">
          <div className="carItem--options">{options}</div>
        </div>
      );
    }
  };
  const row3 = () => {
    return (
      <div className="carItem--row3">
        <div className="carItem--year-and-status-wrapper">
          <div className="carItem--year">{year}</div>
          <div className="carItem--status">{status}</div>
        </div>
        <button
          type="button"
          name="delete"
          value="Удалить"
          className="carItem--delete"
        >
          Удалить
        </button>
      </div>
    );
  };
  return (
    <div className="carItem">
      {row1()}
      {row2()}
      {row3()}
    </div>
  );
};

export default CarItem;
