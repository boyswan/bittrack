import axios from 'axios'
import { identity } from 'ramda'

const getConfig = url => ({
  method: 'GET',
  url,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const fetch = url =>
  axios(getConfig(url)).then(identity).catch(console.log)
