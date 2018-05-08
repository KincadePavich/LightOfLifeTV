import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import YouTube from 'react-native-youtube';

class VideoPlayer extends Component {
  render() {
    const id = Object.values(this.props.navigation.state.params)[0];
    const title = Object.values(this.props.navigation.state.params)[2];
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
        <Text style={styles.titleStyle}>{title}</Text>
        <YouTube
          apiKey="AIzaSyCov2wJ_Q1SoXTlOBusbB0-KgRw4BKKcr4"
          videoId={id}   // The YouTube video ID
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />
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
