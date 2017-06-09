import React from 'react'
import { Image, StyleSheet, FlatList, View, Text, Button } from 'react-native'

const Item = ({ item }) => (
  <View style={styles.item}>
    <Image
      style={{ width: 50, height: 50 }}
      source={{
        uri: `https://files.coinmarketcap.com/static/img/coins/128x128/${item.id}.png`
      }}
    />
    <Text>{item.rank}</Text>
    <Text>{item.symbol}</Text>
    <Text>{item.name}</Text>
    <Text>{item['price_usd']}</Text>
  </View>
)
const MarketList = ({ allMarkets }) =>
  console.log(allMarkets) ||
  <View>
    <FlatList scrollToIndex data={allMarkets} renderItem={Item} />
  </View>

export default MarketList

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 10,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
