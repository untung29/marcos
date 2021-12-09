import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";

import TrendingList from "../components/trending-list";

import api from "../api";

const TrendScreen = () => {
  const [trendCoins, setTrendCoins] = useState(null);
  const fetchTrends = async () => {
    const fetchTrendCoins = await api.get("/coins/markets", {
      params: {
        vs_currency: "usd",
        order: "volume_desc",
        per_page: 10,
      },
    });
    setTrendCoins(fetchTrendCoins.data);
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <FlatList data={trendCoins} renderItem={TrendingList} keyExtractor={trend => trend.id} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  outerContainer: { backgroundColor: "#1B314F", flex: 1 },
  innerContainer: { padding: 16 },
});

export default TrendScreen;
