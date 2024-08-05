import React from 'react'
import { howElements } from '../lib/how-elements';

const HowBlock = () => {
  return (
    <div className='how-block' id='how'>
        <h2 className='headline-second'> Как это работает </h2>
        <div className='how-block__content'>
          {howElements.map((element) => {
            return(
              <div key={element.id}>
                <img src={`${process.env.PUBLIC_URL}/assets/${element.logo}`}  alt={element.logo.slice(9)}/>
                <div className='how-block__content-text'>        
                  <h6 className='headline-sixth'>{element.title}</h6>
                  <p className='bodytext-14'>{element.text}</p>
                </div>
              </div>
            )
          })
          }
        </div>
    </div>
  )
}

export default HowBlock;