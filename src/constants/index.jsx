import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import projectImage1 from "../assets/portfolio.png";
import project2 from "../assets/JAudio.png";
import projectImage3 from "../assets/goofy.png";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  {label: "Home", href: "#home"},
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  first: "Maheen",
  last: "Qayyum",
  greet: "Hello there!",
  location: "Toronto, ON",
  school: "3rd Year @ Toronto Metropolitan University",
  degree: "Computer Science Co-op Program (BSc)",
};

export const SOCIAL = [
  {
    href: "https://github.com/maheen453",
    icon: (
      <FaGithub
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/in/maheenq/",
    icon: (
      <FaLinkedin
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
  {
    href: "mailto:qayyummaheen@gmail.com",
    icon: (
      <MdEmail
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/maheen453/portfolio",
  },
  {
    id: 2,
    name: "JAudio",
    description:
      "Terminal based Java music application with store management, playable song lyrics/audiobook text, content download/search/sorting, and playlist creation.",
    image: project2,
    githubLink: "https://github.com/maheen453/JAudio",
  },
  {
    id: 3,
    name: "Goofy Friend",
    description:
      "An AI-powered web-app to bridge the generation gap with slang translation, image captioning, and a chatbot.",
    image: projectImage3,
    githubLink: "https://github.com/maheen453/goofy-friend",
  },
  {
    id: 4,
    name: "Clothing DBMS",
    description:
      "A clothing catabase management system (DBMS) to automate the creation, deletion, population, and querying of inventory, orders, and suppliers",
    image: projectImage4,
    githubLink: "https://github.com/maheen453/clothing-dbms",
  },
  {
    id: 5,
    name: "Goose",
    description:
      "",
    image: projectImage5,
    githubLink: "https://github.com/maheen453/Goose",
  },
  {
    id: 6,
    name: "Scholar Web Scraper",
    description:
      "",
    image: projectImage6,
    githubLink: "https://github.com/maheen453/citco-webscraping",
  },
];

export const BIO = [
  "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
  "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
  "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];
