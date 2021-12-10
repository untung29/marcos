import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";

// Components
import CryptoList from "../components/crypto-list";
import LoadingState from "../components/loading-state";
import TextInputSearch from "../components/text-input-search";
import Toast from "react-native-toast-message";

// API
import api from "../api";

const MarketScreen = () => {
  const [listCoins, setListCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredCoins, setFilteredCoins] = useState(null);

  const onSearch = coin => {
    let filteredCoins = listCoins.filter(({ name }) => {
      name = name.toLowerCase();
      coin = coin.toLowerCase();
      return name.includes(coin);
    });

    setFilteredCoins(filteredCoins);
  };

  const fetchListCoins = async () => {
    setIsLoading(true);

    try {
      const fetchCoins = await api.get("/coins/markets", {
        params: { vs_currency: "usd" },
      });
      setIsLoading(false);
      setListCoins(fetchCoins.data);
    } catch (err) {
      setIsLoading(false);

      Toast.show({
        type: "error",
        text1: "Hello",
        text2: "Our server is in maintenance. Please try again later.",
      });
    }

    // setFilteredCoins(fetchCoins.data);
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
        <TextInputSearch onChange={onSearch} />
        <FlatList
          data={filteredCoins ? filteredCoins : listCoins}
          keyExtractor={data => data.id}
          renderItem={CryptoList}
          initialNumToRender={10}
        />
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
    paddingBottom: 64,
  },
});

export default MarketScreen;
