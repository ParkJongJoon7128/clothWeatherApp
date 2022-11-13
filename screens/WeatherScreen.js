import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {LocationContext} from '../context/LocationContext';

const WeatherScreen = props => {
  const data = useContext(LocationContext);

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
