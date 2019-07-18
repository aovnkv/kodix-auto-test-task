import React, { Component } from 'react';
import Header from './Header';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <h1>¡Ay caramba!</h1>
        <section className="newCar">
          <form className="newCar-form">
            <label htmlFor="newCar-title">Название</label>
            <input
              name="title"
              type="text"
              className="newCar-title"
              id="newCar-title"
              placeholder="Название"
            />
            <label htmlFor="newCar-price">Цена</label>
            <input
              name="price"
              type="number"
              className="newCar-price"
              id="newCar-price"
              placeholder="Цена"
            />
            <label htmlFor="newCar-year">Год</label>
            <input
              name="year"
              type="number"
              className="newCar-year"
              id="newCar-year"
              placeholder="Год"
            />
            <fieldset className="newCar-color">
              <legend>Цвет</legend>

              <input type="radio" id="newCar-color--white" name="white" />
              <label htmlFor="newCar-color--white">Белый</label>

              <input type="radio" id="newCar-color--black" name="black" />
              <label htmlFor="newCar-color--black">Черный</label>

              <input type="radio" id="newCar-color--gray" name="gray" />
              <label htmlFor="newCar-color--gray">Серый</label>

              <input type="radio" id="newCar-color--red" name="red" />
              <label htmlFor="newCar-color--red">Красный</label>

              <input type="radio" id="newCar-color--green" name="green" />
              <label htmlFor="newCar-color--green">Зеленый</label>
            </fieldset>

            <label htmlFor="newCar-status">Статус</label>
            <select id="newCar-status">
              <option value="">Статус</option>
              <option value="dog">В наличии</option>
              <option value="cat">Ожидается</option>
              <option value="hamster">Нет в наличии</option>
            </select>

            <label htmlFor="newCar-submit">Отправить</label>
            <input type="submit" value="Отправить" />
          </form>
        </section>
        <section className="carsList" />
      </main>
      <footer>
        <div className="copyright">
          <p>@2015 CAPTAIN QUACK</p>
          <p>Десница тысячелетия и моллюск!</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
