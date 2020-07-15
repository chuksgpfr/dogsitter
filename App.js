import * as React from "react";
import { View, Text } from "react-native";
import { createSwitchNavigator } from "@react-navigation/compat";
import UserFlow from "./navigation/UserFlow";
import { NavigationContainer } from "@react-navigation/native";


const AppNavigator = createSwitchNavigator({
  "app": UserFlow,
},
// {
//   initialRouteName: "splash",
// }
);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
