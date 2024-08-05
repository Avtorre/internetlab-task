import React from 'react'
import Button from './UI/Button/Button'

const MainBlock = () => {
  return (
    <div className='main-block'>
      <div className='main-block__content'>
        <h1 className='headline-first'>
          Говорят, никогда не поздно сменить профессию
        </h1>
        <p className='bodytext-16'>
          Сделай круто тестовое задание и у тебя получится
        </p>
        <Button variant='main'>
          Проще простого!
        </Button>
      </div>
      
    </div>
  )
}

export default MainBlock