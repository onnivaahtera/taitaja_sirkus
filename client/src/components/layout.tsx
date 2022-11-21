import { FC } from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'


const Layout: FC= () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Layout