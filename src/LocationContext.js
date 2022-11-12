import React, {createContext} from 'react';

const selectContext = createContext({
  selectLocation: {
    location_X: 0,
    location_Y: 0,
  },
  setselectLocation: () => {},
});

export default selectContext;
