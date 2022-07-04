import React from 'react'
import {Outlet} from 'react-router-dom'
import {Header, Footer} from './Components'

export default function Layout({recentVersion}) {
  return (
    <>
      <Header recentVersion={recentVersion}/>
      <Outlet/>     
      <Footer/>
    </>
  ) 
}