import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Dimensions, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";
import api from "../api";

// components
import LoadingState from "../components/loading-state";
import DefaultTextBold from "../components/default-text-bold";
import DefaultText from "../components/default-text";

const MarketDetailScreen = ({ navigation }) => {
  const [marketData, setMarketData] = useState(null);
  const { id, name, price, imageUrl } = navigation.state.params;

  const fetchCoinDetail = async () => {
    const coinDetail = await api.get(`/coins/${id}/market_chart?vs_currency=usd&days=6&interval=daily`);

    let prices = [];
    let labels = [];
    let marketCaps = [];

    let latestVolume = coinDetail.data.total_volumes[coinDetail.data.total_volumes.length - 1][1];

    for (let i = 0; i < coinDetail.data.prices.length; i++) {
      //   coinDetail.data.prices[i][1] = coinDetail.data.prices[i][1].toFixed(1);
      prices.push(coinDetail.data.prices[i][1]);
      labels.push("Day " + (i + 1));
      marketCaps.push(coinDetail.data.total_volumes[i][1]);
    }
    setMarketData({
      prices: prices,
      labels: labels,
      latestVolume: latestVolume,
    });
  };

  useEffect(() => {
    fetchCoinDetail();
  }, []);

  if (marketData) {
    return (
      <SafeAreaView style={styles.outsideContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.coinDetail}>
            <DefaultText style={styles.fontSize}>{name}</DefaultText>
            <Image source={{ uri: imageUrl }} style={{ height: 32, width: 32, marginTop: 16 }} />
            <View style={styles.priceContainer}>
              <View style={{ alignItems: "center" }}>
                <DefaultTextBold style={styles.fontSize}>Current Price</DefaultTextBold>
                <DefaultText style={styles.fontSize}>${price}</DefaultText>
              </View>
              <View style={{ alignItems: "center" }}>
                <DefaultTextBold style={styles.fontSize}>Volume</DefaultTextBold>
                <DefaultText style={styles.fontSize}>${marketData.latestVolume.toFixed(0)}</DefaultText>
              </View>
            </View>
          </View>

          <LineChart
            data={{
              labels: marketData.labels,
              datasets: [
                {
                  data: [...marketData.prices],
                },
              ],
            }}
            width={Dimensions.get("window").width - 32}
            height={330}
            yAxisLabel="$"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: marketData.prices[0] < 100 ? 3 : 0,
              color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,
              style: { borderRadius: 16 },
              propsForDots: { r: "6", strokeWidth: "2", stroke: "#ffa726" },
            }}
            bezier
            style={{ borderRadius: 16 }}
          />
        </View>
      </SafeAreaView>
    );
  } else {
    return <LoadingState />;
  }
};

const styles = StyleSheet.create({
  outsideContainer: {
    backgroundColor: "#1B314F",
    flex: 1,
  },
  innerContainer: { padding: 16 },
  coinDetail: { marginBottom: 32, alignItems: "center", justifyContent: "space-between", height: 128 },
  priceContainer: { flexDirection: "row", marginTop: 16 },
  fontSize: { fontSize: 20 },
});

MarketDetailScreen.navigationOptions = props => {
  return {
    headerShown: true,
    headerTitle: props.navigation.getParam("id").toUpperCase(),
  };
};

export default MarketDetailScreen;
