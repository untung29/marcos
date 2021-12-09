import React from "react";
import { View, ActivityIndicator } from "react-native";

import DefaultText from "./default-text";

const LoadingState = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#1B314F" }}>
      <ActivityIndicator />
      <DefaultText style={{ marginTop: 16 }}>Please wait...</DefaultText>
    </View>
  );
};

export default LoadingState;
