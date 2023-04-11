import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { ThemeContext } from './Context/ThemeContext'
import { useState } from 'react'
import { themeDark, themeLight } from './Utils/Theme'

const buttonStyle = {
  textAling: 'center',
  background: 'none',
  margin: '25px 0',
  padding: '10px 20px',
  transition: '1s all',
}

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeContext.Provider value={{ themeLight, themeDark, darkMode }}>
      <main>
        <Header />
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            ...buttonStyle,
            background: darkMode
              ? themeDark.colors.backgroundColor
              : themeLight.colors.backgroundColor,
            color: darkMode
              ? themeDark.colors.textColor
              : themeLight.colors.textColor,
          }}
        >
          Toogle Dark Mod
        </button>
        <Home />
        <Footer />{' '}
      </main>
    </ThemeContext.Provider>
  )
}

export default App
