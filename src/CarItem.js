import React, { Component } from 'react';
import './CarItem.scss';

const CarItem = () => {
  return (
    <div className="carItem">
      <div className="carItem--row1">
        <div className="carItem--main">1.6 MT Ambiente Plus 105 л.с. МКПП</div>
        <div className="carItem--color" />
        <div className="carItem--price">1 189 900 руб.</div>
      </div>

      <div className="carItem--row2">
        <div className="carItem--option" />
      </div>

      <div className="carItem--row3">
        <div className="carItem--year">2012</div>
        <div className="carItem--status">Ожидается</div>
        <button
          type="button"
          name="delete"
          value="Удалить"
          className="carItem--delete"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};

export default CarItem;
