import { useEffect, useState } from 'react'
import Carousel from './UI/Carousel/Carousel'
import CommentCard from './UI/CommentCard/CommentCard'
import { CommentCardType } from '../lib/types'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "../store/store"
import { setComments } from '../store/commentStore/commentReducer'
import { commentsPlaceholder } from '../lib/commentsPlaceholder'


const CommentsBlock = () => {
  const [cardsCount, setCardsCount] = useState(3)
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()
  const comments: CommentCardType[] = useSelector((state:RootState) => state.comments)

  const checkwidth = () => {
    if (window.innerWidth> 900) {
      setCardsCount(3)
    } else if (window.innerWidth<376 ) {
      setCardsCount(1)
    } else {
      setCardsCount(2)
    }
  }
  
  useEffect(()=> {
    const getComments = async () => {
      //пример реализации загрузки отзывов с сервера(в данном случае, конечно, никакой загрузки не происходит и данный импортируются из локального хранилища)
      //если данные статичны и их не нужно подгружать, то их можно прописать в initialstate редьюсера или вообще обойтись без redux'а 
      dispatch( setComments( await commentsPlaceholder))
      setLoading(false)
    }
    getComments()
    checkwidth()
    window.addEventListener("resize", checkwidth)  
  }, [comments])
  
  return (
    <div className='comments-block' id='comments'>
      <div className='comments-block__content'>
        <h2 className='headline-second'> Отзывы </h2>
        {(!loading) &&
          <Carousel cardsCount={cardsCount}>
          {comments.map((comment) => {
              return (
                <CommentCard key={comment.id} {...comment}/>
              )
            })}
          </Carousel>
        }

      </div>
    </div>
    
  )
}

export default CommentsBlock

//key={comment.id} id={comment.id} pic={comment.pic} name={comment.name} city={comment.city} text={''}
/*
*/
// <CommentCard key={comment.id} {...comment}/>
//<CommentCard key={index} id={index} pic={'pic1.png'} name={'Константинов Михаил Павлович'} city={'A'} text={'аждый из нас понимает очевидную вещь: перспективное пл'} />
