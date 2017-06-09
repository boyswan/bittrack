import {
  all,
  call,
  put,
  take,
  takeLatest,
  fork,
  throttle
} from 'redux-saga/effects'
import { fetch } from '../../utils/api'

const action = type => payload => put({ type, payload })
const marketsSet = action('MARKETS_SET')

function* marketsGet() {
  const { data } = yield call(
    fetch,
    'https://api.coinmarketcap.com/v1/ticker/?convert=EUR'
  )
  yield marketsSet(data)
}

function* navigation() {
  while (true) {
    const { routeName } = yield take('Navigation/NAVIGATE')
    switch (routeName) {
      case 'Page':
        return yield fork(marketsGet)
    }
  }
}

function* hydrate() {
  while (true) {
    yield take('HYDRATE')
    yield fork(marketsGet)
  }
}

export default function* root() {
  yield all([fork(hydrate), fork(navigation)])
}
