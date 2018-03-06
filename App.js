import React from 'react'
import { StyleSheet, Text, View, Footer } from 'react-native'
import { Font } from 'expo'
import { Button } from 'react-native-elements'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    buttonPressed: false,
    showButton: true
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
      'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf')
    })
    
    this.setState({fontLoaded: true})
  }

  onPress = (e) => {
    e.preventDefault()
    this.setState({buttonPressed: true, showButton: false})
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded &&
        <View style={this.state.buttonPressed ? styles.newsContainer : styles.container}>
          <Text style={styles.header}>Newsli</Text>
          {this.state.showButton && 
          <Button buttonStyle={styles.button} onPress={this.onPress} clear text='Feed Me' />}
          <View>
          {this.state.buttonPressed &&
            <View>
              {articles.map((article, i) => {
              return <Text key={i}>
                {article}
              </Text>
              }
            )}
            </View>}
          </View>
        </View>
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 15
  },
  header: {
    fontFamily: 'Ubuntu', 
    fontSize: 90,
    color: '#fff'
  },
  text: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 16,
    color: '#fff'
  },
  button: {
    borderColor: '#fff', 
    borderWidth: 2
  }
})

const articles = [
  <Text style={styles.text}>This is where the articles will go</Text>,
  <Text style={styles.text}>But only when I've done the API</Text>
]