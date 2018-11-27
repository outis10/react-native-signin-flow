import React from "react";
import { View,  Image } from "react-native";
import Images from "../theme/images";
import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const deviceWidth = width;
const deviceHeigth = height;
const LogoTop = () => {
    return (
        <View style={styles.logoSec}>
            <Image source={Images.logo_1} />
        </View>
    );
};

export default LogoTop;


const styles = StyleSheet.create({
    logoSec : {
        width: deviceWidth,
        height: (deviceHeigth * 0.14),
        justifyContent: "center",
        alignItems: "center",

    },
  });

