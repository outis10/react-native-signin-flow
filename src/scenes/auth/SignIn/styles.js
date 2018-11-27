import { StyleSheet } from "react-native";
import  myStyle  from "../../../theme/variables/commonColor";

const styles = StyleSheet.create({
    container: {
       
        backgroundColor: myStyle.backgroundColor
    },
    contentStyle: {
        marginTop: (myStyle.deviceHeight * 0.04),
    },

    row: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        fontSize: 20,
        marginBottom: 15,
        alignItems: "center",
    },
    mt: {
        marginTop: 18,
    },
    headertext: {
        /*fontFamily: Fonts.type.sfuiDisplayLight,*/
        backgroundColor:"transparent",
        textAlign:"center",
        alignSelf:"center",
        /*fontSize:Fonts.moderateScale(21),*/
        width :(myStyle.deviceWidth) * .86,
        color:"#363636",
    },

    desctext: {
        /*fontFamily: Fonts.type.sfuiDisplayRegular,*/
        backgroundColor:"transparent",
        textAlign:"center",
        alignSelf:"center",
        /*fontSize:Fonts.moderateScale(11),*/
        width :(myStyle.deviceWidth) * .70,
        color:"#6f6f6f",
        marginTop:(myStyle.deviceHeight * 0.025)
    },
    sectionSlide: {
      /*  backgroundColor: "white",*/
       /* height: (myStyle.deviceHeight*0.40)*/
    },
    dot:{
        backgroundColor:"#d4d4d4",
        width:  (myStyle.deviceWidth * 0.02),
        height: (myStyle.deviceWidth * 0.02),
        borderRadius: (myStyle.deviceWidth * 0.01),
        marginLeft: (myStyle.deviceWidth * 0.005),
        marginRight: (myStyle.deviceWidth * 0.005),
        marginBottom: (myStyle.deviceWidth * 0.008),
    },

    activeDot:{
        backgroundColor:"#6f6f6f",
        width:  (myStyle.deviceWidth * 0.02),
        height: (myStyle.deviceWidth * 0.02),
        borderRadius: (myStyle.deviceWidth * 0.01),
        marginLeft: (myStyle.deviceWidth * 0.005),
        marginRight: (myStyle.deviceWidth * 0.005),
        marginBottom: (myStyle.deviceWidth * 0.008),
    },
    sliderImage: {
        resizeMode: "contain",
        
        backgroundColor: "grey",
    },
    slide: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: myStyle.deviceWidth,
        backgroundColor: "transparent"
    },
    welcomeSection: {
        marginTop:(myStyle.deviceHeight*.03),
        height:(myStyle.deviceHeight*0.14),
        width: myStyle.deviceWidth,
        

    },
    welcomeTitle: {
        textAlign:"center",
        color:myStyle.titleFontColor,
        fontSize: (myStyle.titleFontSize+6),
        fontFamily:myStyle.titleFontfamily,

    },
    welcomeSubTitle: {
        marginTop:10,
        textAlign:"center",
        color:myStyle.subtitleColor,
        fontSize: (myStyle.subTitleFontSize+4),
        fontFamily:myStyle.titleFontfamily,

    },
    inputSection: {
        marginLeft:(myStyle.deviceWidth*.04),
        marginTop:(myStyle.deviceHeight*0.02),
        height:(myStyle.deviceHeight*0.1),
        width: myStyle.deviceWidth*.80,
    
    },
    nextButtonSection: {
        paddingRight: myStyle.deviceWidth* 0.1,
        alignSelf: 'flex-end',
    },
    
    
    socialSection: {
        flexDirection:"row",
        marginTop:(myStyle.deviceHeight*0.08),
        height:(myStyle.deviceHeight*0.05),
        width: (myStyle.deviceWidth*.60),
        marginLeft:(myStyle.deviceWidth*.25)
        
        

    },
    modal: {
       
        backgroundColor: myStyle.backgroundColor,
        height:myStyle.deviceHeight,
        width:myStyle.deviceWidth,
        
       },
       titleSection: {
        marginTop:(myStyle.deviceHeight*.03),
        height:(myStyle.deviceHeight*0.10),
        width: myStyle.deviceWidth,
        

    },
    sectionVerificacion:{
        
        height:(myStyle.deviceHeight*0.3),
        width: myStyle.deviceWidth,
        paddingVertical: 40,
        paddingHorizontal: 20,
       
    },
    phoneInput: {
        color: "#fff",
        height: 45,
        width: myStyle.deviceWidth * 0.70,
        marginBottom: 15,
        marginLeft: 15,
        borderColor: myStyle.segmentTextColor,
        borderWidth: 1,
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            
      },
      phoneText: {
        marginTop: 8,
        fontSize: myStyle.DefaultFontSize - 1,
        fontFamily: myStyle.fontFamily,
        color: myStyle.textColor,
      },
      item : {
        flexDirection: "row",
      },
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
    
});

export const IMAGE_HEIGHT =  (myStyle.deviceHeight * 0.25);
export const SLIDE_HEIGHT =  (myStyle.deviceHeight*0.32)
export const IMAGE_HEIGHT_SMALL = 0;
export const SLIDE_HEIGHT_SMALL =  0;


export default styles;
