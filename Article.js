import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Styles from './Styles.js'

const Article = (props) => {
    return <View style={Styles.articleContainer} key={props.id}>
        <Text style={Styles.text}>{props.article.webTitle}</Text>
    </View>
}

export default Article