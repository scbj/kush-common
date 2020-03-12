import * as constants from './constants'

const logKey = (key, index) => console.log(`${index}. ${key}`)

Object
  .keys(constants)
  .forEach(logKey)