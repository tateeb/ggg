import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const DetailScreen = ({route}) => {
  const {data} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={data.pic} />
      </View>

      <View style={styles.container2}>
        <Text>ชื่อเกาหลี : {data.title}</Text>
        <Text>ชื่อ : {data.name}</Text>
        <Text>วันเดือนปีเกิด : {data.bd} </Text>
        <Text>ต้นสังกัด:{data.agency}</Text>
        <Text>ผลงาน :{data.detail}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'stretch',
    marginBottom: 5,
    width: '98%',
    height: 450,
  },
  viewImage: {
    borderWidth: 1,
    width: '100%',
  },
});
