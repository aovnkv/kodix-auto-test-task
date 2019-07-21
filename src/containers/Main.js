import React, { Component } from 'react';
import './Main.scss';
import Form from './Form';
import CarsList from './CarsList';

export default class Main extends Component {
  state = { cars: [] };

  componentDidMount() {
    const url =
      'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';

    const status_translates = {
      pednding: 'Ожидается',
      out_of_stock: 'Нет в наличии',
      in_stock: 'В наличии'
    };

    fetch(url)
      .then(data => data.json())
      .then(json => {
        json.forEach(obj =>
          obj.status in status_translates
            ? (obj.status = status_translates[obj.status])
            : obj.status
        );
        this.setState({ cars: json });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <main className="main">
        <h1 className="main--title">¡Ay caramba!</h1>
        <Form />
        <CarsList cars={this.state.cars} />
      </main>
    );
  }
}
