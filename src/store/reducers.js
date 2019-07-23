import {
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
  DELETE_CAR,
  ADD_CAR
} from './actions';

const initialState = {
  cars: [],
  isFetching: false,
  error: undefined,
  lastID: undefined
};

function reduce(state = initialState, action) {
  const { cars, lastID } = state;
  switch (action.type) {
    case GET_CARS_REQUEST:
      return { ...state, isFetching: true };
    case GET_CARS_FAILURE:
      return { ...state, error: action.errorObj };
    case GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload,
        isFetching: false,
        lastID: action.lastID
      };
    case DELETE_CAR:
      return { ...state, cars: cars.filter(car => car.id !== action.id) };
    case ADD_CAR:
      return {
        ...state,
        cars: [
          ...cars,
          {
            ...action.newCar,
            id: lastID !== undefined ? lastID + 1 : 0
          }
        ],
        lastID: lastID + 1
      };
    default:
      return state;
  }
}

// selectors

export function getCars(state) {
  const { cars } = state;
  return { cars };
}

export default reduce;
