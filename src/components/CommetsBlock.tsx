import React from 'react'
import Carousel from './UI/Carousel/Carousel'
import { comments } from '../lib/comments'
import CommentCard from './UI/CommentCard/CommentCard'


const CommetsBlock = () => {
  return (
    <div className='comments-block' id='comments'>
      CommetsBlock
      <Carousel>
        {comments.map((comment) => {
          return (
          <CommentCard key={comment.id} id={comment.id}/>
        )
        })}
      </Carousel>
    </div>
    
  )
}

export default CommetsBlock