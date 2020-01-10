import React from 'react';
import Row from './Row';
import Cell from './Cell';

export default () => (
  <div className="currency__header">
    <Row>
      <Cell value="Lp" modifier="lp" />
      <Cell value="Kod waluty" modifier="code" />
      <Cell value="Średni kurs" modifier="price" />
    </Row>
  </div>
)
