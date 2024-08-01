import React from 'react'
import classes from './Button.module.css'

type ButtonProps = {
  children:string;
  variant?: 'main' | 'form';
}

const Button: React.FC<ButtonProps> = ({children, variant='main'}) => {
  return (
    <button className={`${classes[variant]}`}>
      <h5 className='headline-fifth'>{children}</h5>
    </button>
  )
}

export default Button