import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, } from "@tabler/icons-react";
const Info = {
   "name":"Ashish Maulekhi",
   "about":"I'm a passionate software Developer specialized in crafting efficent and scalable solutions, deliver top-notch web application and provide freelancce service that exceed client expections. Let's connect and create something amazing together!",
   "stack":["Full Stack Web Developer","Competitive Programmer","Freelancer","Open Source Contributer"]
   
}
const ProjectInfo=[
   {
   title:"Job Portal",
   desc:"Job Portal is modern, fully responsive job search platform  built using typeScript, Tailwind, MantineUI, SpringBoot, MongoDb offering a seamless connection between job seekers with potential employers. It allows users to create profiles, upload resumes, and search for job listings based on various criteria. Employers can post job openings, review applications, email alerts, application tracking and filter candidates. Job portals make finding and applying for jobs as easy as using the internet. ",
   image:"jobPortal.png",
   live:true,
   technologies:["TypeScript","TailwindCSS","Redux","MantineUI","SpringBoot","MongDb"],
   link:"https://github.com/AshishMaulekhi/",
   github:"https://github.com/AshishMaulekhi/Project-works/",
   },
   {
      title:"Airbnbs Hotel Management System",
      desc:"An Airbnb-style hotel management system helps guests book rooms online easily. It lets hosts list properties, set prices, and manage availability. Guests can search, compare, and reserve rooms based on location and needs. The system includes features like payments, reviews, and booking history. It makes hotel and property management simple, digital, and user-friendly",
      image:"hotel_m.jpg",
      live:false,
      technologies:["TypeScript","TailwindCSS","Redux","MantineUI","SpringBoot","MongDb"],
      link:"https://github.com/AshishMaulekhi/",
      github:"https://github.com/AshishMaulekhi/Project-works/",
   },
   {
      title:"linkedIn MicroService System",
      desc:" A LinkedIn Microservice System breaks the platform into small, independent services. Each service handles a specific feature like profiles, messaging, jobs, or connections. They communicate using APIs to keep the system scalable and maintainable. This architecture improves performance, fault isolation, and development speed. It makes managing a large social network platform efficient and flexible.",
      image:"Microservices.jpg",
      live:true,
      technologies:["TypeScript","TailwindCSS","Redux","MantineUI","SpringBoot","MongDb"],
      link:"https://github.com/AshishMaulekhi/",
      github:"https://github.com/AshishMaulekhi/Project-works/",
   },


]
const SkillInfo = [
   {
       title: "Frontend",
       skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "Material UI"
       ]
   },
   {
       title: "Backend",
       skills: ["Springboot", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
   },
   {
       title: "Languages",
       skills: ["C",  "Java", "JavaScript", "TypeScript"]
   },
   {
       title: "Tools",
       skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
   }
]

const ExperienceInfo = [
   {
       role: "Frontend Devloper",
       company: "MangoOranges",
       date: "Jan 2024 - March 2024 ",
       desc: "I led Frontend development with  React and TypeScript, creating responsive UI and interfaces. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
       skills: [ "React JS", "TypeScript", "Mantine UI","shadcn" ]
   }

]
const socialLinks = [
   { link: "https://github.com/ashishmaulekhi", icon: IconBrandGithub },
   { link: "https://www.linkedin.com/ashishmaulekhi", icon: IconBrandLinkedin },
   { link: "https://www.instagram.com/itz_ashuo12", icon: IconBrandInstagram }, 
   { link: "https://www.leetcode.com/dex", icon: IconBrandLeetcode }
];

const slugs = [
   "typescript",
   "spring",
   "javascript",
   "dart",
   "java",
   "react",
   "angular",
   "flutter",
   "android",
   "html5",
   "css3",
   "springboot",
   "mongodb",
   "selenium",
   "nodedotjs",
   "express",
   "nextdotjs",
   "prisma",
   "mysql",
   "amazonaws",
   "postgresql",
   "firebase",
   "nginx",
   "vercel",
   "testinglibrary",
   "jest",
   "cypress",
   "docker",
   "git",
   "jira",
   "github",
   "gitlab",
   "visualstudiocode",
   "androidstudio",
   "sonarqube",
   "figma",
];

export  {Info,ProjectInfo,SkillInfo,ExperienceInfo,slugs,socialLinks}