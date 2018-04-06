import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Root } from './config/router';

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.titleStyle}>Light of Life TV</Text>
        <Root />
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#fff',
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: '#21c2f8',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default App;
