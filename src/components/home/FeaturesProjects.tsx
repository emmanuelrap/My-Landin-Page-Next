/* eslint-disable @next/next/no-img-element */
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React, { FC } from 'react'
import Carousel from 'react-material-ui-carousel'
import GradeIcon from '@mui/icons-material/Grade'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Image from 'next/image'

interface Exp {
  label: string
  value: string
  photo: string
}
interface ExpItemProps {
  item: Exp
}

const elements1: Array<Exp> = [
  {
    label: 'Java, JS, JSX, TypeScript, Kotlin ',
    value: 'PROGRAMMER',
    photo: '/images/juegorol1.PNG',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'FRONTEND',
    photo: '/images/juegorol2.PNG',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'BACKEND',
    photo: '/images/juegorol3.PNG',
  },
]

const elements2: Array<Exp> = [
  {
    label: 'Java, JS, JSX, TypeScript, Kotlin ',
    value: 'PROGRAMMER',
    photo: '/images/ecomerse1.PNG',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'FRONTEND',
    photo: '/images/ecomerse2.PNG',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'BACKEND',
    photo: '/images/ecomerse3.PNG',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'FRONTEND',
    photo: '/images/ecomerse4.PNG',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'BACKEND',
    photo: '/images/ecomerse5.PNG',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'FRONTEND',
    photo: '/images/ecomerse6.PNG',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'BACKEND',
    photo: '/images/ecomerse7.PNG',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'FRONTEND',
    photo: '/images/ecomerse8.PNG',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'BACKEND',
    photo: '/images/ecomerse.PNG',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  const imageStyle = {
    borderRadius: '2%',
  }

  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }} id="section0">
      <Image src={item.photo as string} width={800} height={500} style={imageStyle}></Image>
      {/* <Typography color="text.secondary" variant="h4">
        {label}
      </Typography> */}
    </Box>
  )
}
const FeaturesProjects: FC = () => {
  return (
    <Box
      sx={{
        mt: 2.5,
        // mx: { xs: 0, md: 15 },

        backgroundColor: '#ecf3f3',

        py: { xs: 4, md: 10 },
        //   px: { xs: 4, md: 8 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ position: 'relative', fontSize: 40, textAlign: 'left' }} id="section3">
          <FavoriteIcon sx={{ width: 30, height: 30 }} /> Feature Projects
        </Typography>
        {/* ECOMERSE */}
        <Box>
          <Carousel
            sx={{ width: '100%' }}
            stopAutoPlayOnHover={false}
            autoPlay={true}
            animation="fade"
            duration={1000}
            interval={3000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
          >
            {elements2.map((item) => (
              <Grid key={item.value}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Carousel>
          <Box sx={{ mt: 1 }}>
            <img src={'./images/icons/icon-mui.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/reactlogo.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/icon-js.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/icon-chatgpt.png'} alt={'React'} height={'30px'} />
            <Typography color="text.secondary" variant="h5" sx={{ mt: 0 }}>
              <a href="https://zam-ecommerce-demo.netlify.app/#/">https://zam-ecommerce-demo.netlify.app/#/</a>
            </Typography>
          </Box>
          <Typography
            color="text.secondary"
            variant="h4"
            sx={{ mt: 3, mx: { xl: 20, lg: 15, md: 10, sm: 5, xs: 0 } }}
            align="justify"
          >
            This web application is a fully functional PWA, its my personal project and applies everything I have
            learned. It uses React and Vite, implemented with the assistance of UI-material components. It includes a
            functional REST API structure and has sections for product and user administration. It utilizes MongoDB and
            third-party services like Firebase and Oauth
          </Typography>
        </Box>
        <br />
        <hr />
        <br />
        {/* GAME IA */}
        <Box>
          <Carousel
            sx={{ width: '100%' }}
            stopAutoPlayOnHover={false}
            autoPlay={true}
            animation="fade"
            duration={1000}
            interval={3000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
          >
            {elements1.map((item) => (
              <Grid key={item.value}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Carousel>
          <Box sx={{ mt: 1 }}>
            <img src={'./images/icons/icon-mui.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/reactlogo.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/icon-js.png'} alt={'React'} height={'35px'} />
            <img src={'./images/icons/icon-chatgpt.png'} alt={'React'} height={'30px'} />
            <Typography color="text.secondary" variant="h5" sx={{ mt: 0 }}>
              <a href="https://zam-gamerol-opeina.netlify.app/">https://zam-gamerol-opeina.netlify.app</a>
            </Typography>
          </Box>
          <Typography
            color="text.secondary"
            variant="h4"
            sx={{ mt: 3, mx: { xl: 20, lg: 15, md: 10, sm: 5, xs: 0 } }}
            align="justify"
          >
            {' '}
            This WebApp is an online role-playing game with ChatGPT, developed using MUI, React, and JavaScript. It is
            responsive, attractive, and dynamic, allowing players to immerse themselves in an interactive fantasy world.
            With a pleasant and dynamic interface, you can choose your character and embark on new adventures, always
            discovering new things. It offers a realistic and enjoyable experience.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default FeaturesProjects
