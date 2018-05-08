import { TabNavigator, StackNavigator } from 'react-navigation';
import DisciplesFeed from '../screens/DisciplesFeed';
import ChildrenFeed from '../screens/ChildrenFeed';
import MoviesFeed from '../screens/MoviesFeed';
import ProgramsFeed from '../screens/ProgramsFeed';
import VideoDetail from '../screens/VideoDetail';
import VideoPlayer from '../screens/VideoPlayer';

export const DisciplesStack = StackNavigator({
  Disciples: {
    screen: DisciplesFeed,
    navigationOptions: {
      header: null
    },
  },
  DisciplesDetails: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'واپس چالیس ٹی وی پر',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'ایڈیشن پر واپس',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  }
});
export const MoviesStack = StackNavigator({
  Movies: {
    screen: MoviesFeed,
    navigationOptions: {
      header: null
    },
  },
  MoviesDetails: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'واپس فلمیں',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'ایڈیشن پر واپس',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  }
});
export const ProgramsStack = StackNavigator({
  Programs: {
    screen: ProgramsFeed,
    navigationOptions: {
      header: null
    },
  },
  ProgramsDetails: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'واپس ٹی وی پروگراموں میں',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'ایڈیشن پر واپس',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  }
});
export const ChildrenStack = StackNavigator({
  Children: {
    screen: ChildrenFeed,
    navigationOptions: {
      header: null
    },
  },
  ChildrenDetails: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'واپس بچوں کو',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'ایڈیشن پر واپس',
      headerStyle: {
        backgroundColor: '#111',
        marginTop: -20,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerTintColor: '#21c2f8',
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  }
});

export const Tabs = TabNavigator({
  Disciples: {
    screen: DisciplesStack,
    navigationOptions: {
      tabBarLabel: 'شاگردیت ٹی وی',
    },
  },
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'فلمیں',
    },
  },
  Programs: {
    screen: ProgramsStack,
    navigationOptions: {
      tabBarLabel: 'ٹی وی پروگرام',
    },
  },
  Children: {
    screen: ChildrenStack,
    navigationOptions: {
      tabBarLabel: 'بچوں',
    },
  },
}, {
  ...TabNavigator.Presets.AndroidTopTabs,
  navigationOptions: {
    swipeEnabled: true
  },
  tabBarPosition: 'top',
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
      width: 150,
      height: 75,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    labelStyle: {
      fontSize: 16,
      textAlign: 'center',
    },
    indicatorStyle: {
      backgroundColor: '#21c2f8',
    },
    activeTintColor: '#fff',
    inactiveTintColor: '#21c2f8',
    style: {
      backgroundColor: '#333',
    },
  }
});

export const UrduRoot = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
