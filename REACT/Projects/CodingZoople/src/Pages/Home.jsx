import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Signup from '../Components/SignUp/Signup'






const Home = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Signup></Signup>
      
      <Hero></Hero>
      <Footer></Footer>


    </div>
  )
}



export default Home