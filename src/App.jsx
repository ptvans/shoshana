import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Servicios from './pages/Servicios'
import NewClient from './pages/NewClient'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/new-client" element={<NewClient />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

