import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {Container} from '../components/Container';

class Search extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
      </Container>
    );
  }
}
export default Search;
