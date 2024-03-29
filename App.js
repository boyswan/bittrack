import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { store } from './src/store'
import Root from './src'

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)
