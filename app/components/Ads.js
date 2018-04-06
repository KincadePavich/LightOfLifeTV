import React, { Component } from 'react';
import { Dimensions, Linking, TouchableHighlight } from 'react-native';
import Image from 'react-native-scalable-image';
import axios from 'axios';

class Ads extends Component {
  state = { ads: [], adURLs: [], adLinks: [] };
  componentWillMount() {
     axios.get(global.ads)
     .then(response => this.setState({ ads: response.data }));
   }
  getAds() {
    Object.values(this.state.ads).map(ad => (
      this.state.adURLs.push(Object.values(ad)[16]),
      this.state.adLinks.push(Object.values(ad)[17])
    ));
  }
  render() {
    this.getAds();
    const index = Math.floor(Math.random() * this.state.adURLs.length);
    return (
      <TouchableHighlight style={{ bottom: 43 }} onPress={() => Linking.openURL(this.state.adLinks[index])}>
        <Image
          width={Dimensions.get('window').width}

          source={{ uri: this.state.adURLs[index] }}
        />
      </TouchableHighlight>
    );
  }
}

export default Ads;
