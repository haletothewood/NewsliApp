import React from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import Styles from './Styles.js'
import Article from './Article.js'

const ArticleList = (props) => {
    return <ScrollView
    refreshControl={
        <RefreshControl
        refreshing={props.refreshing}
        onRefresh={props.onRefresh}
        />
    }
    >
    {props.articleList ?
        props.articleList.map((article, i) => {
            return <Article article={article} key={i} id={i} />
        }) : 
        <Text style={Styles.loading}>Loading</Text>}
    </ScrollView>
}

export default ArticleList
