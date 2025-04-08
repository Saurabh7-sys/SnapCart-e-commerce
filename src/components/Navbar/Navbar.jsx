import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from '../../assets/logo.png';
const Navbar = () => {
  return (
    <>
      <nav>
      <h1>
      <img src={Logo} alt="logo"/></h1>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/about'}>About us</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

        <span className='cart-icons'>
          <FaUser id='user' size={"25px"}/>
          <FaShoppingCart id='cart' size={"25px"}/>
        </span>
      </nav>
    </>
  )
}

export default Navbar
