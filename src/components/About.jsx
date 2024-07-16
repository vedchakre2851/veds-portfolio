import { ABOUT_TEXT } from "../constants"
import aboutimg from "../assets/manwithlaptop.jpg";
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
      whileInView={{opacity:1 , y:0}}
      initial={{opacity:0 ,y:-100}}
      transition={{duration: 0.8}}
      className="my-20 text-center text-4xl">About<span className="text-neutral-600"> Me</span></motion.h2>
        <div className="flex flex-wrap">  
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex items-center justify-center">
                    <motion.img 
                    whileInView={{x:0 , opacity:1}}
                    initial={{x:-100 , opacity:0}}
                    transition={{duration:1 , delay:0.1}}
                    className="rounded-2xl w-1/2 h-1/2 " src={aboutimg} alt="about"></motion.img>
                </div>
            
      </div>
      <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <motion.p 
                    whileInView={{x:0 , opacity:1 }}
                    initial={{x:100 , opacity:0 }}
                    transition={{duration:1 , delay:0.1}}
                    className="my-2 max-w-xl py-6  font-light tracking-tighter">{ABOUT_TEXT}</motion.p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
