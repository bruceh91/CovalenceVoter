import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProjectDetailScreen from './screens/ProjectDetailScreen'; 

const RootNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProjectDetail: { screen: ProjectDetailScreen}
}, { 
  initialRouteName: 'Home'
});

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}
