import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import Styles from './AppStyles.js'
import Article from './Article.js'

export default class ArticleList extends React.Component {

    render(){
        return this.props.articleList ?
        this.props.articleList.map((article, i) => {
            return <Article article={article} key={i} id={i} />
        }): <Text style={Styles.loading}>Loading</Text>
    }
}
