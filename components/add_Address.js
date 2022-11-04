import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const add_Address = ({style}) => {
  return (
    <TextInput
      style={style}
      //inlineImageLeft="search_icon"
      numberOfLines={1}
      placeholderTextColor="gray"
      textAlign="left"
    />
  );
};

export default add_Address;
