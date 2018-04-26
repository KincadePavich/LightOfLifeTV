import { Component } from 'react';
import { AsyncStorage } from 'react-native';

class Language extends Component {
  static setLanguage(value, language) {
    let object = {};
    if (value === 'English') {
      object = {
        name: 'English',
        disciples: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Turkish') {
      object = {
        name: 'Turkish',
        disciples: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/tr/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Arabic') {
      object = {
        name: 'Arabic',
        disciples: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/ar/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Urdu') {
      object = {
        name: 'Urdu',
        disciples: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=5',
        movies: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=6',
        programs: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=7',
        children: 'http://54.93.50.241/ur/wp-json/wp/v2/posts?categories=8',
      };
    }
    AsyncStorage.setItem('language', JSON.stringify(object));
    this.props.updateParentState({ languageChosen: true, language: object.name });
  }
}

export default Language;
