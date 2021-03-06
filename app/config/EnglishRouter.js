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
      title: 'Back to Discipleship TV',
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
      title: 'Back to Episodes',
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
      title: 'Back to Movies',
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
      title: 'Back to Episodes',
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
      title: 'Back to TV Programs',
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
      title: 'Back to Episodes',
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
      title: 'Back to Childen',
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
      title: 'Back to Episodes',
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
      tabBarLabel: 'DISCIPLESHIP TV',
    },
  },
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'MOVIES',
    },
  },
  Programs: {
    screen: ProgramsStack,
    navigationOptions: {
      tabBarLabel: 'TV PROGRAMS',
    },
  },
  Children: {
    screen: ChildrenStack,
    navigationOptions: {
      tabBarLabel: 'CHILDREN',
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

export const EnglishRoot = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
