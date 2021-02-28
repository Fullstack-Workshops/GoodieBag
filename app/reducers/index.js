import axios from 'axios';

const initialState = {
  candies: []
}

const GET_CANDIES = 'GET_CANDIES';
export const getCandies = candies => ({type: GET_CANDIES, candies});

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

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return {...state, candies: action.candies}
    default:
      return state
  }
}

export default rootReducer
