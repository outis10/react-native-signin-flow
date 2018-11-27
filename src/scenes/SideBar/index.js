import React, { Component } from 'react'
import { Image, StatusBar,  View,  SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { Content, Button, Text } from  'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    createDrawerNavigator,
    DrawerItems,
  } from "react-navigation";
import PropTypes from 'prop-types';

  
import News from "../News";



const ProfileImage = 'https://antiqueruby.aliansoftware.net//Images/profile/profile_image.jpg';

  const DrawerNavigator = createDrawerNavigator({
    News:  News,
    
    
    }
    
  );

/*  
  customDrawerComponent.propTypes = {
  navigation: PropTypes.object.isRequired,
};
SideBar.navigationOptions = {
  title: 'Log In',
  header: null
};*/

/*
const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogout: () => logout(),
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerNavigator)
*/
export default DrawerNavigator;

