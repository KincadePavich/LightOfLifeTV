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
      title: 'العودة إلى التلمذة التلفزيونية',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'عودة الى الحلقات',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
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
      title: 'العودة إلى أفلام',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'عودة الى الحلقات',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
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
      title: 'العودة إلى برامج التلفزيون',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'عودة الى الحلقات',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
    }
  }
});
export const ChildrenStack = StackNavigator({
  Disciples: {
    screen: ChildrenFeed,
    navigationOptions: {
      header: null
    },
  },
  ChildrenDetails: {
    screen: VideoDetail,
    navigationOptions: {
      title: 'العودة إلى الأطفال',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
      headerBackTitle: '',
      headerTruncatedBackTitle: '',
    }
  },
  VideoPlayer: {
    screen: VideoPlayer,
    navigationOptions: {
      title: 'عودة الى الحلقات',
      headerStyle: {
        borderBottomColor: '#000',
        borderBottomWidth: 2,
      },
    }
  }
});

export const Tabs = TabNavigator({
  Disciples: {
    screen: DisciplesStack,
    navigationOptions: {
      tabBarLabel: 'تلفزيون التلمذة',
    },
  },
  Movies: {
    screen: MoviesStack,
    navigationOptions: {
      tabBarLabel: 'أفلام',
    },
  },
  Programs: {
    screen: ProgramsStack,
    navigationOptions: {
      tabBarLabel: 'برامج التلفزيون',
    },
  },
  Children: {
    screen: ChildrenStack,
    navigationOptions: {
      tabBarLabel: 'الأطفال',
    },
  },
}, {
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
      backgroundColor: '#222',
    },
  }
});

export const ArabicRoot = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
