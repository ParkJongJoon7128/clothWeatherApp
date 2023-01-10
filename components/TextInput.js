import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const TextInputs = ({style, setText, value}) => {
  const ChangeText = e => {
    setText(e);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding', android: undefined})}
    >
      <TextInput
        style={style}
        // inlineImageLeft="search_icon"
        numberOfLines={1}
        placeholderTextColor="gray"
        textAlign="left"
        onChangeText={ChangeText}
        value={value}
      />
    </KeyboardAvoidingView>
  );
};

export default TextInputs;
