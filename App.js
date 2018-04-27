import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, Image } from 'react-native';
import { EnglishRoot } from './config/EnglishRouter';
import { ArabicRoot } from './config/ArabicRouter';
import { TurkishRoot } from './config/TurkishRouter';
import { UrduRoot } from './config/UrduRouter';

console.disableYellowBox = true;

class App extends Component {
  state = { languageChosen: false, language: '' };
  componentWillMount() {
    this.retrieveItem('language').then((language) => {
      if (language !== null) {
        this.setState({ languageChosen: true, language: language.name });
        console.log(language);
        console.log('set to true, shouldnt have');
      }
    }).catch((error) => {
      console.log('Unable to retrieve data: ' + error);
    });
  }
  setLanguage(value) {
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
    this.setState({ languageChosen: true, language: object.name });
  }
  unsetLanguage() {
    this.setState({ languageChosen: false });
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
  render() {
    //AsyncStorage.removeItem('language');
    return (
      <View style={{ flex: 1 }}>
        { this.state.languageChosen &&
          <View style={{ flex: 1 }}>
            { this.state.language === 'English' &&
              <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                  <TouchableOpacity onPress={() => this.unsetLanguage()}>
                    <Image
                      style={styles.settings}
                      source={require('./images/SettingsCog.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyle}>Light of Life TV</Text>
                </View>
                <EnglishRoot />
              </View>
            }
            { this.state.language === 'Turkish' &&
              <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                  <TouchableOpacity onPress={() => this.unsetLanguage()}>
                    <Image
                      style={styles.settings}
                      source={require('./images/SettingsCog.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyle}>{"Yaşam TV'nin Işığı"}</Text>
                </View>
                <TurkishRoot />
              </View>
            }
            { this.state.language === 'Arabic' &&
              <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                  <TouchableOpacity onPress={() => this.unsetLanguage()}>
                    <Image
                      style={styles.settings}
                      source={require('./images/SettingsCog.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyle}>تلفزيون ضوء الحياة</Text>
                </View>
                <ArabicRoot />
              </View>
            }
            { this.state.language === 'Urdu' &&
              <View style={{ flex: 1 }}>
                <View style={styles.headerStyle}>
                  <TouchableOpacity onPress={() => this.unsetLanguage()}>
                    <Image
                      style={styles.settings}
                      source={require('./images/SettingsCog.png')}
                    />
                  </TouchableOpacity>
                  <Text style={styles.titleStyle}>لائف ٹی وی کی روشنی</Text>
                </View>
                <UrduRoot />
              </View>
            }
          </View>
        }
        { !this.state.languageChosen &&
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.setLanguage('English')}>
              <Text style={styles.languageChoice}>English</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setLanguage('Turkish')}>
              <Text style={styles.languageChoice}>Türk</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setLanguage('Arabic')}>
              <Text style={styles.languageChoice}>عربى</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setLanguage('Urdu')}>
              <Text style={styles.languageChoice}>اردو</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    alignSelf: 'center',
    fontSize: 26,
    color: '#fff',
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: -35
  },
  headerStyle: {
    backgroundColor: '#00b4f0',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  settings: {
    postition: 'absolute',
    marginTop: 5,
    marginLeft: 5,
    width: 25,
    height: 25,
    zIndex: 9999999
  },
  languageChoice: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 16
  }
};

export default App;
