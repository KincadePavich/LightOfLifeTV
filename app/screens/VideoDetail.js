import React, { Component } from 'react';
import { ScrollView, View, WebView } from 'react-native';

class VideoDetail extends Component {
  renderVideos() {
    const { id, embed_ID } = this.props.navigation.state.params;
    const result = [];
    for (let i = 0; i < embed_ID.length; i++) {
      result.push(
        <View style={{ height: 300 }}>
          <WebView
            key={id}
            style={styles.WebViewContainer}
            javaScriptEnabled
            domStorageEnabled
            source={{ uri: 'https://www.youtube.com/embed/' + embed_ID[i] }}
          />
        </View>
      );
    }
    return result;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
          {this.renderVideos()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  WebViewContainer: {
    marginTop: 20,
  }
};

export default VideoDetail;
