import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    })
    
    this.setState({fontLoaded: true})
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded &&
        <Text style={{fontFamily: 'Ubuntu', fontSize: 56}}>
          Hello World!
        </Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
