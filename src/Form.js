import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  render() {
    return (
      <form className="newCar--form">
        <div className="newCar--form--row1">
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

        <div className="newCar--form--row2">
          <div className="newCar--form-compl">
            <input name="title" type="text" id="_compl" />
            <label htmlFor="_compl">Описание</label>
          </div>
        </div>

        <div className="newCar--form--row3">
          <fieldset>
            <legend>Цвет</legend>
            <div className="newCar--form--color">
              {/* TODO: red border intersects app container to the left when white's :checked */}
              {/* TODO: checked state is not toggling */}
              <input type="radio" id="_white" name="white" value="white" />
              <label className="newCar--form--color-white" htmlFor="_white">
                Белый
              </label>

              <input type="radio" id="_black" name="black" value="black" />
              <label className="newCar--form--color-black" htmlFor="_black">
                Черный
              </label>

              <input type="radio" id="_gray" name="gray" value="gray" />
              <label className="newCar--form--color-gray" htmlFor="_gray">
                Серый
              </label>

              <input type="radio" id="_red" name="red" value="red" />
              <label className="newCar--form--color-red" htmlFor="_red">
                Красный
              </label>

              <input type="radio" id="_green" name="green" value="green" />
              <label className="newCar--form--color-green" htmlFor="_green">
                Зеленый
              </label>
            </div>
          </fieldset>
          {/* TODO: customise select */}
          <div className="newCar--form-status">
            <select id="_status">
              <option value="">Статус</option>
              <option value="dog">В наличии</option>
              <option value="cat">Ожидается</option>
              <option value="hamster">Нет в наличии</option>
            </select>
            <label htmlFor="_status">Статус</label>
          </div>

          <button
            className="newCar--form-submit"
            type="submit"
            name="newCar--form-submit"
            value="submit"
          >
            <span className="newCar--form-submit-text">Отправить</span>
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
