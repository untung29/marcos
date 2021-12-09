import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

// assets
import colors from "../assets/resources/colors";

const TextInputSearch = ({ onChange }) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput placeholder="Search" onChangeText={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: { backgroundColor: "#FFF", borderRadius: 16, padding: 16 },
});

export default TextInputSearch;
