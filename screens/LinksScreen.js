import Expo from 'expo';
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';

import {
  SearchBar,
} from 'react-native-elements'

import { Constants } from 'expo';

export default class LinksScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Add Music',
    },
  };

  render() {
    return (
      <View>
        <ScrollView>
          <SearchBar
            lightTheme
            placeholder='Type Here...' />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
