const appID = 'ef2a0bcde3c82af19d4413af11d4ab4e';
export const fetchForecast = (name) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${appID}&units=imperial`,
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
