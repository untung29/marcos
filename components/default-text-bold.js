import React from "react";
import { Text, StyleSheet } from "react-native";

const DefaultText = ({ children, style }) => {
  return <Text style={[styles.defaultText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultText: { fontFamily: "PoppinsBold", color: "white" },
});

export default DefaultText;
