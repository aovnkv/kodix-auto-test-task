import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';

import './Form.scss';

class Form extends Component {
  initialState = {
    title: '',
    price: '',
    year: '',
    description: '',
    color: '',
    status: ''
  };

  state = { ...this.initialState };

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    this.props.dispatch(actions.addCar(data));
    this.setState({ ...this.initialState });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    let value;

    switch (target.name) {
      case 'price':
        value = Number(target.value.replace(/\D/g, ''));
        value = value.toLocaleString('ru');
        this.setState(state => {
          if (value.length <= 10) {
            return { [name]: value };
          } else {
            return state;
          }
        });
        break;

      case 'year':
        value = Number(target.value.replace(/\D/g, ''));
        const validYear = '/^(19|20)d{2}$/';
        this.setState(state => {
          if (target.value.length <= 4) {
            return { [name]: value };
          } else {
            return state;
          }
        });
        break;

      default:
        value = target.value;
        this.setState({
          [name]: value
        });
    }
  };

  render() {
    return (
      <section className="newCar">
        <form onSubmit={this.handleSubmit} className="newCar--form" noValidate>
          <div className="newCar--form--row1">
            <div className="newCar--form-title">
              <input
                name="title"
                type="text"
                id="_title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="_title">Название</label>
            </div>
            <div className="newCar--form-price">
              <input
                name="price"
                type="text"
                id="_price"
                value={this.state.price}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="_price">Цена</label>
            </div>
            <div className="newCar--form-year">
              <input
                name="year"
                type="number"
                id="_year"
                value={this.state.year}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="_year">Год</label>
            </div>
          </div>

          <div className="newCar--form--row2">
            <div className="newCar--form-compl">
              <input
                name="description"
                type="text"
                id="_compl"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="_compl">Описание</label>
            </div>
          </div>

          <div className="newCar--form--row3">
            <fieldset>
              <legend>Цвет</legend>
              <div className="newCar--form--color">
                {/* TODO: red border intersects app container to the left when white's :checked */}
                <input
                  type="radio"
                  id="_white"
                  name="color"
                  value="white"
                  onChange={this.handleChange}
                />
                <label className="newCar--form--color-white" htmlFor="_white">
                  Белый
                </label>

                <input
                  type="radio"
                  id="_black"
                  name="color"
                  value="black"
                  onChange={this.handleChange}
                />
                <label className="newCar--form--color-black" htmlFor="_black">
                  Черный
                </label>

                <input
                  type="radio"
                  id="_gray"
                  name="color"
                  value="gray"
                  onChange={this.handleChange}
                />
                <label className="newCar--form--color-gray" htmlFor="_gray">
                  Серый
                </label>

                <input
                  type="radio"
                  id="_red"
                  name="color"
                  value="red"
                  onChange={this.handleChange}
                />
                <label className="newCar--form--color-red" htmlFor="_red">
                  Красный
                </label>

                <input
                  type="radio"
                  id="_green"
                  name="color"
                  value="green"
                  onChange={this.handleChange}
                />
                <label className="newCar--form--color-green" htmlFor="_green">
                  Зеленый
                </label>
              </div>
            </fieldset>

            {/* TODO: customise select */}
            <div className="newCar--form-status">
              <select
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                id="_status"
                required
              >
                <option value="">Статус</option>
                <option value="В наличии">В наличии</option>
                <option value="Ожидается">Ожидается</option>
                <option value="Нет в наличии">Нет в наличии</option>
              </select>
              <label htmlFor="_status">Статус</label>
            </div>

            <button
              onClick={this.handleSubmit}
              className="newCar--form-submit"
              type="submit"
              name="newCar--form-submit"
              value="Отправить"
            >
              <span className="newCar--form-submit-text">Отправить</span>
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default connect()(Form);
