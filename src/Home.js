import React from 'react'
import styled from "styled-components";
import HeroSection from './Components/HeroSection';
import Trusted from './Components/Trusted';
import Service from './Components/Service';
import FeatureProducts from './Components/FeatureProducts';

const Home = () => {
  const data = {
    name: "Dikesh's Store"
  }
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts/>
    <Service/>
    <Trusted/>
    </>
  )
}
// const Wrapper = styled.section`
// background-color: ${({theme})=>theme.colors.bg};
// height: 100vh;
// // width: 20rem;
// // height: 20rem;
// `;

export default Home
