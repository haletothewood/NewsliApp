import { StyleSheet } from 'react-native'

export default Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    newsContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    articleContainer: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginTop: 15
    },
    articleListCard: {
      
    },
    header: {
      fontFamily: 'Ubuntu', 
      fontSize: 90,
      color: '#fff'
    },
    text: {
      fontFamily: 'Ubuntu-Light',
      fontSize: 20,
      color: '#fff',
    },
    loading: {
      fontFamily: 'Ubuntu-Light',
      fontSize: 24,
      color: '#e51b4e'
    },
    button: {
      borderColor: '#fff', 
      borderWidth: 2
    }
  })