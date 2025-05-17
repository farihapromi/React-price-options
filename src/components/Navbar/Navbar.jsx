
import React from 'react'
import Links from '../Links/Links';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const routes = [
  { path: '/', id: 1, name: 'Home' },
  { path: '/about', id: 2, name: 'About' },
  { path: '/dashboard', id: 3, name: 'Dashboard' },
  { path: '/login', id: 4, name: 'Login' },
  { path: '/settings', id: 5, name: 'Settings' }
];

  return (
    <nav>
        <IoMdMenu className='text-2xl md:hidden'/>
        <ul className='md:flex'>
            {
                routes.map(route=><Links key={route.id} route={route}></Links>)
            }
        </ul>
    </nav>
  )
}

export default Navbar
