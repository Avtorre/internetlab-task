import React from 'react'
import classes from './Button.module.css'

type ButtonProps = {
  children:string;
  variant?: 'main' | 'form';
}

const Button: React.FC<ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({children, variant='main', ...props}) => {
  return (
    <button className={`${classes[variant]}`} {...props} >
      <h5 className='headline-fifth'>{children}</h5>
    </button>
  )
}

export default Button