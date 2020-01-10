import React from 'react'
import Header from './Header'
import Body from './BodyContainer'
import './style.css'

import { useSelector } from 'react-redux' 

export default () => {
    const openModal = useSelector(state => state.openModal)

    return (
      <div className="currency">
        {openModal && alert('Otworz modal')}
        <Header />
        <Body />
      </div>
    )
}
