import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import myStyles from "../theme/variables/commonColor";



export default ({ title, onPress, isLoading }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={[styles.buttonText]}>{title}</Text>
      {
        isLoading && (
          <View style={styles.activityIndicator}>
            <ActivityIndicator color={myStyles.c} />
          </View>
        )
      }
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
   /* marginTop: 25,
    */
    
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: myStyles.deviceWidth * 0.84,
    height: myStyles.deviceHeight * 0.08,
  },
  buttonText: {
    alignSelf: "center",
    fontFamily: myStyles.btnFontFamily,
    color: myStyles.inverseTextColor,
    fontSize: myStyles.btnTextSize,
  },
  activityIndicator: {
    transform: [{scale: 0.70}],
    marginTop: 3.5,
    marginLeft: 5,
  }
})
