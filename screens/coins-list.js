import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

// Components
import CryptoCard from "../components/crypto-card";

const CoinsListScreen = () => {
  return (
    <SafeAreaView style={styles.outsideContainer}>
      <View style={styles.innerCointainer}>
        {/* <Text>Hi</Text> */}
        <CryptoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outsideContainer: {
    backgroundColor: "#1B314F",
    flex: 1,
  },
  innerCointainer: {
    padding: 16,
  },
});

export default CoinsListScreen;
