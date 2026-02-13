import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Chat from './pages/chat'
import Logout from './pages/Logout'

function App() {
    return (
        <Router>
            <Header />
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App