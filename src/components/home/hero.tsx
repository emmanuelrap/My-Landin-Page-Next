import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'

import Carousel from 'react-material-ui-carousel'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const elements: Array<Exp> = [
  {
    label: 'Java, JS, JSX, TypeScript, Kotlin ',
    value: 'Programmer',
  },
  {
    label: 'HTML5, ReactJS, Vue, NEXT ,Tailwind, SASS, Bootstrap, MUI, PWA-SPA, Redux',
    value: 'Frontend',
  },
  {
    label: 'Node, SQL, NoSQL, MongoDB',
    value: 'Backend',
  },
  {
    label: 'Web services, Postman, OpenIA API,Firebase, Auth0, Netlify, Fly.io, Vercel, Gitpages, ',
    value: 'Services',
  },
  {
    label: 'AWS, PostgreSQL, English ',
    value: 'Currently learning ',
  },
  {
    label: 'Creativity, Critical Thinking, Logic, love to learn',
    value: 'Enginner',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item

  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 1, md: 0 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 2 }, fontSize: { xs: 30, md: 40 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h4">
        {label}
      </Typography>
    </Box>
  )
}

const HomeHero: FC = () => {
  const styles = {
    rotationContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '200px',
      height: '200px',
    },
    rotatingImage: {
      animation: 'rotate 10s linear infinite',
      width: '250px', // Cambia el tamaño de la imagen
      height: '250px', // Cambia el tamaño de la imagen
    },
    '@keyframes rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
  }
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: 'background.paper',
        position: 'relative',
        pt: 1,
        pb: { xs: 8, md: 10 },
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Typography
                  component="h2"
                  sx={{
                    color: 'primary.main',
                    position: 'relative',
                    fontSize: { xs: 35, md: 60 },
                    letterSpacing: 1.5,
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                  }}
                >
                  <Typography
                    component="mark"
                    sx={{
                      position: 'relative',
                      color: 'primary.main',
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      backgroundColor: 'unset',
                    }}
                  >
                    Welcome{' '}
                  </Typography>
                  to {/* your{' '} */}
                  <Typography
                    component="span"
                    sx={{
                      fontSize: 'inherit',
                      fontWeight: 'inherit',
                      position: 'relative',
                      color: 'primary.main',
                      '& svg': {
                        position: 'absolute',
                        top: -16,
                        right: -50,
                        width: { xs: 22, md: 30 },
                        height: 'auto',
                      },
                    }}
                  >
                    my
                  </Typography>{' '}
                  <br />
                  Web Site
                </Typography>
              </Box>
              <Box sx={{ mb: 4, width: { xs: '100%', md: '100%' } }}>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.5, fontSize: '1.3rem' }}>
                  My name is Carlos Zambrano, I am System Enginner and Web developer, I love the technology and solving
                  problems.
                </Typography>
              </Box>
              <Box sx={{ '& button': { mr: 2 } }}>
                <ScrollLink to="popular-course" spy={true} smooth={true} offset={0} duration={400}>
                  {/* <StyledButton color="primary" size="large" variant="contained">
                See Projects
              </StyledButton> */}
                </ScrollLink>
                {/* <ScrollLink to="video-section" spy={true} smooth={true} offset={0} duration={350}>
              <StyledButton color="primary" size="large" variant="outlined" startIcon={<PlayArrowIcon />}>
                Watch Video
              </StyledButton>
            </ScrollLink> */}
              </Box>
            </Box>
          </Grid>

          {/* PONER ANIMACION AQUI */}
          {/* <Box sx={{ lineHeight: 0, m: 'auto' }}>
            {<Image src="/images/avatars/merounded.png" width={180} height={220} alt="me" />}
          </Box> */}
          <Box sx={{ lineHeight: 0, m: 'auto' }}>
            <div style={styles.rotationContainer}>
              <style jsx>{`
                @keyframes rotate {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/icons/reactLogoGirar.png/" alt="Rotating Image" style={styles.rotatingImage} />
            </div>
          </Box>
        </Grid>
        {/* Carrucel */}

        <Grid container>
          <Carousel
            sx={{ width: '100%' }}
            // navButtonsWrapperProps="false"
            // navButtonsProps={false}
            autoPlay={true}
            animation="slide"
            duration={2500}
            interval={5000}
            indicators={false}
            navButtonsAlwaysInvisible={true}
            // navButtonsAlwaysVisible={true}
          >
            {elements.map((item) => (
              <Grid key={item.value}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeHero
