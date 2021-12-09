import React from "react";
import TrendingCard from "./trending-card";
import { View, StyleSheet } from "react-native";

const TrendingList = itemData => {
  const { name, total_volume, image } = itemData.item;

  return (
    <View style={styles.container}>
      <TrendingCard name={name} volume={total_volume} image={image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 16 },
});

export default TrendingList;
