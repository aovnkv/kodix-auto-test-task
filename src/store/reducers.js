import { CARS_FETCHED, REQUEST_CARS } from './actions';

const initialState = { cars: [], isFetching: false };

function reduce(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CARS:
      return { ...state, isFetching: true };
    case CARS_FETCHED:
      return { ...state, cars: action.payload, isFetching: false };
    default:
      return state;
  }
}

// selectors
// export function getCars(state) {
//   return state.cars;
// }

export default reduce;
