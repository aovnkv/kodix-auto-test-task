import React from 'react';
import './Main.scss';
import Form from './Form';
import CarsList from './CarsList';

export default function Main() {
  return (
    <main className="main">
      <h1 className="main--title">¡Ay caramba!</h1>
      <section className="newCar">
        <Form />
      </section>
      <section className="carsList">
        <CarsList />
      </section>
    </main>
  );
}
