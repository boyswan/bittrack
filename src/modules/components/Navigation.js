import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { Icon } from '../elements'
import { colour } from '../../utils/constants'

const Navigation = ({ navigation: { navigate } }) => (
  <View style={{ backgroundColor: 'white' }}>
    <View style={Styles.buttons}>
      <Icon type="logo" onPress={() => navigate('Home')} />
      <Icon type="search" onPress={() => navigate('Page')} />
    </View>
    <View style={Styles.border} />
  </View>
)

export default Navigation

const Styles = StyleSheet.create({
  border: {
    height: 2,
    backgroundColor: colour.primaryLight
  },
  buttons: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
