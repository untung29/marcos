import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

// Components
import CryptoList from "../components/crypto-list";
import DefaultText from "../components/default-text";
import LoadingState from "../components/loading-state";

// API
import api from "../api";

const MarketScreen = () => {
  const [listCoins, setListCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchListCoins = async () => {
    setIsLoading(true);
    const fetchCoins = await api.get("/coins/markets", {
      params: { vs_currency: "usd" },
    });
    setIsLoading(false);
    setListCoins(fetchCoins.data);
  };
  useEffect(() => {
    fetchListCoins();
  }, []);

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <SafeAreaView style={styles.outsideContainer}>
      <View style={styles.innerCointainer}>
        <FlatList data={listCoins} keyExtractor={data => data.id} renderItem={CryptoList} initialNumToRender={10} />
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

export default MarketScreen;
