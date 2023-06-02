import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    link: 'https://peliculas-zam.netlify.app/',
    photo: '/images/webs/webstore.PNG',
    name: 'Movies Store',
    category: 'HTML CSS Animation ReactJS',
    description: 'Basic web page where I consume a movie api and display its information',
    company: {
      name: 'React',
      logo: '/images/icons/reactlogo.PNG',
    },
  },
  {
    id: 2,
    link: 'https://pokedex-zam.netlify.app/',
    photo: '/images/webs/pokedex.PNG',
    name: 'Pokedex',
    category: 'HTML CSS ReactJS',
    description: 'web page that consumes an api and renders the data in an attractive way',
    company: {
      name: 'React',
      logo: '/images/icons/reactlogo.PNG',
    },
  },
  // {
  //   id: 3,
  //   photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
  //   name: 'Nguyễn Thuy',
  //   category: 'Android Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Airbnb',
  //     logo: '/images/companies/airbnb.png',
  //   },
  // },
  // {
  //   id: 4,
  //   photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
  //   name: 'Rizki Known',
  //   category: 'Fullstack Development',
  //   description:
  //     'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   company: {
  //     name: 'Microsoft',
  //     logo: '/images/companies/microsoft.png',
  //   },
  // },
]
