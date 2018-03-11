import React from 'react'
import { Text, View } from 'react-native'
import { Font } from 'expo'
import { Button } from 'react-native-elements'
import Styles from './assets/Styles.js'
import ArticleList from './views/ArticleList.js'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
    loading: true,
    refreshing: false
  }

  async componentWillMount() {
    this.fetchArticlesAsync()
    await Font.loadAsync({
      'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
      'Ubuntu-Light': require('./assets/fonts/Ubuntu-Light.ttf')
    })
    
    this.setState({loading: false, fontLoaded: true})
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
    return this.state.fontLoaded &&
      <View style={Styles.newsContainer}>
        <Text style={Styles.header}>
          Newsli
        </Text>
        <ArticleList 
          articleList={this.state.articleList} 
          onRefresh={this.onRefresh} 
          refreshing={this.state.refreshing}
        />
      </View>
  }
}
