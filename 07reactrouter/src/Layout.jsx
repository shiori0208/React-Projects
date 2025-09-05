import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Outlet makes layout design possible. makes sure header and footer are on all pages

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> 
    <Footer />
    </>
  )
}

export default Layout