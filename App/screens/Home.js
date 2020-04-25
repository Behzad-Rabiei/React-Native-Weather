import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StatusBar, ScrollView, SafeAreaView} from 'react-native';

import {Container} from '../components/Container';
import {WeatherIcon} from '../components/WeatherIcon';
import {BasicRow} from '../components/List/List';
import {H1, H2} from '../components/Text/Text';

import {getCurrentWeather} from '../utils/weatherAPI';
import {toCelsius} from '../utils/convert';

class Home extends Component {
  componentDidMount() {
    getCurrentWeather('/weather', {name: 'Milan'}, this.props.dispatch);
    getCurrentWeather('/forecast', {name: 'Milan'}, this.props.dispatch);
  }

  render() {
    const {weather, main} = this.props.currentWeather;
    const {isloadingWeahter} = this.props;
    if (isloadingWeahter) {
      return (
        <Container backgroundColor="#3145b7">
          <StatusBar barStyle="light-content" />
        </Container>
      );
    }

    return (
      <Container backgroundColor="#3145b7">
        <ScrollView>
          <SafeAreaView>
            <StatusBar barStyle="light-content" />
            <WeatherIcon icon={weather[0].icon} />
            <BasicRow>
              <H1>{`${Math.round(toCelsius(main.temp))}°`}</H1>
            </BasicRow>
            <BasicRow>
              <H2>{`humidity: ${Math.round(main.humidity)}%`}</H2>
            </BasicRow>
            <BasicRow>
              <H2>{`Low: ${Math.round(toCelsius(main.temp_min))}°`}</H2>
              <H2>{`High: ${Math.round(toCelsius(main.temp_max))}°`}</H2>
            </BasicRow>
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
