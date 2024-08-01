import React, { useEffect, useState } from 'react'
import classes from './Carousel.module.css'

const Carousel = (props: {children: JSX.Element[]}) => {
  const [slides, setSlides] = useState([0]);
  const [activeSlides, setActiveSlides] = useState([0]) 
  
  useEffect( () => {
    props.children.map((card) => {
      console.log('1', 1)
      setSlides([...slides, 1])
      setActiveSlides(slides.slice(0,3))
      console.log('activeSlides', card.props.id)
      
    })
      console.log('activeSlides', slides)
    
  }, [])
  
  return (
    <div className={classes.a}>
      <div className={classes.prev}>prev</div>
      
        <div className={classes.content}>
          {props.children}
        </div>
      <div className={classes.next}>next</div>  
    </div>
  )
}

export default Carousel