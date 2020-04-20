import {SET_FORECAST} from '../actions/actionType';

const initialState = {
  currentForecast: {},
  isloadingForecast: true,
};
const forecast = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORECAST: {
      return {
        ...state,
        forecast: action.value,
        isloading: false,
      };
    }
    default:
      return state;
  }
};
export default forecast;
