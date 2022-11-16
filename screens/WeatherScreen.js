import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {LocationContext} from './LocationScreen';

const WeatherScreen = () => {
  const {locationObj, setLocationObj} = useContext(LocationContext);

  return (
    <View style={styles.wrapper}>
      <Text>X : {locationObj.address.locationX}</Text>
      <Text>Y : {locationObj.address.locationY}</Text>
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
