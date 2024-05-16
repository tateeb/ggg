import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeHead = () => {
  return <Text style={styles.Text1}>Hello KSU University</Text>;
};

export default HomeHead;

const styles = StyleSheet.create({
  Text1: {
    fontFamily: 'Cochin',
    fontSize: 50,
    color: '#FF4233',
  },
  Text2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
