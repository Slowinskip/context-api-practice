import React, { useContext } from 'react'
import Navigation from '../Navigation/Navigation'
import { ThemeContext } from '../../Context/ThemeContext'

const divStyle = {
  padding: '15px',
  textAlign: 'center',
  transition: '1s all',
}

const Header = () => {
  const { themeLight, themeDark, darkMode } = useContext(ThemeContext)
  return (
    <div
      style={{
        ...divStyle,
        background: darkMode
          ? themeDark.colors.backgroundColor
          : themeLight.colors.backgroundColor,
        color: darkMode
          ? themeDark.colors.textColor
          : themeLight.colors.textColor,
      }}
    >
      <Navigation />
    </div>
  )
}

export default Header
