import React from 'react';
import './Main.scss';
import Form from './Form';

export default function Main() {
  return (
    <main className="main">
      <h1 className="main--title">¡Ay caramba!</h1>
      <section className="newCar">
        <Form />
      </section>
      <section className="carsList" />
    </main>
  );
}
