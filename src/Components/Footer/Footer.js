import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { ThemeContext } from '../../Context/ThemeContext'

const style = { margin: '25px 0px', textAlign: 'center', transition: '1s all' }

const Footer = () => {
  const { themeLight, themeDark, darkMode } = useContext(ThemeContext)

  return (
    <div
      style={{
        ...style,
        background: darkMode
          ? themeDark.colors.backgroundColor
          : themeLight.colors.backgroundColor,
        color: darkMode
          ? themeDark.colors.textColor
          : themeLight.colors.textColor,
      }}
    >
      Praesent convallis turpis egestas commodo pharetra. Aliquam erat volutpat.
    </div>
  )
}

export default Footer
