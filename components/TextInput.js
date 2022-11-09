import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const TextInputs = ({style, setText, value}) => {
  const ChangeText = e => {
    setText(e);
  };

  return (
    <TextInput
      style={style}
      //inlineImageLeft="search_icon"
      numberOfLines={1}
      placeholderTextColor="gray"
      textAlign="left"
      onChangeText={ChangeText}
      value={value}
    />
  );
};

export default TextInputs;
