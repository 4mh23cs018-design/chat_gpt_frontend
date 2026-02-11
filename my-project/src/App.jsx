import { BrowserRouter as Router, Routes, Route, Link, Links } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (  
    <Router>
      <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App