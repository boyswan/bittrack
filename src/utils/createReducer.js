import { curry } from 'ramda'

export default curry((init, reducers, existingState, action) => {
  const state = existingState ? existingState : init
  const fn = reducers[action.type] || (() => y => y)
  return typeof fn === 'function' ? fn(action, state)(state) : identity
})
