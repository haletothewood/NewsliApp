import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from './AppStyles.js'

export default class Article extends React.Component {

    render(){
        return <View style={Styles.articleContainer} key={this.props.id}>
            <Text style={Styles.text}>{this.props.article.webTitle}</Text>
        </View>
    }
}