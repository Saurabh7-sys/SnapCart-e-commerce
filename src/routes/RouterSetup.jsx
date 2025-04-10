import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Cart from '../components/Cart/Cart'


const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='cart' element={<Cart/>}/>
        </Route>
      </Routes>
    </Router>
  )
} 

export default RouterSetup
