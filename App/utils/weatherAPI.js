import {setWeather, setForecast} from '../actions/index';

const appID = 'ef2a0bcde3c82af19d4413af11d4ab4e';

export const weatherAPI = (path, {position, name}) => {
  let suffix = '';
  if (position) {
    suffix = `lat=${position.latitude}&lon=${position.longitude}`;
  } else if (name) {
    suffix = `q=${name}`;
  }
  return fetch(
    `https://api.openweathermap.org/data/2.5${path}?appid=${appID}&units=imperial&${suffix}`,
  ).then((response) => response.json());
};

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
