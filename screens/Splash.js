import React from 'react';
import Expo from 'expo';
import Router from '../navigation/Router';

import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Alert,
} from 'react-native';

import {
  SocialIcon
} from 'react-native-elements'

import { Constants, Facebook } from 'expo';

export default class HomeScreen extends React.Component {

  static route = {
    navigationBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <SocialIcon
          title='Sign In With Facebook'
          button
          style={styles.button}
          type='facebook'
          onPress={this._handleFacebookLogin}
        />
      </View>
    );
  }
  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '1867765643467427', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const profile = await response.json();
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    padding: 10
  }
});
