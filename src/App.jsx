import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Capmus from './Components/Capmus/Capmus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Pragram' title='What We Offer' />
        <Programs />
        <About/>
        <Title subTitle='Gallery' title='Capmus Photo' />
        <Capmus/>
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact/>

        <Footer/>
      </div>

    </div>

  ) 
}

export default App
