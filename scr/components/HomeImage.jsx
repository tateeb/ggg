import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const HomeImage = (props) => {
    const {img}=props
  return (
    <View style={styles.body}>
      <Image style={styles.image} source={img}/> 
    </View>
  )
}
export default HomeImage
const styles = StyleSheet.create({
image:{
  width:150,
  height:250,
},
body:{
  width:150,
  height:250,
  margin:10,
  padding:5,
},

})