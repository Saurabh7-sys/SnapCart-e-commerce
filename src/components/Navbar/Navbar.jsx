import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaUser, FaShoppingCart, FaTimes, FaBars } from "react-icons/fa";
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseLi = () => {
    setSidebarOpen(false)
  }


  return (
    <>
      <nav className='desktop-nav'>
        <h1>
          <img src={Logo} alt="logo" /></h1>

        <div onClick={() => setSidebarOpen(!sidebarOpen)} className='Hamburger-icons'>
          {sidebarOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul className='desktop-ul'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/about'}>About us</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>

        <span className='cart-icons'>
          <FaUser id='user' size={"25px"} />
          <Link to={'/cart'}><FaShoppingCart id='cart' size={"25px"} /></Link>
        </span>
      </nav>

        <nav  className={`mobile-nav ${sidebarOpen ? "display-block" : "display-none"}`}>

        <ul className='mobile-ul'>
          <li><Link onClick={handleCloseLi} to={'/'}>Home</Link></li>
          <li><Link onClick={handleCloseLi} to={'/products'}>Products</Link></li>
          <li><Link onClick={handleCloseLi} to={'/about'}>About us</Link></li>
          <li><Link onClick={handleCloseLi} to={'/contact'}>Contact</Link></li>
        <span className='cart-icons-mobile'>
          <FaUser id='user' size={"25px"} />
          <FaShoppingCart id='cart' size={"25px"} />
        </span>
        </ul>
        </nav>


    </>
  )
}

export default Navbar
