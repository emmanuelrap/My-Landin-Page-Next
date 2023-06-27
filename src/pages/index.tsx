import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import FeaturesProjects from '@/components/home/FeaturesProjects'
// import { HomeFeature, HomeHero, HomePopularCourse, HomeTestimonial, HomeOurMentors, DynamicHomeNewsLetter } from '@/components/home'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeOurMentors = dynamic(() => import('../components/home/mentors'))
const InputIA = dynamic(() => import('../components/home/InputBar'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <InputIA />
      <FeaturesProjects />
      <DynamicHomeOurMentors />

      <DynamicHomeNewsLetter />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
