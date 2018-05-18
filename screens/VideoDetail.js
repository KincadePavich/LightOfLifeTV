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
        <ScrollView style={{ flex: 1, backgroundColor: '#222' }}>
          <Text style={styles.titleStyle}>{embed_ID[0][2]}</Text>
          <View style={{ flex: 1, height: 300 }}>
            <WebView
              key={embed_ID[0][0]}
              javaScriptEnabled
              domStorageEnabled
              source={{ uri: 'https://www.youtube.com/embed/' + embed_ID[0][0] }}
            />
          </View>
        </ScrollView>
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
  titleStyle: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
};

export default VideoDetail;
