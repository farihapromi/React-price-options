
import React ,{useState} from 'react'
import Links from '../Links/Links';
import { IoMdMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false)
  const routes = [
  { path: '/', id: 1, name: 'Home' },
  { path: '/about', id: 2, name: 'About' },
  { path: '/dashboard', id: 3, name: 'Dashboard' },
  { path: '/login', id: 4, name: 'Login' },
  { path: '/settings', id: 5, name: 'Settings' }
];

  return (
    <nav className='text-black p-6 bg-blue-200'>
        <div  className='md:hidden text-2xl'onClick={()=>setMenuOpen(!menuOpen)}>

            {
                menuOpen===true?
                <IoCloseOutline/>:
                <IoMdMenu className=' '/>

            }
             

        </div>
       
        <ul className={`md:flex absolute  md:static duration-1000
        ${menuOpen?'top-16':'-top-60'}
              `}>
            {
                routes.map(route=><Links key={route.id} route={route}></Links>)
            }
        </ul>
    </nav>
  )
}

export default Navbar
