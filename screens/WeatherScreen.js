import React from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

const WeatherScreen = props => {
  return (
    <View style={styles.wrapper}>
      <Text>
        X : {props.test.getTestHandler().locationX} Y :{' '}
        {props.test.getTestHandler().locationY}
      </Text>
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

export default WeatherScreen;
