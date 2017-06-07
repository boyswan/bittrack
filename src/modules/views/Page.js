import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Page = () => (
  <View style={styles.container}>
    <Text> Page </Text>
  </View>
)

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
