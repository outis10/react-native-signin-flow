// @flow
import React, { Component } from "react";
import { TouchableOpacity, Animated, Platform, Keyboard, Alert, Image, Modal, Easing } from "react-native";
import { View, Text, Button, Icon } from "native-base";
import { TextInputMask } from "react-native-masked-text";
import Swiper from "react-native-swiper";
//import  Modal from "react-native-modal";
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL, SLIDE_HEIGHT, SLIDE_HEIGHT_SMALL } from "./styles";

import { LogoTop,  ButtonCircle } from "../../../components";
import myStyles from "../../../theme/variables/commonColor";
import Images from "../../../theme/images";
import CodeInput from "react-native-confirmation-code-input";


class SignIn extends Component {
     static navigationOptions = {
       title: "SignIn",
        header: null,
    };

    constructor(props) {
        super(props);
        this.inputPhone = React.createRef();
        this.state = {
        showNextButton: false,
        modalVerificationVisible: false,
        phoneNumber:"",
        isAuthenticating: false,
        };
        this.animatedValue3 = new Animated.Value(0)
        this.animatedOpacity = new Animated.Value(0)

        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
        this.slideHeight = new Animated.Value(SLIDE_HEIGHT);
        console.log(`constructor:${IMAGE_HEIGHT_SMALL}`);
    }


    componentWillMount() {
        if (Platform.OS === "ios") {
            this.keyboardWillShowSub = Keyboard.addListener("keyboardWillShow", this.keyboardWillShow);
            this.keyboardWillHideSub = Keyboard.addListener("keyboardWillHide", this.keyboardWillHide);
        } else {
            this.keyboardWillShowSub = Keyboard.addListener("keyboardDidShow", this.keyboardDidShow);
            this.keyboardWillHideSub = Keyboard.addListener("keyboardDidHide", this.keyboardDidHide);
        }
    }

