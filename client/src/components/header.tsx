import { FC } from 'react'
import logo from '../img/logo.jpg'


const Header = () => {
  return (
    <div className='bg-amber-800 h-14 flex'>
      <div>
        <a href="/">
          <img className='w-40 h-14' src={logo} alt="" />
        </a>
      </div>
        <a href="/about">Sirkunnan toimintaa</a>
    </div>
  )
}

export default Header