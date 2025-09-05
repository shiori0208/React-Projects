import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header />
    <Outlet /> //makes layout design possible. makes sure header and footer are on all pages
    <Footer />
    </>
  )
}

export default Layout