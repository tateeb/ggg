import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const AboutEng = () => {
  return (
    <View>
      <Text>
        Never give up. Today is cruel, Tomorrow is crueler. And the day after
        tomorrow is beautiful
      </Text>
    </View>
  );
};

export default AboutEng;

const styles = StyleSheet.create({
  TextCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
