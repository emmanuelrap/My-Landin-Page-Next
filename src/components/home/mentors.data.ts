import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    link: 'https://famous-chat-zam.netlify.app/',
    photo: '/images/webs/chatfamous.PNG',
    name: 'Famous Chat',
    category: 'openIA MUI React JS ',
    description:
      'It is a web application that connects to an OpenAI API and simulates chatting with the selected celebrity.',
    company: {
      name: 'React',
      logo1: '/images/icons/icon-chatgpt.png',
      logo2: '/images/icons/icon-mui.png',
      logo3: '/images/icons/reactlogo.png',
      logo4: '/images/icons/icon-js.png',
    },
  },
  {
    id: 2,
    link: 'https://peliculas-zam.netlify.app/',
    photo: '/images/webs/webstore.PNG',
    name: 'Movies Store',
    category: 'HTML CSS Animation ReactJS',
    description: 'Basic web page where I consume a movie api and display its information',
    company: {
      name: 'React',
      logo1: '/images/icons/reactlogo.png',
      logo2: '/images/icons/icon-html.png',
      logo3: '/images/icons/icon-css.png',
      logo4: '/images/icons/icon-js.png',
    },
  },
  {
    id: 3,
    link: 'https://pokedex-zam.netlify.app/',
    photo: '/images/webs/pokedex.PNG',
    name: 'Pokedex',
    category: 'HTML CSS ReactJS',
    description: 'web page that consumes an api and renders the data in an attractive way',
    company: {
      name: 'React',
      logo1: '/images/icons/reactlogo.png',
      logo2: '/images/icons/icon-html.png',
      logo3: '/images/icons/icon-css.png',
      logo4: '/images/icons/icon-js.png',
    },
  },
  {
    id: 4,
    link: 'https://chatzam.netlify.app/',
    photo: '/images/webs/chatzam.PNG',
    name: 'Chat Zam',
    category: 'HTML CSS PWA',
    description:
      ' It is a fully downloadable PWA page on any device, as it is a PWA it contains a service worker, cache management, etc',
    company: {
      name: 'PWA',
      logo1: '/images/icons/icon-html.png',
      logo2: '/images/icons/icon-css.png',
      logo3: '/images/icons/icon-pwa.PNG',
    },
  },
]
