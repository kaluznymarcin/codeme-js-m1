import React, { useEffect, useState } from 'react'
import Row from './Row'
import Cell from './Cell'


const createRow = (data) => {
  return data.map( ({ code, mid }, index) => (
    <Row>
      <Cell value={index + 1} modifier="lp" />
      <Cell value={code} modifier="code" />
      <Cell value={mid} modifier="price" />
    </Row>
  ))
}

export default ({ currency, fetchData }) => {
  useEffect(() => {
    fetchData()
  });
  return (
    <div className="currency__body">
      {createRow(currency)}
    </div>
  )
}
