import React from 'react'
import { StyleSheet, FlatList, View, Text, Button } from 'react-native'
import { AllMarketList } from '../modules'

const Home = () => (
  <View style={styles.container}>
    <Text> Home </Text>
    <AllMarketList />
  </View>
)

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
