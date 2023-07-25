import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa'
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi'

import Work1 from './assets/ciro.jpeg'
import Work2 from './assets/tea-2.jpeg'
import Work3 from './assets/portfolio-3.jpeg'
import Work4 from './assets/reactprojects-4.jpeg'
import Work5 from './assets/social-5.jpeg'
import Work6 from './assets/unsplash-6.jpeg'
import Work7 from './assets/backroads-1.jpeg'

import Theme1 from './assets/purple.png'
import Theme2 from './assets/red.png'
import Theme3 from './assets/blueviolet.png'
import Theme4 from './assets/blue.png'
import Theme5 from './assets/goldenrod.png'
import Theme6 from './assets/magenta.png'
import Theme7 from './assets/yellowgreen.png'
import Theme8 from './assets/orange.png'
import Theme9 from './assets/green.png'
import Theme10 from './assets/yellow.png'

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
]

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Silvia',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Fioroni',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '23 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Italian',
  },

  /*  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  }, */

  {
    id: 6,
    title: 'Address : ',
    description: 'Italy, Pozzuoli, Via Artiaco 108 (NA)',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+39 3772595314',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 's.fioroni99@gmail.com',
  },

  /* {
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  }, */

  {
    id: 10,
    title: 'Languages : ',
    description: 'English, Italian',
  },
]

/* need install html-react-parser for <br> so it will be used */
export const stats = [
  {
    id: 1,
    no: '1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: 'competences',
    title: 'Html, Css, Js, React, Axios, React Query,<br /> Context Api',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  },
]

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Studying <span> React </span>',
    desc: 'Following online courses and resources about React',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'Certification in <span> Html, Css, Javascript </span>',
    desc: 'I have completed online courses through Udemy platform',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022',
    title: 'Graduated in <span> Education Science </span>',
    desc: 'University degree at the University of Bergamo',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title:
      'High school graduation in <span> Health and Social services </span>',
    desc: 'High school degree',
  },

  /*  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  }, */

  /*  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  }, */
]

export const skills = [
  {
    id: 1,
    title: 'Html & Css',
    percentage: '',
  },

  {
    id: 2,
    title: 'Js & Vanilla Js',
    percentage: '',
  },

  {
    id: 3,
    title: 'React & Vite React',
    percentage: '',
  },

  {
    id: 5,
    title: 'React Query',
    percentage: '',
  },
  {
    id: 6,
    title: 'React Router',
    percentage: '',
  },

  {
    id: 7,
    title: 'Axios',
    percentage: '',
  },

  {
    id: 4,
    title: 'Redux',
    percentage: '',
  },

  {
    id: 8,
    title: 'GitHub & GitBash',
    percentage: '',
  },
]

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'SuperCiro',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Status : ',
        desc: 'Currently working on it',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Js - moving to Vite React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://extraordinary-pithivier-777fb7.netlify.app">https://extraordinary-pithivier-777fb7.netlify.app</a>',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Tea Station',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      /*  {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      }, */
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://heartfelt-marzipan-0522fc.netlify.app">https://heartfelt-marzipan-0522fc.netlify.app</a>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Generic Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      /*  {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      }, */
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://imaginative-platypus-083306.netlify.app">https://imaginative-platypus-083306.netlify.app</a>',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Different React Projects',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Websites',
      },
      {
        icon: <FiUser />,
        title: 'Previews : ',
        desc: 'On my Github, Readme.md',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://github.com/SuperBona/React-fundamental-projects">https://github.com/SuperBona/React-fundamental-projects</a>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vite React',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Social App',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'State : ',
        desc: 'Currently working on it',
      },
      {
        title: 'Language : ',
        desc: 'Vite React',
      },
      {
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://endearing-cuchufli-1e0434.netlify.app">https://endearing-cuchufli-1e0434.netlify.app</a>',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Unsplash img',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      /* {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      }, */
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Vite React',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://tubular-dango-81e56b.netlify.app">https://tubular-dango-81e56b.netlify.app</a>',
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Backroads',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      /*   {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      }, */
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html, Css, Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a target=”_blank” href="https://venerable-syrniki-800894.netlify.app">https://venerable-syrniki-800894.netlify.app</a>',
      },
    ],
  },
]

export const themes = [
  {
    id: 1,
    img: Theme1,
    /* color: 'hsl(252, 35%, 51%)', */
    color: '#5a0e1b' /* change img color too!!! */,
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
]
