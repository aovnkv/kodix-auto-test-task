import React from 'react';
import './CarsList.scss';
import CarItem from '../components/CarItem';

const CarsList = props => {
  //console.dir(cars);
  const items = props.cars.map(car => <CarItem key={car.id} {...car} />);
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
