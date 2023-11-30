import React from 'react'
import HeroSection from './Components/HeroSection'
import { useContext } from 'react'
import { useProductContext } from './context/productContext'
// import { AppContext } from './context/productContext';

const About = () => {

  const {myName} = useProductContext();

  const data = {
    name: "Dikesh's Ecommerce"
  }
  return (
    <>
    {myName}
   <HeroSection myData={data}/>
   </>
  )
}

export default About;
