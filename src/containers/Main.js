import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as carsActions from '../store/actions';
import * as carsSelectors from '../store/reducers';
import './Main.scss';
import Form from './Form';
import CarsList from './CarsList';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(carsActions.fetchCars());
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  render() {
    if (this.props.isFetching) return this.renderLoading();
    return (
      <main className="main">
        <h1 className="main--title">¡Ay caramba!</h1>
        <Form />
        <CarsList cars={this.props.cars} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  const { cars, isFetching } = state;
  return {
    cars,
    isFetching
    //cars: carsSelectors.getCars(state)
  };
}

export default connect(mapStateToProps)(Main);
