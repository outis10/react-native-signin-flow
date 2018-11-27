import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
  SafeAreaView,
  DrawerItems
} from "react-navigation";
import { Root } from "native-base";
import SignIn from "./scenes/auth/SignIn";
import SignUp from "./scenes/auth/SignUp";

import DrawerNavigator from "./scenes/SideBar";

const StackNavigator = createStackNavigator(
  {
    Main: { screen: DrawerNavigator }
  },
  {
    headerMode: "none"
  }
);

const AuthNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
  },
  {
    headerMode: "none"
  }
);

const RootNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  Stack: StackNavigator
});

export default () => (
  <Root>
    <RootNavigator />
  </Root>
);
