import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Toast from "react-native-toast-message";

// React Navigation
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Assets
import Money from "./assets/icons/money-alt.png";
import Chart from "./assets/icons/histogram.png";

// Screens
import MarketScreen from "./screens/market-screen";
import MarketDetailScreen from "./screens/market-detail-screen";
import TrendingScreen from "./screens/trend-screen";

// Fonts
import { useFonts } from "expo-font";

const bottomNavigation = createBottomTabNavigator({
  Market: {
    screen: MarketScreen,
    navigationOptions: {
      tabBarIcon: props => {
        return <Image source={Money} style={{ height: 24, width: 24 }} />;
      },
    },
  },
  Trend: {
    screen: TrendingScreen,
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
    MarketDetail: MarketDetailScreen,
  },
  { defaultNavigationOptions: { headerShown: null } },
);

const App = createAppContainer(stackNavigator);

export default () => {
  const [loaded] = useFonts({
    PoppinsRegular: require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    PoppinsBold: require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <App />
      <Toast />
    </>
  );
};
