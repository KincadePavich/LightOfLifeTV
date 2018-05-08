import React, { Component } from 'react';
import { ScrollView, View, Text, WebView } from 'react-native';

class VideoPlayer extends Component {
  render() {
    const id = Object.values(this.props.navigation.state.params)[0];
    const title = Object.values(this.props.navigation.state.params)[2];
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
        <Text style={styles.titleStyle}>{title}</Text>
        <View style={{ flex: 1, height: 300 }}>
          <WebView
            key={id}
            style={styles.WebViewContainer}
            javaScriptEnabled
            domStorageEnabled
            source={{ uri: 'https://www.youtube.com/embed/' + id }}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 15,
    paddingTop: 15,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default VideoPlayer;
