import React, { useEffect } from 'react'
import Row from './Row'
import Cell from './Cell'

const data = [
    { "currency": "bat (Tajlandia)", "code": "THB", "mid": 0.1266 },
    { "currency": "dolar amerykański", "code": "USD", "mid": 3.8234 },
    { "currency": "dolar australijski", "code": "AUD", "mid": 2.6445 }
];

const createRow = (data) => {

  useEffect(() => {
    fetch('http://api.nbp.pl/api/exchangerates/tables/a/last/5/', {
      headers: {
        Accept: 'application/json'
      }
    })
  });

  return data.map( ({ code, mid }, index) => (
    <Row>
      <Cell value={index + 1} modifier="lp" />
      <Cell value={code} modifier="code" />
      <Cell value={mid} modifier="price" />
    </Row>
  ))
}

export default () => (
  <div className="currency__body">
    {createRow(data)}
  </div>
)
