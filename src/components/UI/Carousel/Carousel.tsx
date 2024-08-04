import { useEffect, useState } from 'react'
import classes from './Carousel.module.css'
import Indicator from './Indicator';


const Carousel = (props: {children: JSX.Element[], cardsCount:number}) => {
  const [slides, setSlides] = useState<JSX.Element[]>([]);
  const [start, setStart] = useState(props.children[0].props.id)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  useEffect(() => {
    setSlides(props.children.slice(start,start+props.cardsCount))
    if (start === 0) {
      setPrevDisabled(true)
    }
    if (start > props.children.length - (props.cardsCount+1)) {
      setNextDisabled(true)
    }
    console.log('props', props)
  }, [start, props])

  const prev = () => {
    if (start>0) {
      setStart(start-1)
      setNextDisabled(false)
    } 
  }

  const next = () => {
    if (start < props.children.length - props.cardsCount) {
      setStart(start+1)
      setPrevDisabled(false)
    }
  }

  const indicators = () => {
    let indArray = []
    for (let i = 0; i<props.children.length - (props.cardsCount-1); i++) {
      indArray.push(i)
    }
    return indArray
  }


  return (
    <>
      <div 
        className={classes.carousel__wrapper}
        >
        <button className={classes.prev} onClick={() => prev()} disabled={prevDisabled}>
          <img  aria-readonly={prevDisabled} src={`${process.env.PUBLIC_URL}/assets/arrow-left.svg`} alt="arrow-left" />
        </button>
        <div className={classes.content} >
          {slides}
        </div>
        <button className={classes.next} onClick={() => next()} disabled={nextDisabled}>
          <img aria-readonly={nextDisabled} src={`${process.env.PUBLIC_URL}/assets/arrow-right.svg`} alt="arrow-right" />
        </button>  
      </div>
      <div>
        {indicators().map((i) => {
          return(
            <Indicator key={i} index={i} active={i === start}/>
          )
        })}
      </div>
    </>
  )
}

export default Carousel
