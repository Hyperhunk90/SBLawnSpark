import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import ChristmasLights from './pages/ChristmasLights'
import About from './pages/About'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

function App() {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#2D3748" />
        <meta name="msapplication-TileColor" content="#2D3748" />
      </Helmet>
      
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/christmas-lights" element={<ChristmasLights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App