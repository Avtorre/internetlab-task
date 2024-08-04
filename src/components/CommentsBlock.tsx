import { useState } from 'react'
import Carousel from './UI/Carousel/Carousel'
import { comments } from '../lib/comments'
import CommentCard from './UI/CommentCard/CommentCard'
import { CommentCardType } from '../lib/types'



const CommentsBlock = () => {
  const [curWidth, setCurWidth] = useState(3)
  const [cardsCount, setCardsCount] = useState(3)

  const checkwidth = () => {
    if (window.innerWidth> 768) {
      setCardsCount(3)
    } else if (window.innerWidth<376 ) {
      setCardsCount(1)
    } else {
      setCardsCount(2)
      console.log('first', window.innerWidth)
    }
    /*if((window.innerWidth<769) && (window.innerWidth>375))  {
      setCardsCount(2)
    } else if (window.innerWidth<376) {
      setCardsCount(1)
    } else {
      setCardsCount(3)
    }*/
  }
  window.addEventListener("resize", checkwidth)  
  
  return (
    <div className='comments-block' id='comments'>
      <div className='comments-block__content'>
        <h2 className='headline-second'> Отзывы </h2>
        <Carousel cardsCount={cardsCount}>
          {comments.map((comment: CommentCardType) => {
            return (
            <CommentCard key={comment.id} {...comment}/>
          )
          })}
        </Carousel>
      </div>
    </div>
    
  )
}

export default CommentsBlock

//key={comment.id} id={comment.id} pic={comment.pic} name={comment.name} city={comment.city} text={''}