import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    link: 'https://famous-chat-zam.netlify.app/',
    photo: '/images/webs/chatfamous.PNG',
    name: 'Famous Chat',
    category: 'openIA - MUI - React - JS ',
    description:
      'It is a web application that connects to an OpenAI API and simulates chatting with the selected celebrity, try this, its sooo fun!',
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
    link: 'https://zam-cats.netlify.app',
    photo: '/images/webs/webcats.PNG',
    name: 'App Cats',
    category: 'HTML - Responsive - Fetch-API - JS - MUI',
    description:
      ' It is a simple but very useful and fun web application where you can get images of cute cats with written texts. You can download the Image.',
    company: {
      name: 'React',
      logo1: '/images/icons/icon-html.png',
      logo2: '/images/icons/reactlogo.png',
      logo3: '/images/icons/icon-js.png',
      logo4: '/images/icons/icon-mui.png',
    },
  },
  {
    id: 3,
    link: 'https://pokedex-zam.netlify.app/',
    photo: '/images/webs/pokedex.PNG',
    name: 'Pokedex',
    category: 'HTML - CSS - ReactJS',
    description:
      'web page that consumes an pokemon api and renders the data in an attractive way, its about pokemon for pretty presentation. ',
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
    link: 'https://peliculas-zam.netlify.app/',
    photo: '/images/webs/webstore.PNG',
    name: 'Movies Store',
    category: 'HTML - CSS - Animation - ReactJS',
    description:
      'This project is a Basic web page where  consume a movie api and display its information, the page have a basic CSS animations.',
    company: {
      name: 'React',
      logo1: '/images/icons/reactlogo.png',
      logo2: '/images/icons/icon-html.png',
      logo3: '/images/icons/icon-css.png',
      logo4: '/images/icons/icon-js.png',
    },
  },

  {
    id: 5,
    link: 'https://chatzam.netlify.app/',
    photo: '/images/webs/chatzam.PNG',
    name: 'Chat Zam',
    category: 'HTML - CSS - PWA',
    description:
      ' It is a fully downloadable PWA page on any device, as it is a PWA it contains a service worker, cache management, Responsive desing, etc.',
    company: {
      name: 'PWA',
      logo1: '/images/icons/icon-html.png',
      logo2: '/images/icons/icon-css.png',
      logo3: '/images/icons/icon-pwa.PNG',
    },
  },
]
