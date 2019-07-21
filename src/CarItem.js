import React from 'react';
import './CarItem.scss';

const CarItem = props => {
  const { name, color, price, options, year, status } = props;

  const background =
    color === 'white' || color === '#fff'
      ? { background: color, border: '1px solid #ddd', width: 18, height: 18 }
      : { background: color };

  const optionsElement = () => {
    if (options.length) {
      return <div className="carItem--options">{options}</div>;
    }
  };

  return (
    <div className="carItem">
      <div className="carItem--name">{name}</div>
      <div className="carItem--color" style={background} />
      <div className="carItem--price">{price}</div>
      {optionsElement()}
      <div className="carItem--year">{year}</div>
      <div className="carItem--status">{status}</div>
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

export default CarItem;
