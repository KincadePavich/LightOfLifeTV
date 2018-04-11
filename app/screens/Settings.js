import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import RadioForm from 'react-native-simple-radio-button';

const radioProps = [
  { label: 'English', value: 'English' },
  { label: 'Türk', value: 'Turkish' },
  { label: 'عربى', value: 'Arabic' },
  { label: 'اردو', value: 'Urdu' }
];

class Settings extends Component {
  state = { language: '' };
  setLanguage(value) {
    let object = {};
    if (value === 'English') {
      object = {
        disciples: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Turkish') {
      object = {
        disciples: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Arabic') {
      object = {
        disciples: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Urdu') {
      object = {
        disciples: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=8',
      };
    }
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }

  updateLanguage = async () => {
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: 'Tabs' })]
    }));
  }

  render() {
    return (
      <View style={styles.container}>
        <RadioForm
          radio_props={radioProps}
          initial={-1}
          onPress={(value) => this.setLanguage(value)}
        />
        <TouchableOpacity style={styles.button} onPress={this.updateLanguage}>
          <Text style={styles.buttonText}>CHANGE LANGUAGE</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30
  },
  button: {
    marginTop: 30,
    backgroundColor: '#00b4f0',
    borderWidth: 2,
    borderColor: '#222',
    width: 200,
  },
  buttonText: {
    padding: 15,
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
};

export default Settings;
