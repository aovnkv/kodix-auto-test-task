import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import './Main.scss';
import Form from './Form';
import CarsList from './CarsList';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCars());
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  somethingWrong(err) {
    return <p>{err}</p>;
  }

  render() {
    const { cars, isFetching, error } = this.props;

    if (isFetching) return this.renderLoading();
    if (error) return this.somethingWrong(error);
    return (
      <main className="main">
        <h1 className="main--title">¡Ay caramba!</h1>
        <Form />
        <CarsList cars={cars} />
      </main>
    );
  }
}

function mapStateToProps(state) {
  //const { cars, isFetching, error } = state;
  return { ...state };
}

export default connect(mapStateToProps)(Main);
