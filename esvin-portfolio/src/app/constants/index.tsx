import { FaHtml5, FaCss3Alt, FaJs, FaReact,FaPython,FaAws} from 'react-icons/fa';

// Import other icons and define custom images here

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "photos",
    title: "Photos",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
  // ... your navLinks array

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-blue-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-purple-500" />,
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
    name:"AWS",
    icon:<FaAws/>
  },
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
