import createActions from '../../utils/createActions'

const globalActions = ['hydrate']
const marketActions = ['marketsGet']

export default createActions([...globalActions, ...marketActions])
