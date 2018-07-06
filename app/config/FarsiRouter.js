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
      title: 'بازگشت به تلویزیون شاگردی',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به قسمت ها',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'برگشت به فیلم ها',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به قسمت ها',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به برنامه های تلویزیونی',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به قسمت ها',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به کودکان',
      headerStyle: {
        backgroundColor: '#111',
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
      title: 'بازگشت به قسمت ها',
      headerStyle: {
        backgroundColor: '#111',
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
      tabBarLabel: 'تلویزیون شاگردی',
    },
  },
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'فیلم ها',
    },
  },
  Programs: {
    screen: ProgramsStack,
    navigationOptions: {
      tabBarLabel: 'برنامه های تلویزیونی',
    },
  },
  Children: {
    screen: ChildrenStack,
    navigationOptions: {
      tabBarLabel: 'فرزندان',
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

export const FarsiRoot = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
