import React from "react";
import {
    Input,
} from "native-base";





export default ({ placeholder, onChangeText, type, ...props }) => (
  <Input
    autoCapitalize="none"
    autoCorrect={false}
    placeholder={placeholder}
    onChangeText={value => onChangeText(type, value)}
    underlineColorAndroid="transparent"
    {...props}
  />
);

