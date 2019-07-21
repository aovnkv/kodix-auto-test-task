import React from 'react';
import './CarsList.scss';
import CarItem from './CarItem';

const cars = [
  {
    id: 0,
    name: '1.6 MT Ambiente 85 л.с. МКПП',
    color: 'black',
    price: '1 689 000 руб.',
    options:
      '+ доп. опция «Радио-навигационная система Amundasen 2DIN, CD, MP3»',
    year: '2012',
    status: 'Ожидается'
  },
  {
    id: 1,
    name: '1.6 MT Ambiente Plus 105 л.с. МКПП',
    color: 'white',
    price: '11 189 900 руб.',
    options: '',
    year: '2012',
    status: 'Ожидается'
  },
  {
    id: 3,
    name: '1.6 MT Trend 105 л.с. МКПП',
    color: 'gray',
    price: '1 459 000 руб.',
    options: '',
    year: '2012',
    status: 'Нет в наличии'
  }
];

const CarsList = () => {
  const items = cars.map(car => <CarItem key={car.id} {...car} />);
  return (
    <section className="carsList">
      <h2 className="carsList-title">Автомобили в наличии</h2>
      <div className="carsList-header">
        <div className="carsList-header-col--name">Название</div>
        <div className="carsList-header-col--year">Год</div>
        <div className="carsList-header-col--color">Цвет</div>
        <div className="carsList-header-col--status">Статус</div>
        <div className="carsList-header-col--price">Цена</div>
      </div>
      {items}
    </section>
  );
};

export default CarsList;
