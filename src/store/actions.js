import fetch from 'cross-fetch';

/*
 * action types
 */

export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_REQUEST = 'GET_CARS_REQUEST';
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE';

export const DELETE_CAR = 'DELETE_CAR';
export const ADD_CAR = 'ADD_CAR';

/*
 * action creators
 */

const requestCars = () => ({ type: GET_CARS_REQUEST });
const throwError = err => ({ type: GET_CARS_FAILURE, errorObj: err });

export function deleteCar(id) {
  return dispatch => dispatch({ type: DELETE_CAR, id: id });
}

export function addCar(data) {
  return dispatch => dispatch({ type: ADD_CAR, newCar: data });
}

export function fetchCars() {
  const url =
    'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
  const status_translates = {
    pednding: 'Ожидается',
    out_of_stock: 'Нет в наличии',
    in_stock: 'В наличии'
  };
  return dispatch => {
    dispatch(requestCars());

    return fetch(url)
      .then(res => res.json())
      .then(json => {
        const cars = json.map(car => {
          if (car.status in status_translates) {
            car.status = status_translates[car.status];
          }
          return car;
        });
        dispatch({
          type: GET_CARS_SUCCESS,
          payload: cars,
          lastID: cars[cars.length - 1].id
        });
      })
      .catch(err => {
        console.dir('An error occurred.', err);
        dispatch(throwError(err));
      });
  };
}
