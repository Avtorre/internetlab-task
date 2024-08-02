import React from 'react'
import classes from './CommentCard.module.css'
import { CommentCardType } from '../../../lib/types'

const CommentCard: React.FC<CommentCardType> = (comment: CommentCardType) => {
  console.log('comment', comment)
  return (
    <div className={classes.card}>
      <div className={classes.hat}>
        <img width={45} src={`${process.env.PUBLIC_URL}/assets/${comment.pic}`}  alt={comment.pic.slice(9)}  />
        <div>
          <h6 className='headline-sixth'>
            {comment.name}
          </h6>
          <p className='bodytext-12'>
            {comment.city}
          </p>
        </div>
      </div>
      <p className='bodytext-14'>
        {comment.text}  
      </p>   
    </div>
  )
}

export default CommentCard