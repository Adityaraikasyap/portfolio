// Skills Section Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import csharpLogo from './assets/tech_logo/csharp.png';

import solidworks from './assets/tech_logo/solidworks.jpg'
import fusion from './assets/tech_logo/fusion-360.png'
import catia from './assets/tech_logo/catia.jpg'
import siemens from './assets/tech_logo/siemens.jpg'
import flexsim from './assets/tech_logo/flex.jpg'
import matlab from './assets/tech_logo/matlab.jpg'
import ansys from './assets/tech_logo/ansys.jpg'
import origin from './assets/tech_logo/origin.jpg'

import threeD from './assets/tech_logo/threeD.jpg'
import cnc from './assets/tech_logo/cnc.png'
import quality from './assets/tech_logo/quality.jpg'
import dmiac from './assets/tech_logo/dmaic.jpg'
import six from './assets/tech_logo/sixsigma.png'

// Experience Section Logo's
import webverseLogo from './assets/company_logo/iit.png';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/clg.png';
import bsaLogo from './assets/education_logo/school.webp';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/quadraped.jpeg';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
//import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/piston.png';
// import webverLogo from './assets/work_logo/web_dig.png';
// import cmLogo from './assets/work_logo/cm.png';
// import imagesearchLogo from './assets/work_logo/image_search.png';
// import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Software',
    skills: [
      { name: 'Solid Works',  logo: solidworks},
      { name: 'Fusion 360', logo:fusion },
      { name: 'Catia V5', logo: catia },
      { name: 'Siemens NX', logo: siemens },
      { name: 'Flexsim', logo: flexsim },
      { name: 'MATLAB', logo: matlab },
      { name: 'Ansys', logo: ansys },
      { name: 'Origin Pro', logo: origin },
      
    ],
  },
  {
    title: 'Manufacturing',
    skills: [
      { name: '3D Printing', logo: threeD },
      { name: 'CNC Machining', logo: cnc },
      { name: 'Quality Control', logo: quality },
      { name: 'DMAIC', logo: dmiac },
      { name: 'Six Sigma', logo: six },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'React', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind', logo: typescriptLogo },
       { name: 'CSS', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Research Intern",
      company: "CERD",
      date: "May 2025 - July 2025",
      desc: "Developed eco-friendly SSCPCMs using beeswax, zeolite, and graphite nanoparticles; achieved leakage prevention,improved thermal conductivity (0.693 W/mK), and stable energy storage performance ( 103 J/g enthalpy) across multiple thermal cycles. Contributed to Sustainable building design research by improving energy efficiency through advanced material integration.",
      skills: [
        "MATLAB",
        "Origin Pro",
        "SolidWorks",
        
      ],
    },
   /* {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Frontend Intern",
      company: "Newton School",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },*/
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "IIIT, Kurnool",
      date: "Nov 2022 - July 2026",
      grade: "7.18 CGPA",
      desc: "I’m a Mechanical Design Engineer passionate about creating innovative and efficient mechanical systems. I’m currently pursuing my studies at IIITDM Kurnool, where I serve as the Design Lead on various technical projects..",
      degree: "Bachelor of Technology (B. Tech.)",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "Mahatma Jyoti Rao Phule Public School, Ghazipur",
      date: "March 2019 - july 2021",
      grade: "92.4%",
      desc: "I completed my class 12 education from Mahatma Jyoti Rao Phule Public School, Ghazipur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
     {
      id: 2,
      img: bsaLogo,
      school: "Mahatma Jyoti Rao Phule Public School, Ghazipur",
      date: "March 2017 - july 2019",
      grade: "84%",
      desc: "I completed my class 10 education from Mahatma Jyoti Rao Phule Public School, Ghazipur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X) - PCM with Computer Science",
     },
    /*{
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },*/
  ];
  
  export const projects = [
    {
      id: 0,
      title: "DEVELOPMENT OF QUADRUPED ROBOT",
      description:
      "Implemented a simulation environment in ROS1 Melodic and Gazebo, integrating URDF models, sensor plugins, and control nodes for testing locomotion algorithms and gait stability.  Spearheaded the end-to-end design of a quadruped robot using SolidWorks, performing structural simulations and optimizing weight distribution, achieving a 15% improvement in stability and efficiency",
      image: githubdetLogo,
      tags: ["Gazebo", "Rviz", "ROS", "Python", "Linux"],
      github: "https://github.com/Adityaraikasyap/Quadruped-robot",
      /*webapp: "https://githubprofiledetective.netlify.app/"*/
    },
    {
      id: 1,
      title: "SOLAR PANEL CLEANER ROBOT",
      description:
      "Implemented sensor fusion and control algorithms for navigation and obstacle avoidance while operating on solar panels. Selected lightweight and durable materials to ensure the rover’s longevity and reduced wear during operation, to increase efficiency",
      image: csprepLogo,
      tags: ["Origin Pro", "Solidworks"],
      github: "https://github.com/Adityaraikasyap/SOLAR-PANNEL-CLEANER-ROVER",
     /* webapp: "https://csprep.netlify.app/"*/
    },
    {
      id: 2,
      title: " AUTOMATED INDUSTRY MODEL USING FLEXSIM ",
      description:
         "Identified bottlenecks and optimized the use of resources like labor, machines, and materials. Deployed Control points to maintain traffic at junctions. Integrated AGVs, Cranes, and Robots to enhance automated systems.",
      image: movierecLogo,
      tags: ["Flexsim", "Origin"],
      github: "https://github.com/Adityaraikasyap/Flexsim",
      /*webapp: "https://movie-recommendation-app-jet.vercel.app/",*/
    },
    {
      id: 3,
      title: "4-STROKE PISTON CYLINDER USING SOLIDWORKS",
      description:
      "Dynamic simulations to ensure Precise integration of piston-cylinder CAD modeling.  Performed FEA and thermal simulations to ensure piston-cylinder performance under operational loads.", 
           image: npmLogo,
      tags: ["SolidWorks","Ansys"],
      // github: "https://drive.google.com/drive/u/2/folders/1zc3i4tDPYfDFzDwFvVTwhpTdJU4CpG0-",
      github: "https://github.com/Adityaraikasyap/4-stroke-piston-cylinder-",
    /*  webapp: "https://www.npmjs.com/package/cmtk-email-validator",*/
    },
   /* {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  
