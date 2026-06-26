import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import HomeCourses from '../component/HomeCourses'
import Testimonial from '../component/Testimonial'
  
const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <HomeCourses></HomeCourses>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home