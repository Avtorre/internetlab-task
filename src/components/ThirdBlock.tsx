import React from 'react'

const ThirdBlock = () => {
  return (
    <div className='third-block' id='third'>
      <div className='third-block__text bodytext-16'>
        <h3 className='headline-third'>Круто, ты дошел до третьего блока</h3>
        <p>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
        </p>
          <br />
        <p>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах. 
        </p>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/third-block.svg`} alt="" />
    </div>
    
  )
}

export default ThirdBlock