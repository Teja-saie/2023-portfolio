import React from 'react'
import {NavLink} from "react-router-dom"



const Menu = () => {
  return (
    <div>
        <nav className='flex space-x-4'>
        <NavLink to="/" className={({ isActive }) =>   isActive ? 'bg-slate-100' : undefined} >Home</NavLink>
        <NavLink to="/resume/" className={({ isActive }) =>   isActive ? 'activeStyle' : undefined} >Resume</NavLink>
        <NavLink to="/contact/" className={({ isActive }) =>   isActive ? 'activeStyle' : undefined} >Contact</NavLink>
        </nav>
    </div>
  )
}

export default Menu