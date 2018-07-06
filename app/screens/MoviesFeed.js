import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, AsyncStorage, Text } from 'react-native';
import axios from 'axios';
import { List, ListItem } from 'react-native-elements';
import { Spinner } from '../components/Spinner';

class MoviesFeed extends Component {
  state = { items: [], currentLanguage: '', loaded: false };
  componentWillMount() {
    this.retrieveItem('language').then((language) => {
      axios.get(language.movies)
      .then(response => this.setState({ items: response.data, loaded: true, currentLanguage: language.name }));
    }).catch((error) => {
      console.log('Unable to retrieve data: ' + error);
    });
  }
  onPressVideo = (video) => {
    this.props.navigation.navigate('MoviesDetails', { ...video });
  }
  async retrieveItem(key) {
    try {
      const language = await AsyncStorage.getItem(key);
      const item = JSON.parse(language);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return;
  }
  noItems(language) {
    if (language === 'English') {
      return 'There are currently no videos available in this category in English.';
    } else if (language === 'Turkish') {
      return 'Bu kategoride Türkçe dilinde hiç video yok.';
    } else if (language === 'Arabic') {
      return 'لا توجد حاليا مقاطع فيديو في هذه الفئة باللغة العربية.';
    } else if (language === 'Urdu') {
      return 'فی الحال اردو میں اس زمرے میں کوئی ویڈیو موجود نہیں ہیں.';
    } else if (language === 'Farsi') {
      return 'در حال حاضر هیچ فیلم در این مجموعه در زبان فارسی وجود ندارد.';
    }
  }
  renderList() {
    const videos = [];
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].hide_on_app !== '1') {
        videos.push(
          <TouchableOpacity onPress={() => this.onPressVideo(this.state.items[i])}>
            <ListItem
              key={this.state.items[i].id}
              avatar={{ uri: this.state.items[i].cds_source }}
              title={this.state.items[i].title.rendered}
              chevronColor='#21c2f8'
              containerStyle={{
                backgroundColor: '#222'
              }}
              avatarContainerStyle={{
                width: 140,
                height: 70,
                maxWidth: '30%',
              }}
              avatarStyle={{
                height: '100%',
                width: '100%',
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
    }
    return videos;
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#222' }}>
        { !this.state.loaded &&
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#222' }}>
            <Spinner size="large" />
          </View>
        }
        { this.state.loaded && this.state.items.length > 0 &&
          <ScrollView style={{ marginTop: -22, backgroundColor: '#222' }}>
            <List>
              {this.renderList()}
            </List>
          </ScrollView>
        }
        { this.state.loaded && this.state.items.length === 0 &&
          <Text style={styles.noItems}>{this.noItems(this.state.currentLanguage)}</Text>
        }
      </View>
    );
  }
}

const styles = {
  noItems: {
    padding: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 18
  }
};

export default MoviesFeed;
