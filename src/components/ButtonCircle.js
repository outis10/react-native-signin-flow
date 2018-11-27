import React from "react";
import {
    TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet } from "react-native";



export default ({ name, onPress}) => (
  <TouchableOpacity style={styles.circleButton}
    onPress={onPress}
  >
    <Icon name={name} size={24} color="white"/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({

  circleButton: {
    width:48,
    height:48,
    marginLeft:10,
    borderRadius:24,
    borderWidth: 1,
    borderColor: "#fff",
    alignItems:"center",
    justifyContent:"center",

},
});
