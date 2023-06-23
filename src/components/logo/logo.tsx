import React, { FC } from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ variant }) => {
  return (
    <Stack direction={'row'}>
      <Avatar src={'/images/icons/yo.PNG'} sx={{ width: 50, height: 50, mr: 1 }}></Avatar>
      <Typography
        variant="h4"
        component="h1"
        sx={{ mt: 1.5, fontWeight: 600, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
        <span>Zambrano</span>.Ing
      </Typography>
    </Stack>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
