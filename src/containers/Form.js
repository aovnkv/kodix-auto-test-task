import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import CustomSelect from '../components/CustomSelect';
import ColorInput from '../components/ColorInput';

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
        year: +this.state.year
      })
    );
    this.setState({ ...this.initialState });
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    console.log(name);
    let value;

    switch (target.name) {
      case 'price':
        if (target.value) {
          value = Number(target.value.replace(/\D/g, '')).toLocaleString('ru');
        } else {
          value = '';
        }
        this.setState(state => {
          if (value.length <= 10) {
            return { [name]: value };
          } else {
            return state;
          }
        });

        break;

      case 'year':
        if (target.value) {
          value = Number(target.value.replace(/\D/g, ''));
        } else {
          value = '';
        }
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

  statusUpdate = item => {
    this.setState({ status: item });
  };

  render() {
    const colorInputs = [
      { color: 'white', id: 1 },
      { color: 'black', id: 2 },
      { color: 'gray', id: 3 },
      { color: 'red', id: 4 },
      { color: 'green', id: 5 }
    ].map(input => (
      <ColorInput
        handleChange={this.handleChange}
        color={input.color}
        key={input.id}
        checkedColor={this.state.color}
      />
    ));

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
              <div className="newCar-form--color">{colorInputs}</div>
            </fieldset>

            <div className="newCar-form--status">
              <CustomSelect
                items={[
                  { value: 'В наличии', id: 1 },
                  { value: 'Ожидается', id: 2 },
                  { value: 'Нет в наличии', id: 3 }
                ]}
                selectItem={this.statusUpdate}
                status={this.state.status}
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
