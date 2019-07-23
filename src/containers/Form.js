import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import CustomSelect from '../components/CustomSelect';
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
    this.props.dispatch(
      actions.addCar({
        ...data,
        year: +this.state.year,
        price: +this.state.price
      })
    );
    this.setState({ ...this.initialState });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    let value;

    switch (target.name) {
      case 'price':
        this.state[name]
          ? (value = Number(target.value.replace(/\D/g, '')).toLocaleString(
              'ru'
            ))
          : (value = target.value);

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
        //const validYear = '/^(19|20)d{2}$/';
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

  selectItem = item => {
    this.setState({ status: item.value });
  };

  render() {
    return (
      <section className="newCar">
        <form onSubmit={this.handleSubmit} className="newCar-form" noValidate>
          <div className="newCar-form-row1">
            <div className="newCar-form--title">
              <input
                name="title"
                type="text"
                id="title"
                value={this.state.title}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="_title">Название</label>
            </div>
            <div className="newCar-form--price">
              <input
                name="price"
                type="text"
                id="price"
                value={this.state.price}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="price">Цена</label>
            </div>
            <div className="newCar-form--year">
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

          <div className="newCar-form-row2">
            <div className="newCar-form--compl">
              <input
                name="description"
                type="text"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
              <label htmlFor="description">Описание</label>
            </div>
          </div>

          <div className="newCar-form-row3">
            <fieldset>
              <legend>Цвет</legend>
              <div className="newCar-form--color">
                <input
                  type="radio"
                  id="white"
                  name="color"
                  value="white"
                  onChange={this.handleChange}
                  checked={this.state.color === 'white'}
                />
                <label className="newCar-form--color-white" htmlFor="white">
                  Белый
                </label>

                <input
                  type="radio"
                  id="black"
                  name="color"
                  value="black"
                  onChange={this.handleChange}
                  checked={this.state.color === 'black'}
                />
                <label className="newCar-form--color-black" htmlFor="black">
                  Черный
                </label>

                <input
                  type="radio"
                  id="gray"
                  name="color"
                  value="gray"
                  onChange={this.handleChange}
                  checked={this.state.color === 'gray'}
                />
                <label className="newCar-form--color-gray" htmlFor="gray">
                  Серый
                </label>

                <input
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  onChange={this.handleChange}
                  checked={this.state.color === 'red'}
                />
                <label className="newCar-form--color-red" htmlFor="red">
                  Красный
                </label>

                <input
                  type="radio"
                  id="green"
                  name="color"
                  value="green"
                  onChange={this.handleChange}
                  checked={this.state.color === 'green'}
                />
                <label className="newCar-form--color-green" htmlFor="green">
                  Зеленый
                </label>
              </div>
            </fieldset>

            <div className="newCar-form--status">
              <CustomSelect
                items={[
                  { value: 'В наличии', id: 1 },
                  { value: 'Ожидается', id: 2 },
                  { value: 'Нет в наличии', id: 3 }
                ]}
                selectItem={this.selectItem}
              />
            </div>

            <button
              onClick={this.handleSubmit}
              className="newCar-form--submit"
              type="submit"
              name="newCar-form--submit"
              value="Отправить"
            >
              <span className="newCar-form--submit-text">Отправить</span>
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default connect()(Form);
