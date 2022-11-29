import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared-components/header/Header'
import Footer from '../components/shared-components/footer/Footer'

function Layout() {
  return (
    <div>
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Layout