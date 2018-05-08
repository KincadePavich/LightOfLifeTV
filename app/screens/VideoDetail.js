import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import YouTube from 'react-native-youtube';

class VideoDetail extends Component {
  onPressVideo = (video) => {
    this.props.navigation.navigate('VideoPlayer', { ...video });
  }
  renderVideos() {
    const { id, embed_ID } = this.props.navigation.state.params;
    if (embed_ID.length > 1) {
      const result = [];
      for (let i = 0; i < embed_ID.length; i++) {
        result.push(
          <TouchableOpacity onPress={() => this.onPressVideo(embed_ID[i])}>
            <ListItem
              key={id}
              avatar={{ uri: embed_ID[i][1] }}
              title={embed_ID[i][2]}
              chevronColor='#21c2f8'
              containerStyle={{
                backgroundColor: '#222'
              }}
              avatarContainerStyle={{
                width: 140,
                height: 70,
                maxWidth: '30%'
              }}
              avatarStyle={{
                width: '100%',
                height: '100%'
              }}
              titleStyle={{
                fontSize: 16,
                textAlign: 'center',
                color: '#fff'
              }}
            />
          </TouchableOpacity>
        );
      }
      return result;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text style={styles.titleStyle}>embed_ID[0][2]</Text>
          <YouTube
            apiKey="AIzaSyCov2wJ_Q1SoXTlOBusbB0-KgRw4BKKcr4"
            videoId={embed_ID[0][0]}   // The YouTube video ID
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 300 }}
          />
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginTop: -22, backgroundColor: '#222' }}>
          <List>
            {this.renderVideos()}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  WebViewContainer: {
    marginTop: 20,
  },
  titleStyle: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#000',
    paddingBottom: 15,
    paddingTop: 15,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default VideoDetail;
