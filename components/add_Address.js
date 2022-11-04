import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const add_Address = ({style}) => {
  return (
    <TextInput
      style={style}
      placeholder="도로명을 제외한 행정구역까지만 입력해주세요!"
      //inlineImageLeft="search_icon"
      numberOfLines={1}
      placeholderTextColor="gray"
      textAlign="left"
    />
  );
};

export default add_Address;
