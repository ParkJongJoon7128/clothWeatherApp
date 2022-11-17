import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import axios from 'axios';

import {LocationContext} from '../context/LocationContext';

const API_KEY = 'd55c3e37b019afcec832b364a32cbf81';

const WeatherScreen = () => {
  const {locationObj} = useContext(LocationContext);

  const [weather, setWeather] = useState({
    temp: 0,
    condition: '',
  });

  useEffect(() => {
    getWeatherApi();
  }, []);

  const getWeatherApi = async () => {
    try {
      const response = `https://api.openweathermap.org/data/2.5/weather?lat=${locationObj.locationX}&lon=${locationObj.locationY}&appid=${API_KEY}`;
      await axios.get(response).then(responseData => {
        const data = responseData.data;
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.locationTitle}>{locationObj.dong}</Text>
      </View>
      <View style={styles.locationWrapper}>
        <Text>X : {locationObj.locationX}</Text>
        <Text>Y : {locationObj.locationY}</Text>
      </View>

      <View style={styles.temperature}>
        <Text>{weather.temp}</Text>
        <Text>{weather.condition}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  locationTitle: {
    fontSize: 48,
  },
  locationWrapper: {
    margin: 50,
  },
  temperature: {
    margin: 50,
  },
});

export default WeatherScreen;
