// First install: npm install react-icons

import { Skill } from '../types';

// Import icons from React Icons
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaJava, FaPython,
  FaGitAlt, FaDocker, FaAws, FaShopify, FaFigma, FaVuejs
} from 'react-icons/fa';

import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiFirebase, 
  SiMysql, SiGraphql, SiRedux, SiJquery, SiThreedotjs, SiTensorflow,
  SiMagento, SiWebpack, SiFramer, SiCanva, SiLaravel, SiAdobephotoshop,
  SiAdobexd, SiAdobeillustrator,
} from 'react-icons/si';

import { 
  TbBrandOpenai
} from 'react-icons/tb';

import { 
  MdApi, MdSettings, MdComputer
} from 'react-icons/md';

export const skills: Skill[] = [
  // Frontend
  {
    id: 1,
    name: 'HTML5',
    icon: FaHtml5,
    iconColor: '#E34F26',
    category: 'frontend'
  },
  {
    id: 2,
    name: 'CSS3',
    icon: FaCss3Alt,
    iconColor: '#1572B6',
    category: 'frontend'
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: FaJs,
    iconColor: '#F7DF1E',
    category: 'frontend'
  },
  {
    id: 4,
    name: 'React',
    icon: FaReact,
    iconColor: '#61DAFB',
    category: 'frontend'
  },
  {
    id: 5,
    name: 'Vue.js',
    icon: FaVuejs,
    iconColor: '#4FC08D',
    category: 'frontend'
  },
  {
    id: 6,
    name: 'TypeScript',
    icon: SiTypescript,
    iconColor: '#3178C6',
    category: 'frontend'
  },
  {
    id: 7,
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    iconColor: '#06B6D4',
    category: 'frontend'
  },
  {
    id: 8,
    name: 'jQuery',
    icon: SiJquery,
    iconColor: '#0769AD',
    category: 'frontend'
  },
  {
    id: 9,
    name: 'Three.js',
    icon: SiThreedotjs,
    iconColor: '#000000',
    category: 'frontend'
  },

  // Backend
  {
    id: 10,
    name: 'Node.js',
    icon: FaNodeJs,
    iconColor: '#339933',
    category: 'backend'
  },
  {
    id: 11,
    name: 'Express.js',
    icon: SiExpress,
    iconColor: '#000000',
    category: 'backend'
  },
  {
    id: 12,
    name: 'MongoDB',
    icon: SiMongodb,
    iconColor: '#47A248',
    category: 'backend'
  },
  {
    id: 13,
    name: 'MySQL',
    icon: SiMysql,
    iconColor: '#4479A1',
    category: 'backend'
  },
  {
    id: 14,
    name: 'Firebase',
    icon: SiFirebase,
    iconColor: '#FFCA28',
    category: 'backend'
  },
  {
    id: 15,
    name: 'GraphQL',
    icon: SiGraphql,
    iconColor: '#E10098',
    category: 'backend'
  },
  {
    id: 16,
    name: 'PHP',
    icon: FaPhp,
    iconColor: '#777BB4',
    category: 'backend'
  },
  {
    id: 17,
    name: 'Laravel',
    icon: SiLaravel,
    iconColor: '#FF2D20',
    category: 'backend'
  },
  {
    id: 18,
    name: 'Java',
    icon: FaJava,
    iconColor: '#ED8B00',
    category: 'backend'
  },
  {
    id: 19,
    name: 'Python',
    icon: FaPython,
    iconColor: '#3776AB',
    category: 'backend'
  },
  {
    id: 20,
    name: 'TensorFlow',
    icon: SiTensorflow,
    iconColor: '#FF6F00',
    category: 'backend'
  },
  {
    id: 21,
    name: 'Magento',
    icon: SiMagento,
    iconColor: '#EE672F',
    category: 'backend'
  },
  {
    id: 22,
    name: 'Shopify',
    icon: FaShopify,
    iconColor: '#7AB55C',
    category: 'backend'
  },
  {
    id: 23,
    name: 'REST APIs',
    icon: MdApi,
    iconColor: '#FF6B6B',
    category: 'backend'
  },

  // Design
  {
    id: 24,
    name: 'Figma',
    icon: FaFigma,
    iconColor: '#F24E1E',
    category: 'design'
  },
  {
    id: 25,
    name: 'Adobe XD',
    icon: SiAdobexd,
    iconColor: '#FF61F6',
    category: 'design'
  },
  {
    id: 26,
    name: 'Photoshop',
    icon: SiAdobephotoshop,
    iconColor: '#31A8FF',
    category: 'design'
  },
  {
    id: 27,
    name: 'Framer',
    icon: SiFramer,
    iconColor: '#0055FF',
    category: 'design'
  },
  {
    id: 28,
    name: 'Canva',
    icon: SiCanva,
    iconColor: '#00C4CC',
    category: 'design'
  },

  // Other/Tools
  {
    id: 29,
    name: 'Git',
    icon: FaGitAlt,
    iconColor: '#F05032',
    category: 'other'
  },
  {
    id: 30,
    name: 'Docker',
    icon: FaDocker,
    iconColor: '#2496ED',
    category: 'other'
  },
  {
    id: 31,
    name: 'AWS',
    icon: FaAws,
    iconColor: '#232F3E',
    category: 'other'
  },
  {
    id: 32,
    name: 'Webpack',
    icon: SiWebpack,
    iconColor: '#8DD6F9',
    category: 'other'
  },
  {
    id: 33,
    name: 'Redux',
    icon: SiRedux,
    iconColor: '#764ABC',
    category: 'other'
  },
  {
    id: 34,
    name: 'DevOps',
    icon: MdSettings,
    iconColor: '#326CE5',
    category: 'other'
  },
  {
    id: 35,
    name: 'OpenAI',
    icon: TbBrandOpenai,
    iconColor: '#000000',
    category: 'other'
  },
  {
    id: 36,
    name: 'Adobe Illustrator',
    icon: SiAdobeillustrator,
    iconColor: '#FF9A00',
    category: 'design'
  }

];