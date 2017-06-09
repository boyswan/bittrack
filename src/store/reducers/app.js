import createReducer from '../../utils/createReducer'
import { evolve, always } from 'ramda'

const init = {
  test: '',
  allMarkets: []
}

export default createReducer(init, {
  MARKETS_SET: ({ payload }) => evolve({ allMarkets: always(payload) })
})
