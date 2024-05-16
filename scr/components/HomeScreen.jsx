import {StyleSheet, Text, View, ScrollView,FlatList,TouchableOpacity} from 'react-native';
import React from 'react';
import HomeText from './HomeText';
import HomeImage from './HomeImage';
import {data} from '../model/data';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>

        <FlatList horizontal data={data} renderItem={({item})=>
      <View style={styles.content}>
        <TouchableOpacity> 
        <HomeImage img={item.pic} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Detail',{data : item})}> 
        <HomeText text={item.title} />
        </TouchableOpacity>

      </View>}
      keyExtractor={item=>item.id}
      />
                   
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0BC0EC',
  },
  body:{
    flexDirection:'row',
  }
});
