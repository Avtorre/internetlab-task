import React from 'react'
import classes from './Carousel.module.scss'

const Indicator = (props: {index:number, active: boolean}) => {
  let style = ''
  if (props.active) {
    style = 'indicator-active'
  }
  return (
    <div className={`${classes.indicator} ${classes[style]}`} key={props.index} />
  )
}

export default Indicator