import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import FeaturesProjects from '@/components/home/FeaturesProjects'
import { Box } from '@mui/material'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const InputIA = dynamic(() => import('../components/home/InputBar'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <Box sx={{ backgroundColor: 'white' }}>
      <br /> <br />
      <DynamicHomeHero />
      <InputIA />
      <FeaturesProjects />
      <DynamicHomeOurMentors />
      <DynamicHomeNewsLetter />
    </Box>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
