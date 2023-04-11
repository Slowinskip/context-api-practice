import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { ThemeContext } from './Context/ThemeContext'

const buttonStyle = { textAling: 'center', background: 'none' }

function App() {
  return (
    <ThemeContext.Provider>
      <main>
        <Header />
        <button style={buttonStyle}>Toogle Dark Mod</button>
        <Home />
        <Footer />{' '}
      </main>
    </ThemeContext.Provider>
  )
}

export default App
