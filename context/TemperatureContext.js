import React, {createContext} from 'react';

export const TemperatureContext = createContext({
  temp: {},
  setTemp: () => {},
});
