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
        currentForecast: action.value,
        isloadingForecast: false,
      };
    }
    default:
      return state;
  }
};
export default forecast;
