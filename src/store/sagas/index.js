import { all, call, put, takeLatest, fork, throttle } from 'redux-saga/effects'
// import { fetch } from '../../utils'

const action = type => value => put({ type, value })
const marketsSet = action('MARKETS_SET')

function* marketsGet() {
  try {
    console.log('hit')
    const res = yield call(
      fetch,
      'https://api.coinmarketcap.com/v1/ticker/?convert=EUR'
    )
    yield console.log('res', res)
    yield marketsSet(res)
  } catch (e) {
    console.log(e)
  }
}

function* navigate({ routeName, ...rest }) {
  try {
    console.log(rest)
    switch (routeName) {
      case 'Page':
        return yield marketsGet()
    }
    // const res = yield call(
    //   fetch,
    //   'https://api.coinmarketcap.com/v1/ticker/?convert=EUR'
    // )
    // console.log(res)
    // yield put({ type: 'MARKETS_SET', value: res })
  } catch (e) {
    console.log(e)
  }
}
const sagas = [
  fork(function*() {
    yield* takeLatest('@@redux/INIT', marketsGet)
  }),
  fork(function*() {
    yield* takeLatest('MARKETS_GET', marketsGet)
  }),
  fork(function*() {
    yield* takeLatest('Navigation/NAVIGATE', navigate)
  })
]

export default function* root() {
  yield all(sagas)
}
