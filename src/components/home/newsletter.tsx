import React, { FC, useState } from 'react'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { StyledButton } from '../styled-button'
import { Snackbar } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

const HomeNewsLetter: FC = () => {
  const [texto, setTexto] = React.useState('')
  const [open, setOpen] = useState(false)

  const handleSnackbarClose = (): void => {
    setOpen(false)
  }

  const handleActionClick = (): void => {
    setTexto('')
    setOpen(true)

    // Cierra el Snackbar después de 3 segundos
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 5 }}>
      <Container>
        <Box
          sx={{
            backgroundColor: 'secondary.main',
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 4, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography variant="h1" component="h2" sx={{ mb: 1, fontSize: { xs: 32, md: 42 } }}>
            Do you prefer me to send you an email?
          </Typography>
          <Typography sx={{ mb: 6 }}>
            <strong>Write your email here, and I will get in touch with you.</strong>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-around',
              width: { xs: '100%', md: 560 },
              mx: 'auto',
            }}
          >
            <InputBase
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTexto(event.target.value)}
              value={texto}
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 3,
                width: '100%',
                height: 48,
                px: 2,
                mr: { xs: 0, md: 3 },
                mb: { xs: 2, md: 0 },
              }}
              placeholder="Enter your Email Address"
            />
            <Box>
              <StyledButton disableHoverEffect size="large" onClick={handleActionClick}>
                Send <SendIcon sx={{ mb: -0.5, ml: 1 }} />
              </StyledButton>
            </Box>
            <Snackbar
              sx={{ width: 400 }}
              open={open}
              onClose={handleSnackbarClose}
              message="E-mail Saved!"
              autoHideDuration={4000}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default HomeNewsLetter
