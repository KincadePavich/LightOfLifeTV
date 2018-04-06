import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from '../components/Button';

class Settings extends Component {
  setEnglish() {
    const object = {
      disciples: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=5',
      movies: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=6',
      programs: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=7',
      children: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=8',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }
  setTurkish() {
    const object = {
      disciples: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=5',
      movies: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=6',
      programs: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=7',
      children: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=8',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }
  setUrdu() {
    const object = {
      disciples: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=5',
      movies: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=6',
      programs: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=7',
      children: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=8',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }
  setArabic() {
    const object = {
      disciples: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=5',
      movies: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=6',
      programs: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=7',
      children: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=8',
    };
    AsyncStorage.setItem('schoolObj', JSON.stringify(object));
  }


  showData = async () => {
    try {
      const user = await AsyncStorage.getItem('schoolObj');
      const parsed = JSON.parse(user);
      alert(parsed.name);
    } catch (error) {
      alert(error);
    }
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
        <Text style={styles.headingStyle}>CHOOSE YOUR LANGUAGE</Text>
        <TouchableOpacity onPress={this.setEnglish}>
          <Text style={styles.textStyle}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setTurkish}>
          <Text style={styles.textStyle}>Türk</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setUrdu}>
          <Text style={styles.textStyle}>اردو</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setArabic}>
          <Text style={styles.textStyle}>عربى</Text>
        </TouchableOpacity>
        <Button onPress={this.updateLanguage}>
          SUBMIT
        </Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    fontSize: 24,
    textDecorationLine: 'underline',
    paddingBottom: 10
  },
  textStyle: {
    fontSize: 20,
    padding: 10
  },
};

export default Settings;
