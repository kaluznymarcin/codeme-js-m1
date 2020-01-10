import React from 'react'

export default ({ children, modifier, value }) => {
  const classes = ['currency__cell'];
  modifier && classes.push(`currency__cell--${modifier}`)
  return (
    <div className={classes.join(' ')}>
      {value || children}
    </div>
  );
}
