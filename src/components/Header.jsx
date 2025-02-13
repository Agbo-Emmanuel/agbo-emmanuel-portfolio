import React from 'react'
import './componentsCss/header.css'
import { NavLink } from 'react-router-dom'
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className='header_body'>
        <div className='header_logo_container'>
          <h3>Agbor<span>e</span>x</h3>
        </div>
        <div className='header_nav_container'>
          <NavLink to="/" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>About</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? "menuActive" : "menuNotActive"}>Projects</NavLink>
          <a className='menuNotActive' href=''>Resume</a>
        </div>
        <div className='header_nav_container'>
          <FaGithubSquare size={36} color='#fff'/>
          <a className='header_contact_me_btn' href=''>Contact me</a>
        </div>
      </div>
    </>
  )
}

export default Header