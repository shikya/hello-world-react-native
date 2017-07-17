import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Header/Header';
import { AlbumList } from './src/Album/AlbumList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Header headerText={'Albums'}/>
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
