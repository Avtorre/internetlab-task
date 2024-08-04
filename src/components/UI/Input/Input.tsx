import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, ref:React.LegacyRef<HTMLInputElement>) => {

  return (
    <div className={`${classes.input__wrapper} ${props.type === 'checkbox' ? classes.checkbox__wrapper : ''}`}>
      
      <input id={props.name} ref={ref} className={`${classes.input_field} bodytext-18 ${(props['aria-labelledby'] === 'valid') ? classes.valid :""} ${(props['aria-labelledby'] === 'invalid') ? classes.invalid :""}`} {...props}/>
      {(props['aria-label'])&&
        <label htmlFor={props.name} className={`${classes.input__label}  bodytext-18`}>{props['aria-label']}</label>
      }
      {(!props.type) && (props.about) &&
        <p className={`${classes.helper_text} bodytext-12`}>
          {props.about}
        </p>
      }
      {(props['aria-labelledby'] === 'valid') && 
        <img className={classes.check_circle} src={`${process.env.PUBLIC_URL}/assets/check-circle.svg`} alt="check-circle" /> 
      }
      {(props['aria-labelledby'] ==='invalid') &&
        <img className={classes.cancel_circle} src={`${process.env.PUBLIC_URL}/assets/cancel-circle.svg`} alt="cancel" />
      }
    </div>     
  )
});

export default Input