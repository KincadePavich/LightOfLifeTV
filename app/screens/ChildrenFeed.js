import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, AsyncStorage } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Spinner } from '../components/Spinner';

class ChildrenFeed extends Component {
  state = { items: [], loaded: false };
  componentWillMount() {
    this.retrieveItem('schoolObj').then((school) => {
      axios.get(school.children)
      .then(response => this.setState({ items: response.data, loaded: true }));
    }).catch((error) => {
      console.log('Unable to retrieve data: ' + error);
    });
  }
  onPressVideo = (video) => {
    this.props.navigation.navigate('ChildrenDetails', { ...video });
  }
  async retrieveItem(key) {
    try {
      const schoolItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(schoolItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return;
  }
  renderList() {
    const videos = [];
    for (let i = 0; i < this.state.items.length; i++) {
      videos.push(
        <TouchableOpacity onPress={() => this.onPressVideo(this.state.items[i])}>
          <ListItem
            key={this.state.items[i].id}
            avatar={{ uri: this.state.items[i].cds_source }}
            title={this.state.items[i].title.rendered}
            //onPress={() => this.onPressVideo(this.state.items[i])}
            chevronColor='#000'
            avatarStyle={{
              height: 60,
              width: 60
            }}
          />
        </TouchableOpacity>
      );
    }
    return videos;
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        { !this.state.loaded &&
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Spinner size="large" />
          </View>
        }
        { this.state.loaded &&
          <ScrollView style={{ marginBottom: 40, marginTop: -22 }}>
            <List>
              {this.renderList()}
            </List>
          </ScrollView>
        }
      </View>
    );
  }
}

export default ChildrenFeed;
