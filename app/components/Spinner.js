import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Loading...</Text>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff'
  }
};

export { Spinner };
