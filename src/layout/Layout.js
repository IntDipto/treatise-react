import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/shared-components/header/Header'
import Footer from '../components/shared-components/footer/Footer'
import { useState } from 'react';
import { useEffect } from 'react';

function Layout() {
  const location = useLocation();
  const [pathName, setPathName] = useState("/");
  useEffect(()=>{
    setPathName(location.pathname)
  },[location.pathname])
  console.log("path name" ,  pathName);
  return (
    <div>
        <div className="">
            <Header></Header>
            <Outlet></Outlet>
            {
              (pathName !== "/login" && pathName !=="/sign-up" && pathName !=="/subscribe-membership") &&
                <Footer></Footer>
            }
            
        </div>
    </div>
  )
}

export default Layout