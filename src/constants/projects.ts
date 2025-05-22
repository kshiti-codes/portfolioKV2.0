import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce website with product management, cart functionality, and secure checkout process.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'E-commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Real Estate Listing App',
    description: 'A property listing platform allowing users to search, filter, and view detailed information about properties.',
    image: 'https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Application',
    technologies: ['React', 'Firebase', 'Google Maps API'],
    link: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Restaurant Website',
    description: 'A beautiful website for a local restaurant featuring menu, online ordering, and reservation system.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Business',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    link: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Fitness Tracking Dashboard',
    description: 'A comprehensive fitness tracking application with workout plans, progress tracking, and nutrition guidance.',
    image: 'https://images.pexels.com/photos/669582/pexels-photo-669582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Application',
    technologies: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
    link: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Creative Agency Website',
    description: 'A dynamic website for a creative agency showcasing their portfolio, services, and team members.',
    image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Business',
    technologies: ['React', 'GSAP', 'Tailwind CSS'],
    link: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Task Management App',
    description: 'A collaborative task management tool with user authentication, task assignments, and real-time updates.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Application',
    technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
    link: '#',
    featured: false
  }
];