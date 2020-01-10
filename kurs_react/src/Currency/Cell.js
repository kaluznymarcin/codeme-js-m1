import React from 'react'
import { useDispatch } from 'react-redux'
import { setOpenModal } from '../actions'

export default ({ children, modifier, value }) => {
  const dispatch = useDispatch();

  const classes = ['currency__cell'];
  modifier && classes.push(`currency__cell--${modifier}`)

  return (
    <div className={classes.join(' ')} onClick={() => dispatch(setOpenModal(true))}>
      {value || children}
    </div>
  );
}
