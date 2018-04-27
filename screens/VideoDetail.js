import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, WebView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

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
                height: 150,
                maxWidth: '30%'
              }}
              avatarStyle={{
                height: 150,
                width: 250,
                maxWidth: '100%'
              }}
              titleStyle={{
                fontSize: 16,
                textAlign: 'center'
              }}
            />
          </TouchableOpacity>
        );
      }
      return result;
    } else {
      return (
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.titleStyle}>embed_ID[0][2]</Text>
          <View style={{ flex: 1, height: 300 }}>
            <WebView
              key={embed_ID[0][0]}
              style={styles.WebViewContainer}
              javaScriptEnabled
              domStorageEnabled
              source={{ uri: 'https://www.youtube.com/embed/' + embed_ID[1] }}
            />
          </View>
        </ScrollView>
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
