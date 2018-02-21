import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'orange'}}></View>
        <View style={{ flex: 2, backgroundColor: 'purple'}}></View>
        <View style={{ flex: 1, backgroundColor: 'yellow'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    backgroundColor: 'blue',
  },
});
