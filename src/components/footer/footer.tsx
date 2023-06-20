import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

import IconButton from '@mui/material/IconButton'

import EmailIcon from '@mui/icons-material/Email'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import { motion } from 'framer-motion'

const Footer: FC = () => {
  const socialLinksVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  }
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#f8f8f8',
        py: 6,
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
        }}
      >
        <source src="/videos/nubes.mp4" type="video/mp4" />
        {/* Aquí puedes agregar más formatos de video para mayor compatibilidad */}
      </video>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={socialLinksVariants}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
            >
              <FooterSocialLinks></FooterSocialLinks>
            </motion.div>
            <Box textAlign="center">
              <Typography component="h1" variant="h1" sx={{ color: '#000', mb: 2 }}>
                Thanks for Watching!!
              </Typography>
              <Typography variant="subtitle1" sx={{ color: '#000', letterSpacing: 1, mb: 2 }}>
                I hope you have enjoyed your stay. If you have any questions or comments, feel free to reach out to me
                via email: <b>emmanuelzzz123@gmail.com</b>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
