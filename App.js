import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// React Navigation
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Assets
import Money from "./assets/icons/money-alt.png";
import Chart from "./assets/icons/histogram.png";

// Screens
import CoinsList from "./screens/coins-list";

// Fonts
import { useFonts } from "expo-font";

// const Market = () => {
//   return <View>{/* <Image source={Money} style={{ height: 24, width: 24 }} /> */}</View>;
// };

const Trend = () => {
  return (
    <View>
      <Text>Trend</Text>
    </View>
  );
};

const bottomNavigation = createBottomTabNavigator({
  Market: {
    screen: CoinsList,
    navigationOptions: {
      tabBarIcon: props => {
        return <Image source={Money} style={{ height: 24, width: 24 }} />;
      },
    },
  },
  Trend: {
    screen: Trend,
    navigationOptions: {
      tabBarIcon: props => {
        return <Image source={Chart} style={{ height: 24, width: 24 }} />;
      },
    },
  },
});

const stackNavigator = createStackNavigator(
  {
    bottomNavigation: bottomNavigation,
  },
  { defaultNavigationOptions: { headerShown: null } },
);

const App = createAppContainer(stackNavigator);

export default () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins,Roboto_Mono/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins,Roboto_Mono/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <App />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
