import React from 'react'
import { CardViewWithImage } from 'react-native-simple-card-view'
import { Text, View } from 'react-native'
import Styles from './Styles.js'

const Article = (props) => {
    return <CardViewWithImage
        width={ 400 }
        source={ {uri: props.article.fields.thumbnail} }
        title={ props.article.webTitle }
        titleTextAlign={'left'}
        imageWidth={ 400 }
        imageHeight={ 200 }
        roundedImage={ false }
    />
}

export default Article