import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text, Image } from 'react-native'

const Logo = ({ type, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={(() => {
        switch (type) {
          case 'logo':
            return require(`../../images/logo.png`)
          case 'search':
            return require(`../../images/search.png`)
        }
      })()}
    />
  </TouchableOpacity>
)

export default Logo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
