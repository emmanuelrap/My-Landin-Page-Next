import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Link as ScrollLink } from 'react-scroll'
import { navigations } from './navigation.data'

const Navigation: FC = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleClick = () => {
    console.log('diste click')
  }

  return (
    // AppBar
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          onClick={handleClick}
          component={ScrollLink}
          key={destination}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={2000}
          sx={{
            mt: 1.2,
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.1rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'secondary.main',
            }),

            '& > div': { display: 'none' },

            '&.current>div': { display: 'block' },

            '&:hover': {
              color: 'secondary.main',

              '&>div': {
                display: 'block',
              },
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 15,
              '& img': { width: 90, height: 20 },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/images/line.png" alt="Headline curve" />
          </Box>
          {label}
        </Box>
      ))}
    </Box>
  )
}

export default Navigation
