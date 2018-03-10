import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View, Footer } from 'react-native'
import { Font } from 'expo'
import { Button } from 'react-native-elements'
import Styles from './AppStyles.js'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    buttonPressed: false,
    showButton: true,
    refreshing: false
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

  onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchArticlesAsync().then(() => {
      this.setState({refreshing: false});
    });
  }

  render() {
    return (
      <View style={Styles.container}>
        {
          this.state.fontLoaded &&
          <View style={this.state.buttonPressed ? Styles.newsContainer:Styles.container}>
            <Text style={Styles.header}>Newsli</Text>
            {this.state.showButton && 
            <Button buttonStyle={Styles.button} onPress={this.onPress} clear text='Feed Me' />}
            <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
              />
            }>
              {this.state.buttonPressed &&
              <View>
                {this.state.articleList ?
                <View style={Styles.articleContainer}>
                {this.state.articleList.map((article, i) => {
                  return <View style={Styles.articleContainer} key={i}>
                    <Text style={Styles.text}>{article.webTitle}</Text>
                    </View>
                })}
                </View> : <Text style={Styles.loading}>Loading</Text>}
              </View>}
            </ScrollView>
          </View>
        }
      </View>
    )
  }
}
