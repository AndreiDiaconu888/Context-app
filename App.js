import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
},{
  initialRouteName: 'Index',
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