import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import StartScreen from './src/screens/StartScreen';
import UsersScreen from './src/screens/UsersScreen';

const navigator = createStackNavigator({
  Start: StartScreen,
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
  Users: UsersScreen 
},{
  initialRouteName: 'Start',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

App = createAppContainer(navigator);

export default () => {
  return <Provider>
    <App/>
  </Provider>
}