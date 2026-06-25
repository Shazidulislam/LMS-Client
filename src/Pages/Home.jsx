import React from 'react'
import Navbar from '../component/Navbar'
import Banner from '../component/Banner'
import HomeCourses from '../component/HomeCourses'
// import Banner from '../component/Banner1'

const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <HomeCourses></HomeCourses>
    </div>
  )
}

export default Home