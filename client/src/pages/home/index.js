import React from 'react'
import Header from '../../components/Header'
import Slider from './slider'
import Courses from './courses'
import Maincourses from './maincourses'
import Footer from '../../components/footer'
import Premium from './premium'


function Home() {
  return (
    <div className='flex flex-col sm:w-full'>
        <Header/>
        <div className=' flex flex-col gap-y-12 sm:w-full '>
            <Slider/>

            <Courses/> 

            <Maincourses/>

            <Premium/>

            <Footer/>
        </div>
        
        
    </div>
  )
}

export default Home
