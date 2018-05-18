import React, { Component } from 'react';
import { View, Text, AsyncStorage, TouchableOpacity, ImageBackground, Image, StatusBar } from 'react-native';
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
        disciples: 'http://lightoflifetv.com/wp-json/wp/v2/posts?categories=5',
        movies: 'http://lightoflifetv.com/wp-json/wp/v2/posts?categories=6',
        programs: 'http://lightoflifetv.com/wp-json/wp/v2/posts?categories=7',
        children: 'http://lightoflifetv.com/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Turkish') {
      object = {
        name: 'Turkish',
        disciples: 'http://lightoflifetv.com/tr/wp-json/wp/v2/posts?categories=5',
        movies: 'http://lightoflifetv.com/tr/wp-json/wp/v2/posts?categories=6',
        programs: 'http://lightoflifetv.com/tr/wp-json/wp/v2/posts?categories=7',
        children: 'http://lightoflifetv.com/tr/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Arabic') {
      object = {
        name: 'Arabic',
        disciples: 'http://lightoflifetv.com/ar/wp-json/wp/v2/posts?categories=5',
        movies: 'http://lightoflifetv.com/ar/wp-json/wp/v2/posts?categories=6',
        programs: 'http://lightoflifetv.com/ar/wp-json/wp/v2/posts?categories=7',
        children: 'http://lightoflifetv.com/ar/wp-json/wp/v2/posts?categories=8',
      };
    } else if (value === 'Urdu') {
      object = {
        name: 'Urdu',
        disciples: 'http://lightoflifetv.com/ur/wp-json/wp/v2/posts?categories=5',
        movies: 'http://lightoflifetv.com/ur/wp-json/wp/v2/posts?categories=6',
        programs: 'http://lightoflifetv.com/ur/wp-json/wp/v2/posts?categories=7',
        children: 'http://lightoflifetv.com/ur/wp-json/wp/v2/posts?categories=8',
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
      <View style={{ flex: 1, backgroundColor: '#222' }}>
        <StatusBar
          barStyle="light-content"
        />
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
                    <Image
                      style={styles.logo}
                      source={require('./images/English.png')}
                    />
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
                    <Image
                      style={styles.logo}
                      source={require('./images/Turkish.png')}
                    />
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
                    <Image
                      style={styles.logo}
                      source={require('./images/Arabic.png')}
                    />
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
                    <Image
                      style={styles.logo}
                      source={require('./images/Urdu.png')}
                    />
                  </View>
                  <UrduRoot />
                </View>
              }
            </View>
          }
          { !this.state.languageChosen &&
            <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image
                  style={{ resizeMode: 'contain', alignSelf: 'center', height: '80%', top: '10%' }}
                  source={require('./images/LoL.png')}
                />
              </View>
              <View style={styles.languageContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setLanguage('English')}>
                  <ImageBackground
                    style={styles.backgroundImage}
                    source={require('./images/BG-English.jpg')}
                  >
                    <Text style={styles.languageChoice}>English</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.languageContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setLanguage('Turkish')}>
                  <ImageBackground
                    style={styles.backgroundImage}
                    source={require('./images/BG-Turkish.jpg')}
                  >
                    <Text style={styles.languageChoice}>Türk</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.languageContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setLanguage('Arabic')}>
                  <ImageBackground
                    style={styles.backgroundImage}
                    source={require('./images/BG-Arabic.jpg')}
                  >
                    <Text style={styles.languageChoice}>عربى</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
              <View style={styles.languageContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setLanguage('Urdu')}>
                  <ImageBackground
                    style={styles.backgroundImage}
                    source={require('./images/BG-Urdu.jpg')}
                  >
                    <Text style={styles.languageChoice}>اردو</Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          }
        </View>
      </View>
    );
  }
}

const styles = {
  logo: {
    postition: 'relative',
    width: '70%',
    left: '15%',
    top: -15,
    maxHeight: 65,
    resizeMode: 'contain'
  },
  headerStyle: {
    backgroundColor: '#111',
    width: '100%',
    postition: 'relative',
    maxHeight: 105,
  },
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    postition: 'absolute',
    marginRight: 5,
    marginTop: 5,
    width: 25,
    height: 25,
    zIndex: 9999999,
    alignSelf: 'flex-end'
  },
  languageChoice: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)'
  },
  languageContainer: {
    height: '19%',
    alignSelf: 'stretch',
  },
  logoContainer: {
    height: '24%',
    alignSelf: 'stretch'
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  }
};

export default App;
