import { themes } from '../data'
import ThemeItem from './ThemeItem'
import { FaCog } from 'react-icons/fa'
import { BsSun, BsMoon } from 'react-icons/bs'
import './themes.css'
import { useEffect, useState } from 'react'

/* 2nd part */
const getStorageColor = () => {
  let color = '#5a0e1b'
  if (localStorage.getItem('color')) {
    color = localStorage.getItem('color')
  }
  return color
}

/* for theme */
const getStorageTheme = () => {
  let theme = 'light-theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const Themes = () => {
  /* show switcher toggler function */
  const [showSwitcher, setShowSwitcher] = useState(false)

  /* color changing function with useEffect - linked as 3rd part of localStorage */
  const [color, setColor] = useState(getStorageColor())
  const changeColor = (color) => {
    setColor(color)
  }
  useEffect(() => {
    document.documentElement.style.setProperty('--first-color', color)
    /* saving the choosen color in localStorage, so with refresh it doesn't change -> 1st part (localStorage.setItem('color', color)) */
    localStorage.setItem('color', color)
  }, [color])

  /* web page theme */
  const [theme, setTheme] = useState(getStorageTheme())
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div>
      {/* show and hide */}
      <div className={`${showSwitcher ? 'show-switcher' : ''} style_switcher`}>
        {/* btn toggle */}
        <div
          className='style_switcher-toggler'
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog></FaCog>
        </div>
        {/* toggle theme */}
        <div className='theme_toggler' onClick={toggleTheme}>
          {theme === 'light-theme' ? <BsMoon></BsMoon> : <BsSun></BsSun>}
        </div>
        <h3 className='style_switcher-title'>Style Switcher</h3>
        <div className='style_switcher-items'>
          {/* changeColor function here, then apply it in themeItem.jsx */}
          {themes.map((theme, index) => {
            return (
              <ThemeItem
                key={index}
                {...theme}
                changeColor={changeColor}
              ></ThemeItem>
            )
          })}
        </div>
        {/* btn closing */}
        <div
          className='style_switcher-close'
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    </div>
  )
}
export default Themes
