import React from 'react'
import { StyleSheet, FlatList, View, Text, Button } from 'react-native'

const Home = () => (
  <View style={styles.container}>
    <Text> Home </Text>
    <FlatList
      data={[{ key: 'a' }, { key: 'b' }]}
      renderItem={({ item }) => <Text>{item.key}</Text>}
    />
  </View>
)

// Home.navigationOptions = ({ navigation: { navigate } }) => ({
//   // headerLeft: <Logo />,
//   headerRight: <Button title="click" onPress={() => navigate('Page')} />
// })

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
