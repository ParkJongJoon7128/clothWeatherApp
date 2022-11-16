import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {LocationContext} from '../context/LocationContext';

const WeatherScreen = () => {
  const {locationObj, setLocationObj} = useContext(LocationContext);

  return (
    <View style={styles.wrapper}>
      <Text>X : {locationObj.locationX}</Text>
      <Text>Y : {locationObj.locationY}</Text>
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
