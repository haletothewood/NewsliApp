import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View, Footer } from 'react-native'
import { Font } from 'expo'
import { Button } from 'react-native-elements'
import Styles from './AppStyles.js'
import ArticleList from './ArticleList.js'

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

  onRefresh = () => {
    this.setState({refreshing: true});
    this.fetchArticlesAsync().then(() => {
      this.setState({refreshing: false});
    });
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
      this.state.fontLoaded &&
      <View style={this.state.buttonPressed ? Styles.newsContainer : Styles.container}>
        <Text style={Styles.header}>Newsli</Text>
        {this.state.showButton && 
        <Button buttonStyle={Styles.button} onPress={this.onPress} clear text='Feed Me' />}
        {this.state.buttonPressed && 
        <ScrollView
          refreshControl={
              <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
              />}
        >
          <ArticleList articleList={this.state.articleList} fetchArticlesAsync={this.fetchArticlesAsync} />
        </ScrollView>}
      </View>
    )
  }
}