    componentWillUnmount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }
    _resendVerificationCode(){
        Alert.alert(
            "Confirmation Code",
            "Successful!",
            [{text: "OK"}],
            { cancelable: false }
          );

    }
    _signIn() {
        Alert.alert(
            "Sign In",
            "Successful!",
            [{text: "OK"}],
            { cancelable: false }
          );
          this.props.navigation.navigate('Stack');
    }
    _onFulfill(code) {
        // TODO: call API to check code here
        // If code does not match, clear input with: this.refs.codeInputRef1.clear()
        if (code === "12345") {
          Alert.alert(
            "Confirmation Code",
            "Successful!",
            [{text: "OK"}],
            { cancelable: false }
          );
          this.props.navigation.navigate('Stack');
        } else {
          Alert.alert(
            "Confirmation Code",
            "Code not match!",
            [{text: "OK"}],
            { cancelable: false }
          );
          this.refs.codeInputRef1.clear();
        }
      }
      onChangeText = (value) => {
        console.log("phoneNumber: ",value);
        let phone = value.toString().replace(/\D+/g, "");
        console.log("unformated: ",phone);
      }
      _onPress = () => {
          console.debug("Show Phone number Modal");
      }

    onShowAnimated = (event) => {
        this.setState({showNextButton: true});
        console.log("onShowAnimated:", event.duration);
        Animated.parallel([
            Animated.timing(this.animatedOpacity, {
                duration: 1000,
                toValue: 1,
                easing: Easing.ease,
                delay: 100
            }),
            Animated.timing(this.imageHeight, {
                duration: 0,
                toValue: IMAGE_HEIGHT_SMALL,
            }),
            Animated.timing(this.slideHeight, {
                duration: 0,
                toValue: SLIDE_HEIGHT_SMALL,
            }),
            Animated.timing(this.animatedValue3, {
                duration: 1000,
                toValue: 1,
                easing: Easing.ease,
                delay: 100
            }),
    ]).start();
  }

  onHideAnimated = (event) => {
    this.setState({showNextButton: false});
    console.log("onHideAnimated", event);
    Animated.parallel([
        Animated.timing(this.animatedOpacity, {
            duration: 1000,
            toValue: 0,
            easing: Easing.ease,
            delay: 100
        }),
        Animated.timing(this.imageHeight, {
            duration: 0,
            toValue: IMAGE_HEIGHT,
        }),
        Animated.timing(this.slideHeight, {
            duration: 0,
            toValue: SLIDE_HEIGHT,
        }),
        Animated.timing(this.animatedValue3, {
            duration: 0,
            toValue: 0,
            easing: Easing.ease,
            delay: 100
        }),
    ]).start();
  }

  keyboardWillShow = (event) => {
    console.log("keyboardWillShow");
    this.onShowAnimated(event);
  };

  keyboardWillHide = (event) => {
    console.log("keyboardWillHide");
    this.onHideAnimated(event);
  };


  keyboardDidShow = (event) => {
    console.log("keyboardDidShow");
    this.onShowAnimated(event);
  };

  keyboardDidHide = (event) => {
    console.log("keyboardDidHide");
    this.onHideAnimated(event);
  };

  _showPhoneModal = () => {
    this.setState({
        modalPhoneVisible: !this.state.modalVisible,
    });
    console.log(this);
    console.log(this.inputPhone);
  }
  _showVerificationModal = () => {
    this.setState({
        modalVerificationVisible: true,
    });
  }


  render() {
    const introButton = this.animatedValue3.interpolate({
        inputRange: [0, 1],
        outputRange: [-100, 200]
      });
      const opacity = this.animatedOpacity.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1, 0]
      })  
     const data = [
        {
            id: 1,
            image: Images.swipe1,
            title: "Discover new place you will love",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            image: Images.swipe1,
            title: "What will you do once?",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            image: Images.swipe1,
            title: "Discover new place you will love",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 4,
            image: Images.swipe1,
            title: "What will you do twice",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    
    return (
        <View style={{backgroundColor: myStyles.backgroundColor }}>
            <LogoTop />
            <View
                style={{backgroundColor: myStyles.backgroundColor}}
                resetScrollToCoords={{ x: 0, y: 0}}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
               {!this.state.showNextButton && <Animated.View style={[styles.sectionSlide, { height: this.slideHeight}]}>
                    <Swiper showsButtons={false}
                        autoplay
                        autoplayTimeout={2.5}
                        activeDot={<View style={styles.activeDot} />}
                        dot={<View style={styles.dot} />}
                    >
                    {
                        data.map((item, index) => (
                        <Animated.View style={[styles.slide, {height:this.imageHeight}]} key={index}>
                            <Image source={item.image} style={styles.sliderImage}/>
                        </Animated.View>
                        ))
                    }
                    </Swiper>
                </Animated.View>
                }
                {!this.state.showNextButton && <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
                    <Text style={styles.welcomeSubTitle}> ¡Listo para enviar, llevar o recibir un paquete... Ahorra y Gana Dinero Extra!   </Text>
                    
                </View>
                }
                {this.state.showNextButton && <View style={styles.welcomeSection}>
                    
                </View>
                }
                <View style={styles.inputSection}>
                
                    <View style={styles.item}>
                        <Image source={Images.flag_mx} />
                        <TextInputMask
                                        style={styles.input}
                                        refInput={this.inputPhone}
                                        type={'cel-phone'}
                                        placeholderTextColor="#fff"
                                        placeholder={"Ingresa tu número de teléfono celular"}
                                        options={{dddMask: "(999) 999 - "}}
                                        onChangeText={(phone) => this.onChangeText(phone)}
                                        
                                    />
                    </View>
                   
                </View>
                {this.state.showNextButton && <Animated.View style={[styles.nextButtonSection, { opacity: this.animatedOpacity, top:introButton, position: 'absolute'}]}>
                    <Button onPress={()=>this._showVerificationModal()}
                    rounded bordered light>
                    <Icon name='arrow-forward' />
                    </Button>
                </Animated.View>    
                }
                {!this.state.showNextButton &&<View style={styles.socialSection}>
                    <Text style={styles.welcomeSubTitle}> Conéctate con: </Text>
                    <ButtonCircle name="facebook" />
                    <ButtonCircle name="google" onPress={() => this._showPhoneModal()} />
                </View>
                }
                <Modal visible={ this.state.modalVerificationVisible}
                    onRequestClose= {() => {
                        console.log(this.state);
                        this.setState({ modalVerificationVisible: false });
                    }

                    }
                    animationType="slide"
                >
              
                {  this.state.modalVerificationVisible &&  <View style={styles.modal}>
                        <LogoTop />
                        <View style={styles.titleSection}>
                            <Text style={styles.welcomeTitle}>Código de Verificación</Text>
                        </View>
                        <View style={styles.sectionVerificacion}>
                            <CodeInput
                                ref="codeInputRef1"
                                className={"border-circle"}
                                keyboardType="numeric"
                                autoFocus={true}
                                codeLength={5}
                                cellBorderWidth={2}
                                codeInputStyle={{ fontWeight: "800" }}
                                onFulfill={(code) => this._onFulfill(code)} 

                            />
                        <TouchableOpacity onPress={()=> this._resendVerificationCode()}>
                            <Text style={styles.welcomeSubTitle}>Reenviar código</Text>    
                        </TouchableOpacity>
                        </View>
                    </View>

                }    
                </Modal>
                
                
                <View style={{ height: 60 }} />
            </View>

        </View>
    );
  }
}



export default SignIn;
