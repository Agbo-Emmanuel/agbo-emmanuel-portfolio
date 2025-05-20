import React, { useState } from 'react'
import './componentsCss/projectCard.css'
import { FaGithubSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import disney_clone_image from "../assets/disney_clone_image.png"
import amazing_healt_care_clinic_image from "../assets/amazing_healt_care_clinic_image.png"
import ngc_image from "../assets/ngc_image.png"
import compassionate_health_care_service_image from "../assets/compassionate_health_care_service_image.png"
import emzy_classic_image from "../assets/emzy_classic_image.png"
import chinex_portfolio_image from "../assets/chinex_portfolio_image.png"
import benjamin_portfolio_image from "../assets/benjamin_portfolio_image.png"

const ProjectCard = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            image: disney_clone_image,
            name: "Disney Home Page Clone",
            githubLink: "https://github.com/Agbo-Emmanuel/Disney-Web",
            link: "https://disney-web-pink.vercel.app/",
            tech: [
                {item: "ReactJS"},
            ]
        },
        {
            id: 2,
            image: amazing_healt_care_clinic_image,
            name: "Amazing Health Care Clinic",
            githubLink: "https://github.com/Agbo-Emmanuel/amazing-health-care-clinic-frontend",
            link: "https://amazing-health-care-clinic-frontend.vercel.app/",
            tech: [
                {item: "ReactJS"},
                {item: "Node JS"},
            ]
        },
        {
            id: 3,
            image: ngc_image,
            name: "NGC Business and Career Fair 2024",
            githubLink: "https://github.com/Agbo-Emmanuel/ngc-bcf",
            link: "https://ngc-bcf.vercel.app/",
            tech: [
                {item: "ReactJS"},
            ]
        },
        {
            id: 4,
            image: benjamin_portfolio_image,
            name: "Benjamin Portfolio",
            githubLink: "https://github.com/Agbo-Emmanuel/benjamin-portfolio",
            link: "https://benjamin-portfolio-ten.vercel.app/",
            tech: [
                {item: "ReactJS"},
            ]
        },
        {
            id: 5,
            image: compassionate_health_care_service_image,
            name: "Compassionate Health Care Service",
            githubLink: "https://github.com/Agbo-Emmanuel/compassionate-health-care-service",
            link: "https://compassionate-health-care-service.vercel.app/",
            tech: [
                {item: "Html"},
                {item: "Css"},
                {item: "Javascript"},
            ]
        },
        {
            id: 6,
            image: emzy_classic_image,
            name: "Emzy Classic Portfolio",
            githubLink: "https://github.com/Agbo-Emmanuel/emezy-classic-arist",
            link: "https://emezy-classic-arist.vercel.app/",
            tech: [
                {item: "ReactJS"},
                {item: "TailwindCss"},
                {item: "Typescript"},
            ]
        },
        {
            id: 7,
            image: chinex_portfolio_image,
            name: "Chinonso Ebere Portfolio",
            githubLink: "https://github.com/Agbo-Emmanuel/chinex-portfolio",
            link: "https://chinex-portfolio.vercel.app/",
            tech: [
                {item: "Html"},
                {item: "Css"},
                {item: "Javascript"},
            ]
        }
    ])

  return (
    <>
        <div className='project_card_body'>
            {
                projects.map((e, index)=>(
                    <div key={index} className='project_card_container'>
                        <div className='project_card_image'>
                            <img src={e.image} alt=''/>
                        </div>
                        <div className='project_card_detail_container'>
                            <p>{e.name}</p>
                            <div className='project_card_detail_icon'>
                                <a href={e.githubLink} target='_blank'><FaGithubSquare cursor="pointer"/></a>
                                <a href={e.link} target='_blank'><FiExternalLink cursor="pointer"/></a>
                            </div>
                        </div>
                        <div className='project_card_technologies'>
                            <p>Technologies used: {e.tech.map((t) => t.item).join(", ")}</p>
                        </div>
                    </div> 
                ))
            }
        </div>
    </>
  )
}

export default ProjectCard