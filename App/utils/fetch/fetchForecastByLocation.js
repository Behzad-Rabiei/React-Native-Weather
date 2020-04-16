import GetLocation from 'react-native-get-location';

const appID = 'ef2a0bcde3c82af19d4413af11d4ab4e';
const fetchForecast = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${appID}&units=imperial`,
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      const {code, message} = error;
      console.warn(code, message);
    });
};

export const fetchForecastByLocation = () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then((location) => {
      fetchForecast(location);
    })
    .catch((error) => {
      const {code, message} = error;
      console.warn(code, message);
    });
};
