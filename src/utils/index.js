import axios from 'axios'
import {
  reduce,
  curry,
  assoc,
  addIndex,
  join,
  map,
  pipe,
  when,
  head,
  equals,
  ifElse,
  any,
  tail,
  split,
  filter,
  concat,
  propEq,
  gt,
  allPass,
  prop,
  sortBy,
  cond,
  append,
  over,
  lensProp,
  dec,
  F,
  always,
  uniq,
  __,
  uncurryN,
  replace,
  toLower,
  splitEvery,
  tap,
  dropLast,
  T,
  toUpper,
  identity,
  add,
  clamp
} from 'ramda'
import { store } from '../store/index'
console.log(store)
const log = tap(console.log)

const getConfig = url => ({
  method: 'GET',
  url,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const mapIndex = addIndex(map)

export const fetch = url =>
  axios(getConfig(url)).then(identity).catch(console.log)

export const toSnakeCaseUpper = pipe(
  replace(/([A-Z])/g, str => `_${toLower(str)}`),
  toUpper
)

export const createActions = store =>
  reduce(
    (acc, type) =>
      ((acc[type] = payload =>
        store.dispatch({ ...payload, type: toSnakeCaseUpper(type) })), acc),
    {}
  )

export const createReducer = curry((init, reducers, existingState, action) => {
  const state = existingState ? existingState : init
  const fn = reducers[action.type] || (() => y => y)
  return typeof fn === 'function' ? fn(action, state)(state) : identity
})
