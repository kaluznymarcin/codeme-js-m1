import React from 'react'
import ListItem from './ListItem'
const iterator = () => Array.from(
  new Array(10),
  (item, index) => <ListItem value={index} />
)
export default () => []
