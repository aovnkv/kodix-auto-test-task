import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../store/actions';
import './Main.scss';
import Form from './Form';
import CarsList from './CarsList';

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCars());
  }

  renderLoading() {
    return <h1>Loading...</h1>;
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

Main.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      description: PropTypes.string,
      id: PropTypes.number.isRequired,
      price: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Object)
};

function mapStateToProps(state) {
  return { ...state };
}

export default connect(mapStateToProps)(Main);
