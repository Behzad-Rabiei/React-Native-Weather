import {SET_WEATHER} from '../actions/actionType';

const initialState = {
  weather: {},
  isloading: true,
};
const weather = (state = initialState, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {
        ...state,
        weather: action.value,
        isloading: false,
      };
    }
    default:
      return state;
  }
};
export default weather;
