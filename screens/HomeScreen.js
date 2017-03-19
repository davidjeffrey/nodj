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
  Tile,
} from 'react-native-elements'

import { Constants } from 'expo';

export default class LinksScreen extends React.Component {

  static route = {
    navigationBar: {
      title: 'Vote',
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        {voteList.map((tile) => (
          <Tile
            key={tile.title}
            imageSrc={tile.image}
            imageContainerStyle={styles.image}
            title={tile.title}
            icon={{name: 'play-circle', type: 'font-awesome'}}  // optional
            contentContainerStyle={{height: 70}}
            height={250}
            width={320}
          />
        ))}
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
  image: {
    height: 180,
    width: 320
  }
});

let voteList = [
  {title: "Biggist",
  image: require('../assets/images/biggie1.jpg')},
  {title: "Med",
  image: require('../assets/images/biggie2.jpg')},
  {title: "Last",
  image: require('../assets/images/biggie3.jpg')},

]
