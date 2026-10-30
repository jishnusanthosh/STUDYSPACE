
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
