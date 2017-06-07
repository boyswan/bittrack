import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { Home, Page } from './modules/views'
import { Navigation } from './modules/components'
import Actions from './store/actions'
export const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Page: { screen: Page }
  },
  {
    navigationOptions: {
      header: Navigation
    }
  }
)
Actions.marketsGet()
const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = connect(state => ({
  nav: state.nav
}))

export default mapStateToProps(AppWithNavigationState)
