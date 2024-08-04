import classes from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.nav}>
      <h5 className={`headline-fifth ${classes.name}`}>
        testLab
      </h5>
      <div className={`bodytext-16 ${classes.links}`}>
        <ul className=''>
          <li><a href="#how"> Как это работает </a></li>
          <li><a href="#third"> 3-й блок </a></li>
          <li><a href="#qna"> Вопросы и ответы </a></li>
          <li><a href="#form"> Форма </a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar