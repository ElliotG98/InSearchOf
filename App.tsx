/**
 * @format
 */

import {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';
import {AccountScreen, HomeScreen, NotificationsScreen} from './src/screens';

function App(): JSX.Element {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
    {
      key: 'home',
      title: 'Home',
      focusedIcon: 'home',
      unfocusedIcon: 'home-outline',
    },
    {
      key: 'account',
      title: 'Account',
      focusedIcon: 'account',
      unfocusedIcon: 'account-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    account: AccountScreen,
    notifications: NotificationsScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled={false}
    />
  );
}

export default App;
