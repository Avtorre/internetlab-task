import { useState } from 'react'
import classes from './navbar.module.css'

const Navbar = () => {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      <img src={`${(hidden) ?`${process.env.PUBLIC_URL}/assets/nav-menu.svg` : `${process.env.PUBLIC_URL}/assets/nav-cross.svg`}`} className={classes.nav_btn} onClick={(e) => setHidden(!hidden)}/>
      <div className={classes.nav} aria-disabled={hidden}>
        <div className={classes.name}>
          <img className={classes.logo} src={`${process.env.PUBLIC_URL}/assets/testLab.svg`} alt="testLab.svg" />
          <h5 className={`headline-fifth`}>
            testLab
          </h5>
        </div>
      
        <div className={`bodytext-16 ${classes.links}`}>
          <ul className=''>
            <li onClick={(e) => setHidden(!hidden)}><a href="#how"> Как это работает <img src={`${process.env.PUBLIC_URL}/assets/arrow-right-small.svg`} alt="arrow-right-small" /></a>  </li>
            <li onClick={(e) => setHidden(!hidden)}><a href="#third"> 3-й блок <img src={`${process.env.PUBLIC_URL}/assets/arrow-right-small.svg`} alt="arrow-right-small" /></a>  </li>
            <li onClick={(e) => setHidden(!hidden)}><a href="#qna"> Вопросы и ответы <img src={`${process.env.PUBLIC_URL}/assets/arrow-right-small.svg`} alt="arrow-right-small" /></a>  </li>
            <li onClick={(e) => setHidden(!hidden)}><a href="#form"> Форма <img src={`${process.env.PUBLIC_URL}/assets/arrow-right-small.svg`} alt="arrow-right-small" /> </a>  </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar