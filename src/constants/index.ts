import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  beyondsoft,
  kuiniu,
  zhongzai,
  carrent,
  jobit,
  tripguide,
  threejs
} from '../assets'

export const selfEvaluation = [
  ['Hi, I\'m', 'Camel_y'],
  'I\'m a front-end developer',
  'I specialize in developing management systems, user interfaces and web applications.'
]

export const navLinks: Array<{id: string, title: string}> = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Performance Optimizations',
    icon: mobile
  },
  {
    title: 'Arithmetic',
    icon: backend
  },
  {
    title: 'UI/UX Designer',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'chongqing kuiniu',
    icon: kuiniu,
    iconBg: '#383E56',
    date: 'Jul 2018 - Feb 2019',
    points: [
      'Developing in-house projects using Jquery, HTML, CSS and JavaScript.',
      'Collaborate with team members such as project managers, UI designers, back-end development engineers and front-end development front-end development engineers to develop high-quality projects.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Managing project code with git.'
    ]
  },
  {
    title: 'Frontend Developer',
    company_name: 'zhongzai yuntu',
    icon: zhongzai,
    iconBg: '#E6DEDD',
    date: 'Mar 2019 - Oct 2029',
    points: [
      'Developing in-house projects using VUE and other tools.',
      'Collaborate with team members such as project managers, UI designers, back-end development engineers and front-end development front-end development engineers to develop high-quality projects.',
      'Writing Custom VUE Components.',
      'Managing project code with git.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Beyond soft',
    icon: beyondsoft,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing in-house projects using VUE and other tools.',
      'Collaborate with team members such as project managers, UI designers, back-end development engineers and front-end development front-end development engineers to develop high-quality projects.',
      'Build front-end project architecture, write custom VUE components and write test cases.',
      'Code review and collaborating with front-end colleagues to solve tough problems.',
      'Managing project code with git.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
]

export { services, technologies, experiences, testimonials, projects }
