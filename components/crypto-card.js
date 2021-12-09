import React from "react";
import { TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { withNavigation } from "react-navigation";

// Components
import DefaultText from "../components/default-text";
import DefaultTextBold from "../components/default-text-bold";

// Assets
import colors from "../assets/resources/colors";
import Up from "../assets/icons/up.png";
import Down from "../assets/icons/down.png";

const CryptoCard = ({ id, image, name, symbol, price, price_change_percentage_24h, price_change_24h, navigation }) => {
  price_change_percentage_24h = (price_change_percentage_24h * 100).toFixed(1);
  price_change_24h = price_change_24h.toFixed(1);

  const goToMarketDetail = () => {
    navigation.navigate("MarketDetail", { id: id, name: name, imageUrl: image, price: price });
  };

  const increaseOrDown = () => {
    if (price_change_percentage_24h > 0) {
      return (
        <View style={styles.increaseOrDownContainer}>
          <Image source={Up} style={styles.iconStyle} />
          <DefaultTextBold style={{ color: colors.green }}>
            {price_change_percentage_24h}% (${price_change_24h})
          </DefaultTextBold>
        </View>
      );
    } else {
      return (
        <View style={styles.increaseOrDownContainer}>
          <Image source={Down} style={styles.iconStyle} />
          <DefaultTextBold style={{ color: colors.red }}>
            {price_change_percentage_24h}% (${price_change_24h})
          </DefaultTextBold>
        </View>
      );
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToMarketDetail}>
      <Image source={{ uri: image }} style={styles.imageStyle} />
      <View style={styles.symbolContainer}>
        <DefaultText>{name}</DefaultText>
        <DefaultTextBold style={{ color: colors.blue, marginTop: 12 }}>{symbol.toUpperCase()}</DefaultTextBold>
      </View>
      <View style={styles.dataContainer}>
        <DefaultText>${price}</DefaultText>
        {increaseOrDown()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F5487",
    borderRadius: 8,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageStyle: { width: 24, height: 24 },
  increaseOrDownContainer: { flexDirection: "row", alignItems: "center", marginTop: 12, minWidth: 128 },
  iconStyle: { marginRight: 4, alignItems: "center" },
  symbolContainer: { alignItems: "center", minWidth: 128 },
  dataContainer: { alignItems: "center" },
});
export default withNavigation(CryptoCard);
