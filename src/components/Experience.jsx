import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from "framer-motion"

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
    <motion.h2 
    initial={{opacity:0 , y:-100}}
    whileInView={{opacity:1 , y:0}}
    transition={{duration:0.7}}
    className="my-20 text-center  text-4xl">Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                    <motion.p 
                    initial={{opacity:0 , y:-100}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:0.7 , delay:0.2}}
                    className="mb-2 text-sm text-neutral-400 lg:ml-24 text-center justify-center">{experience.year}</motion.p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <motion.h6
                    initial={{opacity:0 , y:-100}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:0.7 , delay:0.2}}
                    className="mb-2  font-semibold items-center lg:justify-center">
                      {experience.role} -{" "}
                      <span className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 ml-2 text-sm bg-clip-text text-transparent">
                        {experience.Company}
                      </span>
                    </motion.h6>

                    </div>
                </div>
            ))}
        </div>
    </div>
    
  );
}

export default Experience;
