import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeText = props => {
  const {text,detail} = props;
  return (
    <View style={styles.body}>
      <Text> {text} </Text>
      <Text> {detail} </Text>
    </View>
  )
}

export default HomeText

const styles = StyleSheet.create({
body:{
    borderWidth:1,
    borderBlockColor:'#EC2809',
    borderRadius:10,
    width:150,
    height:250,
    margin:10,
    padding:5,
    backgroundColor:'#EBEEEF',

},


})