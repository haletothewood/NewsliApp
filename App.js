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
    this.fetchArticlesAsync()
    this.setState({
      buttonPressed: true, 
      showButton: false
    })
  }

  async fetchArticlesAsync() {
    await fetch('http://content.guardianapis.com/search?show-fields=all&api-key=d8d8c012-6484-4bb4-82d7-2770a7c5d029')
    .then(response => response.json())
    .then(responseJSON => {
      return this.setState({
        articleList: responseJSON.response.results
      })
    })
    .catch((error) => {
      console.log(error)
    })
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
              {this.state.articleList ?
              <View style={styles.newsContainer}>
              {this.state.articleList.map((article) => {
                return <Text style={styles.text}>{article.webTitle}</Text>
              })}
              </View> : <Text style={styles.loading}>Loading</Text>}
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
  loading: {
    fontFamily: 'Ubuntu-Light',
    fontSize: 24,
    color: '#FF69B4'
  },
  button: {
    borderColor: '#fff', 
    borderWidth: 2
  }
})
