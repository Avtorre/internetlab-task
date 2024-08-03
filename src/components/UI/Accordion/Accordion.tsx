import React, { useState } from 'react'
import classes from './Accordion.module.css'

const Accordion = (props : {title: string, text: string}) => {
  const [isActive, setIsActive] = useState(false)
  const clickHandler = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <div className={classes.accordion}>
        <div onClick={clickHandler} className={classes.head}>
          <p className='bodytext-18__s-bold'>{props.title}</p>
          <img width={24} height={24} className={isActive ? classes.open : classes.close} src={`${process.env.PUBLIC_URL}/assets/plus-sign.svg`} alt="plus-sign" />
        </div>
        {isActive &&
          <div className={`bodytext-18 ${classes.text}`}>
            {props.text}
          </div>
        }
        
      </div>
    </>
  )
}

export default Accordion