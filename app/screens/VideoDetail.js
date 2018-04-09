import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
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
            chevronColor='#000'
            avatarContainerStyle={{
              width: 250,
              height: 150
            }}
            avatarStyle={{
              height: 150,
              width: 250
            }}
            titleStyle={{
              fontSize: 22,
              textAlign: 'center'
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
        <ScrollView style={{ marginTop: -22 }}>
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
    fontSize: 30,
    color: '#000',
    paddingBottom: 15,
    paddingTop: 15,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default VideoDetail;
