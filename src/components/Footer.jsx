import React from 'react'
import './componentsCss/footer.css'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='footer_body'>
      <p>© 2025 All Right Reserved</p>
      <div className='footer_link_container'>
        <a href='https://github.com/Agbo-Emmanuel' target='_blank'><FaGithubSquare cursor="pointer"/></a>
        <a href='https://www.instagram.com/agborexx/' target='_blank'><FaInstagramSquare cursor="pointer"/></a>
        <a href='https://x.com/agborex' target='_blank'><FaSquareXTwitter cursor="pointer"/></a>
        <a href='https://www.linkedin.com/in/agbo-emmanuel-b88035344/' target='_blank'><FaLinkedin cursor="pointer"/></a>
      </div>
    </div>
  )
}

export default Footer