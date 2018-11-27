import React from "react";
import { TextInputMask } from "react-native-masked-text";
import myStyle from "../theme/variables/commonColor";
import { View, Image, StyleSheet } from "react-native";
import  Images  from "../theme/images";



export default ({ placeholder, type, onChangeText,  ...props }) => (
  <View style={styles.item}>
    <Image source={Images.flag_mx} />
    <TextInputMask

      ref={(ref) => (this.myInputPhone = ref)}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={(phone) => onChangeText(phone)}
      type={type}
      options={{dddMask: "(999) 999 - "}}
      
      {...props}
  />
  </View>

);

const styles = StyleSheet.create({
  input: {
    color: myStyle.textColor,
    fontSize: myStyle.DefaultFontSize - 1,
    fontFamily: myStyle.fontFamily,
    height: 45,
    width: myStyle.deviceWidth * 0.70,
    marginBottom: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: myStyle.segmentTextColor,
  },
  item : {
    flexDirection: "row",
  },
});
