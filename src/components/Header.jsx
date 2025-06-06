import React, { useState } from 'react'
import './componentsCss/header.css'
import { NavLink } from 'react-router-dom'
import { FaGithubSquare } from "react-icons/fa";
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className='header_body'>
        <div className='header_logo_container'>
          <h3>Agbor<span>e</span>x</h3>
        </div>
        <div className='header_nav_container'>
          <NavLink to="/" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>About</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Skills</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Projects</NavLink>
          {/* <a className='menuNotActive' href=''>Resume</a> */}
        </div>
        <div className='header_nav_container'>
          <a href='https://github.com/Agbo-Emmanuel' target='_blank'><FaGithubSquare size={36} color='#fff'/></a>
          <a className='header_contact_me_btn' href=''>Contact me</a>
        </div>
        <div className='bugger_menu_icon' onClick={()=>setShowMenu(!showMenu)}>
          {
            showMenu ? <IoMdClose/> : <IoMdMenu/>
          }
        </div>
      </div>
    </>
  )
}

export default Header