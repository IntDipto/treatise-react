import React from 'react'
import AllPost from '../components/home/AllPost'
import BestStories from '../components/home/BestStories'
import EditorsChoice from '../components/home/EditorsChoice'
import HeroSection from '../components/home/HeroSection'
import Subscribe from '../components/home/Subscribe'

function Home() {
  return (
    <div className="mt-20 sm:mt-[120px] md:[120px] lg:mt-[140px] xl:mt-[160px]">

        <HeroSection></HeroSection>

        <BestStories></BestStories>

        <EditorsChoice></EditorsChoice>

        <AllPost></AllPost>

        <Subscribe></Subscribe>
        


    </div>
  )
}

export default Home