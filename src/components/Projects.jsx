import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity: 1 , x:0}}
      initial={{opacity:0 , x:-100 }}
      transition={{duration:0.8}}
      className="my-20 text-center text-4xl">Projects</motion.h2>
      <div className="">{PROJECTS.map((project,index)=>(
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4">
          <motion.img 
          whileInView={{opacity:1 , x:0}}
          initial={{opacity:0 , x:-100}}
          transition={{duration:0.5}}
          src={project.image} 
          width={150} 
          height={150} 
          alt={project.title} 
          className="mb-6 rounded-2xl">
          </motion.img>
          </div>
          <motion.div 
          whileInView={{opacity:1 , x:0}}
          initial={{opacity:0 , x:100}}
          transition={{duration:0.5}}
          className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="text-neutral-400 mb-4">{project.description}</p>
            {project.technologies.map((tech,index)=>(
              <span key={index} className="mr-3  rounded bg-neutral-900 p-2 py-1 text-sm font-medium text-purple-600">{tech}</span>
            ))}
          </motion.div>
           
        </div>
      ))}</div>
    </div>
  )
}

export default Projects