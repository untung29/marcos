import React from "react";
import { StyleSheet, Image, View } from "react-native";

// Components
import DefaultText from "../components/default-text";
import DefaultTextBold from "../components/default-text-bold";

const TrendingCard = ({ image, name, volume }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageStyle} />
      <View style={styles.symbolContainer}>
        <DefaultText>{name}</DefaultText>
      </View>
      <View style={styles.dataContainer}>
        <DefaultText>Volume:</DefaultText>
        <DefaultTextBold style={{ marginTop: 16 }}>${volume}</DefaultTextBold>
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageStyle: { width: 24, height: 24 },
  increaseOrDownContainer: { flexDirection: "row", alignItems: "center", marginTop: 12, minWidth: 128 },
  iconStyle: { marginRight: 4, alignItems: "center" },
  symbolContainer: { alignItems: "center", minWidth: 128 },
  dataContainer: { alignItems: "center" },
});
export default TrendingCard;
