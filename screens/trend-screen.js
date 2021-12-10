import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, FlatList, View } from "react-native";

import TrendingList from "../components/trending-list";
import LoadingState from "../components/loading-state";
import Toast from "react-native-toast-message";

import api from "../api";

const TrendScreen = () => {
  const [trendCoins, setTrendCoins] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchTrends = async () => {
    setIsLoading(true);
    try {
      const fetchTrendCoins = await api.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "volume_desc",
          per_page: 10,
        },
      });
      setTrendCoins(fetchTrendCoins.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      Toast.show({
        type: "error",
        text1: "Hello",
        text2: "Our server is in maintenance. Please try again later.",
      });
    }
  };

  useEffect(() => {
    fetchTrends();
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

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
