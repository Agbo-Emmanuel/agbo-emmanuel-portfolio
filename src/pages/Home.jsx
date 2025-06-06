import React from 'react'
import './pagesCss/home.css'
import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import ProjectCard from '../components/ProjectCard';
import main_image from '../assets/main_image2.jpeg';


const Home = () => {
  return (
    <main className='home_body'>
      <section className='hero_section_body'>
        <article className='hero_text_section'>
          <p>Welcome to my site</p>
          <h1>Hi, I'm Agbo Emmanuel, a <span>Frontend developer</span></h1>
          <p>
            I am a Dedicated Frontend Developer with 2+years of experience in software 
            development,specializing in building responsive and user-friendly web applications. 
            Proficient in modern frameworks and technologies, I focus on creating seamless user experiences and optimized performance.
          </p>
          <div className='hero_button_container'>
            <button><p>Download Resume</p><MdOutlineFileDownload size={20} color='#fff'/></button>
            <button><p>See My Projects</p></button>
          </div>
        </article>
        <article className='hero_image_section_body'>
          <img src={main_image} alt=''/>
        </article>      
      </section>
      <section className='tech_skill_section'>
        <article className='tech_skill_text_container'>
          <h3>My Tech Skills</h3>
          <p>Explore My Programming Skills</p>
        </article>
        <article className='tech_skill_items_container'>
          <div className='tech_skill'>
            <FaHtml5 color='#fff'/>
            <p>Html</p>
          </div>
          <div className='tech_skill'>
            <FaCss3Alt color='#fff'/>
            <p>Css</p>
          </div>
          <div className='tech_skill'>
            <IoLogoJavascript color='#fff'/>
            <p>Javascript</p>
          </div>
          <div className='tech_skill'>
            <FaReact color='#fff'/>
            <p>React</p>
          </div>
          <div className='tech_skill'>
            <RiTailwindCssFill color='#fff'/>
            <p>Tailwind</p>
          </div>
          <div className='tech_skill'>
            <FaGitAlt color='#fff'/>
            <p>Git</p>
          </div>
          <div className='tech_skill'>
            <FaGithubSquare color='#fff'/>
            <p>Github</p>
          </div>
        </article>
      </section>
      <section className='home_project_section'>
        <article className='home_project_section_top'>
          <h3>My Projects</h3>
          <p>view some of my projects</p>
        </article>
        <article className='home_project_section_bottom'>
          <ProjectCard/>
        </article>
      </section>
      <section className='home_contact_section'>
        <article className='home_contact_section_top'>
          <h3>Get In Touch</h3>
          <p>Contact me let's work together</p>
        </article>
        <article className='home_contact_section_bottom'>
          <input type='text' placeholder='Your Name/Company'/>
          <input type='text' placeholder='Your Email'/>
          <textarea type='text' placeholder='Message'/>
          <button>Contact</button>
        </article>
      </section>
    </main>
  )
}

export default Home