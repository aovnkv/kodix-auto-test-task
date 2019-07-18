import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  render() {
    return (
      <form className="newCar--form">
        <div className="newCar--form-row1">
          <div className="newCar--form-title">
            <input name="title" type="text" id="_title" />
            <label htmlFor="_title">Название</label>
          </div>
          <div className="newCar--form-price">
            <input name="price" type="number" id="_price" />
            <label htmlFor="_price">Цена</label>
          </div>
          <div className="newCar--form-year">
            <input name="year" type="number" id="_year" />
            <label htmlFor="_year">Год</label>
          </div>
        </div>

        <div className="newCar--form-row2">
          <div className="newCar--form-compl">
            <input name="title" type="text" id="_compl" />
            <label htmlFor="_compl">Описание</label>
          </div>
        </div>

        <div className="newCar--form-row3">
          <fieldset>
            <legend>Цвет</legend>
            <div className="newCar--form-colors">
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
            </div>
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
        </div>
      </form>
    );
  }
}

export default Form;
