import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='' className='home_img' />
      <div className='home_content'>
        <div className='home_data'>
          <h1 className='home_title'>
            <span>I'm Silvia Fioroni.</span> Front-end web developer
          </h1>
          <p className='home_description'>
            I'm a self-taught italian front-end developer, interested in
            developing my skills towards full-stack development.
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight></FaArrowRight>
            </span>
          </Link>
        </div>
      </div>
      <div className='color_block'></div>
    </section>
  )
}
export default Home
