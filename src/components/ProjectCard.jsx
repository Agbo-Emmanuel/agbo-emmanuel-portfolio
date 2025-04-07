import React, { useState } from 'react'
import './componentsCss/projectCard.css'
import { FaGithubSquare } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {

    const [projects, setProjects] = useState([
        {
            id: 1,
            image: "",
            name: "Advice Box",
            githubLink: "",
            link: "",
            tech: [
                {item: "ReactJS"},
                {item: "TailwindCSS"},
                {item: "Advice Pill API"},
            ]
        },
        {
            id: 2,
            image: "",
            name: "Advice Box",
            githubLink: "",
            link: "",
            tech: [
                {item: "ReactJS"},
                {item: "TailwindCSS"},
                {item: "Advice Pill API"},
            ]
        },
        {
            id: 3,
            image: "",
            name: "Advice Box",
            githubLink: "",
            link: "",
            tech: [
                {item: "ReactJS"},
                {item: "TailwindCSS"},
                {item: "Advice Pill API"},
            ]
        }
    ])

  return (
    <>
        <div className='project_card_body'>
            {
                projects.map((e)=>(
                    <div className='project_card_container'>
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