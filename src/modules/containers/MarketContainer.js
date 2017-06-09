import { withState, mapProps, branch, compose } from 'recompose'
import { connect } from 'react-redux'
import {
  identity,
  pipe,
  map,
  converge,
  assoc,
  prop,
  always,
  head,
  sortBy,
  applySpec,
  path
} from 'ramda'

const addKey = map(x => assoc('key', x.id, x))
const sortByKey = sortBy(prop('rank'))

const spec = applySpec({
  allMarkets: pipe(path(['app', 'allMarkets']), addKey, sortByKey)
})

const mapStateToProps = connect(spec)
export default compose(mapStateToProps)
