import React, {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import axios from 'axios';

import {LocationContext} from '../context/LocationContext';

const WeatherScreen = () => {
  const {locationObj} = useContext(LocationContext);

  const [weather, setWeather] = useState({
    temp: 0,
    condition: '',
  });

  useEffect(() => {
    setInterval(() => getWeatherApi(), 10000);
  }, [weather]);

  const getWeatherApi = async () => {
    const API_KEY = '2cd518b6f461fdf5a043511d0292ab5c';
    const response = `https://api.openweathermap.org/data/2.5/weather?lat=${locationObj.locationY}&lon=${locationObj.locationX}&appid=${API_KEY}&units=metric`;
    try {
      await axios.get(response).then(res => {
        const data = res.data;
        setWeather({
          temp: data.main.temp,
          condition: data.weather[0].main,
          description: data.weather[0].description,
        });
      });
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.locationTitle}>{locationObj.dong}</Text>
      </View>
      <View style={styles.locationWrapper}>
        <Text>X : {locationObj.locationY}</Text>
        <Text>Y : {locationObj.locationX}</Text>
      </View>

      <View style={styles.temperature}>
        <Text>{parseFloat(weather.temp).toFixed(1)}</Text>
        <Text>{weather.condition}</Text>
        <Text>{weather.description}</Text>
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
