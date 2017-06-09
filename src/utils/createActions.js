import { store } from '../store'

import { pipe, replace, toLower, toUpper, reduce } from 'ramda'
export const toSnakeCaseUpper = pipe(
  replace(/([A-Z])/g, str => `_${toLower(str)}`),
  toUpper
)

export default reduce(
  (acc, type) =>
    ((acc[type] = payload =>
      store.dispatch({ ...payload, type: toSnakeCaseUpper(type) })), acc),
  {}
)
