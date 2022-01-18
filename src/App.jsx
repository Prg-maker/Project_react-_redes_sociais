import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import './index.css'
import { ThemeProvider } from "@material-ui/styles"

import { theme } from "./theme"

import { Home } from "./pages/Home"
import { SingIn } from "./pages/Singin"


function App() {
  console.log(window.location.href)
  const url = window.location.href
  
  return (
    <ThemeProvider theme={theme}>
     
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sing-in" element={<SingIn/>}/>
        <Route path="/*" element={<h1>Page not found - 404</h1>}/>
      </Routes>
    </Router>

    </ThemeProvider>
  )
}

export default App
