import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
// import Products from '../pages/Products/Products'
import { ProductContextProvider } from '../context/ProductContext'

const Layout = () => {
  return (
    <ProductContextProvider>
    <div className="page-wrapper">
      <Navbar />
      
      <main className="content" style={{display: "flex", flexDirection:"column"}}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
    </ProductContextProvider>
  )
}

export default Layout
