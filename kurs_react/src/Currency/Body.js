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

export default () => {
  const [data, setData] = useState([])

  useEffect(() => {
    data.length === 0 && fetch('http://api.nbp.pl/api/exchangerates/tables/a/last/5/', {
      headers: {
        Accept: 'application/json'
      }
    }).then(res => res.json()).then(data_from_res => setData(data_from_res[0].rates))
  });
  return (
    <div className="currency__body">
      {createRow(data)}
    </div>
  )
}
