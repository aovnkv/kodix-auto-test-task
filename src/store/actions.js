import fetch from 'cross-fetch';
/*
 * action types
 */

export const CARS_FETCHED = 'CARS_FETCHED';
export const REQUEST_CARS = 'REQUEST_CARS';

/*
 * action creators
 */

export function fetchCars() {
  const url =
    'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
  const status_translates = {
    pednding: 'Ожидается',
    out_of_stock: 'Нет в наличии',
    in_stock: 'В наличии'
  };
  return dispatch => {
    dispatch({ type: REQUEST_CARS });

    return fetch(url)
      .then(res => res.json(), err => console.log('An error occurred.', err))
      .then(json => {
        const cars = json.map(car => {
          if (car.status in status_translates) {
            car.status = status_translates[car.status];
          }
          return car;
        });
        dispatch({ type: CARS_FETCHED, payload: cars });
      });
  };
}
