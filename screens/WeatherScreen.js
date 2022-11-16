import React, {useContext} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {LocationContext} from './LocationScreen';

const WeatherScreen = () => {
  const {locationObj, setLocationObj} = useContext(LocationContext);

  return (
    <View style={styles.wrapper}>
      <Text>
        {/* X : {props.test.getTestHandler().locationX} Y :{' '}
        {props.test.getTestHandler().locationY} */}
        X : {locationObj.adress.locationX}
      </Text>
      <Text>Y : {locationObj.adress.locationY}</Text>
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
