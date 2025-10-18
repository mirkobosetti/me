import projectPortfolio from '@/assets/images/project_portfolio.png'
import projectDrinkando from '@/assets/images/project_drinkando.png'
import projectKingmaker from '@/assets/images/project_kingmaker.png'
import projectCarAI from '@/assets/video/project_carai.mov'
import projectStreetsAI from '@/assets/video/project_streetsai.mov'
import projectPixelliniSbarazzini from '@/assets/images/project_pixellini_sbarazzini.png'

export interface ProjectDetail {
  name: string
  tagline: string
  description: string
  media: string
  technologies: string[]
  features: string[]
  links?: {
    live?: string
    github?: string
    demo?: string
  }
  category: string
  date: string
}

export const projectsDetailData: Record<string, ProjectDetail> = {
  'pixellini-sbarazzini': {
    name: 'Pixellini Sbarazzini',
    tagline: 'Interactive Particle Image Effect',
    description:
      'An interactive web-based particle system that deconstructs images into thousands of dynamic, physics-enabled pixels. Built with TypeScript and the HTML5 Canvas API, this project transforms static imagery into an engaging, responsive visual experience where users can interact with individual particles through mouse movements and touch gestures.',
    media: projectPixelliniSbarazzini,
    category: 'Interactive Art',
    date: '2024',
    technologies: ['TypeScript', 'Canvas API', 'Particle Systems', 'Physics Simulation', 'Vite'],
    features: [
      'Image-to-particle conversion with configurable density (2-15 pixel gaps)',
      'Advanced physics simulation with velocity, friction (0.8-0.99), and elastic ease-back (0.005-0.10)',
      'Real-time interactive controls for mouse radius (500-15000), force strength (0.1-3.0x), and particle size (1-10px)',
      'Radial force fields that repel particles from cursor position',
      'Warp and reset functions for dynamic particle redistribution',
      'Fully responsive design with touch support and collapsible control panel',
      '60 FPS animation loop using requestAnimationFrame',
      'Object-oriented architecture with dedicated Particle and Effect classes',
      'Mobile-optimized with adaptive layouts for different screen sizes',
      'Modern UI with glassmorphism effects and gradient styling'
    ],
    links: {
      live: 'https://pixels.mirkobosetti.com',
      github: 'https://github.com/mirkobosetti/pixellini-sbarazzini'
    }
  },
  'portfolio-website': {
    name: 'Portfolio Website',
    tagline: 'Personal portfolio showcasing my work and skills',
    description:
      'A modern, responsive portfolio website built with Vue.js and Tailwind CSS. Features smooth animations, optimized performance, and a clean design that puts my work front and center.',
    media: projectPortfolio,
    category: 'Web Development',
    date: '2024',
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Vite'],
    features: [
      'Fully responsive design that works on all devices',
      'Component-based architecture for maintainability',
      'Interactive project showcase',
      'Optimized performance with lazy loading',
      'SEO-friendly structure',
      'Accessible to all users'
    ],
    links: {
      github: 'https://github.com/mirkobosetti/portfolio'
    }
  },
  drinkando: {
    name: 'Drinkando',
    tagline: 'Late Night Game with Friends',
    description:
      'A fun interactive drinking game app designed for parties and social gatherings. Built with Vue.js and features a clean, intuitive interface perfect for late-night entertainment with friends.',
    media: projectDrinkando,
    category: 'Entertainment',
    date: '2024',
    technologies: ['Vue.js', 'Pinia', 'Tailwind CSS'],
    features: [
      'Multiple game modes and challenges',
      'Customizable rules and settings',
      'Player management system',
      'Responsive design for mobile play',
      'State management with Pinia',
      'Fun animations and sound effects'
    ],
    links: {
      demo: 'https://drinkando.example.com'
    }
  },
  kingmaker: {
    name: 'Kingmaker',
    tagline: 'Pathfinder: Kingmaker - Game Assistant',
    description:
      'A comprehensive companion app for the Pathfinder: Kingmaker RPG. Helps players manage characters, track kingdom stats, and enhance their gaming experience with quick reference tools and calculators.',
    media: projectKingmaker,
    category: 'Gaming Tools',
    date: '2024',
    technologies: ['Vue.js', 'Pinia', 'MongoDB', 'Node.js'],
    features: [
      'Character sheet management',
      'Kingdom building tracker',
      'Combat calculator and initiative tracker',
      'Spell and ability quick reference',
      'Campaign progress tracking',
      'Cloud save with MongoDB integration'
    ],
    links: {
      github: 'https://github.com/mirkobosetti/kingmaker'
    }
  },
  carai: {
    name: 'CarAI',
    tagline: 'AI-Powered Car',
    description:
      'A sophisticated self-driving car simulation powered by neural networks and genetic algorithms. Watch as 100 AI-controlled cars learn to navigate traffic, avoid obstacles, and improve their driving skills through evolutionary learning.',
    media: projectCarAI,
    category: 'AI Learning',
    date: '2022',
    technologies: ['Typescript', 'Vite'],
    features: [
      'Ray-casting sensors: 7 rays with 200px detection range',
      'Real-time visualization: Neural network activity display',
      'Traffic simulation: Dynamic obstacle generation',
      'Auto-save: Best brain persists across sessions',
      'Performance tracking: Distance, generation, and stats display',
      'Pause/Resume: Full simulation control',
      'Speed control: 1x, 2x, 5x simulation speeds'
    ],
    links: {
      live: 'https://mirkobosetti.github.io/CarAI/',
      github: 'https://github.com/mirkobosetti/carai'
    }
  },
  streetsai: {
    name: 'StreetsAI',
    tagline: 'Autonomous Driving with Real-World Maps',
    description:
      'An advanced AI-powered city and self-driving car simulator featuring procedurally generated cities and real-world map integration via OpenStreetMap. Neural networks learn to navigate complex urban environments with realistic traffic patterns, road networks, and dynamic obstacles.',
    media: projectStreetsAI,
    category: 'AI Learning',
    date: '2024',
    technologies: ['TypeScript', 'Canvas API', 'Neural Networks', 'OpenStreetMap API'],
    features: [
      'Procedural city generation with realistic road networks',
      'Real-world map integration using OpenStreetMap data',
      'Advanced neural network visualization and monitoring',
      'Interactive map editor with building and road creation',
      'Minimap system with zoom and pan controls',
      'Ray-casting based collision detection',
      'Multiple camera modes and perspectives',
      'Traffic simulation with dynamic vehicles',
      'Save/Load system for maps and AI brains',
      'Real-time performance metrics and statistics'
    ],
    links: {
      live: 'https://streetsai.mirkobosetti.com',
      github: 'https://github.com/mirkobosetti/StreetsAI'
    }
  }
}
