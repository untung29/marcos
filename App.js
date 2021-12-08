import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

// Assets
import Money from "./assets/money-alt.png";
import Chart from "./assets/histogram.png";

// Screens
import CoinsList from "./screens/coins-list";

const Market = () => {
  return <View>{/* <Image source={Money} style={{ height: 24, width: 24 }} /> */}</View>;
};

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

App = createAppContainer(stackNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
