import React from 'react'
import { articles } from '../lib/articles'

const ArticleBlock = () => {
  return (
    <div className='article-block'>
      
      <div className='article-block__content'>
        {articles.map((a, index) => {
          return (
            <div key={index}>
              <p className='article-block__content-title bodytext-18__s-bold'>{a.title}</p>
              <p className='bodytext-16'>{a.text}</p>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default ArticleBlock