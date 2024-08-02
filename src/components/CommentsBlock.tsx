import React from 'react'
import Carousel from './UI/Carousel/Carousel'
import { comments } from '../lib/comments'
import CommentCard from './UI/CommentCard/CommentCard'
import { CommentCardType } from '../lib/types'



const CommentsBlock = () => {
  return (
    <div className='comments-block' id='comments'>
      <div className='comments-block__content'>
        <h2 className='headline-second'> Отзывы </h2>
        <Carousel>
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