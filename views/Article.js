import React from 'react'
import CardViewWithImage from './CardViewWithImage.js'
import { Linking, Text, View } from 'react-native'
import Styles from '../assets/Styles.js'

const Article = (props) => {
    return <CardViewWithImage
        onPress={function (){
            try {
                Linking.openURL(props.article.webUrl)
            }
            catch (e) {
                conssole.log(e.message)
            }
        }}
        titleFontFamily={'sans-serif-thin'}
        titleFontSize={18}
        titlePadding={{top:10,bottom:10,left:10,right:10}}
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