import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'
import { Stack } from '@mui/material'

interface Props {
  item: Mentor
}

const MentorCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            height: 200,
            mb: 2,
          }}
        >
          <Image src={item.photo as string} width={570} height={427} alt={'Mentor ' + item.id} />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" variant="h4" sx={{ fontSize: '1.8rem' }}>
            {item.name}
          </Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary', fontSize: '1.2rem' }} variant="subtitle1">
            {item.description}
          </Typography>
          <Typography sx={{ fontSize: '1.2rem' }}>
            {' '}
            <a href={item.link}>{item.link}</a>
          </Typography>

          <Box sx={{ '& img': { height: 26 }, mt: 2 }}>
            <Stack direction="row">
              {item.company?.logo1 && (
                <img src={item.company?.logo1} alt={item.company?.name + ' logo1'} height={'32px'} />
              )}{' '}
              {item.company?.logo2 && (
                <img src={item.company?.logo2} alt={item.company?.name + ' logo2'} height={'32px'} />
              )}{' '}
              {item.company?.logo3 && (
                <img src={item.company?.logo3} alt={item.company?.name + ' logo3'} height={'32px'} />
              )}{' '}
              {item.company?.logo4 && (
                <img src={item.company?.logo4} alt={item.company?.name + ' logo4'} height={'32px'} />
              )}{' '}
              {item.company?.logo5 && (
                <img src={item.company?.logo5} alt={item.company?.name + ' logo5'} height={'32px'} />
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MentorCardItem
