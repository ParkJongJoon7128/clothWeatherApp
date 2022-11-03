import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const LocationScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>LocationScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LocationScreen;
