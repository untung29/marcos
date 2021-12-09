import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";

// Components
import CryptoList from "../components/crypto-list";

// API
import api from "../api";

const MarketScreen = () => {
  const [listCoins, setListCoins] = useState([]);

  const fetchListCoins = async () => {
    const fetchCoins = await api.get("/coins/markets", {
      params: { vs_currency: "usd" },
    });
    setListCoins(fetchCoins.data);
  };
  useEffect(() => {
    fetchListCoins();
  }, []);

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
