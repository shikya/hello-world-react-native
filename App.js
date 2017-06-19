import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Paper } from './src/Paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Paper />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
