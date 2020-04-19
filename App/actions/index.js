import {SET_FORECAST, SET_WEATHER} from './actionType';

export const setWeather = (object) => {
  return {
    type: SET_WEATHER,
    value: object,
  };
};

export const setForecast = (object) => {
  return {
    type: SET_FORECAST,
    value: object,
  };
};
