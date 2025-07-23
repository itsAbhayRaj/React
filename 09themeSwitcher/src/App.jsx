import { useState , useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode,setThemeMode] = useState("Light")

  const darkTheme = () => {
    setThemeMode("dark")  
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual theme change
  useEffect(() => {
    const HTML = document.querySelector('html')
    HTML.classList.remove('dark','light')

    HTML.classList.add(themeMode)
    
  }, [themeMode])
  

  return (
    <>
      <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
