import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

// Sample Image
import Money from "../assets/money-alt.png";

const CryptoCard = ({ image, name, symbol, price, price_change_percentage_24h, price_change_24h }) => {
  return (
    <View style={styles.container}>
      <Image source={Money} style={styles.imageStyle} />
      <Text>Bitcoin</Text>
      <Text>BTC</Text>
      <Text>$100,000</Text>
      <Text>^1.47% ($500)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#2F5487", borderRadius: 8, padding: 16 },
  imageStyle: { width: 24, height: 24, backgroundColor: "white" },
});
export default CryptoCard;
