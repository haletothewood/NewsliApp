import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import Styles from './AppStyles.js'
import Article from './Article.js'

const ArticleList = (props) => {
    return props.articleList ?
        props.articleList.map((article, i) => {
            return <Article article={article} key={i} id={i} />
        }) : 
        <Text style={Styles.loading}>Loading</Text>
}

export default ArticleList
