import React from 'react'
import Navbar from '../component/Navbar'
import AboutContent from '../component/AboutContent'
import Footer from '../component/Footer'
import AboutTeam from '../component/AboutTeam'

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
        <AboutContent></AboutContent>
        <AboutTeam></AboutTeam>
        <Footer></Footer>
    </div>
  )
}

export default About