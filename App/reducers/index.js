import {combineReducers} from 'redux';
import weather from './weather';
import forecast from './forecast';

export default combineReducers({
  weather,
  forecast,
});
