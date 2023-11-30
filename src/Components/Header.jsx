import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Nav from "./Nav"

const Header = () => {
  return (
    <MainHeader>
    <NavLink to="/">
      <img src="./images/logo1.png" className='logo' alt="my logo image" />
    </NavLink>
    <Nav/>
  </MainHeader>
  )
}
const MainHeader = styled.header` 
 height: 8rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 padding-right: 44px;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
}
.logo{
  height: 60px;
  margin-left: 9px
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;
export default Header
