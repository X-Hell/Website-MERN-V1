import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      <Router>
        <Routes>
          <Route path='/blog' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default app