import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Menu from '../components/Menu'
import Reservation from '../components/Reservation'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Menu/>
      <Reservation/>
      <Contact/>
    </div>
  )
}

export default Home
