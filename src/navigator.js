import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { Navigation } from './modules/components'
import { Home, Page } from './views'

export default StackNavigator(
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
