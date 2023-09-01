import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaPython,FaAws} from 'react-icons/fa';
import {SiTypescript} from 'react-icons/Si';
import {TbSql} from 'react-icons/tb';

// Import other icons and define custom images here

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-blue-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="#4995e7" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-300" />,
  },
  {
    name:"Python",
    icon: <FaPython/>
  },
  {
    name:"TypeScript",
    icon:<SiTypescript/> 
  },
  {
    name:"SQL",
    icon:<TbSql/>
  },
  {
    name:"AWS",
    icon:<FaAws/>
  }
];

export const experiences = [
  // ... your experiences array
  {
    name: "Your Experience Namem",
    description:"Describe your experience", 
    date:"Date of your experience",

  },
];

export const photos = [
  {
    name:"Name of your photo",
    description:"Description of the photo",
    date:"Date of the photo",
    image:"URL of the photo image",
  },
  // ... your photos array
];

export const projects = [
  {
    name:"Name of the project",
    description:"Description of the project",
    date:"Date of the projet",
    source:"URL to the source code of the project",
  },
  // ... your projects array
];
