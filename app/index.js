import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Root } from './config/router';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', fontSize: 30, color: '#000', paddingBottom: 15, paddingTop: 15 }}>Light of Life TV</Text>
        <Root />
      </View>
    );
  }
}

export default App;
