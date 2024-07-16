import project1 from "../assets/portfolioimg1.jpg";
import project2 from "../assets/portimg2.png";
import project3 from "../assets/portimg3.jfif";
import project4 from "../assets/portimg4.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT =`I am a dedicated IT professional with one year of experience working at a reputable IT company. Throughout my time here, I have developed a keen interest in full stack development and have been actively enhancing my skills in this area. My journey in the tech industry has been driven by a passion for learning and an eagerness to explore all facets of technology.I am constantly seeking opportunities to expand my knowledge and expertise, whether it's through hands-on projects, collaboration with colleagues, or staying updated with the latest industry trends. My goal is to become a versatile and proficient developer, capable of tackling challenges across various tech domains.With a strong foundation in both front-end and back-end development, I am enthusiastic about contributing to innovative projects and advancing my career in the ever-evolving tech landscape.`;

export const EXPERIENCES = [{ 
    year:"2023- Present",
    role:"Graduate Engineer Trainee",
    Company:"Jio Platforms Limited",
    
},{
    year:"2019-2020",
    role:"Digital Marketing Intern",
    Company:"Noise Communications Pvt.Ltd",
}];


export const PROJECTS = [
       {
         title: "Portfolio Website",
         image: project1,
         description:
           "A fully functional & responsive website is a comprehensive showcase of my skills, experiences, and projects.",
         technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
       },
    {
             title: "Weather Forecast App",
             image: project2,
             description:
               "The Weather Forecast App is a dynamic and user-friendly application designed to provide accurate and up-to-date weather information for locations around the globe.",
             technologies: ["Express.js","Node.js","HTML", "CSS" ],
           },

           {
            title: "To-Do App",
            image: project3,
            description:
              "The To-Do App is a simple yet powerful tool designed to help users manage their tasks efficiently.",
            technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDb"],
          },
          {
            title: "REST-Ful Blog API",
            image: project4,
            description:
              "The RESTful Blog API is a robust backend service designed to manage blog content seamlessly. This API allows for the creation, retrieval, updating, and deletion (CRUD) of blog posts.",
            technologies: ["HTML", "CSS", "Node.js", "Express", "MongoDb"],
          }        
           
         ];


         export const CONTACT = {
             address: "Kalash Udyan, 400709 , Navi-Mumbai , India",
             phoneNo: "+91 9769704116 ",
             email: "vedchakre28@gmail.com",
           };