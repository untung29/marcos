import React from "react";
import { View } from "react-native";

// Components
import CryptoCard from "../components/crypto-card";

const CryptoList = itemData => {
  const { id, name, symbol, current_price, price_change_percentage_24h, price_change_24h, image } = itemData.item;
  return (
    <View style={{ marginTop: 16 }}>
      <CryptoCard
        name={name}
        symbol={symbol}
        price={current_price}
        price_change_percentage_24h={price_change_percentage_24h}
        price_change_24h={price_change_24h}
        image={image}
        id={id}
      />
    </View>
  );
};

export default CryptoList;
