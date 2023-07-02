import React, { FC } from 'react'
import { Avatar, Box, IconButton, Stack, Tooltip, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ variant }) => {
  const linkedinUrl = 'https://www.linkedin.com/in/carlos-zambra/'

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleLinkedInClick = () => {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <Stack direction={'row'}>
      <Tooltip title="Ver Perfil en Linkedin" arrow sx={{ fontSize: '2rem' }}>
        <IconButton onClick={handleLinkedInClick} size="small">
          <Avatar src={'/images/icons/yo.PNG'} sx={{ width: 35, height: 35, mr: 1, mt: 1 }}></Avatar>
          <Typography
            variant="h4"
            component="h1"
            sx={{ mt: 1.5, fontWeight: 600, '& span': { color: variant === 'primary' ? 'secondary.main' : 'unset' } }}
          >
            <span>Zam</span>Dev
          </Typography>{' '}
        </IconButton>
      </Tooltip>
    </Stack>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
