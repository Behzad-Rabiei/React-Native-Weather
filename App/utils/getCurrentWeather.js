import {setWeather, setForecast} from '../actions/index';
import {weatherAPI} from './weatherAPI';

export const getCurrentWeather = (path, {position, name}, dispatch) => {
  weatherAPI(path, {position, name})
    .then((response) => {
      if (path === '/weather') {
        dispatch(setWeather(response));
      } else if (path === '/forecast') {
        dispatch(setForecast(response));
      }
    })
    .catch((error) => {
      const {code, message} = error;
      console.warn(code, message);
    });
};
