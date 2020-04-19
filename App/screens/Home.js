import React, {Component} from 'react';
import {StatusBar} from 'react-native';
// import GetLocation from 'react-native-get-location';
// import {weatherAPI} from '../utils/weatherAPI';
import {Container} from '../components/Container';

class Home extends Component {
  // componentDidMount() {
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then((location) => {
  //       this.getCurrentWeather('/weather', {
  //         position: location,
  //       });
  //       this.getCurrentWeather('/forecast', {
  //         position: location,
  //       });
  //       this.getCurrentWeather('/weather', {
  //         name: 'Isfahan',
  //       });
  //       this.getCurrentWeather('/forecast', {
  //         name: 'Isfahan',
  //       });
  //     })
  //     .catch((error) => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });
  // }

  // getCurrentWeather = (path, {position, name}) => {
  //   weatherAPI(path, {position, name})
  //     .then((response) => console.log(response))
  //     .catch((error) => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });
  // };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
      </Container>
    );
  }
}

export default Home;
