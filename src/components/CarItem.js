import React from 'react';
import './CarItem.scss';

const CarItem = props => {
  const { title, description, year, color, status, price } = props;
  const priceIntl = price.toLocaleString('ru');
  const background =
    color === 'white' || color === '#fff'
      ? { background: color, border: '1px solid #ddd', width: 18, height: 18 }
      : { background: color };

  const optionsElement = () => {
    if (description.length) {
      return <div className="carItem--options">{description}</div>;
    }
  };

  return (
    <div className="carItem">
      <div className="carItem--name">{title}</div>
      <div className="carItem--color" style={background} />
      <div className="carItem--price">{`${priceIntl} руб.`}</div>
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
