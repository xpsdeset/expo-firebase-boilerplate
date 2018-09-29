import React from 'react'
import _ from 'lodash'
import { StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { StyleProvider, Root } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { Provider } from 'react-redux'
import store from './store'
import { images } from '@components'
import CheckAuth from './screens/CheckAuth'
import getTheme from './native-base-theme/components'

/* eslint-disable */
// Supress Setting a timer console warnings
const _console = _.clone(console)
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message)
  }
}
// Supress warnings from app screens 
console.disableYellowBox = true

/* eslint-enable */

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingComplete: false
    }
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          <Provider store={store}>
            <StyleProvider style={getTheme()}>
              <Root>
                <CheckAuth />
              </Root>
            </StyleProvider>
          </Provider>
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync(Object.values(images)),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error) // eslint-disable-line 
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})
