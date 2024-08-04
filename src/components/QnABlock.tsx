import React from 'react'
import { qna } from '../lib/qna'
import Accordion from './UI/Accordion/Accordion'

const QnABlock = () => {
  return (
    <div className='qna-block' id='qna'>
      <h2 className='headline-second'>Вопросы и ответы</h2>
      <div className='qna-block__content'>
        {qna.map((item, index ) => {
          return (
            <Accordion key={index} title={item.q} text={item.a}/>
          )
        })
        }
      </div>
    </div>
  )
}

export default QnABlock