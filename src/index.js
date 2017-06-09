import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Text, Button } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { Home, Page } from './views'
import { Navigation } from './modules/components'
import Actions from './store/actions'
import AppNavigator from './navigator'

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
)

const mapStateToProps = connect(state => ({
  nav: state.nav
}))

Actions.hydrate()

export default mapStateToProps(AppWithNavigationState)
