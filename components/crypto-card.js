import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

// Sample Image
import Money from "../assets/icons/money-alt.png";

// Components
import DefaultText from "../components/default-text";
import DefaultTextBold from "../components/default-text-bold";

// Assets
import colors from "../assets/resources/colors";
import Up from "../assets/icons/up.png";
import Down from "../assets/icons/down.png";

const CryptoCard = ({ image, name, symbol, price, price_change_percentage_24h, price_change_24h }) => {
  const increaseOrDown = () => {
    return (
      <View style={styles.increaseOrDownContainer}>
        <Image source={Up} style={styles.iconStyle} />
        <DefaultTextBold style={{ color: colors.green }}>1.47% ($500)</DefaultTextBold>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={Money} style={styles.imageStyle} />
      <View style={styles.symbolContainer}>
        <DefaultText>Bitcoin</DefaultText>
        <DefaultTextBold style={{ color: colors.blue, marginTop: 12 }}>BTC</DefaultTextBold>
      </View>
      <View style={styles.dataContainer}>
        <DefaultText>$100,000</DefaultText>
        {increaseOrDown()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F5487",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyle: { width: 24, height: 24 },
  increaseOrDownContainer: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  iconStyle: { marginRight: 4 },
  symbolContainer: {},
});
export default CryptoCard;
