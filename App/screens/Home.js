import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar, ScrollView, SafeAreaView} from 'react-native';

import {Container} from '../components/Container';
import {WeatherIcon} from '../components/WeatherIcon';

import {getCurrentWeather} from '../utils/weatherAPI';

class Home extends Component {
  componentDidMount() {
    getCurrentWeather('/weather', {name: 'Isfahan'}, this.props.dispatch);
  }

  render() {
    const {weather} = this.props.currentWeather;
    const {isloadingWeahter} = this.props;
    if (isloadingWeahter) {
      return (
        <Container backgroundColor="#000083">
          <StatusBar barStyle="light-content" />
        </Container>
      );
    }

    return (
      <Container backgroundColor="#000083">
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <SafeAreaView>
            <WeatherIcon icon={weather[0].icon} />
          </SafeAreaView>
        </ScrollView>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  const {currentWeather, isloadingWeahter} = state.weather;
  const {currentForecast} = state.forecast;
  return {
    currentWeather,
    currentForecast,
    isloadingWeahter,
  };
};
export default connect(mapStateToProps)(Home);
