import React, {createContext} from 'react';

export const LocationContext = createContext({
  locationObj: {},
  setLocationObj: () => {},
});
