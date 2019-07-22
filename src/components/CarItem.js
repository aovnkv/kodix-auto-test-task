import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import './CarItem.scss';

const CarItem = props => {
  const { id, title, description, year, color, status, price } = props;
  const priceIntl = price.toLocaleString('ru');
  const background =
    color === 'white' || color === '#fff'
      ? { background: color, border: '1px solid #ddd', width: 18, height: 18 }
      : { background: color };

  const deleteItem = id => props.dispatch(actions.deleteCar(id));

  return (
    <div className="carItem">
      <div className="carItem--name">{title}</div>
      <div className="carItem--color" style={background} />
      <div className="carItem--price">{`${priceIntl} руб.`}</div>
      {description && <div className="carItem--options">{description}</div>}
      <div className="carItem--year">{year}</div>
      <div className="carItem--status">{status}</div>
      <button
        onClick={() => deleteItem(id)}
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

export default connect()(CarItem);
