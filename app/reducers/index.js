import axios from 'axios';
import { noExtendLeft } from 'sequelize/types/lib/operators';

const initialState = {
  candies: [],
  candy: {}
}

const GET_CANDIES = 'GET_CANDIES';
const GET_CANDY = 'GET_CANDY';

export const getCandies = candies => ({type: GET_CANDIES, candies});

export const getCandy = candy => ({type: GET_CANDY, candy});

export const fetchCandies = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/candies');
      dispatch(getCandies(data));
    } catch (error) {
      console.log('Unable to fetch candies');
      console.error(error);
    }
  }
}

export const fetchCandy = id => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/candies/${id}`);
      dispatch(getCandy(data));
    } catch (error) {
      console.log('Unable to fetch candy');
      console.error(error);
    }
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {...state, candies: action.candies}
    case GET_CANDY:
      return action.candy
    default:
      return state
  }
}

export default rootReducer
