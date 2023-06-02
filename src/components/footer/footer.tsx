import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={10} md={5}>
            <Box sx={{ width: { xs: '100%', md: 600 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Thanks for Watch !!
              </Typography>
              <Typography variant="subtitle1" sx={{ letterSpacing: 1, mb: 2 }}>
                I hope you have enjoyed your stay. Any questions or comments let me know by my email:{' '}
                <b>emmanuelzzz123@gmail.com</b>
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          {/* <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
